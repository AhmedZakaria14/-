import React from 'react';
import { Language } from '../types';
import { ArrowRight, ArrowLeft, PhoneCall } from 'lucide-react';
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
    <section className="py-16 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <Reveal delay={0}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {lang === 'en' ? 'Ready to Scale Your Business?' : 'هل أنت مستعد لمضاعفة مبيعاتك؟'}
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-lg text-slate-300 mb-8">
            {lang === 'en' 
              ? 'Get a free consultation and a customized digital marketing strategy for your brand.' 
              : 'احصل على استشارة مجانية واستراتيجية تسويق رقمي مخصصة لعلامتك التجارية.'}
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/#contact"
              className="bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-secondary/20"
            >
              {lang === 'en' ? 'Start Your Project' : 'ابدأ مشروعك الآن'}
              {isRTL ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </a>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 w-full sm:w-auto backdrop-blur-sm border border-white/10"
            >
              <PhoneCall className="w-5 h-5" />
              {lang === 'en' ? 'Contact via WhatsApp' : 'تواصل عبر الواتساب'}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
