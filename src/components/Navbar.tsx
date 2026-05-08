
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
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-2' 
          : 'bg-white/50 backdrop-blur-sm py-4'
      }`}
      role="navigation"
      aria-label={lang === 'en' ? 'Main Navigation' : 'القائمة الرئيسية'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'
        }`}>
          
          {/* Brand Logo Container */}
          <div className="flex-shrink-0 flex items-center">
             <a 
               href="/" 
               onClick={(e) => handleNavClick(e, '/')}
               className="block transition-all duration-300 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary rounded-xl p-1 -m-1"
               aria-label={lang === 'en' ? 'Nashar Hub Home' : 'نشار هب الرئيسية'}
             >
               <span className={`font-extrabold text-slate-900 tracking-tighter ${isScrolled ? 'text-2xl' : 'text-3xl'}`}>
                 Nashar<span className="text-blue-600">Hub</span>
               </span>
             </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-baseline space-x-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-slate-700 hover:text-primary hover:bg-slate-50 focus:text-primary focus:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all px-4 py-2 rounded-full text-base font-medium"
                >
                  {item.label[lang]}
                </a>
              ))}
            </div>
            
            <div className="h-6 w-px bg-slate-200 mx-2" aria-hidden="true"></div>
            
            <button
              type="button"
              onClick={toggleLang}
              onKeyDown={handleKeyDown}
              className="flex items-center gap-2 text-slate-700 hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-full px-3 py-1 transition-colors font-medium"
              aria-label={lang === 'en' ? 'Switch to Arabic' : 'التحويل للغة الإنجليزية'}
              title={lang === 'en' ? 'Switch to Arabic' : 'التحويل للغة الإنجليزية'}
            >
              <Globe size={20} aria-hidden="true" />
              <span lang={lang === 'en' ? 'ar' : 'en'}>{lang === 'en' ? 'العربية' : 'English'}</span>
            </button>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-primary/30"
            >
              {lang === 'en' ? 'Let\'s Talk' : 'تحدث معنا'}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
             <button
              type="button"
              onClick={toggleLang}
              onKeyDown={handleKeyDown}
              className="text-slate-700 font-bold focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-2 py-1"
              aria-label={lang === 'en' ? 'Switch to Arabic' : 'التحويل للغة الإنجليزية'}
            >
              <span lang={lang === 'en' ? 'ar' : 'en'} aria-hidden="true">{lang === 'en' ? 'AR' : 'EN'}</span>
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen 
                ? (lang === 'en' ? 'Close menu' : 'إغلاق القائمة') 
                : (lang === 'en' ? 'Open menu' : 'فتح القائمة')}
            >
              {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 w-full max-w-full bg-white border-b border-slate-100 shadow-xl transition-all duration-300 ease-in-out origin-top transform ${
          isOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-5 invisible pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-slate-600 hover:text-primary hover:bg-slate-50 focus:text-primary focus:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/50 block px-4 py-3 rounded-lg text-lg font-medium transition-colors"
              >
                {item.label[lang]}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="block w-full text-center bg-primary hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary/30 text-white py-3 rounded-lg font-bold mt-4 shadow-lg shadow-primary/20 transition-colors"
            >
               {lang === 'en' ? 'Let\'s Talk' : 'تحدث معنا'}
            </a>
          </div>
      </div>
    </nav>
  );
};
