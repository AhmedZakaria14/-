
import React, { useEffect, useState } from 'react';
import { Language } from '../types';
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { PLATFORMS_DATA, HELPER_ICONS } from '../data/platforms';
import { updateSEO } from '../utils/seo';

interface PlatformDetailProps {
  platformId: string;
  lang: Language;
  onBack: () => void;
  onWebsiteClick?: () => void;
}

export const PlatformDetail: React.FC<PlatformDetailProps> = ({ platformId, lang, onBack, onWebsiteClick }) => {
  const isRTL = lang === 'ar';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = PLATFORMS_DATA[platformId];

  useEffect(() => {
    if (data) {
      const title = data.seoTitle?.[lang] || (lang === 'en' ? `${data.name} | Nashar Hub` : `${data.name} | نشار هب`);
      const description = data.seoDesc?.[lang] || data.description?.[lang] || '';
      const keywords = data.seoKeywords?.[lang] || '';

      updateSEO({
        title,
        description,
        keywords,
        url: `https://nasharhub.com/services/${platformId}`,
        image: 'https://nasharhub.com/og-image.jpg'
      });
    }
  }, [data, lang, platformId]);

  if (!data) return null;

  const MainIcon = data.icon;
  const isSnapchat = platformId === 'snapchat';

  return (
    <article className={`min-h-screen pb-24 ${data.bgGradient} transition-colors duration-500`}>
      {/* 1. Dynamic Hero Section */}
      <header className={`relative min-h-[45vh] overflow-hidden rounded-b-[3rem] shadow-2xl`}>
        {/* Animated Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${data.gradient} animate-gradient-xy`}></div>
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 pt-24 pb-12 text-center">
           <div className="relative mb-6 group">
              <div className={`absolute inset-0 bg-white blur-xl opacity-30 group-hover:opacity-50 transition-opacity rounded-full`}></div>
              <div className={`relative w-24 h-24 rounded-[2rem] bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                 <MainIcon size={48} className={data.platformId === 'snapchat' ? 'text-black' : 'text-slate-900'} style={{ color: data.theme === 'slate' ? 'black' : undefined }} />
              </div>
           </div>

           <h1 className={`text-4xl md:text-5xl font-black mb-3 tracking-tight ${isSnapchat ? 'text-slate-900' : 'text-white'}`}>
             {data.name}
           </h1>
           
           <p className={`text-sm md:text-lg font-medium max-w-lg mx-auto leading-relaxed mb-6 opacity-90 ${isSnapchat ? 'text-slate-800' : 'text-white'}`}>
             {data.description[lang]}
           </p>

           <div className="flex flex-wrap gap-2 justify-center">
              {data.tags.map((tag: any, i: number) => (
                <span key={i} className={`px-3 py-1 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-wider backdrop-blur-md border ${isSnapchat ? 'bg-black/5 border-black/10 text-black' : 'bg-white/10 border-white/20 text-white'}`}>
                  {tag[lang]}
                </span>
              ))}
           </div>
        </div>
      </header>

      {/* 2. Stats Section */}
      <section className="px-6 -mt-10 relative z-20 max-w-3xl mx-auto">
         <div className="grid grid-cols-3 gap-3">
            {data.stats.map((stat: any, idx: number) => {
              const StatIcon = typeof stat.icon === 'string' ? HELPER_ICONS[stat.icon] : stat.icon;
              return (
                <div key={idx} className={`bg-white p-4 rounded-2xl shadow-xl border ${data.border} flex flex-col items-center text-center transform transition-all duration-500 hover:-translate-y-1`}>
                   <div className={`mb-2 p-2 rounded-full ${data.bgGradient}`}>
                      <StatIcon size={18} className={data.accent} />
                   </div>
                   <span className="text-xl md:text-2xl font-black text-slate-900">{stat.value}</span>
                   <span className="text-[10px] text-slate-400 font-bold uppercase">{stat.label[lang]}</span>
                </div>
              );
            })}
         </div>
      </section>

      {/* 3. Features */}
      <section className="mt-12 px-6">
         <div className="flex items-center justify-between mb-4">
            <h2 className="font-black text-slate-900 text-lg">{lang === 'en' ? 'Key Features' : 'أهم المميزات'}</h2>
            <div className="h-1 flex-1 mx-4 rounded-full bg-slate-100 relative overflow-hidden">
               <div className={`absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r ${data.gradient}`}></div>
            </div>
         </div>
         
         <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar snap-x">
            {data.features.map((feat: any, idx: number) => (
              <div key={idx} className={`snap-center min-w-[200px] bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between group hover:border-${data.theme}-200 transition-colors`}>
                 <div className={`w-10 h-10 rounded-xl ${data.bgGradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <CheckCircle2 size={20} className={data.accent} />
                 </div>
                 <div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">{feat.title[lang]}</h3>
                    <p className="text-xs text-slate-500">{feat.desc[lang]}</p>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* 4. Roadmap */}
      <section className="mt-8 px-6 pb-20">
         <div className="bg-white rounded-[2.5rem] p-6 shadow-xl border border-slate-100/50 relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${data.gradient} opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2`}></div>
            <h2 className="relative font-black text-slate-900 text-xl mb-8 text-center">{lang === 'en' ? 'Roadmap to ROI' : 'رحلة العائد على الاستثمار'}</h2>
            <div className="relative space-y-8">
               <div className={`absolute top-4 bottom-4 left-[23px] rtl:left-auto rtl:right-[23px] w-1 bg-gradient-to-b ${data.gradient} rounded-full opacity-30`}></div>
               {data.infographic.map((step: any, idx: number) => {
                 const StepIcon = step.icon;
                 return (
                   <div key={idx} className="relative flex items-center gap-5 group">
                      <div className="relative z-10 w-12 h-12 rounded-full bg-white border-4 border-slate-50 shadow-md flex items-center justify-center transition-transform group-hover:scale-110">
                         <StepIcon size={20} className={data.accent} />
                      </div>
                      <div className="flex-1 bg-slate-50/50 p-4 rounded-2xl border border-slate-100 group-hover:bg-white group-hover:shadow-md transition-all">
                         <h3 className="font-bold text-slate-900 text-sm">{step.title[lang]}</h3>
                         <p className="text-xs text-slate-500 font-medium">{step.desc[lang]}</p>
                      </div>
                   </div>
                 );
               })}
            </div>
         </div>
      </section>

      {/* Cross-Link */}
      {onWebsiteClick && (
        <aside className="px-6 pb-32">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 mix-blend-overlay"></div>
            <div className="relative z-10">
              <h2 className="text-white font-black text-2xl mb-3">
                {lang === 'en' ? 'Need a High-Converting Website?' : 'هل تحتاج إلى موقع إلكتروني يزيد من مبيعاتك؟'}
              </h2>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                {lang === 'en' 
                  ? 'Maximize your ad ROI with a custom-built website or Salla store designed for conversions.' 
                  : 'لتحقيق أقصى استفادة من حملاتك الإعلانية، مثل إعلانات جوجل وجوجل إعلانات، تأكد من أن موقعك الإلكتروني مصمم لزيادة التحويلات. تعرف على خدمات تصميم المواقع الإلكترونية لدينا لتحصل على عرض الصورة كاملة.'}
              </p>
              <button 
                onClick={onWebsiteClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full font-bold text-sm hover:bg-slate-50 transition-colors shadow-lg"
              >
                {lang === 'en' ? 'Explore Web Design' : 'اكتشف خدمات تصميم المواقع'}
                <ArrowRight size={16} className={isRTL ? 'rotate-180' : ''} />
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* 5. Sticky CTA */}
      <footer className="fixed bottom-6 left-4 right-4 z-40">
        <div className="absolute inset-4 bg-white/50 blur-xl"></div>
        <a 
          href={`https://wa.me/201010742430?text=${encodeURIComponent(lang === 'en' ? `Hi, I want to start ads on ${data.name}` : `مرحباً، أريد بدء إعلانات على ${data.name}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative block w-full py-4 rounded-2xl bg-gradient-to-r ${data.gradient} text-white font-black text-lg text-center shadow-2xl shadow-slate-900/20 active:scale-95 transition-transform overflow-hidden group`}
        >
          <div className="absolute top-0 -left-full w-full h-full bg-white/20 skew-x-12 group-hover:animate-shine"></div>
          <div className="flex items-center justify-center gap-3 relative z-10">
            <MessageCircle size={24} className="fill-white/20" />
            <span>{lang === 'en' ? `Launch ${data.name}` : `أطلق حملة ${data.name}`}</span>
          </div>
        </a>
      </footer>

      <style>{`
        @keyframes shine { 100% { left: 125%; } }
        .animate-shine { animation: shine 1s; }
        .animate-gradient-xy { background-size: 200% 200%; animation: gradient-xy 6s ease infinite; }
        @keyframes gradient-xy { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
      `}</style>
    </article>
  );
};
