
import React from 'react';
import { Language } from '../types';
import { UI_TEXT } from '../constants';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onSEOClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onSEOClick }) => {
  const isRTL = lang === 'ar';

  return (
    <footer className="bg-[#0b1020] text-white pt-20 pb-10 border-t border-white/10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="mb-6">
               <a href="#home" className="inline-flex items-center gap-2.5 group transition-opacity hover:opacity-90">
                 <img 
                   src="https://res.cloudinary.com/ddrsmtsvj/image/upload/v1789590583/unnamed_1_mtjci9.png" 
                   alt="Nashar Hub" 
                   width={36}
                   height={36}
                   style={{ height: '36px', width: '36px', maxHeight: '36px', maxWidth: '36px', objectFit: 'contain' }}
                   className="h-[36px] w-[36px] max-h-[36px] max-w-[36px] object-contain block shrink-0"
                 />
                 <span className="text-xl sm:text-2xl font-black tracking-tight text-[#f4f1e9] font-sans">
                   Nashar<span className="text-[#38bdf8]">HUB</span>
                 </span>
               </a>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 font-normal">
              {UI_TEXT.heroSubtitle[lang]}
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1677d2] hover:border-[#1677d2] transition-all text-white/70 hover:text-white" aria-label="Follow us on Facebook"><Facebook size={16}/></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1677d2] hover:border-[#1677d2] transition-all text-white/70 hover:text-white" aria-label="Follow us on Instagram"><Instagram size={16}/></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1677d2] hover:border-[#1677d2] transition-all text-white/70 hover:text-white" aria-label="Connect on LinkedIn"><Linkedin size={16}/></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1677d2] hover:border-[#1677d2] transition-all text-white/70 hover:text-white" aria-label="Follow us on Twitter"><Twitter size={16}/></a>
            </div>
          </div>

          {/* SEO Optimized Services Links (Strong Internal Linking) */}
          <div className="col-span-1">
             <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider font-mono flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-[#1677d2]"></span>
               {lang === 'en' ? 'Growth Solutions' : 'حلول النمو'}
             </h4>
             <ul className="space-y-3">
                <li><a href="/paid-ads-services" className="text-white/65 hover:text-white transition-all text-sm block">{lang === 'en' ? 'PPC Management Services' : 'إدارة الحملات الإعلانية - إعلانات جوجل'}</a></li>
                <li><a href="/seo-services" className="text-white/65 hover:text-white transition-all text-sm block">{lang === 'en' ? 'Professional SEO Services' : 'خدمات تحسين محركات البحث SEO'}</a></li>
                <li><a href="/web-dev-services" className="text-white/65 hover:text-white transition-all text-sm block">{lang === 'en' ? 'Custom Web Development' : 'تصميم وتطوير المواقع والمتاجر'}</a></li>
                <li><a href="#services" className="text-white/65 hover:text-white transition-all text-sm block">{lang === 'en' ? 'Social Media Strategy' : 'استراتيجيات التواصل الاجتماعي'}</a></li>
                <li><a href="#services" className="text-white/65 hover:text-white transition-all text-sm block">{lang === 'en' ? 'Content Marketing' : 'تسويق بالمحتوى'}</a></li>
             </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
             <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider font-mono flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-[#c9a85d]"></span>
               {lang === 'en' ? 'Agency' : 'الوكالة'}
             </h4>
             <ul className="space-y-3">
                <li><a href="https://portfolio.nasharhub.com" target="_blank" rel="noopener noreferrer" className="text-[#58a8f3] hover:text-white font-bold transition-all text-sm block">{lang === 'en' ? 'Portfolio Site ↗' : 'سابقة الأعمال ↗'}</a></li>
                <li><a href="#stats" className="text-white/65 hover:text-white transition-all text-sm block">{lang === 'en' ? 'Why Nashar Hub?' : 'لماذا نشار هب؟'}</a></li>
                <li><a href="#process" className="text-white/65 hover:text-white transition-all text-sm block">{lang === 'en' ? 'Our Process' : 'كيف نعمل'}</a></li>
                <li><a href="/blog" className="text-white/65 hover:text-white transition-all text-sm block">{lang === 'en' ? 'Blog' : 'المدونة'}</a></li>
                <li><a href="/policy" className="text-white/65 hover:text-white transition-all text-sm block">{lang === 'en' ? 'Work Policy & Transparency' : 'سياسة العمل والشفافية'}</a></li>
                <li><a href="/ai" className="text-white/65 hover:text-white transition-all text-sm block">{lang === 'en' ? 'AI context' : 'معلومات الـ AI'}</a></li>
                <li><a href="#contact" className="text-white/65 hover:text-white transition-all text-sm block">{lang === 'en' ? 'Start a Project' : 'ابدأ مشروعك'}</a></li>
             </ul>
          </div>

          {/* Contact Info (Local SEO) */}
          <div className="col-span-1">
             <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider font-mono flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-[#007d87]"></span>
               {lang === 'en' ? 'Contact Us' : 'معلومات التواصل'}
             </h4>
             <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/65 text-sm">
                   <MapPin size={17} className="text-[#58a8f3] shrink-0 mt-0.5" />
                   <span>{lang === 'en' ? 'Cairo, Egypt & Riyadh, KSA' : 'القاهرة، مصر والرياض، السعودية'}</span>
                </li>
                <li className="flex items-center gap-3 text-white/65 text-sm">
                   <Phone size={17} className="text-[#58a8f3] shrink-0" />
                   <span dir="ltr">01010742430</span>
                </li>
                <li className="flex items-center gap-3 text-white/65 text-sm">
                   <Mail size={17} className="text-[#58a8f3] shrink-0" />
                   <span>Info@nasharhub.com</span>
                </li>
             </ul>
          </div>

        </div>
        
        {/* Areas We Serve (Local & Regional SEO) */}
        <div className="border-t border-white/10 pt-8 pb-4 mt-8">
          <h4 className="text-xs font-mono font-bold text-white/50 uppercase tracking-wider mb-4">{lang === 'en' ? 'Target Markets & Regions' : 'الأسواق والمناطق المستهدفة'}</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/40">
            <span>{lang === 'en' ? 'Digital Marketing in Riyadh' : 'تسويق رقمي بالرياض'}</span>
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
            <span>{lang === 'en' ? 'Marketing in Dubai & UAE' : 'تسويق في دبي والإمارات'}</span>
            <span>•</span>
            <span>{lang === 'en' ? 'Digital Agency in Cairo & Egypt' : 'وكالة تسويق بالقاهرة ومصر'}</span>
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
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs font-mono">
            © Nashar Hub Marketing Agency. {UI_TEXT.footerRights[lang]}.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
             <a href="/policy" className="hover:text-white transition-colors">{lang === 'en' ? 'Work Policy' : 'سياسة العمل'}</a>
             <a href="#" className="hover:text-white transition-colors">{lang === 'en' ? 'Privacy' : 'الخصوصية'}</a>
             <a href="#" className="hover:text-white transition-colors">{lang === 'en' ? 'Terms' : 'الشروط'}</a>
             <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{lang === 'en' ? 'Sitemap' : 'خريطة الموقع'}</a>
          </div>
        </div>
      </div>
    </footer>

  );
}
