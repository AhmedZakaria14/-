
import React, { useState } from 'react';
import { Language, Service } from '@/types';
import { SERVICES, UI_TEXT, ICONS_MAP } from '@/constants';
import { Reveal } from './Reveal';
import { ArrowRight, Info } from 'lucide-react';

interface ServicesProps {
  lang: Language;
  onSEOClick?: () => void;
  onPaidAdsClick?: () => void;
  onWebDevClick?: () => void;
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
          <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-3xl border border-slate-100 flex flex-col items-center justify-center p-8 text-center cursor-pointer">
            {/* Icon Area with Abstract Blob Background */}
            <div className="relative w-20 h-20 md:w-24 md:h-24 mb-6">
              <div className="absolute inset-0 bg-secondary/10 rounded-[2rem] rotate-[12deg] group-hover:rotate-[24deg] transition-all duration-500 ease-out"></div>
              <div className="absolute inset-2 bg-primary/5 rounded-[1.5rem] -rotate-[6deg] group-hover:-rotate-[12deg] transition-all duration-500 ease-out"></div>
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <Icon 
                  size={32} 
                  className="text-primary group-hover:scale-110 transition-transform duration-300 md:w-[36px] md:h-[36px]" 
                  strokeWidth={1.5} 
                />
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
              {service.title[lang]}
            </h3>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-[280px] mx-auto opacity-90">
              {service.description[lang]}
            </p>

            <div className="mt-6 flex items-center gap-2 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <span>{lang === 'en' ? 'Reveal Details' : 'كشف التفاصيل'}</span>
              <Info size={16} />
            </div>
          </div>

          {/* Back Side */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-primary text-white rounded-3xl p-8 flex flex-col justify-center items-center text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-10 translate-x-10"></div>
            
            <div className="mb-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 bg-white/10 rounded-xl">
                  <Icon size={24} className="text-white" />
                </div>
              </div>
              <h3 className="font-bold text-xl mb-6">{service.title[lang]}</h3>
              <p className="text-lg font-bold leading-loose text-slate-100 opacity-90">
                {service.detailedInfo[lang]}
              </p>
            </div>

            <div className="w-full mt-auto flex flex-col gap-2">
              {service.id === 'seo' && onSEOClick ? (
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onSEOClick();
                  }}
                  className="w-full py-3 bg-white text-primary rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-lg shadow-black/10"
                >
                  {lang === 'en' ? 'View SEO Strategies' : 'عرض استراتيجيات السيو'}
                  <ArrowRight size={18} className={isRTL ? 'rotate-180' : ''} />
                </button>
              ) : null}

              {service.id === 'paid-ads' && onPaidAdsClick ? (
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onPaidAdsClick();
                  }}
                  className="w-full py-3 bg-white text-primary rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-lg shadow-black/10"
                >
                  {lang === 'en' ? 'View Ad Strategies' : 'عرض استراتيجيات الإعلانات'}
                  <ArrowRight size={18} className={isRTL ? 'rotate-180' : ''} />
                </button>
              ) : null}

              {service.id === 'web-dev' && onWebDevClick ? (
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onWebDevClick();
                  }}
                  className="w-full py-3 bg-white text-primary rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-lg shadow-black/10"
                >
                  {lang === 'en' ? 'View Web Solutions' : 'عرض حلول الويب'}
                  <ArrowRight size={18} className={isRTL ? 'rotate-180' : ''} />
                </button>
              ) : null}

              <a 
                href={`https://wa.me/201010742430?text=${encodeURIComponent(lang === 'en' ? "Hi, I'm interested in " + service.title.en : "مرحباً، أنا مهتم بخدمة " + service.title.ar)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-full py-3 bg-[#25D366] text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors shadow-lg shadow-black/10"
              >
                {lang === 'en' ? 'WhatsApp Now' : 'تواصل واتساب'}
                <ArrowRight size={18} className={isRTL ? 'rotate-180' : ''} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </Reveal>
  );
};

export const Services: React.FC<ServicesProps> = ({ lang, onSEOClick, onPaidAdsClick, onWebDevClick }) => {
  return (
    <section 
      id="services" 
      className="py-20 md:py-32 bg-white relative overflow-hidden" 
      aria-labelledby="services-heading"
    >
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <Reveal>
          <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
            <span className="block text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4">
              {UI_TEXT.ourServices[lang]}
            </span>
            <h2 
              id="services-heading" 
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 md:mb-6"
            >
              {UI_TEXT.servicesTitle[lang]}
            </h2>
            <div className="w-16 md:w-24 h-1 md:h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6 md:mb-8"></div>
            <p className="text-slate-600 text-base md:text-lg px-4 md:px-0 leading-relaxed">
              {lang === 'en' 
                ? "We don't just create—we strategize. Our 360° services are built around your business and marketing objectives to drive real impact."
                : "نحن لا نبتكر فحسب، بل نضع الاستراتيجيات. خدماتنا الشاملة 360 درجة مبنية حول أهداف عملك وتسويقك لتحقيق تأثير حقيقي."}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} lang={lang} index={index} onSEOClick={onSEOClick} onPaidAdsClick={onPaidAdsClick} onWebDevClick={onWebDevClick} />
          ))}
        </div>

      </div>
    </section>
  );
};
