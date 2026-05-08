
import React from 'react';
import { Language } from '@/types';
import { UI_TEXT } from '@/constants';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onSEOClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onSEOClick }) => {
  const isRTL = lang === 'ar';

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
               <a href="#home" className="block focus:outline-none focus:ring-2 focus:ring-white rounded-xl">
                 <span className="font-extrabold text-3xl tracking-tighter text-white">
                   Nashar<span className="text-secondary">Hub</span>
                 </span>
               </a>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {UI_TEXT.heroSubtitle[lang]}
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-all text-slate-300 hover:text-white" aria-label="Follow us on Facebook"><Facebook size={18}/></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-all text-slate-300 hover:text-white" aria-label="Follow us on Instagram"><Instagram size={18}/></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-all text-slate-300 hover:text-white" aria-label="Connect on LinkedIn"><Linkedin size={18}/></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-all text-slate-300 hover:text-white" aria-label="Follow us on Twitter"><Twitter size={18}/></a>
            </div>
          </div>

          {/* SEO Optimized Services Links (Strong Internal Linking) */}
          <div className="col-span-1">
             <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
               {lang === 'en' ? 'Growth Solutions' : 'حلول النمو'}
               <span className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary rounded-full"></span>
             </h4>
             <ul className="space-y-3">
                <li><a href="#services" className="text-slate-400 hover:text-white hover:translate-x-1 rtl:hover:-translate-x-1 transition-all text-sm block">{lang === 'en' ? 'PPC Management Services' : 'إدارة الحملات الإعلانية'}</a></li>
                <li>
                  {onSEOClick ? (
                    <button onClick={onSEOClick} className="text-slate-400 hover:text-white hover:translate-x-1 rtl:hover:-translate-x-1 transition-all text-sm block text-left rtl:text-right w-full">
                      {lang === 'en' ? 'SEO & Organic Ranking' : 'خدمات تحسين محركات البحث SEO'}
                    </button>
                  ) : (
                    <a href="#services" className="text-slate-400 hover:text-white hover:translate-x-1 rtl:hover:-translate-x-1 transition-all text-sm block">{lang === 'en' ? 'SEO & Organic Ranking' : 'خدمات تحسين محركات البحث SEO'}</a>
                  )}
                </li>
                <li><a href="#services" className="text-slate-400 hover:text-white hover:translate-x-1 rtl:hover:-translate-x-1 transition-all text-sm block">{lang === 'en' ? 'Custom Web Development' : 'تصميم وتطوير المواقع والمتاجر'}</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-white hover:translate-x-1 rtl:hover:-translate-x-1 transition-all text-sm block">{lang === 'en' ? 'Social Media Strategy' : 'استراتيجيات التواصل الاجتماعي'}</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-white hover:translate-x-1 rtl:hover:-translate-x-1 transition-all text-sm block">{lang === 'en' ? 'Content Marketing' : 'تسويق بالمحتوى'}</a></li>
             </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
             <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
               {lang === 'en' ? 'Agency' : 'الوكالة'}
               <span className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary rounded-full"></span>
             </h4>
             <ul className="space-y-3">
                <li><a href="#stats" className="text-slate-400 hover:text-white hover:translate-x-1 rtl:hover:-translate-x-1 transition-all text-sm block">{lang === 'en' ? 'Why Nashar Hub?' : 'لماذا نشار هب؟'}</a></li>
                <li><a href="#process" className="text-slate-400 hover:text-white hover:translate-x-1 rtl:hover:-translate-x-1 transition-all text-sm block">{lang === 'en' ? 'Our Process' : 'كيف نعمل'}</a></li>
                <li><a href="#contact" className="text-slate-400 hover:text-white hover:translate-x-1 rtl:hover:-translate-x-1 transition-all text-sm block">{lang === 'en' ? 'Start a Project' : 'ابدأ مشروعك'}</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white hover:translate-x-1 rtl:hover:-translate-x-1 transition-all text-sm block">{lang === 'en' ? 'Careers' : 'الوظائف'}</a></li>
             </ul>
          </div>

          {/* Contact Info (Local SEO) */}
          <div className="col-span-1">
             <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
               {lang === 'en' ? 'Contact Us' : 'معلومات التواصل'}
               <span className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary rounded-full"></span>
             </h4>
             <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-400 text-sm">
                   <MapPin size={18} className="text-secondary shrink-0 mt-1" />
                   <span>{lang === 'en' ? 'Cairo, Egypt' : 'القاهرة، مصر'}</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                   <Phone size={18} className="text-secondary shrink-0" />
                   <span dir="ltr">+20 10 10742430</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                   <Mail size={18} className="text-secondary shrink-0" />
                   <span>Info@nasharhub.com</span>
                </li>
             </ul>
          </div>

        </div>
        
        {/* Areas We Serve (Local SEO) */}
        <div className="border-t border-slate-800 pt-8 pb-4 mt-8">
          <h4 className="text-sm font-bold text-slate-300 mb-4">{lang === 'en' ? 'Areas We Serve in Saudi Arabia' : 'مناطق نخدمها في المملكة العربية السعودية'}</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500">
            <span>{lang === 'en' ? 'Digital Marketing in Riyadh' : 'شركة تسويق بالرياض'}</span>
            <span>•</span>
            <span>{lang === 'en' ? 'Web Design in Jeddah' : 'تصميم مواقع بجدة'}</span>
            <span>•</span>
            <span>{lang === 'en' ? 'SEO in Dammam' : 'سيو في الدمام'}</span>
            <span>•</span>
            <span>{lang === 'en' ? 'Marketing Agency in Mecca' : 'شركة تسويق بمكة المكرمة'}</span>
            <span>•</span>
            <span>{lang === 'en' ? 'Ads in Medina' : 'إعلانات في المدينة المنورة'}</span>
            <span>•</span>
            <span>{lang === 'en' ? 'Web Development in Khobar' : 'برمجة مواقع بالخبر'}</span>
            <span>•</span>
            <span>{lang === 'en' ? 'Marketing in Abha' : 'تسويق في أبها'}</span>
            <span>•</span>
            <span>{lang === 'en' ? 'Stores in Tabuk' : 'متاجر إلكترونية في تبوك'}</span>
            <span>•</span>
            <span>{lang === 'en' ? 'Marketing in Qassim' : 'تسويق في القصيم'}</span>
            <span>•</span>
            <span>{lang === 'en' ? 'Design in Taif' : 'تصميم في الطائف'}</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Nashar Hub Marketing Agency. {UI_TEXT.footerRights[lang]}.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
             <a href="#" className="hover:text-white transition-colors">{lang === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية'}</a>
             <a href="#" className="hover:text-white transition-colors">{lang === 'en' ? 'Terms of Service' : 'شروط الاستخدام'}</a>
             <a href="#" className="hover:text-white transition-colors">{lang === 'en' ? 'Sitemap' : 'خريطة الموقع'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
