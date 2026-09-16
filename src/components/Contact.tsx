import React, { useState } from 'react';
import { Language } from '../types';
import { UI_TEXT } from '../constants';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Reveal } from './Reveal';
import { Analytics } from '../services/analytics';

interface ContactProps {
  lang: Language;
  isPage?: boolean;
}

export const Contact: React.FC<ContactProps> = ({ lang, isPage = false }) => {
  const [sent, setSent] = useState(false);
  const HeadingTag = isPage ? 'h1' : 'h2';

  return (
    <section 
      id="contact" 
      className="py-16 md:py-28 bg-[#0b1020] text-white relative overflow-hidden border-t border-white/10"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 text-[#007d87] font-mono text-xs uppercase tracking-widest font-bold mb-4">
                 <span className="w-2 h-2 rounded-full bg-[#007d87]"></span>
                 <span>{lang === 'en' ? 'DIRECT ACCESS' : 'قنوات التواصل المباشرة'}</span>
              </div>
              <HeadingTag id="contact-heading" className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                {UI_TEXT.contactTitle[lang]}
              </HeadingTag>
              <p className="text-white/70 text-base md:text-lg mb-8 md:mb-12 leading-relaxed font-normal">
                {UI_TEXT.contactSubtitle[lang]}
              </p>

              <div className="space-y-4">
                <a 
                  href="mailto:Info@nasharhub.com" 
                  className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-xl transition-all"
                >
                  <div className="p-3 bg-[#1677d2]/20 rounded-lg text-[#58a8f3]">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm">{lang === 'en' ? 'Official Inquiries' : 'البريد الرسمي'}</h3>
                    <p className="text-white/60 text-xs font-mono">Info@nasharhub.com</p>
                  </div>
                </a>
                
                <a 
                  href="tel:01010742430" 
                  className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-xl transition-all"
                >
                  <div className="p-3 bg-[#1677d2]/20 rounded-lg text-[#58a8f3]">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm">{lang === 'en' ? 'Direct Hotline' : 'الخط المباشر'}</h3>
                    <p className="text-white/60 text-xs font-mono" dir="ltr">01010742430</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl">
                  <div className="p-3 bg-[#1677d2]/20 rounded-lg text-[#58a8f3]">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm">{lang === 'en' ? 'Operations Base' : 'المقر والعمليات'}</h3>
                    <p className="text-white/60 text-xs">{lang === 'en' ? 'Cairo, Egypt & Riyadh, KSA' : 'القاهرة، مصر والرياض، المملكة العربية السعودية'}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200} direction={lang === 'ar' ? 'right' : 'left'}>
            <form 
              className="bg-[#f8f6f0] text-[#0b1020] p-7 md:p-10 rounded-2xl border border-[#d1ccc0] shadow-xl relative" 
              aria-label={lang === 'en' ? 'Contact form' : 'نموذج التواصل'}
              onSubmit={(e) => {
                e.preventDefault();
                Analytics.trackLead('form', 'contact_section');
                setSent(true);
                setTimeout(() => setSent(false), 3000);
              }}
            >
              <div className="space-y-4">
                <div className="border-b border-[#d1ccc0] pb-3 mb-4">
                  <span className="font-mono text-xs text-[#007d87] font-bold uppercase tracking-wider block mb-1">
                    {lang === 'en' ? 'INITIATE CONSULTATION' : 'بدء جلسة الاستشارة'}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-[#0b1020]">
                    {lang === 'en' ? 'Send an Inquiry' : 'أرسل تفاصيل مشروعك'}
                  </h3>
                </div>
                
                {sent && (
                  <div className="p-3.5 bg-emerald-100 text-emerald-800 rounded-lg flex items-center gap-3 font-medium text-sm">
                    <CheckCircle className="w-5 h-5 text-emerald-700" />
                    {lang === 'en' ? 'Inquiry received. We will respond within 4 hours.' : 'تم استلام طلبك بنجاح! سيتواصل معك فريقنا خلال 4 ساعات.'}
                  </div>
                )}
                
                <div>
                  <label htmlFor="name" className="block text-xs font-mono font-bold text-[#0b1020] mb-1.5 uppercase">
                    {UI_TEXT.contactName[lang]}
                  </label>
                  <input 
                    id="name"
                    name="name"
                    type="text" 
                    autoComplete="name"
                    className="w-full bg-white border border-[#d1ccc0] rounded px-4 py-2.5 text-[#0b1020] focus:ring-1 focus:ring-[#1677d2] focus:border-[#1677d2] outline-none text-sm placeholder:text-[#667078]/60" 
                    placeholder={lang === 'en' ? 'John Doe' : 'الاسم الكامل'} 
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs font-mono font-bold text-[#0b1020] mb-1.5 uppercase">
                    {UI_TEXT.contactEmail[lang]}
                  </label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    autoComplete="email"
                    className="w-full bg-white border border-[#d1ccc0] rounded px-4 py-2.5 text-[#0b1020] focus:ring-1 focus:ring-[#1677d2] focus:border-[#1677d2] outline-none text-sm placeholder:text-[#667078]/60" 
                    placeholder="john@company.com" 
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-bold text-[#0b1020] mb-1.5 uppercase">
                    {UI_TEXT.contactMessage[lang]}
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={4} 
                    className="w-full bg-white border border-[#d1ccc0] rounded px-4 py-2.5 text-[#0b1020] focus:ring-1 focus:ring-[#1677d2] focus:border-[#1677d2] outline-none text-sm placeholder:text-[#667078]/60 resize-none"
                    placeholder={lang === 'en' ? 'Briefly describe your objectives or challenges...' : 'صف باختصار أهدافك أو التحديات التسويقية والتقنية الحالية...'}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-3.5 bg-[#0b1020] hover:bg-[#1677d2] text-white font-mono font-bold text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Send size={15} />
                  {UI_TEXT.contactSend[lang]}
                </button>
              </div>
            </form>
          </Reveal>

        </div>
      </div>
    </section>

  );
};