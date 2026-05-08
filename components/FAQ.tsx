import React, { useState } from 'react';
import { Language } from '@/types';
import { FAQS, UI_TEXT } from '@/constants';
import { Reveal } from './Reveal';
import { Plus, Minus, MessageCircleQuestion } from 'lucide-react';

interface FAQProps {
  lang: Language;
}

export const FAQ: React.FC<FAQProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl text-primary mb-4">
               <MessageCircleQuestion size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              {UI_TEXT.faqTitle[lang]}
            </h2>
          </div>
        
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index}
                className={`border rounded-2xl transition-all duration-300 ${
                  openIndex === index 
                    ? 'border-primary/30 bg-primary/5 shadow-sm' 
                    : 'border-slate-100 bg-slate-50 hover:bg-white'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  type="button"
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none select-none"
                  aria-expanded={openIndex === index}
                >
                  <span className={`font-bold text-lg transition-colors ${openIndex === index ? 'text-primary' : 'text-slate-800'}`}>
                    {faq.question[lang]}
                  </span>
                  <span className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-primary text-white rotate-180' 
                      : 'bg-slate-200 text-slate-500'
                  }`}>
                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                
                {/* Accordion Content - Simplified transition */}
                <div 
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                      {faq.answer[lang]}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
};