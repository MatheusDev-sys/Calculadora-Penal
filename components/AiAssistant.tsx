import React, { useRef, useEffect } from 'react';
import { AiMessage } from '../types';
import { Bot, User, X } from 'lucide-react';

interface AiAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  messages: AiMessage[];
  isStreaming: boolean;
}

export const AiAssistant: React.FC<AiAssistantProps> = ({ isOpen, onClose, messages, isStreaming }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-indigo-900 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="w-6 h-6" />
            <h3 className="font-semibold text-lg">Assistente Jurídico Virtual</h3>
          </div>
          <button onClick={onClose} className="hover:bg-indigo-800 p-1 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.length === 0 && (
            <div className="text-center text-gray-500 mt-10">
              <Bot className="w-12 h-12 mx-auto mb-3 text-indigo-300" />
              <p>Olá! Sou sua assistente virtual.</p>
              <p className="text-sm mt-1">Estou analisando seu cálculo. Aguarde um momento...</p>
            </div>
          )}
          
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  msg.role === 'user' ? 'bg-gray-200' : 'bg-indigo-100'
                }`}
              >
                {msg.role === 'user' ? <User className="w-5 h-5 text-gray-600" /> : <Bot className="w-5 h-5 text-indigo-600" />}
              </div>
              <div
                className={`p-3 rounded-lg max-w-[80%] text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === 'user'
                    ? 'bg-gray-200 text-gray-800'
                    : 'bg-white border border-gray-200 text-gray-700 shadow-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isStreaming && (
             <div className="flex gap-3">
               <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5 text-indigo-600" />
               </div>
               <div className="bg-white border border-gray-200 p-3 rounded-lg shadow-sm">
                 <div className="flex gap-1">
                   <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0ms'}}></div>
                   <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '150ms'}}></div>
                   <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '300ms'}}></div>
                 </div>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-white text-xs text-center text-gray-400">
           A IA pode cometer erros. Sempre verifique com um advogado real.
        </div>
      </div>
    </div>
  );
};
