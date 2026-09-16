
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language } from '../types';
import { NAV_ITEMS } from '../constants';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    // Check initial scroll position
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleLang();
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('http://') || href.startsWith('https://')) {
      // External link: allow default navigation
      setIsOpen(false);
      return;
    }
    if (href.startsWith('/')) {
      e.preventDefault();
      navigate(href);
      setIsOpen(false);
    } else if (href.startsWith('#')) {
      // Let the App.tsx global handler deal with anchor links and scrolling
      setIsOpen(false);
    }
  };

  // Use false for scrolled during SSR to ensure hydration matches
  const isScrolled = mounted ? scrolled : false;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 w-full max-w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0b1020]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30 py-2.5' 
          : 'bg-[#0b1020]/85 backdrop-blur-sm border-b border-white/5 py-3.5'
      }`}
      role="navigation"
      aria-label={lang === 'en' ? 'Main Navigation' : 'القائمة الرئيسية'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-14 md:h-16' : 'h-16 md:h-18'
        }`}>
          
          {/* Brand Logo Container */}
          <div className="flex-shrink-0 flex items-center h-10 max-h-10 overflow-hidden">
             <a 
               href="/" 
               onClick={(e) => handleNavClick(e, '/')}
               className="flex items-center gap-2.5 group transition-opacity hover:opacity-90 max-h-[34px] overflow-hidden"
               aria-label={lang === 'en' ? 'Nashar Hub Home' : 'نشار هب الرئيسية'}
             >
               <img 
                 src="https://res.cloudinary.com/ddrsmtsvj/image/upload/v1789590583/unnamed_1_mtjci9.png" 
                 alt="Nashar Hub" 
                 width={34}
                 height={34}
                 style={{ height: '34px', width: '34px', maxHeight: '34px', maxWidth: '34px', objectFit: 'contain' }}
                 className="h-[34px] w-[34px] max-h-[34px] max-w-[34px] object-contain block shrink-0"
               />
             </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-6">
            <div className="flex items-center space-x-1 xl:space-x-3 rtl:space-x-reverse text-white/80">
              {NAV_ITEMS.map((item) => {
                const isExternal = item.href.startsWith('http://') || item.href.startsWith('https://');
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="hover:text-white transition-colors px-3 py-1.5 text-sm font-bold relative group"
                  >
                    {item.label[lang]}
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#58a8f3] scale-x-0 group-hover:scale-x-100 transition-transform origin-right"></span>
                  </a>
                );
              })}
            </div>
            
            <div className="h-5 w-px bg-white/20 mx-1 xl:mx-2" aria-hidden="true"></div>
            
            <button
              type="button"
              onClick={toggleLang}
              onKeyDown={handleKeyDown}
              className="flex items-center gap-1.5 text-white/80 hover:text-white border border-white/20 hover:border-white/40 rounded px-2.5 py-1 transition-colors font-bold text-xs"
              aria-label={lang === 'en' ? 'Switch to Arabic' : 'التحويل للغة الإنجليزية'}
              title={lang === 'en' ? 'Switch to Arabic' : 'التحويل للغة الإنجليزية'}
            >
              <Globe size={15} aria-hidden="true" />
              <span lang={lang === 'en' ? 'ar' : 'en'}>{lang === 'en' ? 'العربية' : 'EN'}</span>
            </button>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-[#1677d2] hover:bg-[#2c8de8] text-white px-5 py-2 rounded text-xs md:text-sm font-bold shadow-lg shadow-[#1677d2]/30 hover:-translate-y-0.5 transition-all whitespace-nowrap"
            >
              {lang === 'en' ? 'Free Audit' : 'ابدأ حواراً'}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
             <button
              type="button"
              onClick={toggleLang}
              onKeyDown={handleKeyDown}
              className="flex items-center gap-1 text-white/90 font-bold focus:outline-none rounded px-2 py-1 bg-white/10 border border-white/20 text-xs"
              aria-label={lang === 'en' ? 'Switch to Arabic' : 'التحويل للغة الإنجليزية'}
            >
              <Globe size={14} aria-hidden="true" />
              <span lang={lang === 'en' ? 'ar' : 'en'} aria-hidden="true">{lang === 'en' ? 'AR' : 'EN'}</span>
            </button>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-[#1677d2] text-white px-2.5 py-1 rounded text-xs font-bold whitespace-nowrap sm:block hidden"
            >
              {lang === 'en' ? 'Audit' : 'استشارة'}
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 focus:outline-none rounded bg-white/10 border border-white/10"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen 
                ? (lang === 'en' ? 'Close menu' : 'إغلاق القائمة') 
                : (lang === 'en' ? 'Open menu' : 'فتح القائمة')}
            >
              {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        id="mobile-menu"
        className={`lg:hidden absolute top-full left-0 w-full max-w-full bg-[#0b1020] border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out origin-top transform ${
          isOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-5 invisible pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
            {NAV_ITEMS.filter(item => !item.desktopOnly).map((item) => {
              const isExternal = item.href.startsWith('http://') || item.href.startsWith('https://');
              return (
                <a
                  key={item.key}
                  href={item.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-white/80 hover:text-white hover:bg-white/5 block px-4 py-2.5 rounded text-base font-bold transition-colors"
                >
                  {item.label[lang]}
                </a>
              );
            })}
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="block w-full text-center bg-[#1677d2] hover:bg-[#2c8de8] text-white py-3 rounded font-bold mt-4 shadow-lg transition-colors text-sm"
            >
               {lang === 'en' ? 'Start Consultation' : 'ابدأ حواراً واستشارة مجانية'}
            </a>
          </div>
      </div>
    </nav>

  );
};
