export interface Article {
  n: number;
  text: string;
  pena: number; // months
  multa: number;
  fianca: number;
  inafiancavel?: boolean;
}

export interface Attenuant {
  id: string;
  label: string;
  reduction: number; // Percentage
  requires?: string;
  description: string;
}

export interface AccusedInfo {
  name: string;
  id: string;
  bailOption: 'sim' | 'nao';
}

export interface CalculationResult {
  totalMonths: number;
  reducedMonths: number;
  totalFine: number;
  reducedFine: number;
  totalBail: number;
  reductionPercentage: number;
  isInafiancavel: boolean;
  selectedArticles: Article[];
  selectedAttenuants: string[];
}

export interface CriminalRecord {
  id: string;
  nome: string;
  passaporte: string;
  data: string;
  artigos: string;
  crimes: string;
  pena: string;
  multa: string;
  fianca: string;
  prisao_por: string;
}

export interface Antecedentes {
  nome: string;
  id: string;
  total_prisoes: number;
  artigos: string;
  ultima: string;
}

export interface AiMessage {
  role: 'user' | 'model';
  text: string;
}

export interface PenaltyDuration {
  years: number;
  months: number;
  days: number;
}

export interface CalculationParams {
  baseDate: Date;
  penalty: PenaltyDuration;
  remissionDays: number;
  detractionDays: number;
  interruptionDays: number;
  progressionFraction: number;
  paroleFraction: number;
}

export interface DateCalculationResult {
  totalSentenceDays: number;
  endDate: Date;
  progressionDate: Date;
  paroleDate: Date | null;
  fractionUsed: number;
}