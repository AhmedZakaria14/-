
import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  MessageCircle,
  Layout,
  Target
} from 'lucide-react';
import { COUNTRIES, MULTIPLIERS, PACKAGES } from '../data/packages';
import { updateSEO } from '../utils/seo';

interface PackagesWizardProps {
  lang: Language;
  onBack: () => void;
  isPage?: boolean;
}

type Step = 'country' | 'service' | 'package';

export const PackagesWizard: React.FC<PackagesWizardProps> = ({ lang, onBack, isPage = true }) => {
  const [step, setStep] = useState<Step>('country');
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [selectedService, setSelectedService] = useState<'ads' | 'ads_web' | null>(null);
  const isRTL = lang === 'ar';
  const HeadingTag = isPage ? 'h1' : 'h2';

  useEffect(() => {
    window.scrollTo(0, 0);
    updateSEO({
      title: lang === 'en' ? 'Pricing Packages | Nashar Hub' : 'باقات الأسعار | نشار هب',
      description: lang === 'en' ? 'Explore our flexible pricing packages for digital marketing and web development services.' : 'استكشف باقات الأسعار المرنة لخدمات التسويق الرقمي وتطوير المواقع.',
      keywords: lang === 'en' ? 'Pricing, Packages, Digital Marketing Cost, Web Development Packages' : 'باقات الأسعار, تكلفة التسويق الرقمي, باقات تصميم المواقع',
      url: 'https://nasharhub.com/packages',
      image: 'https://nasharhub.com/og-image.jpg'
    });
  }, [lang]);

  const handleBack = () => {
    if (step === 'package') setStep('service');
    else if (step === 'service') setStep('country');
    else onBack();
  };

  const getPrice = (usdPrice: number) => {
    if (!selectedCountry) return `$${usdPrice}`;
    const multiplier = MULTIPLIERS[selectedCountry.code] || 1;
    const price = Math.round(usdPrice * multiplier);
    return `${price.toLocaleString()} ${selectedCountry.code}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-24">
      {/* Header */}
      <header className="bg-transparent">
        <div className="max-w-4xl mx-auto px-4 h-20 flex items-center justify-between">
          <button 
            onClick={handleBack}
            className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-600"
          >
            {isRTL ? <ArrowRight size={24} /> : <ArrowLeft size={24} />}
          </button>
          
          <div className="flex gap-2">
            {['country', 'service', 'package'].map((s, i) => (
              <div 
                key={s} 
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  (['country', 'service', 'package'].indexOf(step) >= i) ? 'w-8 bg-blue-600' : 'w-2 bg-slate-200'
                }`} 
              />
            ))}
          </div>
          
          <div className="w-10" />
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full p-6 md:p-12">
        {step === 'country' && (
          <CountryStep 
            key="country"
            lang={lang} 
            onSelect={(c) => { setSelectedCountry(c); setStep('service'); }} 
            HeadingTag={HeadingTag}
          />
        )}
        
        {step === 'service' && (
          <ServiceStep 
            key="service"
            lang={lang} 
            onSelect={(s) => { setSelectedService(s); setStep('package'); }} 
          />
        )}
        
        {step === 'package' && (
          <PackageStep 
            key="package"
            lang={lang} 
            selectedCountry={selectedCountry}
            selectedService={selectedService}
            getPrice={getPrice}
          />
        )}
      </main>

      <footer className="p-8 text-center text-slate-400 text-xs font-medium">
        <p>
          {lang === 'en' 
            ? 'Prices may vary slightly based on specific custom requirements.' 
            : 'الأسعار قد تختلف قليلاً بناءً على المتطلبات الخاصة.'}
        </p>
      </footer>
    </div>
  );
};

const CountryStep = ({ lang, onSelect, HeadingTag }: { lang: Language, onSelect: (c: any) => void, HeadingTag: any }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="text-center">
      <HeadingTag className="text-4xl font-black text-slate-900 mb-3">
        {lang === 'en' ? 'Select Your Market' : 'اختر سوقك المستهدف'}
      </HeadingTag>
      <p className="text-slate-500 text-lg font-medium">
        {lang === 'en' ? 'We customize prices based on your region' : 'نقوم بتخصيص الأسعار بناءً على منطقتك'}
      </p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {COUNTRIES.map((c) => (
        <button 
          key={c.name.en} 
          onClick={() => onSelect(c)} 
          className="flex flex-col items-center gap-3 p-6 rounded-[2rem] border-2 border-slate-100 hover:border-blue-500 hover:bg-blue-50 transition-all group bg-white shadow-sm"
        >
          <span className="text-4xl group-hover:scale-110 transition-transform">{c.flag}</span>
          <span className="font-bold text-slate-700">{c.name[lang]}</span>
        </button>
      ))}
    </div>
  </div>
);

