
import React, { useState, useRef, useEffect } from 'react';
import { Home, Target, MessageCircle, X, Phone, Layout, BookOpen } from 'lucide-react';
import { Language } from '../types';
import { useNavigate } from 'react-router-dom';

interface BottomNavProps {
  lang: Language;
  onPlatformSelect?: (id: string) => void;
  onWebsiteClick?: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ lang, onPlatformSelect, onWebsiteClick }) => {
  const [showContactMenu, setShowContactMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const isRTL = lang === 'ar';

  const CONTACT_NUMBER = "01010742430";

  const leftNavItems = [
    {
      id: 'home',
      label: { en: 'Home', ar: 'الرئيسية' },
      icon: Home,
      href: '#home'
    },
    {
      id: 'services',
      label: { en: 'Services', ar: 'خدماتنا' },
      icon: Target,
      href: '#services'
    },
  ];

  const rightNavItems = [
    {
      id: 'blog',
      label: { en: 'Blog', ar: 'المدونة' },
      icon: BookOpen,
      isAction: true,
      onClick: () => {
        setShowContactMenu(false);
        navigate('/blog');
      }
    },
    {
      id: 'contact',
      label: { en: 'Contact', ar: 'تواصل' },
      icon: MessageCircle,
      isAction: true,
      onClick: () => {
        setShowContactMenu(!showContactMenu);
      }
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowContactMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const renderNavItem = (item: any) => {
    const Icon = item.icon;
    const isActive = (item.id === 'contact' && showContactMenu);

    const content = (
      <>
        <div className={`p-1.5 rounded-lg transition-all duration-200 ${isActive ? 'text-[#58a8f3]' : 'text-white/60 group-hover:text-white'}`}>
          <Icon size={20} className={isActive ? 'rotate-180 transition-transform' : ''} />
        </div>
        <span className={`text-[9px] font-mono font-bold mt-0.5 transition-colors ${isActive ? 'text-[#58a8f3]' : 'text-white/50 group-hover:text-white'}`}>
          {item.label[lang]}
        </span>
      </>
    );

    if (item.isAction) {
      return (
        <button
          key={item.id}
          onClick={item.onClick}
          className="flex flex-col items-center justify-center w-full h-full transition-all active:scale-90 group cursor-pointer"
        >
          {content}
        </button>
      );
    }

    return (
      <a
        key={item.id}
        href={item.href}
        className="flex flex-col items-center justify-center w-full h-full transition-all active:scale-90 group cursor-pointer"
      >
        {content}
      </a>
    );
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[100] px-3 pb-3 md:hidden" ref={menuRef} aria-label={lang === 'en' ? 'Mobile Navigation' : 'قائمة التنقل للجوال'}>
      
      {/* Contact Menu */}
      <div 
        className={`absolute bottom-[75px] left-4 right-4 bg-[#0b1020]/95 backdrop-blur-2xl border border-white/15 shadow-2xl rounded-xl overflow-hidden transition-all duration-300 ${
          showContactMenu ? 'max-h-[300px] opacity-100 translate-y-0 visible' : 'max-h-0 opacity-0 translate-y-10 invisible pointer-events-none'
        }`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-3 px-1">
            <div>
               <h4 className="text-sm font-mono font-bold text-white uppercase tracking-wider">{lang === 'en' ? 'Quick Contact' : 'تواصل فوري'}</h4>
               <p className="text-[10px] text-white/50">{lang === 'en' ? 'Select channel' : 'اختر القناة المباشرة'}</p>
            </div>
            <button onClick={() => setShowContactMenu(false)} className="p-1 bg-white/10 hover:bg-white/20 rounded text-white/70 hover:text-white transition-colors">
              <X size={15} />
            </button>
          </div>
          <div className="grid grid-cols-1 gap-2.5">
             {/* WhatsApp Button */}
             <a
               href={`https://wa.me/201010742430`}
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-3 p-3 rounded-lg bg-[#007d87] text-white hover:bg-[#00939f] transition-all shadow group"
             >
               <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                 <MessageCircle size={18} className="text-white" />
               </div>
               <div className="flex-1 text-left">
                  <span className={`block font-bold text-sm ${isRTL ? 'text-right' : 'text-left'}`}>WhatsApp Direct</span>
                  <span className={`block text-[11px] text-white/80 ${isRTL ? 'text-right' : 'text-left'}`}>{lang === 'en' ? 'Instant response' : 'رد فوري'}</span>
               </div>
             </a>

             {/* Phone Button */}
             <a
               href={`tel:${CONTACT_NUMBER}`}
               className="flex items-center gap-3 p-3 rounded-lg bg-[#1677d2] text-white hover:bg-[#2c8de8] transition-all shadow group"
             >
               <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                 <Phone size={18} className="text-white" />
               </div>
               <div className="flex-1 text-left">
                  <span className={`block font-bold text-sm ${isRTL ? 'text-right' : 'text-left'}`}>{lang === 'en' ? 'Direct Hotline' : 'مكالمة هاتفية'}</span>
                  <span className={`block text-[11px] text-white/80 ${isRTL ? 'text-right' : 'text-left'}`}>{CONTACT_NUMBER}</span>
               </div>
             </a>
          </div>
        </div>
      </div>

      {/* Main Bottom Nav Bar */}
      <div className="relative">
        <div className="bg-[#0b1020]/95 backdrop-blur-xl border border-white/15 shadow-2xl rounded-xl h-[64px] grid grid-cols-5 items-center px-1">
          
          {/* Left Items */}
          {leftNavItems.map(item => (
            <div key={item.id} className="h-full">
              {renderNavItem(item)}
            </div>
          ))}

          {/* Spacer for Center Button */}
          <div className="h-full pointer-events-none"></div>

          {/* Right Items */}
          {rightNavItems.map(item => (
            <div key={item.id} className="h-full">
              {renderNavItem(item)}
            </div>
          ))}

        </div>

        {/* Distinctive Center Button - "Create Website" */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-4 z-20 flex flex-col items-center">
           <button 
             onClick={() => {
               if (onWebsiteClick) onWebsiteClick();
             }}
             className="group relative w-12 h-12 rounded-xl bg-[#1677d2] hover:bg-[#2c8de8] flex items-center justify-center text-white shadow-lg border-2 border-[#0b1020] active:scale-95 transition-all duration-200 cursor-pointer"
             aria-label={lang === 'en' ? 'Build Website' : 'اطلب موقعك'}
           >
              <Layout size={20} className="relative z-10" />
           </button>
           <div className="mt-1">
             <span className="text-[8px] font-mono font-bold text-[#58a8f3] bg-[#0b1020] border border-white/15 px-1.5 py-0.5 rounded shadow-sm">
               {lang === 'en' ? 'WEBSITES' : 'المواقع'}
             </span>
           </div>
        </div>
      </div>
    </nav>

  );
};
