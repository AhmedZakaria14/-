
import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Rocket, Zap } from 'lucide-react';
import { Language } from '@/types';
import { UI_TEXT } from '@/constants';
import { Reveal } from './Reveal';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const isRTL = lang === 'ar';

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-12 md:pt-40 md:pb-0 hero-pattern"
      aria-label={lang === 'en' ? 'Introduction' : 'مقدمة'}
    >
      
      {/* Background Elements - CSS Animation Only (No Scroll Listeners) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Animated Blob 1 */}
        <div 
          className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-secondary/10 rounded-full blur-[80px] md:blur-[120px] mix-blend-multiply animate-float"
          style={{ animationDuration: '15s' }}
        ></div>
        {/* Animated Blob 2 */}
        <div 
          className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px] mix-blend-multiply animate-float"
          style={{ animationDuration: '20s', animationDelay: '-5s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className={`text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-md mb-8 mx-auto lg:mx-0 animate-fade-in-up opacity-0 hover:scale-105 transition-transform cursor-default">
              <span className="flex h-2.5 w-2.5 rounded-full bg-secondary animate-pulse" aria-hidden="true"></span>
              <span className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <Zap size={16} className="text-yellow-500 fill-yellow-500" />
                {lang === 'en' ? '#1 ROI-First Digital Agency' : 'الوكالة الرقمية الأولى في العائد الربحي'}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.1] text-slate-900 animate-fade-in-up opacity-0 delay-100 drop-shadow-sm">
              {UI_TEXT.heroTitle[lang]} <br />
              <span className="gradient-text inline-flex items-center gap-2 flex-wrap justify-center lg:justify-start">
                 {lang === 'en' ? 'Growth Without Limits' : 'النمو بلا حدود'}
                 <Rocket className="text-primary animate-bounce-slow" size={48} strokeWidth={2.5} />
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 md:px-0 font-medium animate-fade-in-up opacity-0 delay-200">
              {UI_TEXT.heroSubtitle[lang]}
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'lg:justify-end' : 'lg:justify-start'} animate-fade-in-up opacity-0 delay-300`}>
              <a 
                href="#contact" 
                className="group w-full sm:w-auto px-10 py-4 bg-primary hover:bg-primary-dark rounded-full font-bold text-white transition-all duration-300 shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 focus:outline-none focus:ring-4 focus:ring-primary/30 text-lg"
                aria-label={UI_TEXT.getStarted[lang]}
              >
                {UI_TEXT.getStarted[lang]}
                <ArrowRight className={`group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} size={22} aria-hidden="true" />
              </a>
              <a 
                href="#services" 
                className="w-full sm:w-auto px-10 py-4 bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-700 rounded-full font-bold transition-all hover:shadow-lg hover:border-primary/30 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-slate-200 text-lg"
                aria-label={UI_TEXT.viewServices[lang]}
              >
                {UI_TEXT.viewServices[lang]}
              </a>
            </div>

            <Reveal delay={400} className="mt-12">
               <div className={`flex items-center gap-4 md:gap-6 justify-center ${isRTL ? 'lg:justify-end' : 'lg:justify-start'}`}>
                  <div className="flex -space-x-3 md:-space-x-4 rtl:space-x-reverse" role="img" aria-label={lang === 'en' ? 'User avatars' : 'صور المستخدمين'}>
                    <img className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/100?img=1" alt="" width="48" height="48" loading="lazy" decoding="async" />
                    <img className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/100?img=2" alt="" width="48" height="48" loading="lazy" decoding="async" />
                    <img className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/100?img=3" alt="" width="48" height="48" loading="lazy" decoding="async" />
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600 shadow-sm" aria-hidden="true">+500</div>
                  </div>
                  <div className="text-sm text-slate-600 font-bold">
                    {lang === 'en' ? 'Trusted by 500+ Market Leaders' : 'موثوق من قبل +500 من قادة السوق'}
                  </div>
               </div>
            </Reveal>
          </div>

          {/* Visual Side */}
          <div className="relative hidden lg:block" aria-hidden="true">
             <div className="relative z-10 animate-float animate-fade-in-up opacity-0 delay-300">
                {/* Main Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-white transform rotate-1 hover:rotate-0 transition-transform duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                      alt={lang === 'en' ? "Digital marketing analytics dashboard showing growth" : "فريق عمل نشار هب - أفضل شركة تسويق إلكتروني في السعودية والرياض"} 
                      className="w-full h-auto object-cover opacity-95"
                      width="600"
                      height="400"
                      fetchPriority="high"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Floating Stats Card */}
                  <div className="absolute top-10 -right-12 bg-white p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 animate-[float_4s_ease-in-out_infinite] delay-1000 hidden xl:block">
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-secondary/10 text-secondary rounded-xl">
                        <TrendingUp size={32} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">ROAS Increase</p>
                        <p className="text-3xl font-black text-slate-900">+340%</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Checklist */}
                  <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 animate-[float_5s_ease-in-out_infinite] delay-500">
                     <div className="space-y-4">
                        <div className="flex items-center gap-3">
                           <div className="bg-emerald-100 p-1 rounded-full">
                             <CheckCircle2 size={20} className="text-emerald-600" />
                           </div>
                           <span className="font-bold text-slate-800 text-lg">Strategic Performance</span>
                        </div>
                        <div className="flex items-center gap-3">
                           <div className="bg-emerald-100 p-1 rounded-full">
                             <CheckCircle2 size={20} className="text-emerald-600" />
                           </div>
                           <span className="font-bold text-slate-800 text-lg">ROI Maximization</span>
                        </div>
                        <div className="flex items-center gap-3">
                           <div className="bg-emerald-100 p-1 rounded-full">
                             <CheckCircle2 size={20} className="text-emerald-600" />
                           </div>
                           <span className="font-bold text-slate-800 text-lg">Digital Dominance</span>
                        </div>
                     </div>
                  </div>

               </div>
          </div>

        </div>
      </div>
    </section>
  );
};
