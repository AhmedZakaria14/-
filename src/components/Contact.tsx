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
      className="py-16 md:py-32 bg-white relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-secondary/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          <Reveal>
            <div>
              <HeadingTag id="contact-heading" className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
                {UI_TEXT.contactTitle[lang]}
              </HeadingTag>
              <p className="text-slate-600 text-lg md:text-xl mb-8 md:mb-12 leading-relaxed">
                {UI_TEXT.contactSubtitle[lang]}
              </p>

              <div className="space-y-6 md:space-y-8">
                <a 
                  href="mailto:Info@nasharhub.com" 
                  className="flex items-start gap-4 md:gap-6 group hover:bg-slate-50 p-4 rounded-2xl transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <div className="p-3 md:p-4 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors" aria-hidden="true">
                    <Mail size={24} className="md:w-[28px] md:h-[28px]" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-lg mb-1">{lang === 'en' ? 'Email Us' : 'راسلنا'}</h3>
                    <p className="text-slate-500 text-sm md:text-base">Info@nasharhub.com</p>
                  </div>
                </a>
                
                <a 
                  href="tel:+20 10 10742430" 
                  className="flex items-start gap-4 md:gap-6 group hover:bg-slate-50 p-4 rounded-2xl transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <div className="p-3 md:p-4 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors" aria-hidden="true">
                    <Phone size={24} className="md:w-[28px] md:h-[28px]" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-lg mb-1">{lang === 'en' ? 'Call Us' : 'اتصل بنا'}</h3>
                    <p className="text-slate-500 text-sm md:text-base" dir="ltr">+20 10 10742430</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 md:gap-6 group p-4">
                  <div className="p-3 md:p-4 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors" aria-hidden="true">
                    <MapPin size={24} className="md:w-[28px] md:h-[28px]" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-lg mb-1">{lang === 'en' ? 'Visit Us' : 'زرنا'}</h3>
                    <p className="text-slate-500 text-sm md:text-base mb-2">{lang === 'en' ? 'Cairo, Egypt' : 'القاهرة، مصر'}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200} direction={lang === 'ar' ? 'right' : 'left'}>
            <form 
              className="bg-white p-6 md:p-10 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 relative" 
              aria-label={lang === 'en' ? 'Contact form' : 'نموذج التواصل'}
              onSubmit={(e) => {
                e.preventDefault();
                Analytics.trackLead('form', 'contact_section');
                setSent(true);
                setTimeout(() => setSent(false), 3000);
              }}
            >
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                  {lang === 'en' ? 'Send a message' : 'أرسل رسالة'}
                </h3>
                
                {sent && (
                  <div className="p-4 bg-emerald-50 text-emerald-700 rounded-xl flex items-center gap-3 font-medium">
                    <CheckCircle className="w-5 h-5" />
                    {lang === 'en' ? 'Message sent successfully!' : 'تم إرسال الرسالة بنجاح!'}
                  </div>
                )}
                
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    {UI_TEXT.contactName[lang]}
                  </label>
                  <input 
                    id="name"
                    name="name"
                    type="text" 
                    autoComplete="name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 md:px-5 md:py-4 text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-slate-400" 
                    placeholder={lang === 'en' ? 'John Doe' : 'الاسم'} 
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    {UI_TEXT.contactEmail[lang]}
                  </label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    autoComplete="email"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 md:px-5 md:py-4 text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-slate-400" 
                    placeholder="john@company.com" 
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    {UI_TEXT.contactMessage[lang]}
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={4} 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 md:px-5 md:py-4 text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-slate-400 resize-none"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-4 md:py-5 bg-gradient-to-r from-primary to-primary-light hover:to-primary text-white font-bold rounded-xl transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 flex items-center justify-center gap-3 text-base md:text-lg focus:outline-none focus:ring-4 focus:ring-primary/30"
                >
                  <Send size={18} className="md:w-[20px] md:h-[20px]" aria-hidden="true" />
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