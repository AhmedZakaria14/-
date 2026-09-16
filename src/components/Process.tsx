import React from 'react';
import { Language } from '../types';
import { PROCESS_STEPS, UI_TEXT, ICONS_MAP } from '../constants';
import { Reveal } from './Reveal';

interface ProcessProps {
  lang: Language;
  isPage?: boolean;
}

export const Process: React.FC<ProcessProps> = ({ lang, isPage = false }) => {
  const isRTL = lang === 'ar';

  return (
    <section id="process" className="py-20 md:py-28 bg-[#f8f6f0] border-t border-[#d1ccc0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <Reveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[#007d87] font-mono font-bold uppercase tracking-widest text-xs mb-3">
              <span className="w-2 h-2 rounded-full bg-[#007d87]"></span>
              <span>{UI_TEXT.processSubtitle[lang]}</span>
            </div>
            {isPage ? (
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#0b1020] mb-4 tracking-tight">
                {UI_TEXT.processTitle[lang]}
              </h1>
            ) : (
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#0b1020] mb-4 tracking-tight">
                {UI_TEXT.processTitle[lang]}
              </h2>
            )}
            <p className="text-base md:text-lg text-[#667078] leading-relaxed font-normal">
              {lang === 'en'
                ? 'Our methodology is designed to take your business to where you want it to be: a structured four-phase system ensuring transparency, high velocity, and compound growth.'
                : 'منهجيتنا مبنية لنقل عملك إلى القمة: أربع مراحل مدروسة بعناية تضمن أعلى درجات الشفافية، وسرعة التنفيذ، والعائد الاستثماري المتصاعد.'}
            </p>
          </div>
        </Reveal>

        {/* Process List Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = ICONS_MAP[step.icon];
            return (
              <Reveal key={step.id} delay={index * 120} direction="up">
                <div className="bg-[#f4f1e9] p-7 rounded-xl border border-[#d1ccc0] hover:border-[#007d87] transition-all duration-300 h-full flex flex-col group shadow-sm hover:shadow-md">
                  
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-5 border-b border-[#d1ccc0] pb-4">
                    <span className="font-mono font-bold text-lg text-[#007d87]">
                      0{step.id}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#0b1020] text-[#58a8f3] flex items-center justify-center group-hover:bg-[#1677d2] transition-colors">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#0b1020] mb-2.5">
                    {step.title[lang]}
                  </h3>
                  <p className="text-sm text-[#667078] leading-relaxed font-normal">
                    {step.description[lang]}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
