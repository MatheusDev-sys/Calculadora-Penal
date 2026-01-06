import React, { useState, useEffect, useMemo } from 'react';
import { articlesData, attenuantsData } from './data';
import { Article, Attenuant } from './types';
import { Search, X, Moon, Sun, Gavel, Trash2, Check, Copy, AlertCircle, Camera, Download } from 'lucide-react';
import JSZip from 'jszip';

// --- Toast Component ---
interface ToastProps {
  message: string;
  subMessage?: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, subMessage, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed top-5 right-5 z-[100] flex items-start gap-3 p-4 rounded-xl glass-panel border-l-4 shadow-2xl animate-enter max-w-sm ${type === 'success' ? 'border-[var(--brp-accent)]' : 'border-red-500'}`}>
      <div className={`p-2 rounded-full ${type === 'success' ? 'bg-[rgba(0,242,255,0.2)] text-[var(--brp-accent)]' : 'bg-red-500/20 text-red-500'}`}>
        {type === 'success' ? <Check size={20} /> : <AlertCircle size={20} />}
      </div>
      <div>
        <h4 className="font-bold text-[var(--brp-accent)] text-lg">{message}</h4>
        {subMessage && <p className="text-xs text-[var(--brp-text)] opacity-80 mt-1">{subMessage}</p>}
      </div>
      <button onClick={onClose} className="text-[var(--brp-text)] opacity-50 hover:opacity-100">
        <X size={16} />
      </button>
    </div>
  );
};

// --- Components ---

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => (
  <header className="relative overflow-hidden rounded-2xl mb-8 glass-panel animate-enter">
    <div className="absolute inset-0 z-0">
      <img src="brasil.png" className="w-full h-full object-cover opacity-40 mix-blend-overlay" alt="Background Cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--brp-bg)] to-transparent opacity-90"></div>
    </div>
    <div className="relative z-10 p-6 md:p-8 flex justify-between items-center">
      <div className="flex items-center gap-6">
        <div className="relative">
          <div className="absolute inset-0 bg-[var(--brp-accent)] blur-xl opacity-30 rounded-full"></div>
          <img src="logobrasil.png" alt="Brasil Roleplay Logo" className="w-24 h-auto relative drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] logo-bounce" />
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-black tracking-tighter drop-shadow-sm font-['Rajdhani'] title-gradient-animate">
            CALCULADORA PENAL
          </div>
          <div className="text-md font-bold text-[var(--brp-text)] tracking-[0.3em] uppercase opacity-90 mt-1 pl-1">
            Brasil Roleplay
          </div>
        </div>
      </div>

      <button
        onClick={toggleTheme}
        className="w-12 h-12 rounded-full glass-card text-[var(--brp-accent)] flex items-center justify-center text-xl shadow-[0_0_15px_rgba(0,242,255,0.2)] hover:scale-110 transition-transform hover:bg-[var(--brp-accent)] hover:text-black"
      >
        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </div>
  </header>
);

interface StatCardProps {
  label: string;
  value: string;
  subValue?: string;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, subValue, delay = 0 }) => (
  <div
    className="glass-card rounded-xl p-5 text-center relative overflow-hidden group hover:border-[var(--brp-accent)] transition-all duration-300 animate-enter"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--brp-accent)] to-[var(--brp-accent-secondary)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    <div className="text-xs font-bold text-[var(--brp-text)] uppercase mb-2 tracking-wider opacity-70">{label}</div>
    <div className="text-2xl font-black text-[var(--brp-accent)] text-neon drop-shadow-sm group-hover:scale-110 transition-transform duration-300">{value}</div>
    {subValue && <div className="text-xs text-[var(--brp-accent-secondary)] font-bold mt-2">{subValue}</div>}
  </div>
);

interface ArticleItemProps {
  article: Article;
  isSelected: boolean;
  onToggle: () => void;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ article, isSelected, onToggle }) => (
  <div
    onClick={onToggle}
    className={`
      p-3 rounded-lg cursor-pointer text-sm transition-all duration-200 border-l-4
      ${isSelected
        ? 'bg-[rgba(0,242,255,0.15)] text-white border-[var(--brp-accent)] font-bold shadow-[0_0_15px_rgba(0,242,255,0.1)] translate-x-1'
        : 'bg-[var(--brp-muted)] text-[var(--brp-text)] border-transparent hover:bg-[rgba(255,255,255,0.05)] hover:border-[var(--brp-border)]'
      }
    `}
  >
    {article.text}
  </div>
);

interface AttenuantItemProps {
  item: Attenuant;
  isSelected: boolean;
  onClick: () => void;
}

const AttenuantItem: React.FC<AttenuantItemProps> = ({ item, isSelected, onClick }) => (
  <div
    onClick={onClick}
    title={item.description}
    className={`
      p-3 rounded-lg border cursor-pointer text-center font-bold text-sm transition-all relative group overflow-hidden
      ${isSelected
        ? 'bg-gradient-to-r from-[rgba(0,242,255,0.2)] to-[rgba(188,19,254,0.2)] text-[var(--brp-accent)] border-[var(--brp-accent)] shadow-[0_0_15px_rgba(0,242,255,0.2)]'
        : 'bg-[var(--brp-muted)] text-[var(--brp-text)] border-[var(--brp-border)] hover:border-[var(--brp-accent)]'
      }
    `}
  >
    <div className="relative z-10">{item.label}</div>
    {/* Tooltip */}
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 glass-panel border border-[var(--brp-accent)] text-white text-xs p-3 rounded-lg hidden group-hover:block z-50 pointer-events-none shadow-xl">
      {item.description}
    </div>
  </div>
);

// --- Modals ---

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-[fadeIn_0.2s_ease-out]" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="glass-panel rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative animate-enter shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        {/* FIX: pointer-events-none on SVG to ensure button receives click */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--brp-text)] hover:text-[var(--brp-accent)] hover:bg-[var(--brp-muted)] p-2 rounded-lg transition-all z-50"
        >
          <X size={24} className="pointer-events-none" />
        </button>
        <h2 className="text-[var(--brp-accent)] text-2xl font-black mb-6 text-center uppercase tracking-wide drop-shadow-md border-b border-[var(--brp-border)] pb-4 font-['Rajdhani']">{title}</h2>
        {children}
      </div>
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [accusedName, setAccusedName] = useState('');
  const [accusedId, setAccusedId] = useState('');
  const [bailOption, setBailOption] = useState<'sim' | 'nao'>('nao');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticles, setSelectedArticles] = useState<number[]>([]);
  const [selectedAttenuants, setSelectedAttenuants] = useState<string[]>([]);
  const [toast, setToast] = useState<{ message: string, subMessage?: string, type: 'success' | 'error' } | null>(null);

  // Modals state
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // Registration Form State
  const [regForm, setRegForm] = useState({
    prisonById: '',
    prisonByName: '',
    officialsIds: '',
    officialsNames: '',
    juridicalName: '',
    report: ''
  });

  // File uploads
  const [files, setFiles] = useState<{ [key: string]: File | null }>({
    inventory: null,
    mdt: null,
    oab: null,
    rgMask: null,
    rg: null
  });

  // Theme effect
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Calculations
  const calculation = useMemo(() => {
    let totalMonths = 0;
    let totalFine = 0;
    let totalBail = 0;
    let isInafiancavel = false;

    // Sum articles
    selectedArticles.forEach(id => {
      const art = articlesData.find(a => a.n === id);
      if (art) {
        totalMonths += art.pena;
        totalFine += art.multa;
        totalBail += art.fianca;
        if (art.inafiancavel) isInafiancavel = true;
      }
    });

    // Calculate reduction
    let reductionPercentage = 0;
    selectedAttenuants.forEach(id => {
      const att = attenuantsData.find(a => a.id === id);
      if (att) reductionPercentage += att.reduction;
    });

    if (reductionPercentage > 50) reductionPercentage = 50;

    const reducedMonths = Math.round(totalMonths * (1 - reductionPercentage / 100));
    const reducedFine = Math.round(totalFine * (1 - reductionPercentage / 100));

    // Bail logic
    const finalBail = (isInafiancavel || bailOption === 'nao') ? 0 : totalBail;

    return {
      totalMonths,
      reducedMonths,
      totalFine,
      reducedFine,
      totalBail: finalBail,
      rawBail: totalBail,
      reductionPercentage,
      isInafiancavel
    };
  }, [selectedArticles, selectedAttenuants, bailOption]);

  // Handlers
  const toggleArticle = (id: number) => {
    setSelectedArticles(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const toggleAttenuant = (id: string) => {
    const att = attenuantsData.find(a => a.id === id);
    if (!att) return;

    // Check requirement
    if (att.requires && !selectedAttenuants.includes(att.requires)) {
      setToast({ message: 'Atenuante Bloqueado', subMessage: `Requer: ${att.requires}`, type: 'error' });
      return;
    }

    if (selectedAttenuants.includes(id)) {
      // Remove logic
      let newSelected = selectedAttenuants.filter(x => x !== id);

      // Also remove dependent attenuants
      if (id === 'Jurídico Constituído') {
        const dependents = attenuantsData.filter(a => a.requires === 'Jurídico Constituído').map(a => a.id);
        newSelected = newSelected.filter(x => !dependents.includes(x));
      }

      setSelectedAttenuants(newSelected);
    } else {
      setSelectedAttenuants([...selectedAttenuants, id]);
    }
  };

  const handleClear = () => {
    // Reset all main states
    setSelectedArticles([]);
    setSelectedAttenuants([]);
    setAccusedName('');
    setAccusedId('');
    setBailOption('nao');
    setSearchQuery('');

    // Reset form data
    setRegForm({
      prisonById: '',
      prisonByName: '',
      officialsIds: '',
      officialsNames: '',
      juridicalName: '',
      report: ''
    });

    // Reset uploaded files
    setFiles({
      inventory: null,
      mdt: null,
      oab: null,
      rgMask: null,
      rg: null
    });

    setToast({ message: 'Dados Limpos', subMessage: 'Todos os campos foram resetados.', type: 'success' });
  };

  const handleFileChange = (key: string, file: File | null) => {
    setFiles(prev => ({ ...prev, [key]: file }));
  };

  const handleRegister = async () => {
    if (selectedArticles.length === 0) return setToast({ message: 'Erro', subMessage: 'Selecione ao menos um artigo', type: 'error' });
    if (!accusedName || !accusedId) return setToast({ message: 'Erro', subMessage: 'Preencha nome e ID do acusado', type: 'error' });
    if (!regForm.prisonById || !regForm.prisonByName || !regForm.report) return setToast({ message: 'Erro', subMessage: 'Preencha os dados obrigatórios da prisão', type: 'error' });

    const crimesList = selectedArticles.map(id => articlesData.find(a => a.n === id)?.text).join('\n');

    let message = `*** REGISTRO DE PRISÃO ***\n\n`;
    message += `**ID de quem prendeu:**\n${regForm.prisonById}\n`;
    message += `**Nome de quem prendeu:**\n${regForm.prisonByName}\n`;
    message += `**IDs dos policiais envolvidos:**\n${regForm.officialsIds || 'N/A'}\n`;
    message += `**Nomes dos policiais envolvidos:**\n${regForm.officialsNames || 'N/A'}\n`;
    message += `**Nome do jurídico:**\n${regForm.juridicalName || 'Não solicitado/Ausente'}\n\n`;

    message += `**ACUSADO:** ${accusedName} (ID: ${accusedId})\n`;
    message += `**CRIMES:**\n${crimesList}\n`;
    message += `**PENA:** ${calculation.reducedMonths} meses (Redução: ${calculation.reductionPercentage}%)\n`;
    message += `**MULTA:** R$ ${calculation.reducedFine.toLocaleString('pt-BR')}\n`;
    message += `**FIANÇA:** ${calculation.isInafiancavel ? 'Inafiançável' : (bailOption === 'sim' ? 'SIM' : 'NÃO')}\n\n`;

    message += `**RELATÓRIO DA AÇÃO:**\n${regForm.report}\n`;

    // Create ZIP file
    try {
      const zip = new JSZip();

      // Add report text file
      zip.file('relatorio.txt', message);

      // Add all uploaded images
      const uploadedFiles = Object.entries(files).filter(([_, file]) => file !== null);

      if (uploadedFiles.length > 0) {
        const imagesFolder = zip.folder('imagens');
        uploadedFiles.forEach(([key, file]) => {
          if (file && imagesFolder) {
            const typedFile = file as File;
            const extension = typedFile.name.split('.').pop() || 'png';
            imagesFolder.file(`${key}.${extension}`, typedFile);
          }
        });
      }

      // Generate ZIP and download
      const blob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `registro_prisao_${accusedName.replace(/\s+/g, '_')}_${Date.now()}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setToast({
        message: 'ZIP Baixado!',
        subMessage: `Arquivo contém o relatório e ${uploadedFiles.length} imagem(ns). Extraia e envie no Discord.`,
        type: 'success'
      });
      setActiveModal(null);
    } catch (err) {
      setToast({ message: 'Erro ao criar ZIP', subMessage: 'Tente novamente', type: 'error' });
      console.error(err);
    }
  };

  const filteredArticles = articlesData.filter(a =>
    a.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-[1500px] mx-auto p-4 md:p-6 flex flex-col min-h-screen font-poppins selection:bg-[var(--brp-accent)] selection:text-black">
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}

      <Header theme={theme} toggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />

      {/* Inputs Row */}
      <div className="glass-panel rounded-2xl p-6 mb-8 border border-[var(--brp-border)] animate-enter" style={{ animationDelay: '100ms' }}>
        <div className="flex flex-wrap gap-6 items-center">
          <div className="flex-1 min-w-[200px]">
            <div className="text-[var(--brp-text)] text-xs font-bold uppercase tracking-wider mb-1 opacity-70">Nome do Acusado</div>
            <input
              value={accusedName}
              onChange={(e) => setAccusedName(e.target.value)}
              className="w-full bg-[var(--brp-muted)] border border-[var(--brp-border)] rounded-lg px-4 py-3 text-[var(--brp-text)] font-bold outline-none focus:border-[var(--brp-accent)] focus:shadow-[0_0_15px_rgba(0,242,255,0.2)] transition-all"
              placeholder="Digite o nome..."
            />
          </div>
          <div className="w-[1px] h-12 bg-[var(--brp-border)] hidden md:block opacity-50"></div>
          <div className="flex-1 min-w-[150px]">
            <div className="text-[var(--brp-text)] text-xs font-bold uppercase tracking-wider mb-1 opacity-70">ID do Acusado</div>
            <input
              value={accusedId}
              onChange={(e) => setAccusedId(e.target.value)}
              className="w-full bg-[var(--brp-muted)] border border-[var(--brp-border)] rounded-lg px-4 py-3 text-[var(--brp-accent)] font-bold text-lg outline-none focus:border-[var(--brp-accent)] focus:shadow-[0_0_15px_rgba(0,242,255,0.2)] transition-all"
              placeholder="Passaporte..."
            />
          </div>
          <div className="w-[1px] h-12 bg-[var(--brp-border)] hidden md:block opacity-50"></div>
          <div>
            <div className="text-[var(--brp-text)] text-xs font-bold uppercase tracking-wider mb-2 opacity-70">Fiança Paga?</div>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${bailOption === 'sim' ? 'border-[var(--brp-accent)] bg-[var(--brp-accent)]' : 'border-[var(--brp-text)] opacity-50'}`}>
                  {bailOption === 'sim' && <Check size={12} className="text-black" />}
                </div>
                <input type="radio" name="fianca" className="hidden" checked={bailOption === 'sim'} onChange={() => setBailOption('sim')} disabled={calculation.isInafiancavel} />
                <span className={`font-bold ${bailOption === 'sim' ? 'text-[var(--brp-accent)]' : 'text-[var(--brp-text)]'}`}>SIM</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${bailOption === 'nao' ? 'border-red-500 bg-red-500' : 'border-[var(--brp-text)] opacity-50'}`}>
                  {bailOption === 'nao' && <Check size={12} className="text-white" />}
                </div>
                <input type="radio" name="fianca" className="hidden" checked={bailOption === 'nao'} onChange={() => setBailOption('nao')} />
                <span className={`font-bold ${bailOption === 'nao' ? 'text-red-500' : 'text-[var(--brp-text)]'}`}>NÃO</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
        <StatCard label="Multa Total" value={`R$ ${calculation.reducedFine.toLocaleString('pt-BR')}`} delay={150} />
        <StatCard
          label="Valor Fiança"
          value={`R$ ${calculation.totalBail.toLocaleString('pt-BR')}`}
          subValue={calculation.isInafiancavel ? '(Inafiançável)' : undefined}
          delay={300}
        />
        <StatCard label="Redução Aplicada" value={`${calculation.reductionPercentage}%`} delay={450} />
        <StatCard label="Pena (Meses)" value={`${calculation.reducedMonths}`} delay={600} />
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr_1.5fr] gap-6 flex-1">

        {/* Left: Articles */}
        <div className="glass-panel rounded-2xl p-6 flex flex-col h-[600px] animate-enter" style={{ animationDelay: '700ms' }}>
          <div className="flex justify-between items-center mb-4">
            <div className="text-[var(--brp-accent)] font-black uppercase text-xl font-['Rajdhani']">Artigos Penais</div>
            <div className="text-xs text-[var(--brp-text)] opacity-50">{selectedArticles.length} selecionados</div>
          </div>

          <div className="relative mb-4 group">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Pesquisar crime..."
              className="w-full bg-[var(--brp-muted)] text-[var(--brp-text)] border border-[var(--brp-border)] rounded-xl py-3 pl-10 pr-4 outline-none focus:border-[var(--brp-accent)] font-semibold transition-all"
            />
            <Search className="absolute left-3 top-3.5 text-[var(--brp-text)] opacity-50 group-focus-within:text-[var(--brp-accent)] transition-colors" size={18} />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-3.5 text-[var(--brp-text)] hover:text-red-500">
                <X size={16} />
              </button>
            )}
          </div>

          <div className="flex-1 overflow-y-auto pr-2 flex flex-col gap-2 custom-scrollbar">
            {filteredArticles.map(art => (
              <ArticleItem
                key={art.n}
                article={art}
                isSelected={selectedArticles.includes(art.n)}
                onToggle={() => toggleArticle(art.n)}
              />
            ))}
          </div>
        </div>

        {/* Middle: Attenuants */}
        <div className="glass-panel rounded-2xl p-6 h-fit animate-enter" style={{ animationDelay: '800ms' }}>
          <div className="text-[var(--brp-accent)] font-black mb-4 uppercase text-xl font-['Rajdhani']">Atenuantes</div>
          <div className="flex flex-col gap-3">
            {attenuantsData.map(att => (
              <AttenuantItem
                key={att.id}
                item={att}
                isSelected={selectedAttenuants.includes(att.id)}
                onClick={() => toggleAttenuant(att.id)}
              />
            ))}
          </div>
        </div>

        {/* Right: Criminal Record Summary */}
        <div className="glass-panel rounded-2xl p-6 h-fit border border-[var(--brp-accent)]/30 animate-enter" style={{ animationDelay: '900ms' }}>
          <div className="text-center mb-6">
            <div className="text-[var(--brp-accent)] font-black text-3xl uppercase tracking-widest font-['Rajdhani'] text-neon">FICHA CRIMINAL</div>
            <div className="h-1 w-20 bg-gradient-to-r from-[var(--brp-accent)] to-[var(--brp-accent-secondary)] mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="space-y-4 text-sm text-[var(--brp-text)] bg-[var(--brp-muted)] p-4 rounded-xl border border-[var(--brp-border)]">
            <div className="flex justify-between items-center border-b border-[var(--brp-border)] pb-2">
              <span className="opacity-70 font-semibold">ACUSADO:</span>
              <span className="font-bold text-[var(--brp-accent)] text-lg">{accusedName || '...'}</span>
            </div>
            <div className="flex justify-between items-center border-b border-[var(--brp-border)] pb-2">
              <span className="opacity-70 font-semibold">PASSAPORTE:</span>
              <span className="font-bold text-[var(--brp-accent)] text-lg">{accusedId || '...'}</span>
            </div>

            <div>
              <div className="opacity-70 font-semibold mb-2 text-xs uppercase">Crimes Cometidos:</div>
              <ul className="list-none space-y-1 max-h-40 overflow-y-auto pr-2">
                {selectedArticles.length === 0 && <li className="text-xs opacity-50 italic">Nenhum crime selecionado</li>}
                {selectedArticles.map(id => {
                  const art = articlesData.find(a => a.n === id);
                  return <li key={id} className="text-xs font-bold text-[var(--brp-text)] bg-[rgba(255,255,255,0.05)] p-1.5 rounded flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    {art?.text}
                  </li>;
                })}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
            <div className="bg-[var(--brp-card)] p-3 rounded-lg border border-[var(--brp-border)] text-center">
              <div className="text-xs opacity-60 uppercase">Pena Final</div>
              <div className="text-xl font-black text-[var(--brp-accent)]">{calculation.reducedMonths} <span className="text-xs">meses</span></div>
            </div>
            <div className="bg-[var(--brp-card)] p-3 rounded-lg border border-[var(--brp-border)] text-center">
              <div className="text-xs opacity-60 uppercase">Multa Total</div>
              <div className="text-lg font-black text-[var(--brp-accent)]">R$ {calculation.reducedFine.toLocaleString('pt-BR', { notation: 'compact' })}</div>
            </div>
          </div>

          {calculation.isInafiancavel && (
            <div className="mt-4 bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg text-center font-bold text-xs uppercase animate-pulse">
              🚫 Crimes Inafiançáveis Detectados
            </div>
          )}

          <div className="grid grid-cols-2 gap-3 mt-6">
            <button onClick={() => setToast({ message: 'Cálculo Atualizado', type: 'success' })} className="p-3 rounded-xl border border-[var(--brp-accent)] text-[var(--brp-accent)] font-black text-sm uppercase hover:bg-[var(--brp-accent)] hover:text-black transition-all flex items-center justify-center gap-2 group">
              <Gavel size={18} className="group-hover:rotate-12 transition-transform" /> Calcular
            </button>
            <button onClick={() => setActiveModal('register')} className="p-3 rounded-xl bg-gradient-to-r from-[var(--brp-accent)] to-[var(--brp-accent-secondary)] text-black font-black text-sm uppercase hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,242,255,0.4)]">
              <Check size={18} /> Registrar
            </button>
            <button onClick={handleClear} className="p-3 rounded-xl border border-red-500 text-red-500 font-black text-sm uppercase hover:bg-red-500 hover:text-white transition-all flex items-center justify-center gap-2 col-span-2 opacity-70 hover:opacity-100">
              <Trash2 size={18} /> Limpar Tudo
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-10 pb-6 relative text-[var(--brp-text)]">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--brp-accent)] to-transparent opacity-30"></div>
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="text-[var(--brp-accent)] font-black uppercase tracking-[0.5em] text-sm mb-2 opacity-80">Brasil Roleplay</div>
          <div className="text-xs opacity-40 font-mono">
            Desenvolvido por Creito Mezenga &copy; 2026 BRP
          </div>
        </div>
      </footer>

      {/* Register Modal */}
      <Modal isOpen={activeModal === 'register'} onClose={() => setActiveModal(null)} title="REGISTRAR PRISÃO">
        <div className="flex flex-col gap-5 font-poppins">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="text-[var(--brp-accent)] font-bold text-xs uppercase tracking-wider block mb-2 pl-1">ID de quem prendeu</label>
              <input
                placeholder="Ex: 1234"
                value={regForm.prisonById}
                onChange={e => setRegForm({ ...regForm, prisonById: e.target.value })}
                className="w-full p-3 rounded-xl border border-[var(--brp-border)] bg-[var(--brp-muted)] text-[var(--brp-text)] outline-none focus:border-[var(--brp-accent)] transition-all"
              />
            </div>
            <div>
              <label className="text-[var(--brp-accent)] font-bold text-xs uppercase tracking-wider block mb-2 pl-1">Nome de quem prendeu</label>
              <input
                placeholder="Ex: João Silva"
                value={regForm.prisonByName}
                onChange={e => setRegForm({ ...regForm, prisonByName: e.target.value })}
                className="w-full p-3 rounded-xl border border-[var(--brp-border)] bg-[var(--brp-muted)] text-[var(--brp-text)] outline-none focus:border-[var(--brp-accent)] transition-all"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="text-[var(--brp-accent)] font-bold text-xs uppercase tracking-wider block mb-2 pl-1">IDs Policiais (Opcional)</label>
              <input
                placeholder="Ex: 1234, 5678"
                value={regForm.officialsIds}
                onChange={e => setRegForm({ ...regForm, officialsIds: e.target.value })}
                className="w-full p-3 rounded-xl border border-[var(--brp-border)] bg-[var(--brp-muted)] text-[var(--brp-text)] outline-none focus:border-[var(--brp-accent)] transition-all"
              />
            </div>
            <div>
              <label className="text-[var(--brp-accent)] font-bold text-xs uppercase tracking-wider block mb-2 pl-1">Nomes Policiais (Opcional)</label>
              <input
                placeholder="Ex: João, Maria"
                value={regForm.officialsNames}
                onChange={e => setRegForm({ ...regForm, officialsNames: e.target.value })}
                className="w-full p-3 rounded-xl border border-[var(--brp-border)] bg-[var(--brp-muted)] text-[var(--brp-text)] outline-none focus:border-[var(--brp-accent)] transition-all"
              />
            </div>
          </div>

          <div>
            <label className="text-[var(--brp-accent)] font-bold text-xs uppercase tracking-wider block mb-2 pl-1">Advogado (Se houver)</label>
            <input
              placeholder="Ex: Dr. Carlos"
              value={regForm.juridicalName}
              onChange={e => setRegForm({ ...regForm, juridicalName: e.target.value })}
              className="w-full p-3 rounded-xl border border-[var(--brp-border)] bg-[var(--brp-muted)] text-[var(--brp-text)] outline-none focus:border-[var(--brp-accent)] transition-all"
            />
          </div>
          <div>
            <label className="text-[var(--brp-accent)] font-bold text-xs uppercase tracking-wider block mb-2 pl-1">Relatório da ação</label>
            <textarea
              placeholder="Descreva detalhadamente o que aconteceu..."
              value={regForm.report}
              onChange={e => setRegForm({ ...regForm, report: e.target.value })}
              className="w-full p-3 rounded-xl border border-[var(--brp-border)] bg-[var(--brp-muted)] text-[var(--brp-text)] min-h-[120px] outline-none focus:border-[var(--brp-accent)] transition-all resize-none"
            ></textarea>
          </div>

          <h3 className="text-[var(--brp-accent)] font-black text-sm uppercase mt-2 text-center flex items-center justify-center gap-2">
            <Camera size={16} /> Anexar Imagens
          </h3>
          <p className="text-center text-xs text-[var(--brp-text)] opacity-50 -mt-3 mb-2">Clique no quadrado ou cole (Ctrl+V) a imagem</p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {Object.keys(files).map((key) => (
              <div key={key} className="relative group aspect-square">
                <div className="brp-paste-preview w-full h-full rounded-xl flex flex-col items-center justify-center relative overflow-hidden cursor-pointer border border-[var(--brp-border)] hover:border-[var(--brp-accent)] transition-all bg-[var(--brp-muted)]"
                  onClick={() => document.getElementById(`file-${key}`)?.click()}
                  onPaste={(e) => {
                    e.preventDefault();
                    const file = e.clipboardData.files[0];
                    if (file && file.type.startsWith('image/')) handleFileChange(key, file);
                  }}
                >
                  {files[key as keyof typeof files] ? (
                    <img src={URL.createObjectURL(files[key as keyof typeof files]!)} className="w-full h-full object-cover" />
                  ) : (
                    <>
                      <span className="text-2xl mb-1 opacity-50">📁</span>
                      <span className="text-[9px] font-bold uppercase opacity-60">{key.replace('rgMask', 'RG (Masc)').replace('rg', 'RG')}</span>
                    </>
                  )}
                  <input
                    id={`file-${key}`}
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleFileChange(key, e.target.files?.[0] || null)}
                  />
                  {files[key as keyof typeof files] && (
                    <button
                      onClick={(e) => { e.stopPropagation(); handleFileChange(key, null); }}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X size={10} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleRegister}
            className="mt-2 w-full bg-gradient-to-r from-[var(--brp-accent)] to-[var(--brp-accent-secondary)] text-black py-4 rounded-xl font-black text-lg uppercase hover:scale-[1.01] transition-all shadow-[0_0_30px_rgba(0,242,255,0.3)] flex items-center justify-center gap-3"
          >
            <Copy size={20} /> Copiar Relatório
          </button>
        </div>
      </Modal>

    </div>
  );
}