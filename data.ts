import { Article, Attenuant } from './types';

export const articlesData: Article[] = [
  // Crimes contra a Administração Pública
  { n: 1, text: "Art. 01: Abuso de Autoridade", pena: 50, multa: 300000, fianca: 0, inafiancavel: true },
  { n: 2, text: "Art. 02: Corrupção Passiva e/ou Ativa", pena: 50, multa: 300000, fianca: 0, inafiancavel: true },
  { n: 3, text: "Art. 03: Desacato", pena: 30, multa: 300000, fianca: 0, inafiancavel: true },
  { n: 4, text: "Art. 04: Impedir Exercício Profissional", pena: 20, multa: 150000, fianca: 300000 },
  { n: 5, text: "Art. 05: Prevaricação", pena: 50, multa: 300000, fianca: 0, inafiancavel: true },
  { n: 6, text: "Art. 06: Prisão Disciplinar", pena: 30, multa: 100000, fianca: 0, inafiancavel: true },
  { n: 7, text: "Art. 07: Tráfico de Influência", pena: 30, multa: 150000, fianca: 300000 },
  { n: 8, text: "Art. 08: Uso irregular de Função Pública", pena: 30, multa: 300000, fianca: 0, inafiancavel: true },

  // Crimes Contra a Pessoa
  { n: 9, text: "Art. 09: Tentativa de Homicídio", pena: 30, multa: 200000, fianca: 0, inafiancavel: true },
  { n: 10, text: "Art. 10: Homicídio Culposo", pena: 30, multa: 300000, fianca: 0, inafiancavel: true },
  { n: 11, text: "Art. 11: Homicídio Doloso", pena: 40, multa: 300000, fianca: 0, inafiancavel: true },
  { n: 12, text: "Art. 12: Homicídio Qualificado", pena: 50, multa: 400000, fianca: 0, inafiancavel: true },
  { n: 13, text: "Art. 13: Latrocínio", pena: 60, multa: 400000, fianca: 0, inafiancavel: true },
  
  // Crimes Contra a Honra e Dignidade
  { n: 14, text: "Art. 14: Assédio Moral", pena: 10, multa: 100000, fianca: 200000 },
  { n: 15, text: "Art. 15: Calúnia", pena: 10, multa: 100000, fianca: 200000 },
  { n: 16, text: "Art. 16: Difamação", pena: 10, multa: 100000, fianca: 200000 },
  { n: 17, text: "Art. 17: Injúria", pena: 10, multa: 100000, fianca: 200000 },
  { n: 18, text: "Art. 18: Importunação Sexual", pena: 10, multa: 100000, fianca: 200000 },
  { n: 19, text: "Art. 19: Perjúrio", pena: 10, multa: 100000, fianca: 200000 },
  
  // Crimes diversos
  { n: 20, text: "Art. 20: Abandono de Incapaz", pena: 100, multa: 200000, fianca: 0, inafiancavel: true },
  { n: 21, text: "Art. 21: Adultério", pena: 50, multa: 200000, fianca: 2000000 },
  { n: 22, text: "Art. 22: Bigamia", pena: 50, multa: 200000, fianca: 2000000 },
  { n: 23, text: "Art. 23: Crime Sexual Intrafamiliar", pena: 50, multa: 200000, fianca: 2000000 },
  { n: 24, text: "Art. 24: Ameaça", pena: 20, multa: 100000, fianca: 200000 },
  { n: 25, text: "Art. 25: Extorsão", pena: 10, multa: 50000, fianca: 100000 },
  { n: 26, text: "Art. 26: Lesão Corporal", pena: 20, multa: 100000, fianca: 200000 },
  { n: 27, text: "Art. 27: Sequestro", pena: 30, multa: 200000, fianca: 0, inafiancavel: true },
  { n: 28, text: "Art. 28: Tortura", pena: 50, multa: 400000, fianca: 0, inafiancavel: true },
  
  // Patrimônio
  { n: 29, text: "Art. 29: Vandalismo", pena: 10, multa: 50000, fianca: 100000 },
  { n: 30, text: "Art. 30: Dano de Propriedade do Governo", pena: 10, multa: 100000, fianca: 200000 },
  { n: 31, text: "Art. 31: Estelionato", pena: 10, multa: 100000, fianca: 200000 },
  { n: 32, text: "Art. 32: Invasão de Propriedade", pena: 10, multa: 100000, fianca: 200000 },
  { n: 33, text: "Art. 33: Furto", pena: 10, multa: 100000, fianca: 200000 },
  { n: 34, text: "Art. 34: Roubo", pena: 20, multa: 150000, fianca: 300000 },
  { n: 35, text: "Art. 35: Posse de Produtos Ilegais", pena: 10, multa: 50000, fianca: 100000 },
  { n: 36, text: "Art. 36: Tráfico de Produtos Ilegais", pena: 30, multa: 100000, fianca: 200000 },
  
  // Armamentos
  { n: 37, text: "Art. 37: Posse de Peças de Armas", pena: 0, multa: 0, fianca: 0 },
  { n: 38, text: "Art. 38: Posse de Cápsula", pena: 0, multa: 0, fianca: 0 },
  { n: 39, text: "Art. 39: Porte de Arma Leve", pena: 20, multa: 100000, fianca: 200000 },
  { n: 40, text: "Art. 40: Tráfico de Armas Leve", pena: 40, multa: 300000, fianca: 0, inafiancavel: true },
  { n: 41, text: "Art. 41: Porte de Arma Pesada", pena: 30, multa: 200000, fianca: 400000 },
  { n: 42, text: "Art. 42: Tráfico de Armas Pesada", pena: 50, multa: 400000, fianca: 0, inafiancavel: true },
  { n: 43, text: "Art. 43: Porte de Arma Branca", pena: 0, multa: 100000, fianca: 0 },
  
  // Munição e Drogas
  { n: 44, text: "Art. 44: Porte de Munição (-100)", pena: 20, multa: 100000, fianca: 200000 },
  { n: 45, text: "Art. 45: Tráfico de Munição (+100)", pena: 30, multa: 200000, fianca: 400000 },
  { n: 46, text: "Art. 46: Posse de Componentes Narcóticos", pena: 0, multa: 0, fianca: 0 },
  { n: 47, text: "Art. 47: Posse de Drogas (-100)", pena: 20, multa: 100000, fianca: 200000 },
  { n: 48, text: "Art. 48: Tráfico de Drogas (+100)", pena: 30, multa: 150000, fianca: 300000 },
  
  // Dinheiro Sujo
  { n: 49, text: "Art. 49: Dinheiro Sujo Leve", pena: 10, multa: 50000, fianca: 100000 },
  { n: 50, text: "Art. 50: Dinheiro Sujo Médio", pena: 20, multa: 150000, fianca: 300000 },
  { n: 51, text: "Art. 51: Dinheiro Sujo Grave", pena: 30, multa: 300000, fianca: 600000 },
  
  // Ordem Pública
  { n: 52, text: "Art. 52: Apologia ao Crime", pena: 10, multa: 100000, fianca: 200000 },
  { n: 53, text: "Art. 53: Falsidade Ideológica", pena: 30, multa: 200000, fianca: 400000 },
  { n: 54, text: "Art. 54: Formação de Quadrilha", pena: 30, multa: 200000, fianca: 400000 },
  { n: 55, text: "Art. 55: Desobediência", pena: 10, multa: 100000, fianca: 200000 },
  { n: 56, text: "Art. 56: Exercício Ilegal de Profissão", pena: 10, multa: 200000, fianca: 400000 },
  { n: 57, text: "Art. 57: Falsa Comunicação de Crime", pena: 10, multa: 50000, fianca: 100000 },
  { n: 58, text: "Art. 58: Obstrução de Justiça", pena: 20, multa: 50000, fianca: 100000 },
  { n: 59, text: "Art. 59: Ocultação de Provas", pena: 10, multa: 100000, fianca: 200000 },
  { n: 60, text: "Art. 60: Omissão de Socorro", pena: 10, multa: 50000, fianca: 100000 },
  { n: 61, text: "Art. 61: Perturbação da Ordem", pena: 10, multa: 100000, fianca: 200000 },
  { n: 62, text: "Art. 62: QRR Ilegal", pena: 10, multa: 50000, fianca: 100000 },
  { n: 63, text: "Art. 63: Tentativa de Fuga", pena: 20, multa: 100000, fianca: 200000 },
  { n: 64, text: "Art. 64: Tentativa de Suborno", pena: 30, multa: 200000, fianca: 400000 },
  
  // Trânsito
  { n: 65, text: "Art. 65: Alta Velocidade", pena: 0, multa: 20000, fianca: 0 },
  { n: 66, text: "Art. 66: Condução Imprudente", pena: 0, multa: 20000, fianca: 0 },
  { n: 67, text: "Art. 67: Corridas Ilegais", pena: 20, multa: 100000, fianca: 200000 },
  { n: 68, text: "Art. 68: Dirigir na Contramão", pena: 0, multa: 20000, fianca: 0 },
  { n: 69, text: "Art. 69: Poluição Sonora", pena: 0, multa: 20000, fianca: 0 },
  { n: 70, text: "Art. 70: Veículo Muito Danificado", pena: 0, multa: 20000, fianca: 0 },
  { n: 71, text: "Art. 71: Veículo Ilegalmente Estacionado", pena: 0, multa: 20000, fianca: 0 },
  { n: 72, text: "Art. 72: Uso Excessivo de Insulfilm", pena: 0, multa: 20000, fianca: 0 },
  
  // Identidade e Equipamentos
  { n: 73, text: "Art. 73: Ocultação Facial", pena: 10, multa: 50000, fianca: 100000 },
  { n: 74, text: "Art. 74: Uso de Coldre", pena: 0, multa: 50000, fianca: 0 },
  { n: 75, text: "Art. 75: Uso de Colete (Roupa)", pena: 0, multa: 50000, fianca: 0 },
  { n: 76, text: "Art. 76: Porte de Colete Balístico (equipamento)", pena: 10, multa: 100000, fianca: 200000 },
  { n: 77, text: "Art. 77: Tráfico de Colete Balístico (equipamento)", pena: 20, multa: 200000, fianca: 400000 },
];

