
import React, { useState } from 'react';
import { Language, Service } from '../types';
import { SERVICES, UI_TEXT, ICONS_MAP } from '../constants';
import { Reveal } from './Reveal';
import { ArrowRight, Info } from 'lucide-react';

interface ServicesProps {
  lang: Language;
  onSEOClick?: () => void;
  onPaidAdsClick?: () => void;
  onWebDevClick?: () => void;
  isPage?: boolean;
}

const ServiceCard: React.FC<{ service: Service; lang: Language; index: number; onSEOClick?: () => void; onPaidAdsClick?: () => void; onWebDevClick?: () => void }> = ({ service, lang, index, onSEOClick, onPaidAdsClick, onWebDevClick }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = ICONS_MAP[service.icon];
  const isRTL = lang === 'ar';

  return (
    <Reveal delay={index * 100}>
      <div 
        className="group relative h-[360px] w-full perspective-1000"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className={`relative w-full h-full transition-all duration-700 preserve-3d shadow-xl rounded-3xl ${isFlipped ? 'rotate-y-180' : ''}`}>
          
          {/* Front Side */}
          <div className="absolute inset-0 w-full h-full backface-hidden bg-[#f8f6f0] rounded-xl border border-[#d1ccc0] flex flex-col items-center justify-center p-8 text-center cursor-pointer shadow-sm hover:shadow-md transition-shadow">
            {/* Icon Area */}
            <div className="relative w-16 h-16 mb-5 flex items-center justify-center rounded-lg bg-[#0b1020] text-[#58a8f3] shadow-md">
              <Icon 
                size={28} 
                className="group-hover:scale-110 transition-transform duration-300" 
                strokeWidth={1.75} 
              />
            </div>
            
            <h3 className="text-xl font-bold text-[#0b1020] mb-3 group-hover:text-[#1677d2] transition-colors">
              {service.title[lang]}
            </h3>
            <p className="text-sm text-[#667078] leading-relaxed max-w-[280px] mx-auto">
              {service.description[lang]}
            </p>

            <div className="mt-5 inline-flex items-center gap-2 text-[#007d87] font-mono font-bold text-xs">
              <span>{lang === 'en' ? 'DETAILS & CASE STRATEGY ↗' : 'التفاصيل واستراتيجية العمل ↗'}</span>
            </div>
          </div>

          {/* Back Side */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-[#0b1020] text-white rounded-xl p-8 flex flex-col justify-center items-center text-center overflow-hidden border border-white/15">
            <div className="mb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-2.5 bg-white/10 rounded-lg text-[#58a8f3]">
                  <Icon size={22} />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-3 text-white">{service.title[lang]}</h3>
              <p className="text-sm leading-relaxed text-white/80">
                {service.detailedInfo[lang]}
              </p>
            </div>

            <div className="w-full mt-auto flex flex-col gap-2">
              {service.id === 'seo' ? (
                <a 
                  href="/seo-services"
                  onClick={(e) => {
                    if (onSEOClick) {
                      e.preventDefault();
                      e.stopPropagation();
                      onSEOClick();
                    }
                  }}
                  className="w-full py-2.5 bg-[#1677d2] hover:bg-[#2c8de8] text-white rounded font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow"
                >
                  {lang === 'en' ? 'View SEO Dossier' : 'عرض ملف واستراتيجيات السيو'}
                  <ArrowRight size={15} className={isRTL ? 'rotate-180' : ''} />
                </a>
              ) : null}

              {service.id === 'paid-ads' ? (
                <a 
                  href="/paid-ads-services"
                  onClick={(e) => {
                    if (onPaidAdsClick) {
                      e.preventDefault();
                      e.stopPropagation();
                      onPaidAdsClick();
                    }
                  }}
                  className="w-full py-2.5 bg-[#1677d2] hover:bg-[#2c8de8] text-white rounded font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow"
                >
                  {lang === 'en' ? 'View PPC & Ads Dossier' : 'عرض ملف إدارة الإعلانات'}
                  <ArrowRight size={15} className={isRTL ? 'rotate-180' : ''} />
                </a>
              ) : null}

              {service.id === 'web-dev' ? (
                <a 
                  href="/web-dev-services"
                  onClick={(e) => {
                    if (onWebDevClick) {
                      e.preventDefault();
                      e.stopPropagation();
                      onWebDevClick();
                    }
                  }}
                  className="w-full py-2.5 bg-[#1677d2] hover:bg-[#2c8de8] text-white rounded font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow"
                >
                  {lang === 'en' ? 'View Web Architecture' : 'عرض نماذج وحلول الويب'}
                  <ArrowRight size={15} className={isRTL ? 'rotate-180' : ''} />
                </a>
              ) : null}

              <a 
                href={`https://wa.me/201010742430?text=${encodeURIComponent(lang === 'en' ? "Hi, I'm interested in " + service.title.en : "مرحباً، أنا مهتم بخدمة " + service.title.ar)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-full py-2.5 bg-[#007d87] hover:bg-[#00939f] text-white rounded font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                {lang === 'en' ? 'Inquire via WhatsApp' : 'تواصل مباشر واتساب'}
                <ArrowRight size={15} className={isRTL ? 'rotate-180' : ''} />
              </a>
            </div>
          </div>


        </div>
      </div>
    </Reveal>
  );
};

export const Services: React.FC<ServicesProps> = ({ lang, onSEOClick, onPaidAdsClick, onWebDevClick, isPage = false }) => {
  const HeadingTag = isPage ? 'h1' : 'h2';
  
  return (
    <section 
      id="services" 
      className="py-20 md:py-28 bg-[#f4f1e9] border-t border-[#d1ccc0] relative overflow-hidden" 
      aria-labelledby="services-heading"
    >
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <Reveal>
          <div className="text-center mb-14 md:mb-18 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[#007d87] font-mono font-bold uppercase tracking-widest text-xs mb-3">
              <span className="w-2 h-2 rounded-full bg-[#007d87]"></span>
              <span>{UI_TEXT.ourServices[lang]}</span>
            </div>
            <HeadingTag 
              id="services-heading" 
              className="text-3xl md:text-5xl font-extrabold text-[#0b1020] mb-4 tracking-tight"
            >
              {UI_TEXT.servicesTitle[lang]}
            </HeadingTag>
            <p className="text-[#667078] text-base md:text-lg px-4 md:px-0 leading-relaxed font-normal">
              {lang === 'en' 
                ? "We don't just create—we strategize. Our 360° services are built around your business and marketing objectives to drive real impact."
                : "نحن لا نبتكر فحسب، بل نضع الاستراتيجيات. خدماتنا الشاملة 360 درجة مبنية حول أهداف عملك وتسويقك لتحقيق تأثير حقيقي."}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} lang={lang} index={index} onSEOClick={onSEOClick} onPaidAdsClick={onPaidAdsClick} onWebDevClick={onWebDevClick} />
          ))}
        </div>

      </div>
    </section>

  );
};
