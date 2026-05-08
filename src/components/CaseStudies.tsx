import React from 'react';
import { Language } from '../types';
import { CASE_STUDIES } from '../caseStudiesData';
import { TrendingUp, Users, DollarSign, ShoppingCart, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

interface CaseStudiesProps {
  lang: Language;
  isPage?: boolean;
}

const iconMap = {
  'trending-up': TrendingUp,
  'users': Users,
  'dollar-sign': DollarSign,
  'shopping-cart': ShoppingCart,
};

export const CaseStudies: React.FC<CaseStudiesProps> = ({ lang, isPage = false }) => {
  const isRTL = lang === 'ar';
  const HeadingTag = isPage ? 'h1' : 'h2';

  return (
    <section id="case-studies" className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 translate-x-1/2"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-16 md:mb-24">
            <HeadingTag className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              {lang === 'en' ? 'Real Results, Real Growth' : 'نتائج حقيقية، نمو حقيقي'}
            </HeadingTag>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {lang === 'en' 
                ? 'We don\'t just promise results; we deliver them. Here is how we have helped businesses like yours scale.' 
                : 'نحن لا نعد بالنتائج فقط؛ بل نحققها. إليك كيف ساعدنا شركات مثلك على التوسع والنمو من خلال إعلانات جوجل وجوجل إعلانات، لترى عرض الصورة كاملة لنجاحك.'}
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, index) => (
            <Reveal key={study.id} delay={index * 100}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img 
                    src={study.image} 
                    alt={study.title[lang]} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap gap-2">
                    {study.tags.map(tag => (
                      <span key={tag} className="text-xs font-bold text-white bg-white/20 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                    {study.industry[lang]}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-blue-600 transition-colors">
                    {study.title[lang]}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 flex-1 leading-relaxed">
                    {study.description[lang]}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-6 mt-auto">
                    {study.results.map((result, i) => {
                      const Icon = iconMap[result.icon];
                      return (
                        <div key={i} className="text-center">
                          <div className="flex justify-center text-blue-600 mb-1">
                            <Icon size={16} />
                          </div>
                          <div className="font-black text-slate-900 text-lg">{result.value}</div>
                          <div className="text-[10px] text-slate-500 uppercase font-bold">{result.metric[lang]}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-16 text-center">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all hover:scale-105 shadow-xl shadow-slate-900/20"
            >
              {lang === 'en' ? 'Become Our Next Success Story' : 'كن قصة نجاحنا التالية'}
              <ArrowRight size={20} className={isRTL ? 'rotate-180' : ''} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