const ServiceStep = ({ lang, onSelect }: { lang: Language, onSelect: (s: 'ads' | 'ads_web') => void }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="text-center">
      <h1 className="text-4xl font-black text-slate-900 mb-3">
        {lang === 'en' ? 'What are your goals?' : 'ما هي أهدافك؟'}
      </h1>
      <p className="text-slate-500 text-lg font-medium">
        {lang === 'en' ? 'Choose the service that fits your needs' : 'اختر الخدمة التي تناسب احتياجاتك'}
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <button 
        onClick={() => onSelect('ads')} 
        className="p-8 rounded-[2.5rem] border-2 border-slate-100 hover:border-blue-500 hover:bg-blue-50 transition-all text-center group bg-white shadow-sm"
      >
        <div className="w-20 h-20 rounded-3xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
          <Target size={40} />
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-3">
          {lang === 'en' ? 'Ads Management' : 'إدارة الإعلانات - إعلانات جوجل'}
        </h3>
        <p className="text-slate-500 font-medium">
          {lang === 'en' ? 'Scale your sales on Meta, TikTok, and Google' : 'ضاعف مبيعاتك على منصات التواصل وجوجل'}
        </p>
      </button>
      <button 
        onClick={() => onSelect('ads_web')} 
        className="p-8 rounded-[2.5rem] border-2 border-slate-100 hover:border-blue-500 hover:bg-blue-50 transition-all text-center group bg-white shadow-sm"
      >
        <div className="w-20 h-20 rounded-3xl bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
          <Layout size={40} />
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-3">
          {lang === 'en' ? 'Ads + Website' : 'إعلانات + موقع'}
        </h3>
        <p className="text-slate-500 font-medium">
          {lang === 'en' ? 'Complete solution: High-converting site + Ads' : 'حل متكامل: موقع عالي التحويل + إعلانات'}
        </p>
      </button>
    </div>
  </div>
);

const PackageStep = ({ lang, selectedCountry, selectedService, getPrice }: { 
  lang: Language, 
  selectedCountry: any, 
  selectedService: 'ads' | 'ads_web' | null,
  getPrice: (usd: number) => string
}) => {
  const currentPackages = selectedService ? (PACKAGES as any)[selectedService] : [];
  
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center">
        <h1 className="text-4xl font-black text-slate-900 mb-3">
          {lang === 'en' ? 'Choose Your Package' : 'اختر باقتك المناسبة'}
        </h1>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold border border-blue-100">
          <span>{selectedCountry?.flag}</span>
          <span>{selectedCountry?.name[lang]}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentPackages.map((pkg: any) => (
          <div 
            key={pkg.id} 
            className={`relative p-8 rounded-[2.5rem] border-2 transition-all flex flex-col ${
              pkg.recommended 
                ? 'border-blue-500 bg-blue-50/30 ring-8 ring-blue-50' 
                : 'border-slate-100 bg-white shadow-sm'
            }`}
          >
            {pkg.recommended && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                {lang === 'en' ? 'Recommended' : 'موصى به'}
              </div>
            )}
            <h3 className="text-xl font-black text-slate-900 mb-2">{pkg.name[lang]}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-3xl font-black text-blue-600">{getPrice(pkg.priceUSD)}</span>
              <span className="text-sm text-slate-400 font-bold">/{lang === 'en' ? 'mo' : 'شهرياً'}</span>
            </div>
            <div className="space-y-4 mb-8 flex-1">
              {pkg.features[lang].map((feat: string, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-blue-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-600 font-medium leading-tight">{feat}</span>
                </div>
              ))}
            </div>
            <a 
              href={`https://wa.me/201010742430?text=${encodeURIComponent(
                lang === 'en' 
                  ? `Hi, I'm interested in the ${pkg.name.en} package for ${selectedCountry.name.en}` 
                  : `مرحباً، أنا مهتم بباقة ${pkg.name.ar} لسوق ${selectedCountry.name.ar}`
              )}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`w-full py-4 rounded-2xl font-black text-base flex items-center justify-center gap-2 transition-all ${
                pkg.recommended 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-200' 
                  : 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg'
              }`}
            >
              <MessageCircle size={20} />
              {lang === 'en' ? 'Get Started' : 'ابدأ الآن'}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

