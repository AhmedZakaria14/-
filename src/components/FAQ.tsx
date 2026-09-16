import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { FAQS, UI_TEXT } from '../constants';
import { Reveal } from './Reveal';
import { Plus, Minus, MessageCircleQuestion } from 'lucide-react';
import { updateSEO } from '../utils/seo';

interface FAQProps {
  lang: Language;
  isPage?: boolean;
}

export const FAQ: React.FC<FAQProps> = ({ lang, isPage = false }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const HeadingTag = isPage ? 'h1' : 'h2';

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question[lang],
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer[lang]
      }
    }))
  };

  useEffect(() => {
    if (isPage) {
      updateSEO({
        title: lang === 'en' ? 'Frequently Asked Questions | Nashar Hub' : 'الأسئلة الشائعة | نشار هب - استشارات تسويقية',
        description: lang === 'en' ? 'Find answers to common questions about our SEO, web development, and digital marketing services in Saudi Arabia.' : 'إجابات على الأسئلة الشائعة حول خدمات السيو، وتطوير المواقع، والتسويق الرقمي في السعودية.',
      });
    }
  }, [isPage, lang]);

  return (
    <section className="py-20 md:py-28 bg-[#f8f6f0] border-t border-[#d1ccc0] relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[#007d87] font-mono font-bold uppercase tracking-widest text-xs mb-3">
               <span className="w-2 h-2 rounded-full bg-[#007d87]"></span>
               <span>{lang === 'en' ? 'COMMON QUESTIONS & VERIFIED ANSWERS' : 'الأسئلة المتكررة والإجابات الواضحة'}</span>
            </div>
            <HeadingTag className="text-3xl md:text-5xl font-extrabold text-[#0b1020] mb-4 tracking-tight">
              {UI_TEXT.faqTitle[lang]}
            </HeadingTag>
            <p className="text-base md:text-lg text-[#667078] max-w-2xl mx-auto leading-relaxed font-normal">
              {lang === 'en'
                ? 'Find answers to common questions about our digital marketing methodologies, web architectures, and growth operations. Full transparency across all services.'
                : 'إجابات مباشرة وواضحة على أكثر التساؤلات شيوعاً حول منهجيات التسويق الرقمي، وبرمجة المواقع، ونماذج تحقيق النمو بأعلى معايير الشفافية.'}
            </p>
          </div>
        
          <div className="space-y-3">
            {FAQS.map((faq, index) => (
              <div 
                key={index}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  openIndex === index 
                    ? 'border-[#007d87] bg-white shadow-sm' 
                    : 'border-[#d1ccc0] bg-[#f4f1e9] hover:bg-white/80'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  type="button"
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left rtl:text-right focus:outline-none select-none cursor-pointer"
                  aria-expanded={openIndex === index}
                >
                  <span className={`font-bold text-base md:text-lg transition-colors ${openIndex === index ? 'text-[#007d87]' : 'text-[#0b1020]'}`}>
                    {faq.question[lang]}
                  </span>
                  <span className={`flex items-center justify-center w-7 h-7 rounded shrink-0 transition-all duration-200 ${
                    openIndex === index 
                      ? 'bg-[#007d87] text-white' 
                      : 'bg-black/5 text-[#0b1020]'
                  }`}>
                    {openIndex === index ? <Minus size={15} /> : <Plus size={15} />}
                  </span>
                </button>
                
                {/* Accordion Content */}
                <div 
                  className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${
                    openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-5 md:p-6 pt-0 text-[#667078] leading-relaxed text-sm md:text-base border-t border-[#d1ccc0]/60 mt-1">
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