
import React from 'react';
import { Language } from '@/types';
import { UI_TEXT } from '@/constants';
import { Reveal } from './Reveal';
import { Trophy, Users, BarChart3, ArrowUpRight, TrendingUp } from 'lucide-react';

interface WhyUsProps {
  lang: Language;
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

export const WhyUs: React.FC<WhyUsProps> = ({ lang }) => {
  const isRTL = lang === 'ar';
  
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
      className="py-20 md:py-32 bg-white border-y border-slate-100 overflow-hidden"
      aria-labelledby="stats-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className={`${isRTL ? 'lg:order-1' : 'lg:order-0'}`}>
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest mb-6">
                 <ArrowUpRight size={14} className="text-primary" />
                 {UI_TEXT.statsTitle[lang]}
              </div>
              <h2 
                id="stats-heading" 
                className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tighter"
              >
                {lang === 'en' 
                  ? 'Results Backed by Data That Speaks for Itself.'
                  : 'نتائج مدعومة ببيانات تتحدث عن نفسها.'}
              </h2>
              <p className="text-lg md:text-xl text-slate-500 mb-12 leading-relaxed">
                {lang === 'en'
                  ? 'We don\'t make empty promises. We deliver measurable growth using performance metrics that define success for your specific industry.'
                  : 'نحن لا نقدم وعوداً فارغة. نحن نحقق نمواً ملموساً باستخدام مقاييس أداء تحدد معايير النجاح في مجالك الخاص.'}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" role="list">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <Reveal key={idx} delay={idx * 150} direction={isRTL ? 'right' : 'left'}>
                      <li className="bg-slate-50/50 p-6 md:p-8 rounded-[2rem] border border-slate-100 hover:border-primary/20 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all group list-none">
                        <div 
                          className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ${stat.color}`}
                          aria-hidden="true"
                        >
                          <Icon size={28} />
                        </div>
                        <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">
                          <CountUp value={stat.value} />
                        </div>
                        <div className="text-sm font-bold text-slate-900 mb-1">
                          {stat.label[lang]}
                        </div>
                        <div className="text-xs text-slate-400">
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
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-[3rem] blur-2xl opacity-50"></div>
                <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                   <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                    alt={lang === 'en' ? 'Digital marketing performance metrics and data analysis' : 'مقاييس أداء التسويق الرقمي وتحليل البيانات'}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    width="600"
                    height="800"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                  
                  {/* Floating Metric */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl animate-float">
                     <div className="flex items-center justify-between">
                        <div>
                           <p className="text-[10px] font-black uppercase text-slate-400 mb-1">{lang === 'en' ? 'Conversion Rate' : 'معدل التحويل'}</p>
                           <p className="text-2xl font-black text-primary">+24.8%</p>
                        </div>
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                           <ArrowUpRight size={24} />
                        </div>
                     </div>
                  </div>
                </div>
             </div>
             
             {/* Decorative Background Circles */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};