export const attenuantsData: Attenuant[] = [
  { 
    id: "Jurídico Constituído", 
    label: "Jurídico Constituído", 
    reduction: 30, 
    description: "30% DE REDUÇÃO NO TOTAL DA PENA. APENAS COM UM MEMBRO JURÍDICO PRESENTE." 
  },
  { 
    id: "Réu Primário", 
    label: "Réu Primário", 
    reduction: 10, 
    requires: "Jurídico Constituído", 
    description: "10% DE REDUÇÃO NO TOTAL DA PENA. APENAS COM UM MEMBRO JURÍDICO PRESENTE." 
  },
  { 
    id: "Réu Confesso", 
    label: "Réu Confesso", 
    reduction: 10, 
    requires: "Jurídico Constituído", 
    description: "10% DE REDUÇÃO NO TOTAL DA PENA. APENAS COM UM MEMBRO JURÍDICO PRESENTE." 
  },
  { 
    id: "Colaboração", 
    label: "Colaboração", 
    reduction: 10, 
    description: "10% DE REDUÇÃO NO TOTAL DA PENA. O POLICIAL PODE REGISTRAR ESSE ATENUANTE SEM A PRESENÇA DE UM MEMBRO DO JURÍDICO." 
  },
  { 
    id: "Porte de Arma Legal", 
    label: "Porte de Arma Legal", 
    reduction: 10, 
    description: "10% DE REDUÇÃO NO TOTAL DA PENA. O POLICIAL PODE REGISTRAR ESSE ATENUANTE SEM A PRESENÇA DE UM MEMBRO DO JURÍDICO." 
  },
  { 
    id: "Delação Premiada", 
    label: "Delação Premiada", 
    reduction: 50, 
    description: "AUTORIZADA APENAS EM PRISÕES EFETUADAS PELOS DELEGADOS INVESTIGATIVOS E/OU AUTORIZADOS DA DIVISÃO DE INVESTIGAÇÃO." 
  },
];