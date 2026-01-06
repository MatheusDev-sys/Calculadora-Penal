import React from 'react';
import { Calendar, CheckCircle, Lock, Unlock } from 'lucide-react';
import { CalculationResult } from '../types';
import { formatDate } from '../utils/calculator';

interface ResultsCardProps {
  result: CalculationResult | null;
  onConsultAi: () => void;
  isAiLoading: boolean;
}

export const ResultsCard: React.FC<ResultsCardProps> = ({ result, onConsultAi, isAiLoading }) => {
  if (!result) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
          <Calendar className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900">Aguardando Dados</h3>
        <p className="text-gray-500 mt-2 max-w-xs">
          Preencha o formulário ao lado para calcular as datas de progressão e término.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden flex flex-col h-full">
      <div className="bg-blue-900 p-6 text-white">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <CheckCircle className="w-6 h-6" />
          Resultado dos Cálculos
        </h2>
        <p className="text-blue-200 text-sm mt-1">Previsões baseadas nos dados informados</p>
      </div>

      <div className="p-6 flex-1 flex flex-col gap-6">
        
        {/* Progression */}
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 p-2 rounded-md">
              <Unlock className="w-5 h-5 text-blue-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-blue-600 uppercase tracking-wider">Progressão de Regime</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{formatDate(result.progressionDate)}</p>
              <p className="text-xs text-gray-500 mt-1">
                Data estimada para mudar para o regime semiaberto/aberto.
              </p>
            </div>
          </div>
        </div>

        {/* Parole */}
        {result.paroleDate && (
          <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
            <div className="flex items-start gap-3">
              <div className="bg-emerald-100 p-2 rounded-md">
                <Calendar className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <p className="text-sm font-medium text-emerald-600 uppercase tracking-wider">Livramento Condicional</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{formatDate(result.paroleDate)}</p>
                <p className="text-xs text-gray-500 mt-1">
                  Data estimada para o benefício do livramento condicional.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* End Date */}
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <div className="flex items-start gap-3">
            <div className="bg-gray-200 p-2 rounded-md">
              <Lock className="w-5 h-5 text-gray-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wider">Término de Pena</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{formatDate(result.endDate)}</p>
              <p className="text-xs text-gray-500 mt-1">
                Data final do cumprimento integral da pena (TCP).
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-gray-50 border-t border-gray-100">
          <button
            onClick={onConsultAi}
            disabled={isAiLoading}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
          >
            {isAiLoading ? (
               <span className="flex items-center gap-2">
                 <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                 </svg>
                 Analisando com IA...
               </span>
            ) : (
              <>
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                 </svg>
                 Análise Jurídica com IA
              </>
            )}
          </button>
          <p className="text-xs text-center text-gray-400 mt-2">
            Use a IA para explicar os prazos e requisitos legais baseados neste cálculo.
          </p>
      </div>
    </div>
  );
};
