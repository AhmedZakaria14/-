import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Minus, Sparkles } from 'lucide-react';
import { Language } from '@/types';
import { getChatResponse } from '@/services/geminiService';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

interface ChatbotProps {
  lang: Language;
}

export const Chatbot: React.FC<ChatbotProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init',
      role: 'model',
      text: lang === 'en' 
        ? 'Hi there! 👋 Welcome to Nashar Hub. How can I help you grow your business today?' 
        : 'مرحباً بك! 👋 أهلاً في نشار هب. كيف يمكنني مساعدتك في تنمية أعمالك اليوم؟'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const isRTL = lang === 'ar';

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: userText };
    
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    try {
        const responseText = await getChatResponse(history, userText, lang);
        const botMsg: Message = { 
            id: (Date.now() + 1).toString(), 
            role: 'model', 
            text: responseText || (lang === 'en' ? 'Sorry, I missed that.' : 'عذراً، لم أفهم ذلك.') 
        };
        setMessages(prev => [...prev, botMsg]);
    } catch (e) {
        console.error("Chatbot Error:", e);
    } finally {
        setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button - Adjusted bottom position for mobile to avoid BottomNav overlap */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-24 md:bottom-8 right-6 z-[60] p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-primary/30 ${isOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-primary text-white'}`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
        
        {!isOpen && messages.length === 1 && (
           <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
        )}
      </button>

      {/* Chat Window - Adjusted bottom position for mobile */}
      <div 
        className={`fixed bottom-[104px] md:bottom-28 right-6 w-[90vw] md:w-[380px] bg-white rounded-3xl shadow-2xl border border-slate-200 z-[60] overflow-hidden transition-all duration-300 origin-bottom-right flex flex-col ${
          isOpen 
            ? 'opacity-100 scale-100 translate-y-0 h-[500px] md:h-[600px]' 
            : 'opacity-0 scale-95 translate-y-10 h-0 pointer-events-none'
        }`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="bg-gradient-to-r from-primary to-primary-light p-4 flex items-center justify-between text-white shadow-md">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                 <Sparkles size={20} className="text-white" fill="currentColor" />
              </div>
              <div>
                 <h3 className="font-bold text-sm md:text-base">{lang === 'en' ? 'Nashar Support' : 'دعم نشار هب'}</h3>
                 <div className="flex items-center gap-1.5 opacity-90">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-xs font-medium">{lang === 'en' ? 'Online Now' : 'متاح الآن'}</span>
                 </div>
              </div>
           </div>
           <button 
             onClick={() => setIsOpen(false)}
             className="p-2 hover:bg-white/10 rounded-full transition-colors"
           >
             <Minus size={20} />
           </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 custom-scrollbar">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-br-none' 
                    : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
               <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-slate-200 shadow-sm flex items-center gap-2">
                 <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                 <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                 <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></span>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 bg-white border-t border-slate-100">
           <div className="relative flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={lang === 'en' ? 'Type your message...' : 'اكتب رسالتك هنا...'}
                className="w-full bg-slate-50 border border-slate-200 rounded-full py-3.5 pl-5 pr-12 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-slate-400 text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className={`absolute ${isRTL ? 'left-2' : 'right-2'} p-2 rounded-full bg-primary text-white shadow-md hover:bg-primary-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} className={isRTL ? 'rotate-180' : ''} />}
              </button>
           </div>
           <div className="text-center mt-2">
             <p className="text-[10px] text-slate-400">
               {lang === 'en' ? 'Powered by Gemini AI' : 'مدعوم بواسطة Gemini AI'}
             </p>
           </div>
        </div>
      </div>
    </>
  );
};