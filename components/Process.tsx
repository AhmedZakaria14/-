import React from 'react';
import { Language } from '@/types';
import { PROCESS_STEPS, UI_TEXT, ICONS_MAP } from '@/constants';
import { Reveal } from './Reveal';

interface ProcessProps {
  lang: Language;
}

export const Process: React.FC<ProcessProps> = ({ lang }) => {
  const isRTL = lang === 'ar';

  return (
    <section id="process" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <Reveal>
          <div className="text-center mb-16">
            <span className="block text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-3">
              {UI_TEXT.processSubtitle[lang]}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              {UI_TEXT.processTitle[lang]}
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 rounded-full z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = ICONS_MAP[step.icon];
              return (
                <Reveal key={step.id} delay={index * 150} direction="up">
                  <div className="relative bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg hover:-translate-y-2 transition-transform duration-300 z-10 h-full flex flex-col items-center text-center group">
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md border-4 border-slate-50">
                      {step.id}
                    </div>

                    <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                      <Icon size={32} />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {step.title[lang]}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {step.description[lang]}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};