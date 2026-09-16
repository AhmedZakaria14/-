import React from 'react';
import { Language } from '../types';
import { ArrowRight, ArrowLeft, MessageSquare } from 'lucide-react';
import { Reveal } from './Reveal';

interface GlobalCTAProps {
  lang: Language;
}

export const GlobalCTA: React.FC<GlobalCTAProps> = ({ lang }) => {
  const isRTL = lang === 'ar';
  const whatsappNumber = "201010742430";
  const whatsappMsg = encodeURIComponent(
    lang === 'en' 
      ? "Hello, I'm interested in your digital marketing and web development services." 
      : "مرحباً، مهتم بخدمات التسويق الرقمي وتصميم المواقع الخاصة بكم."
  );

  return (
    <section className="py-16 md:py-24 bg-[#0b1020] text-white relative overflow-hidden border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <Reveal delay={0}>
          <div className="inline-flex items-center gap-2 text-[#58a8f3] font-mono text-xs uppercase tracking-widest font-bold mb-4">
             <span className="w-2 h-2 rounded-full bg-[#1677d2]"></span>
             <span>{lang === 'en' ? 'NEXT PHASE' : 'المرحلة التالية'}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
            {lang === 'en' ? 'Ready to Engineer Your Market Dominance?' : 'جاهز لإطلاق وتوسيع عملياتك التسويقية؟'}
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-base md:text-lg text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed font-normal">
            {lang === 'en' 
              ? 'Book a strategic review session with our senior engineers and marketing growth leads.' 
              : 'احجز جلسة مراجعة استراتيجية متكاملة مع فريقنا التقني واستشاريي التسويق لتحديد فرص النمو المباشرة.'}
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/#contact"
              className="bg-[#1677d2] hover:bg-[#2c8de8] text-white px-8 py-3.5 rounded font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg"
            >
              {lang === 'en' ? 'Start Your Project' : 'ابدأ مشروعك الآن'}
              {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </a>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <MessageSquare className="w-4 h-4 text-[#58a8f3]" />
              {lang === 'en' ? 'WhatsApp Direct' : 'تواصل مباشر واتساب'}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

