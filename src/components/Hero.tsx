
import React from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { UI_TEXT } from '../constants';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const isRTL = lang === 'ar';

  return (
    <section 
      id="home" 
      className="relative min-h-[720px] lg:min-h-[780px] bg-[#0b1020] text-white flex items-center overflow-hidden pt-28 pb-20 md:pt-36 md:pb-24"
      aria-label={lang === 'en' ? 'Introduction' : 'مقدمة'}
    >
      {/* Background Gradients & Glow matching portfolio */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(22,119,210,0.25),rgba(11,16,32,0))]"></div>
        <div className="absolute -top-40 right-[-10%] w-[500px] h-[500px] bg-[#1677d2]/15 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-[-10%] w-[450px] h-[450px] bg-[#c9a85d]/10 rounded-full blur-[130px]"></div>
        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy (Col 8) */}
          <div className={`lg:col-span-8 text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>
            
            {/* Portfolio Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded bg-white/5 border border-white/10 text-[#c9a85d] mb-6 tracking-wider text-xs font-mono font-bold uppercase">
              <span className="w-2 h-2 rounded-full bg-[#c9a85d] animate-pulse"></span>
              <span>{lang === 'en' ? 'NASHAR HUB • DIGITAL PERFORMANCE & GROWTH' : 'نشار هب • وكالة النمو والأداء الرقمي'}</span>
            </div>

            {/* Massive Heading matching portfolio */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.2] text-white">
              {lang === 'en' ? (
                <>
                  Driving Scalable Growth With <em className="text-[#58a8f3] not-italic">Engineered Precision</em>
                </>
              ) : (
                <>
                  نبني حضورك الرقمي ونضاعف مبيعاتك عبر <em className="text-[#58a8f3] not-italic">حلول تسويقية دقيقة</em>
                </>
              )}
            </h1>

            {/* Lede Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 max-w-2xl leading-relaxed font-normal">
              {lang === 'en' 
                ? 'From bespoke web engineering and Technical SEO to precision-targeted Google & social advertising across Saudi Arabia and the GCC.'
                : 'وكالة رائدة في المملكة العربية السعودية والخليج. متخصصون في تطوير المواقع السريعة، تحسين محركات البحث SEO، وإدارة الحملات الإعلانية الممولة بعائد استثماري مضمون.'}
            </p>

            {/* Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'lg:justify-start' : 'lg:justify-start'}`}>
              <a 
                href="#contact" 
                className="button-primary px-8 py-3.5 rounded text-sm md:text-base font-bold shadow-xl"
                aria-label={UI_TEXT.getStarted[lang]}
              >
                <span>{lang === 'en' ? 'Start Your Project' : 'ابدأ مشروعك الآن'}</span>
                {isRTL ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
              </a>

              <a 
                href="#services" 
                className="button-dark px-8 py-3.5 rounded text-sm md:text-base font-bold text-white/90 hover:text-white"
                aria-label={UI_TEXT.viewServices[lang]}
              >
                <span>{lang === 'en' ? 'Explore Services' : 'استعرض الخدمات'}</span>
              </a>
            </div>

            {/* Trust Badges matching portfolio proof bar */}
            <div className={`mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-white/60 font-mono ${isRTL ? 'justify-center lg:justify-start' : 'justify-center lg:justify-start'}`}>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#58a8f3]" />
                <span>{lang === 'en' ? 'VERIFIED BUSINESS PARTNER' : 'شريك أعمال معتمد في الخليج'}</span>
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-[#c9a85d]" />
                <span>{lang === 'en' ? '100% TRANSPARENT ROI & REPORTING' : 'تقارير أداء وعائد استثماري شفاف'}</span>
              </div>
            </div>
          </div>

          {/* Right Hero Aside - Atlas Orbit Mark from portfolio (Col 4) */}
          <div className="lg:col-span-4 hidden lg:flex flex-col items-center justify-center relative">
            {/* Center Orbit Mark wrap */}
            <div className="relative w-44 h-44 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/20 grid place-items-center shadow-2xl">
              {/* Outer Orbit Rings */}
              <div className="absolute -inset-3 rounded-2xl border border-[#58a8f3]/40 animate-[atlas-orbit_12s_linear_infinite]" pointer-events-none="true"></div>
              <div className="absolute -inset-6 rounded-3xl border border-[#58a8f3]/20 animate-[atlas-orbit_18s_linear_infinite_reverse]" pointer-events-none="true"></div>
              
              <img 
                src="https://res.cloudinary.com/ddrsmtsvj/image/upload/v1789590583/unnamed_1_mtjci9.png" 
                alt="Nashar Hub" 
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain filter drop-shadow-[0_0_25px_rgba(88,168,243,0.4)]"
              />
            </div>

            {/* Metric Lockup underneath */}
            <div className="mt-8 text-center bg-white/[0.03] border border-white/10 rounded-lg p-4 w-full max-w-[280px]">
              <div className="text-2xl font-black text-[#c9a85d] font-mono tracking-wider">+340%</div>
              <div className="text-xs text-white/70 mt-1 leading-normal font-sans">
                {lang === 'en' ? 'Average Client Revenue Acceleration' : 'متوسط مضاعفة عوائد عملاء نشار هب'}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

