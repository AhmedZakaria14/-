
import React, { useState, useRef, useEffect } from 'react';
import { Home, Target, MessageCircle, X, Sparkles, Phone, Layout, Package } from 'lucide-react';
import { Language } from '@/types';

interface BottomNavProps {
  lang: Language;
  onPlatformSelect?: (id: string) => void;
  onPackagesClick?: () => void;
  onWebsiteClick?: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ lang, onPlatformSelect, onPackagesClick, onWebsiteClick }) => {
  const [showContactMenu, setShowContactMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const isRTL = lang === 'ar';

  const CONTACT_NUMBER = "+20 10 10742430";

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
      id: 'packages',
      label: { en: 'Packages', ar: 'الباقات' },
      icon: Package,
      isAction: true,
      onClick: () => {
        setShowContactMenu(false);
        if (onPackagesClick) onPackagesClick();
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
        <div className={`p-1.5 rounded-2xl transition-all duration-300 ${isActive ? 'text-primary' : 'text-slate-400 group-hover:text-primary'}`}>
          <Icon size={22} className={isActive ? 'rotate-180 transition-transform' : ''} />
        </div>
        <span className={`text-[10px] font-bold mt-0.5 transition-colors ${isActive ? 'text-primary' : 'text-slate-500'}`}>
          {item.label[lang]}
        </span>
      </>
    );

    if (item.isAction) {
      return (
        <button
          key={item.id}
          onClick={item.onClick}
          className="flex flex-col items-center justify-center w-full h-full transition-all active:scale-90 group"
        >
          {content}
        </button>
      );
    }

    return (
      <a
        key={item.id}
        href={item.href}
        className="flex flex-col items-center justify-center w-full h-full transition-all active:scale-90 group"
      >
        {content}
      </a>
    );
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] px-3 pb-4 md:hidden" ref={menuRef}>
      
      {/* Contact Menu */}
      <div 
        className={`absolute bottom-[80px] left-4 right-4 bg-white/95 backdrop-blur-2xl border border-slate-200/50 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] rounded-[2rem] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          showContactMenu ? 'max-h-[300px] opacity-100 translate-y-0 visible' : 'max-h-0 opacity-0 translate-y-10 invisible pointer-events-none'
        }`}
      >
        <div className="p-5">
          <div className="flex items-center justify-between mb-4 px-1">
            <div>
               <h4 className="text-lg font-black text-slate-900 tracking-tight">{lang === 'en' ? 'Get In Touch' : 'تواصل معنا'}</h4>
               <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{lang === 'en' ? 'Choose method' : 'اختر طريقة التواصل'}</p>
            </div>
            <button onClick={() => setShowContactMenu(false)} className="p-1.5 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors">
              <X size={16} className="text-slate-600" />
            </button>
          </div>
          <div className="grid grid-cols-1 gap-3">
             {/* WhatsApp Button */}
             <a
               href={`https://wa.me/${CONTACT_NUMBER.replace(/[\s+]/g, '')}`}
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-4 p-4 rounded-2xl bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20 group active:scale-95"
             >
               <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                 <MessageCircle size={24} className="text-white" />
               </div>
               <div className="flex-1 text-left">
                  <span className={`block font-black text-lg ${isRTL ? 'text-right' : 'text-left'}`}>WhatsApp</span>
                  <span className={`block text-xs font-medium opacity-90 ${isRTL ? 'text-right' : 'text-left'}`}>{lang === 'en' ? 'Chat with us' : 'راسلنا الآن'}</span>
               </div>
             </a>

             {/* Phone Button */}
             <a
               href={`tel:${CONTACT_NUMBER}`}
               className="flex items-center gap-4 p-4 rounded-2xl bg-primary text-white hover:bg-primary-light transition-all shadow-lg shadow-primary/20 group active:scale-95"
             >
               <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                 <Phone size={24} className="text-white" />
               </div>
               <div className="flex-1 text-left">
                  <span className={`block font-black text-lg ${isRTL ? 'text-right' : 'text-left'}`}>{lang === 'en' ? 'Phone Call' : 'اتصال هاتفي'}</span>
                  <span className={`block text-xs font-medium opacity-90 ${isRTL ? 'text-right' : 'text-left'}`}>{CONTACT_NUMBER}</span>
               </div>
             </a>
          </div>
        </div>
      </div>

      {/* Main Bottom Nav Bar */}
      <div className="relative">
        <div className="bg-white/90 backdrop-blur-xl border border-slate-200/60 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] rounded-[2rem] h-[72px] grid grid-cols-5 items-center px-1">
          
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
        <div className="absolute left-1/2 -translate-x-1/2 -top-6 z-20 flex flex-col items-center">
           <button 
             onClick={() => {
               if (onWebsiteClick) onWebsiteClick();
             }}
             className="group relative w-16 h-16 rounded-full bg-gradient-to-tr from-secondary to-blue-500 flex items-center justify-center text-white shadow-[0_8px_20px_rgba(59,130,246,0.4)] border-[5px] border-slate-50 active:scale-95 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(59,130,246,0.5)] cursor-pointer"
             aria-label={lang === 'en' ? 'Create Website' : 'إنشاء موقع'}
           >
              {/* Pulse Effect */}
              <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping duration-[3s]"></div>
              
              <Layout size={26} className="relative z-10 fill-white/20 group-hover:rotate-12 transition-transform duration-500" />
           </button>
           <div className="mt-1">
             <span className="text-[9px] font-black text-slate-800 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm border border-slate-200">
               {lang === 'en' ? 'Build Website' : 'اطلب موقعك'}
             </span>
           </div>
        </div>
      </div>
    </div>
  );
};
