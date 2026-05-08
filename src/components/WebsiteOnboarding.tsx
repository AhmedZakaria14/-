import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Check, Globe, Megaphone, Send } from 'lucide-react';
import { Language } from '../types';
import { updateSEO } from '../utils/seo';

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
  const CONTACT_NUMBER = "+20 10 10742430";
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
    
    const url = `https://wa.me/${CONTACT_NUMBER.replace(/\s/g, '')}?text=${encodeURIComponent(message)}`;
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
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  index <= activeIndex 
                    ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                    : 'bg-slate-100 text-slate-400'
                }`}
              >
                {index + 1}
              </div>
              <span className={`text-xs mt-2 font-medium ${index <= activeIndex ? 'text-primary' : 'text-slate-400'}`}>
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-12 h-0.5 -mt-6 mx-2 transition-colors duration-300 ${index < activeIndex ? 'bg-primary' : 'bg-slate-100'}`} />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-24">
      {/* Header */}
      <div className="bg-transparent">
        <div className="max-w-lg mx-auto px-4 h-16 flex items-center justify-between">
          <button 
            onClick={handleBack}
            className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-600"
          >
            {isRTL ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
          </button>
          <HeadingTag className="font-bold text-lg text-slate-900">
            {lang === 'en' ? 'Order Your Website' : 'اطلب موقعك'}
          </HeadingTag>
          <div className="w-9" /> {/* Spacer for centering */}
        </div>
      </div>

      <div className="flex-1 max-w-lg mx-auto w-full p-6 flex flex-col">
        {renderStepIndicator()}

        <div className="flex-1 flex flex-col justify-center min-h-[400px]">
          {/* Step 1: Business Field */}
          {currentStep === 'field' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                  <Globe size={32} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  {lang === 'en' ? 'What is your business field?' : 'ما هو مجال عملك؟'}
                </h2>
                <p className="text-slate-500">
                  {lang === 'en' 
                    ? 'Tell us about your industry so we can tailor the best solution for you.' 
                    : 'أخبرنا عن نشاطك التجاري لنقدم لك الحل الأنسب.'}
                </p>
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-medium text-slate-700">
                  {lang === 'en' ? 'Business Field / Industry' : 'مجال العمل / النشاط'}
                </label>
                <input
                  type="text"
                  value={businessField}
                  onChange={(e) => setBusinessField(e.target.value)}
                  placeholder={lang === 'en' ? 'e.g. Real Estate, E-commerce, Restaurant...' : 'مثال: عقارات، متجر إلكتروني، مطعم...'}
                  className="w-full p-4 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-lg bg-white"
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
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-purple-600">
                  <Megaphone size={32} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  {lang === 'en' ? 'Are you interested in ads?' : 'هل تريد إعلانات لموقعك؟'}
                </h2>
                <p className="text-slate-500">
                  {lang === 'en' 
                    ? 'Boost your new website with our Paid Ads services (Google, Meta, Snapchat) to maximize your ROI.' 
                    : 'هل تحتاج إلى إعلانات جوجل أو إعلانات ممولة (سناب شات، تيك توك) لمتجرك الجديد؟ عزز نتائجك بحملات إعلانية مصممة خصيصاً لك لترى عرض الصورة كاملة لنجاحك.'}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <button
                  onClick={() => { setWantsAds(true); setTimeout(() => setCurrentStep('review'), 300); }}
                  className={`p-6 rounded-2xl border-2 transition-all flex items-center justify-between group ${
                    wantsAds === true 
                      ? 'border-primary bg-primary/5 ring-2 ring-primary/20' 
                      : 'border-slate-200 bg-white hover:border-primary/50 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex flex-col items-start">
                    <span className="font-bold text-lg text-slate-900">
                      {lang === 'en' ? 'Yes, add Paid Ads' : 'نعم، أريد إعلانات ممولة'}
                    </span>
                    <span className="text-sm text-slate-500 mt-1">
                      {lang === 'en' ? 'Drive instant traffic and sales' : 'لجلب زيارات ومبيعات فورية'}
                    </span>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    wantsAds === true ? 'border-primary bg-primary text-white' : 'border-slate-300'
                  }`}>
                    {wantsAds === true && <Check size={14} />}
                  </div>
                </button>

                <button
                  onClick={() => { setWantsAds(false); setTimeout(() => setCurrentStep('review'), 300); }}
                  className={`p-6 rounded-2xl border-2 transition-all flex items-center justify-between group ${
                    wantsAds === false 
                      ? 'border-primary bg-primary/5 ring-2 ring-primary/20' 
                      : 'border-slate-200 bg-white hover:border-primary/50 hover:bg-slate-50'
                  }`}
                >
                  <span className="font-bold text-lg text-slate-900">
                    {lang === 'en' ? 'No, just the website' : 'لا، فقط تصميم الموقع'}
                  </span>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    wantsAds === false ? 'border-primary bg-primary text-white' : 'border-slate-300'
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
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-green-600">
                  <Send size={32} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  {lang === 'en' ? 'Ready to send?' : 'جاهز للإرسال؟'}
                </h2>
                <p className="text-slate-500">
                  {lang === 'en' 
                    ? 'Review your details and continue to WhatsApp to finalize your request.' 
                    : 'راجع تفاصيل طلبك وتابع عبر واتساب لإتمام الطلب.'}
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-8 shadow-sm">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                    <span className="text-slate-500 text-sm">{lang === 'en' ? 'Business Field' : 'مجال العمل'}</span>
                    <span className="font-bold text-slate-900">{businessField}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 text-sm">{lang === 'en' ? 'Interested in Ads' : 'مهتم بالإعلانات'}</span>
                    <span className={`font-bold ${wantsAds ? 'text-green-600' : 'text-slate-900'}`}>
                      {wantsAds 
                        ? (lang === 'en' ? 'Yes' : 'نعم') 
                        : (lang === 'en' ? 'No' : 'لا')}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleWhatsAppRedirect}
                className="w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold text-lg shadow-lg shadow-green-500/20 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {lang === 'en' ? 'Send via WhatsApp' : 'إرسال عبر واتساب'}
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
              className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-lg shadow-primary/20 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {lang === 'en' ? 'Next' : 'التالي'}
              {isRTL ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
