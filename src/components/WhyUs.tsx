
import React from 'react';
import { Language } from '../types';
import { UI_TEXT } from '../constants';
import { Reveal } from './Reveal';
import { Trophy, Users, BarChart3, ArrowUpRight, TrendingUp } from 'lucide-react';

interface WhyUsProps {
  lang: Language;
  isPage?: boolean;
}

const CountUp: React.FC<{ value: string }> = ({ value }) => {
  // Robust parsing: handles "+200", "$5M+", "4.5x", etc.
  // We keep the parsing to maintain the nice visual separation of prefix/suffix vs number
  const regex = /^([^0-9.]*)(\d+(?:\.\d+)?)(.*)$/;
  const match = value.match(regex);

  if (!match) return <span>{value}</span>;

  const [, prefix, numberPart, suffix] = match;

  return (
    <span 
      className="inline-flex items-center tabular-nums"
      dir="ltr" // Force LTR for numeric data to keep symbols like + and $ stable
    >
      {prefix && (
        <span className="opacity-60 text-2xl md:text-3xl font-bold mr-1 shrink-0">
          {prefix}
        </span>
      )}
      <span className="relative">
        {numberPart}
      </span>
      {suffix && (
        <span className="opacity-60 text-2xl md:text-3xl font-bold ml-1 shrink-0">
          {suffix}
        </span>
      )}
    </span>
  );
};

export const WhyUs: React.FC<WhyUsProps> = ({ lang, isPage = false }) => {
  const isRTL = lang === 'ar';
  const HeadingTag = isPage ? 'h1' : 'h2';
  
  const stats = [
    { 
      label: { en: 'Clients Served', ar: 'عميل سعيد' }, 
      value: '+200',
      icon: Users,
      color: 'bg-blue-50 text-blue-600',
      description: { en: 'Globally across sectors', ar: 'عالمياً في مختلف القطاعات' }
    },
    { 
      label: { en: 'Ad Spend Managed', ar: 'ميزانيات مدارة' }, 
      value: '$5M+',
      icon: BarChart3,
      color: 'bg-cyan-50 text-cyan-600',
      description: { en: 'High efficiency ROAS', ar: 'كفاءة استهداف عالية' }
    },
    { 
      label: { en: 'Projects Completed', ar: 'مشروع منجز' }, 
      value: '+450',
      icon: Trophy,
      color: 'bg-indigo-50 text-indigo-600',
      description: { en: 'Delivered with precision', ar: 'تم تسليمها بدقة متناهية' }
    },
    { 
      label: { en: 'Average ROI', ar: 'متوسط العائد' }, 
      value: '450%',
      icon: TrendingUp,
      color: 'bg-emerald-50 text-emerald-600',
      description: { en: 'Market beating results', ar: 'نتائج تفوق معدلات السوق' }
    },
  ];

  return (
    <section 
      id="stats" 
      className="py-20 md:py-28 bg-[#0b1020] text-white border-t border-white/10 overflow-hidden"
      aria-labelledby="stats-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          <div className={`${isRTL ? 'lg:order-1' : 'lg:order-0'}`}>
            <Reveal>
              <div className="inline-flex items-center gap-2 text-[#58a8f3] font-mono text-xs uppercase tracking-widest font-bold mb-4">
                 <span className="w-2 h-2 rounded-full bg-[#1677d2]"></span>
                 {UI_TEXT.statsTitle[lang]}
              </div>
              <HeadingTag 
                id="stats-heading" 
                className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight"
              >
                {lang === 'en' 
                  ? 'Results Backed by Data That Speaks for Itself.'
                  : 'نتائج مدعومة ببيانات تتحدث عن نفسها.'}
              </HeadingTag>
              <p className="text-base md:text-lg text-white/70 mb-6 leading-relaxed font-normal">
                {lang === 'en'
                  ? 'We don\'t make empty promises. We deliver measurable growth using performance metrics that define success for your specific industry. Our approach is rooted in deep data analysis and a relentless pursuit of excellence.'
                  : 'نحن لا نقدم وعوداً فارغة. نحن نحقق نمواً ملموساً باستخدام مقاييس أداء تحدد معايير النجاح في مجالك الخاص. نهجنا متجذر في تحليل البيانات العميق والسعي الدؤوب للتميز.'}
              </p>
              <p className="text-sm text-white/50 mb-10 leading-relaxed font-normal">
                {lang === 'en'
                  ? 'By combining cutting-edge technology with creative marketing strategies, we help our clients dominate their respective markets with total transparency and engineering precision.'
                  : 'من خلال الجمع بين أحدث التقنيات واستراتيجيات التسويق الإبداعية، نساعد عملائنا على السيطرة على أسواقهم بنزاهة وشفافية وهندسة دقيقة لكل مؤشر نمو.'}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <Reveal key={idx} delay={idx * 120} direction={isRTL ? 'right' : 'left'}>
                      <li className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-[#58a8f3] transition-all group list-none">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-3xl md:text-4xl font-extrabold text-white font-mono tracking-tight">
                            <CountUp value={stat.value} />
                          </span>
                          <div className="w-10 h-10 rounded-lg bg-[#1677d2]/20 text-[#58a8f3] flex items-center justify-center">
                            <Icon size={20} />
                          </div>
                        </div>
                        <div className="text-sm font-bold text-white mb-1">
                          {stat.label[lang]}
                        </div>
                        <div className="text-xs text-white/50">
                          {stat.description[lang]}
                        </div>
                      </li>
                    </Reveal>
                  );
                })}
              </div>
            </Reveal>
          </div>

          <Reveal delay={400} direction={isRTL ? 'left' : 'right'} className="relative">
             <div className="relative z-10">
                <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-white/5 shadow-2xl p-2">
                   <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                    alt={lang === 'en' ? 'Detailed digital marketing performance metrics chart showing organic traffic growth for Saudi business' : 'رسم بياني يوضح نمو الزيارات المجانية وتحليلات الأداء لشركة سعودية مع نشار هب'}
                    className="w-full h-auto object-cover rounded-xl"
                    width="600"
                    height="800"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Metric */}
                  <div className="absolute bottom-6 left-6 right-6 bg-[#0b1020]/95 backdrop-blur-md p-5 rounded-xl border border-white/15 shadow-2xl">
                     <div className="flex items-center justify-between">
                        <div>
                           <p className="text-xs font-mono uppercase tracking-wider text-[#007d87] font-bold mb-1">{lang === 'en' ? 'Verified Conversion Spike' : 'معدل نمو التحويلات المحقق'}</p>
                           <p className="text-2xl font-black text-white font-mono">+24.8% <span className="text-xs text-white/50 font-normal">QoQ</span></p>
                        </div>
                        <div className="w-10 h-10 bg-[#007d87] rounded-lg flex items-center justify-center text-white">
                           <ArrowUpRight size={20} />
                        </div>
                     </div>
                  </div>
                </div>
             </div>
          </Reveal>

        </div>
      </div>
    </section>

  );
};
