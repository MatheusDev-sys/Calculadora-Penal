import { addDays, addMonths, addYears, format } from 'date-fns';
import { CalculationParams, DateCalculationResult } from '../types';

export const calculateDates = (params: CalculationParams): DateCalculationResult => {
  const {
    baseDate,
    penalty,
    remissionDays,
    detractionDays,
    interruptionDays,
    progressionFraction,
    paroleFraction,
  } = params;

  // 1. Calculate End of Sentence
  // Add penalty duration to base date
  let endDate = addYears(baseDate, penalty.years);
  endDate = addMonths(endDate, penalty.months);
  endDate = addDays(endDate, penalty.days);

  // Subtract Remission and Detraction (Moves end date earlier)
  const totalReduction = remissionDays + detractionDays;
  endDate = addDays(endDate, -totalReduction);
  
  // Add Interruption (Moves end date later)
  endDate = addDays(endDate, interruptionDays);

  // 2. Calculate Total Sentence in Days for Progression/Parole Bases
  // We approximate using the difference between Base and Raw End Date (without reduction)
  // to get the magnitude of the sentence in days for fraction application.
  let rawEndDate = addYears(baseDate, penalty.years);
  rawEndDate = addMonths(rawEndDate, penalty.months);
  rawEndDate = addDays(rawEndDate, penalty.days);
  
  // Time delta in milliseconds
  const sentenceDurationMs = rawEndDate.getTime() - baseDate.getTime();
  const sentenceTotalDays = Math.ceil(sentenceDurationMs / (1000 * 60 * 60 * 24));

  // 3. Progression Date
  // Logic: Base Date + (TotalSentence * Fraction) - Remission - Detraction + Interruption
  // Note: Detraction counts as time served. Remission counts as time served.
  // Formula: TargetDate = BaseDate + (SentenceDays * Fraction) - (TimeServedEarlier)
  // Where TimeServedEarlier = Detraction + Remission
  
  const daysRequiredForProgression = Math.ceil(sentenceTotalDays * progressionFraction);
  const daysCredited = remissionDays + detractionDays;
  const netDaysNeededProgression = daysRequiredForProgression - daysCredited + interruptionDays;

  const progressionDate = addDays(baseDate, Math.max(0, netDaysNeededProgression));

  // 4. Parole Date (Livramento Condicional)
  let paroleDate: Date | null = null;
  if (paroleFraction > 0) {
    const daysRequiredForParole = Math.ceil(sentenceTotalDays * paroleFraction);
    const netDaysNeededParole = daysRequiredForParole - daysCredited + interruptionDays;
    paroleDate = addDays(baseDate, Math.max(0, netDaysNeededParole));
  }

  return {
    totalSentenceDays: sentenceTotalDays,
    endDate,
    progressionDate,
    paroleDate,
    fractionUsed: progressionFraction
  };
};

export const formatDate = (date: Date): string => {
  return format(date, 'dd/MM/yyyy');
};