<div align="center">

![Brasil Roleplay Logo](public/logobrasil.png)

# 🚔 CALCULADORA PENAL - BRASIL ROLEPLAY

### Sistema Completo de Cálculo de Penas, Multas e Fianças

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success?style=for-the-badge&logo=github)](https://matheusdev-sys.github.io/Calculadora-Penal/)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

</div>

---

## 📋 Sobre o Projeto

A **Calculadora Penal BRP** é uma aplicação web moderna e intuitiva desenvolvida especialmente para o servidor **Brasil Roleplay** de GTA V. O sistema permite que policiais e administradores calculem automaticamente penas, multas e fianças com base nos artigos do código penal do servidor, incluindo atenuantes e agravantes.

### ✨ Características Principais

- 🎨 **Interface Moderna**: Design cyberpunk/synthwave com animações suaves e efeitos glassmorphism
- ⚡ **Cálculo Automático**: Processamento instantâneo de penas com aplicação de atenuantes
- 📦 **Download em ZIP**: Exportação completa do relatório com imagens anexadas
- 🌙 **Tema Escuro**: Interface otimizada para uso prolongado
- 📱 **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- 🔍 **Busca Inteligente**: Pesquisa rápida de crimes por nome
- 📸 **Anexo de Imagens**: Suporte para múltiplas evidências (inventário, MDT, OAB, RG)

---

## 🎯 Funcionalidades

### 1. Cálculo de Penas
- Seleção múltipla de artigos penais
- Cálculo automático de:
  - Tempo de prisão (meses)
  - Valor de multa (R$)
  - Valor de fiança (quando aplicável)
- Detecção automática de crimes inafiançáveis

### 2. Sistema de Atenuantes
- **Réu Primário**: Redução de 10%
- **Confissão Espontânea**: Redução de 5%
- **Jurídico Constituído**: Redução de 5%
- **Jurídico Presente**: Redução de 10% (requer Jurídico Constituído)
- **Delação Premiada**: Redução de 20% (requer Jurídico Constituído)
- Redução máxima de 50%

### 3. Registro de Prisão
- Formulário completo com:
  - Dados do acusado
  - Dados do policial responsável
  - Policiais envolvidos
  - Advogado (se presente)
  - Relatório detalhado da ação
- Anexo de até 5 imagens de evidência
- Download automático em formato ZIP

### 4. Exportação Inteligente
O sistema gera um arquivo ZIP contendo:
- `relatorio.txt` - Relatório completo formatado
- `imagens/` - Pasta com todas as evidências anexadas

---

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Ícones modernos
- **JSZip** - Criação de arquivos ZIP no navegador
- **date-fns** - Manipulação de datas

---

## 🎨 Design & Animações

### Animações Implementadas

1. **Título Gradiente Animado**
   - Gradiente colorido com 6 cores (cyan, roxo, rosa, amarelo)
   - Animação suave de 4 segundos
   - Efeito neon com text-shadow

2. **Logo Animada**
   - Efeito de balanço suave
   - Rotação sutil (-3° a +3°)
   - Movimento vertical de 8px
   - Loop infinito de 3 segundos

3. **Efeitos Visuais**
   - Glassmorphism nos painéis
   - Hover effects em cards
   - Transições suaves
   - Glow effects em elementos interativos

---

## 💻 Como Usar

### Acesso Online
Acesse diretamente: **[https://matheusdev-sys.github.io/Calculadora-Penal/](https://matheusdev-sys.github.io/Calculadora-Penal/)**

### Instalação Local

```bash
# Clone o repositório
git clone https://github.com/MatheusDev-sys/Calculadora-Penal.git

# Entre na pasta
cd Calculadora-Penal

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev

# Build para produção
npm run build
```

---

## 📖 Guia de Uso

1. **Preencha os dados do acusado**
   - Nome completo
   - ID/Passaporte
   - Opção de fiança (SIM/NÃO)

2. **Selecione os crimes cometidos**
   - Use a busca para encontrar artigos específicos
   - Clique nos artigos para selecioná-los
   - Veja o cálculo atualizar em tempo real

3. **Aplique atenuantes (se aplicável)**
   - Selecione os atenuantes disponíveis
   - Observe a redução percentual aplicada

4. **Registre a prisão**
   - Clique em "Registrar"
   - Preencha todos os dados obrigatórios
   - Anexe as evidências fotográficas
   - Clique em "Copiar Relatório" para baixar o ZIP

5. **Compartilhe no Discord**
   - Extraia o arquivo ZIP baixado
   - Arraste o `relatorio.txt` e as imagens para o canal

---

## 🎯 Roadmap

- [x] Sistema de cálculo de penas
- [x] Atenuantes e agravantes
- [x] Download em ZIP
- [x] Animações modernas
- [x] Deploy no GitHub Pages
- [ ] Sistema de histórico de prisões
- [ ] Exportação em PDF
- [ ] Modo claro/escuro toggle
- [ ] Integração com banco de dados
- [ ] Sistema de autenticação

---

## 👨‍💻 Desenvolvedor

<div align="center">

![Matheus Dev Logo](public/matheus-dev-logo.jpg)

### **Matheus Dev**

Desenvolvedor Full Stack especializado em aplicações web modernas

[![GitHub](https://img.shields.io/badge/GitHub-MatheusDev--sys-181717?style=for-the-badge&logo=github)](https://github.com/MatheusDev-sys)
[![Discord](https://img.shields.io/badge/Discord-Matheus%20Dev-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/brasilgg)

</div>

---

## 📄 Licença

Este projeto foi desenvolvido exclusivamente para o **Brasil Roleplay** e é de uso interno do servidor.

---

## 🤝 Contribuições

Desenvolvido com 💜 por **Matheus Dev** para a comunidade Brasil Roleplay.

Para sugestões ou reportar bugs, abra uma [issue](https://github.com/MatheusDev-sys/Calculadora-Penal/issues).

---

<div align="center">

### ⭐ Se este projeto foi útil, deixe uma estrela!

**Brasil Roleplay** © 2026 - Todos os direitos reservados

</div>
