import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Check, Globe, Megaphone, Send } from 'lucide-react';
import { Language } from '../types';
import { updateSEO } from '../utils/seo';
import { Breadcrumb } from './Breadcrumb';

interface WebsiteOnboardingProps {
  lang: Language;
  onBack: () => void;
  isPage?: boolean;
}

type Step = 'field' | 'ads' | 'review';

export const WebsiteOnboarding: React.FC<WebsiteOnboardingProps> = ({ lang, onBack, isPage = true }) => {
  const [currentStep, setCurrentStep] = useState<Step>('field');
  const [businessField, setBusinessField] = useState('');
  const [wantsAds, setWantsAds] = useState<boolean | null>(null);

  const isRTL = lang === 'ar';
  const CONTACT_NUMBER = "01010742430";
  const HeadingTag = isPage ? 'h1' : 'h2';

  useEffect(() => {
    window.scrollTo(0, 0);

    const title = lang === 'en' ? 'Order Your Website | Nashar Hub' : 'اطلب موقعك الإلكتروني | نشار هب';
    const description = lang === 'en' ? 'Start your website project with Nashar Hub. Tell us about your business and get a custom quote.' : 'ابدأ مشروع موقعك الإلكتروني مع نشار هب. أخبرنا عن نشاطك التجاري واحصل على عرض سعر مخصص.';
    const keywords = lang === 'en' ? 'Order Website, Custom Web Design, E-commerce Setup' : 'طلب موقع, تصميم موقع مخصص, إنشاء متجر إلكتروني';

    updateSEO({
      title,
      description,
      keywords,
      url: 'https://nasharhub.com/website-onboarding',
      image: 'https://nasharhub.com/og-image.jpg'
    });
  }, [lang]);

  const handleNext = () => {
    if (currentStep === 'field' && businessField.trim()) {
      setCurrentStep('ads');
    } else if (currentStep === 'ads' && wantsAds !== null) {
      setCurrentStep('review');
    }
  };

  const handleBack = () => {
    if (currentStep === 'review') {
      setCurrentStep('ads');
    } else if (currentStep === 'ads') {
      setCurrentStep('field');
    } else {
      onBack();
    }
  };

  const handleWhatsAppRedirect = () => {
    const message = lang === 'en' 
      ? `Hi, I'd like to order a website.\n\nBusiness Field: ${businessField}\nInterested in Ads: ${wantsAds ? 'Yes' : 'No'}`
      : `مرحباً، أود طلب موقع إلكتروني.\n\nمجال العمل: ${businessField}\nمهتم بالإعلانات: ${wantsAds ? 'نعم' : 'لا'}`;
    
    const url = `https://wa.me/201010742430?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const renderStepIndicator = () => {
    const steps = [
      { id: 'field', label: lang === 'en' ? 'Field' : 'المجال' },
      { id: 'ads', label: lang === 'en' ? 'Ads' : 'الإعلانات' },
      { id: 'review', label: lang === 'en' ? 'Send' : 'إرسال' }
    ];

    const activeIndex = steps.findIndex(s => s.id === currentStep);

    return (
      <div className="flex items-center justify-center mb-8">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className={`flex flex-col items-center relative z-10`}>
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all duration-300 ${
                  index <= activeIndex 
                    ? 'bg-[#0b1020] text-white shadow-md' 
                    : 'bg-white border border-[#d1ccc0] text-[#667078]'
                }`}
              >
                {index + 1}
              </div>
              <span className={`text-[11px] font-mono mt-2 font-bold uppercase tracking-wider ${index <= activeIndex ? 'text-[#0b1020]' : 'text-[#667078]'}`}>
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-12 h-0.5 -mt-6 mx-2 transition-colors duration-300 ${index < activeIndex ? 'bg-[#0b1020]' : 'bg-[#d1ccc0]'}`} />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#f4f1e9] text-[#0b1020] flex flex-col pt-24">
      {/* Header */}
      <div className="bg-transparent">
        <div className="max-w-lg mx-auto px-4">
          <div className="mb-4">
            <Breadcrumb 
              lang={lang} 
              items={[{ label: lang === 'en' ? 'Order Website' : 'اطلب موقعك', href: '/website-onboarding' }]} 
            />
          </div>
          <div className="h-16 flex items-center justify-between border-b border-[#d1ccc0] mb-4">
            <button 
              onClick={handleBack}
              className="p-2 hover:bg-black/5 rounded transition-colors text-[#0b1020] cursor-pointer"
            >
              {isRTL ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
            </button>
            <HeadingTag className="font-extrabold text-xl text-[#0b1020]">
              {lang === 'en' ? 'Order Your Website' : 'اطلب موقعك الإلكتروني'}
            </HeadingTag>
            <div className="w-9" /> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-lg mx-auto w-full p-6 flex flex-col">
        {renderStepIndicator()}

        <div className="flex-1 flex flex-col justify-center min-h-[400px]">
          {/* Step 1: Business Field */}
          {currentStep === 'field' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center mb-8">
                <div className="w-14 h-14 bg-[#0b1020] rounded-xl flex items-center justify-center mx-auto mb-4 text-[#58a8f3]">
                  <Globe size={28} />
                </div>
                <h2 className="text-2xl font-bold text-[#0b1020] mb-2">
                  {lang === 'en' ? 'What is your business field?' : 'ما هو مجال عملك؟'}
                </h2>
                <p className="text-[#667078] text-sm leading-relaxed">
                  {lang === 'en' 
                    ? 'Tell us about your industry so we can tailor the best solution for you.' 
                    : 'أخبرنا عن نشاطك التجاري لنقدم لك الحل الأنسب.'}
                </p>
              </div>

              <div className="space-y-4">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#0b1020] font-bold">
                  {lang === 'en' ? 'Business Field / Industry' : 'مجال العمل / النشاط'}
                </label>
                <input
                  type="text"
                  value={businessField}
                  onChange={(e) => setBusinessField(e.target.value)}
                  placeholder={lang === 'en' ? 'e.g. Real Estate, E-commerce, Restaurant...' : 'مثال: عقارات، متجر إلكتروني، مطعم...'}
                  className="w-full p-4 rounded-xl border border-[#d1ccc0] focus:border-[#1677d2] focus:ring-1 focus:ring-[#1677d2] outline-none transition-all text-base bg-white text-[#0b1020]"
                  autoFocus
                  onKeyDown={(e) => e.key === 'Enter' && businessField.trim() && handleNext()}
                />
              </div>
            </div>
          )}

          {/* Step 2: Ads Preference */}
          {currentStep === 'ads' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center mb-8">
                <div className="w-14 h-14 bg-[#0b1020] rounded-xl flex items-center justify-center mx-auto mb-4 text-[#58a8f3]">
                  <Megaphone size={28} />
                </div>
                <h2 className="text-2xl font-bold text-[#0b1020] mb-2">
                  {lang === 'en' ? 'Are you interested in ads?' : 'هل تريد إعلانات لموقعك؟'}
                </h2>
                <p className="text-[#667078] text-sm leading-relaxed">
                  {lang === 'en' 
                    ? 'Boost your new website with our Paid Ads services (Google, Meta, Snapchat) to maximize your ROI.' 
                    : 'هل تحتاج إلى إعلانات جوجل أو حملات ممولة (سناب شات، تيك توك) لمتجرك الجديد؟ عزز نتائجك بحملات إعلانية مصممة خصيصاً لك.'}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <button
                  onClick={() => { setWantsAds(true); setTimeout(() => setCurrentStep('review'), 300); }}
                  className={`p-6 rounded-xl border transition-all flex items-center justify-between group cursor-pointer ${
                    wantsAds === true 
                      ? 'border-[#1677d2] bg-white ring-2 ring-[#1677d2]' 
                      : 'border-[#d1ccc0] bg-white hover:border-[#1677d2]'
                  }`}
                >
                  <div className="flex flex-col items-start">
                    <span className="font-bold text-base text-[#0b1020]">
                      {lang === 'en' ? 'Yes, add Paid Ads' : 'نعم، أريد إعلانات ممولة'}
                    </span>
                    <span className="text-xs text-[#667078] mt-1">
                      {lang === 'en' ? 'Drive instant traffic and sales' : 'لجلب زيارات ومبيعات فورية'}
                    </span>
                  </div>
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 ${
                    wantsAds === true ? 'border-[#1677d2] bg-[#1677d2] text-white' : 'border-[#d1ccc0]'
                  }`}>
                    {wantsAds === true && <Check size={14} />}
                  </div>
                </button>

                <button
                  onClick={() => { setWantsAds(false); setTimeout(() => setCurrentStep('review'), 300); }}
                  className={`p-6 rounded-xl border transition-all flex items-center justify-between group cursor-pointer ${
                    wantsAds === false 
                      ? 'border-[#1677d2] bg-white ring-2 ring-[#1677d2]' 
                      : 'border-[#d1ccc0] bg-white hover:border-[#1677d2]'
                  }`}
                >
                  <span className="font-bold text-base text-[#0b1020]">
                    {lang === 'en' ? 'No, just the website' : 'لا، فقط تصميم الموقع'}
                  </span>
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 ${
                    wantsAds === false ? 'border-[#1677d2] bg-[#1677d2] text-white' : 'border-[#d1ccc0]'
                  }`}>
                    {wantsAds === false && <Check size={14} />}
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Review & Send */}
          {currentStep === 'review' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center mb-8">
                <div className="w-14 h-14 bg-[#0b1020] rounded-xl flex items-center justify-center mx-auto mb-4 text-[#58a8f3]">
                  <Send size={28} />
                </div>
                <h2 className="text-2xl font-bold text-[#0b1020] mb-2">
                  {lang === 'en' ? 'Ready to send?' : 'جاهز للإرسال؟'}
                </h2>
                <p className="text-[#667078] text-sm leading-relaxed">
                  {lang === 'en' 
                    ? 'Review your details and continue to WhatsApp to finalize your request.' 
                    : 'راجع تفاصيل طلبك وتابع عبر واتساب لإتمام الطلب.'}
                </p>
              </div>

              <div className="bg-white rounded-xl border border-[#d1ccc0] p-6 mb-8 shadow-sm">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-[#d1ccc0]">
                    <span className="text-[#667078] text-xs font-mono uppercase">{lang === 'en' ? 'Business Field' : 'مجال العمل'}</span>
                    <span className="font-bold text-[#0b1020]">{businessField}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#667078] text-xs font-mono uppercase">{lang === 'en' ? 'Interested in Ads' : 'مهتم بالإعلانات'}</span>
                    <span className={`font-bold ${wantsAds ? 'text-[#007d87]' : 'text-[#0b1020]'}`}>
                      {wantsAds 
                        ? (lang === 'en' ? 'Yes' : 'نعم') 
                        : (lang === 'en' ? 'No' : 'لا')}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleWhatsAppRedirect}
                className="w-full py-3.5 bg-[#1677d2] hover:bg-[#2c8de8] text-white rounded font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={16} />
                {lang === 'en' ? 'Send Request via WhatsApp' : 'إرسال الطلب عبر واتساب'}
              </button>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {currentStep === 'field' && (
          <div className="mt-8">
            <button
              onClick={handleNext}
              disabled={!businessField.trim()}
              className="w-full py-3.5 bg-[#1677d2] hover:bg-[#2c8de8] text-white rounded font-mono font-bold text-xs uppercase tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
            >
              {lang === 'en' ? 'Next Step' : 'الخطوة التالية'}
              {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
            </button>
          </div>
        )}
      </div>
    </div>

  );
};
