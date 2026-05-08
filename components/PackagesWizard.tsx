
import React, { useState, useEffect } from 'react';
import { Language } from '@/types';
import { 
  ArrowRight, ArrowLeft, CheckCircle2, Zap, Layout, 
  Globe, Target, Briefcase, ShoppingBag, Building2, 
  Cpu, MessageCircle, Star, Package, ChevronRight, Search, PenTool 
} from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

interface PackagesWizardProps {
  lang: Language;
  onBack: () => void;
}

// Relaxed type to string to support many currencies
type Currency = string;

interface UserData {
  country: string;
  currency: Currency;
  industry: string;
  goal: string;
}

export const PackagesWizard: React.FC<PackagesWizardProps> = ({ lang, onBack }) => {
  useSEO({
    title: lang === 'en' ? 'Digital Marketing Packages & Pricing | Nashar Hub' : 'أفضل باقات وأسعار التسويق الإلكتروني وتصميم المواقع | نشار هب',
    description: lang === 'en' ? 'Discover our transparent, ROI-focused digital marketing packages tailored for your industry and region. Get started with Nashar Hub today.' : 'اكتشف أفضل أسعار وباقات التسويق الرقمي، إدارة الحملات الإعلانية الممولة، وتصميم المواقع والمتاجر الإلكترونية. باقات تسويقية مخصصة تناسب ميزانيتك وتضمن نمو مبيعاتك في السعودية، مصر، والخليج.',
    keywords: lang === 'en' ? 'Digital Marketing Packages, SEO Pricing, PPC Packages, Social Media Management Pricing, Web Development Cost' : 'باقات التسويق الالكتروني, اسعار التسويق الرقمي, تكلفة تصميم موقع الكتروني, اسعار ادارة الحملات الاعلانية, باقات السيو SEO, اسعار اعلانات جوجل, باقات السوشيال ميديا, عروض التسويق الرقمي, باقات تصميم المتاجر',
  });

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    country: '',
    currency: 'USD',
    industry: '',
    goal: ''
  });
  
  // Custom Industry State
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customIndustry, setCustomIndustry] = useState('');

  const [activeTab, setActiveTab] = useState<'ads' | 'ads_web'>('ads');

  const isRTL = lang === 'ar';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Pricing Multipliers (Approximate for Agency Pricing)
  const multipliers: Record<string, number> = {
    'USD': 1,
    'SAR': 3.75,
    'AED': 3.67,
    'EGP': 50,
    'QAR': 3.64,
    'KWD': 0.31,
    'BHD': 0.38,
    'OMR': 0.38,
    'JOD': 0.71,
    'MAD': 10,
    'DZD': 134,
    'TND': 3.1,
    'LYD': 4.8,
    'IQD': 1310
  };

  const countries = [
    { name: { en: 'Saudi Arabia', ar: 'السعودية' }, code: 'SAR', flag: '🇸🇦' },
    { name: { en: 'UAE', ar: 'الإمارات' }, code: 'AED', flag: '🇦🇪' },
    { name: { en: 'Egypt', ar: 'مصر' }, code: 'EGP', flag: '🇪🇬' },
    { name: { en: 'Kuwait', ar: 'الكويت' }, code: 'KWD', flag: '🇰🇼' },
    { name: { en: 'Qatar', ar: 'قطر' }, code: 'QAR', flag: '🇶🇦' },
    { name: { en: 'Bahrain', ar: 'البحرين' }, code: 'BHD', flag: '🇧🇭' },
    { name: { en: 'Oman', ar: 'عمان' }, code: 'OMR', flag: '🇴🇲' },
    { name: { en: 'Jordan', ar: 'الأردن' }, code: 'JOD', flag: '🇯🇴' },
    { name: { en: 'Iraq', ar: 'العراق' }, code: 'USD', flag: '🇮🇶' }, // Usually priced in USD for agencies
    { name: { en: 'Morocco', ar: 'المغرب' }, code: 'MAD', flag: '🇲🇦' },
    { name: { en: 'Algeria', ar: 'الجزائر' }, code: 'DZD', flag: '🇩🇿' },
    { name: { en: 'Tunisia', ar: 'تونس' }, code: 'TND', flag: '🇹🇳' },
    { name: { en: 'Libya', ar: 'ليبيا' }, code: 'LYD', flag: '🇱🇾' },
    { name: { en: 'Palestine', ar: 'فلسطين' }, code: 'USD', flag: '🇵🇸' },
    { name: { en: 'Lebanon', ar: 'لبنان' }, code: 'USD', flag: '🇱🇧' },
    { name: { en: 'Yemen', ar: 'اليمن' }, code: 'USD', flag: '🇾🇪' },
    { name: { en: 'Sudan', ar: 'السودان' }, code: 'USD', flag: '🇸🇩' },
    { name: { en: 'Syria', ar: 'سوريا' }, code: 'USD', flag: '🇸🇾' },
    { name: { en: 'Rest of World', ar: 'دولة أخرى' }, code: 'USD', flag: '🌍' },
  ];

  const formatPrice = (basePriceUSD: number) => {
    const multiplier = multipliers[userData.currency] || 1;
    const price = Math.round(basePriceUSD * multiplier);
    return new Intl.NumberFormat(lang === 'ar' ? 'ar-EG' : 'en-US').format(price);
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(4);
      }, 1500);
    }
  };

  const selectOption = (key: keyof UserData, value: any) => {
    setUserData(prev => ({ ...prev, [key]: value }));
  };

  const handleCustomIndustrySubmit = () => {
    if (customIndustry.trim()) {
      selectOption('industry', customIndustry);
      handleNext();
    }
  };

  // --- PACKAGES DATA ---
  const packages = {
    ads: [
      {
        id: 'starter',
        name: { en: 'Starter Growth', ar: 'بداية النمو' },
        priceUSD: 500,
        platforms: ['Meta (FB/IG)'],
        features: {
          en: ['1 Campaign', '4 Creative Designs', 'Weekly Reporting', 'Pixel Setup'],
          ar: ['حملة إعلانية واحدة', '4 تصاميم إبداعية', 'تقارير أسبوعية', 'ربط البيكسل']
        },
        recommended: false
      },
      {
        id: 'pro',
        name: { en: 'Market Leader', ar: 'قائد السوق' },
        priceUSD: 1000,
        platforms: ['Meta', 'Snapchat OR TikTok'],
        features: {
          en: ['3 Campaigns', '8 Creative Designs', 'Advanced Targeting', 'Copywriting', '24/7 Support'],
          ar: ['3 حملات إعلانية', '8 تصاميم احترافية', 'استهداف متقدم', 'كتابة محتوى إعلاني', 'دعم فني 24/7']
        },
        recommended: true
      },
      {
        id: 'dominate',
        name: { en: 'Domination', ar: 'السيطرة الكاملة' },
        priceUSD: 1800,
        platforms: ['Meta', 'Google', 'TikTok/Snap'],
        features: {
          en: ['Unlimited Campaigns', 'Video Production (Reels)', 'Full Funnel Strategy', 'Dedicated Account Manager'],
          ar: ['حملات غير محدودة', 'إنتاج فيديو (ريلز)', 'استراتيجية قمع مبيعات', 'مدير حساب خاص']
        },
        recommended: false
      }
    ],
    ads_web: [
      {
        id: 'launchpad',
        name: { en: 'Business Launchpad', ar: 'انطلاق الأعمال' },
        priceUSD: 1200,
        platforms: ['Landing Page', 'Meta Ads'],
        features: {
          en: ['High Converting Landing Page', '1 Month Ads Management', 'Domain & Hosting', 'Lead Form Integration'],
          ar: ['صفحة هبوط عالية التحويل', 'إدارة إعلانات لمدة شهر', 'دومين واستضافة مجانية', 'ربط نماذج العملاء']
        },
        recommended: false
      },
      {
        id: 'scale',
        name: { en: 'E-commerce Scale', ar: 'توسع المتاجر' },
        priceUSD: 2500,
        platforms: ['Full E-commerce Store', 'Multi-Platform Ads'],
        features: {
          en: ['Professional Online Store', 'Payment Gateway Setup', '2 Months Ads Management', 'SEO Setup', 'Products Upload'],
          ar: ['متجر إلكتروني متكامل', 'ربط بوابات الدفع', 'إدارة إعلانات شهرين', 'تهيئة SEO', 'رفع المنتجات']
        },
        recommended: true
      }
    ]
  };

  // --- RENDER STEPS ---

  // Step 1: Country & Currency
  if (step === 1) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col animate-fadeIn">
        <Header lang={lang} step={1} onBack={onBack} />
        <div className="flex-1 px-4 py-8 flex flex-col max-w-2xl mx-auto w-full">
           <div className="text-center mb-8">
             <h2 className="text-3xl font-black text-slate-900 mb-2">{lang === 'en' ? 'Where is your business?' : 'أين يقع نشاطك التجاري؟'}</h2>
             <p className="text-slate-500">{lang === 'en' ? 'We customize prices based on your region.' : 'نخصص الأسعار والعروض بناءً على منطقتك.'}</p>
           </div>
           
           <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {countries.map((c) => (
                <button 
                  key={c.name.en}
                  onClick={() => { selectOption('country', lang === 'en' ? c.name.en : c.name.ar); selectOption('currency', c.code); handleNext(); }}
                  className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:border-primary hover:shadow-md transition-all flex flex-col items-center justify-center gap-2 group text-center"
                >
                    <span className="text-4xl filter drop-shadow-sm group-hover:scale-110 transition-transform">{c.flag}</span>
                    <span className="block font-bold text-slate-900 text-sm group-hover:text-primary transition-colors">{c.name[lang]}</span>
                </button>
              ))}
           </div>
        </div>
      </div>
    );
  }

  // Step 2: Industry
  if (step === 2) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col animate-fadeIn">
        <Header lang={lang} step={2} onBack={() => {
           if (showCustomInput) {
             setShowCustomInput(false);
           } else {
             setStep(1);
           }
        }} />
        <div className="flex-1 px-6 py-8 flex flex-col justify-center max-w-lg mx-auto w-full">
           <h2 className="text-3xl font-black text-slate-900 mb-2 text-center">{lang === 'en' ? 'What is your industry?' : 'ما هو مجال عملك؟'}</h2>
           <p className="text-slate-500 mb-8 text-center">{lang === 'en' ? 'To assign the best account manager.' : 'لنقوم بتعيين مدير الحساب الخبير في مجالك.'}</p>
           
           {showCustomInput ? (
             <div className="animate-fadeIn w-full bg-white p-6 rounded-2xl border border-slate-200 shadow-lg">
                <label className="block text-sm font-bold text-slate-700 mb-3">
                   {lang === 'en' ? 'Please specify your industry:' : 'يرجى كتابة مجال عملك:'}
                </label>
                <div className="flex items-center bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 transition-all mb-6">
                   <PenTool size={20} className="text-slate-400 shrink-0" />
                   <input 
                      type="text" 
                      autoFocus
                      value={customIndustry}
                      onChange={(e) => setCustomIndustry(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleCustomIndustrySubmit()}
                      placeholder={lang === 'en' ? 'e.g., Dental Clinic, Restaurant...' : 'مثلاً: عيادة أسنان، مطعم، مقاولات...'}
                      className="w-full bg-transparent border-none outline-none px-3 font-bold text-slate-900 placeholder:font-normal"
                   />
                </div>
                <button 
                   onClick={handleCustomIndustrySubmit}
                   disabled={!customIndustry.trim()}
                   className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                >
                   {lang === 'en' ? 'Continue' : 'متابعة'}
                </button>
             </div>
           ) : (
             <div className="grid grid-cols-1 gap-4">
                {[
                  { id: 'ecom', label: { en: 'E-commerce', ar: 'متجر إلكتروني' }, icon: ShoppingBag },
                  { id: 'realestate', label: { en: 'Real Estate', ar: 'عقارات وهندسة' }, icon: Building2 },
                  { id: 'services', label: { en: 'Services & B2B', ar: 'خدمات وشركات' }, icon: Briefcase },
                  { id: 'other', label: { en: 'Other', ar: 'مجال آخر (تخصيص)' }, icon: Target },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button 
                      key={item.id}
                      onClick={() => { 
                         if (item.id === 'other') {
                            setShowCustomInput(true);
                         } else {
                            selectOption('industry', item.label[lang]); 
                            handleNext(); 
                         }
                      }}
                      className="w-full bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-secondary hover:bg-secondary/5 transition-all flex items-center gap-4 group text-left"
                    >
                      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-500 group-hover:bg-secondary group-hover:text-white transition-colors shrink-0">
                        <Icon size={24} />
                      </div>
                      <span className="font-bold text-lg text-slate-900">{item.label[lang]}</span>
                      {item.id === 'other' && <ArrowLeft className={`ml-auto text-slate-300 group-hover:text-secondary transition-colors ${!isRTL && 'rotate-180'}`} size={20} />}
                    </button>
                  );
                })}
             </div>
           )}
        </div>
      </div>
    );
  }

  // Step 3: Goal
  if (step === 3) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col animate-fadeIn">
        <Header lang={lang} step={3} onBack={() => setStep(2)} />
        <div className="flex-1 px-6 py-8 flex flex-col justify-center max-w-lg mx-auto w-full">
           <h2 className="text-3xl font-black text-slate-900 mb-2 text-center">{lang === 'en' ? 'What is your main goal?' : 'ما هو هدفك الرئيسي؟'}</h2>
           <p className="text-slate-500 mb-8 text-center">{lang === 'en' ? 'We optimize strategies based on this.' : 'سنقوم ببناء الاستراتيجية بناءً على هذا الهدف.'}</p>
           
           <div className="space-y-4">
              {[
                { id: 'sales', label: { en: 'Increase Sales / Orders', ar: 'زيادة المبيعات والطلبات' }, desc: {en: 'Focus on ROAS', ar: 'التركيز على العائد على الإنفاق'} },
                { id: 'leads', label: { en: 'Get More Leads', ar: 'جلب عملاء محتملين' }, desc: {en: 'Focus on Quality Leads', ar: 'التركيز على جودة البيانات'} },
                { id: 'brand', label: { en: 'Brand Awareness', ar: 'الوعي بالعلامة التجارية' }, desc: {en: 'Focus on Reach', ar: 'التركيز على الوصول والانتشار'} },
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => { selectOption('goal', item.id); handleNext(); }}
                  className="w-full bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-primary hover:shadow-lg transition-all text-left group"
                >
                  <div className="flex justify-between items-center mb-1">
                     <span className="font-bold text-lg text-slate-900 group-hover:text-primary">{item.label[lang]}</span>
                     <CheckCircle2 size={20} className="text-slate-200 group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-sm text-slate-400 font-medium">{item.desc[lang]}</span>
                </button>
              ))}
           </div>
        </div>
      </div>
    );
  }

  // Loading Screen
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center animate-fadeIn">
         <div className="relative w-24 h-24 mb-8">
            <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
               <Cpu size={32} className="text-primary animate-pulse" />
            </div>
         </div>
         <h2 className="text-2xl font-black text-slate-900 mb-2">
            {lang === 'en' ? 'Analyzing your needs...' : 'جاري تحليل متطلباتك...'}
         </h2>
         <p className="text-slate-500 text-sm max-w-xs mx-auto">
            {lang === 'en' ? 'Matching your industry with our best performing strategies.' : 'نقوم بمطابقة مجالك مع أفضل الاستراتيجيات الناجحة لدينا.'}
         </p>
      </div>
    );
  }

  // Step 4: Results (Packages)
  return (
    <div className="min-h-screen bg-slate-50 pb-24 animate-fadeIn">
      {/* Results Header */}
      <div className="bg-primary pt-12 pb-16 px-6 rounded-b-[2.5rem] shadow-xl relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]"></div>
         <div className="relative z-10">
            <button onClick={onBack} className="absolute top-0 left-6 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors">
               <ArrowLeft size={20} className={isRTL ? 'rotate-180' : ''} />
            </button>
            <div className="text-center mt-4">
               <div className="flex justify-center gap-2 mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold border border-white/20">
                     <Globe size={12} />
                     <span>{userData.country}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary-light text-xs font-bold border border-secondary/30">
                     <Target size={12} />
                     <span className="max-w-[150px] truncate">{userData.industry}</span>
                  </div>
               </div>
               <h2 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight">
                  {lang === 'en' ? `Recommended for ${userData.industry}` : `الباقة الموصى بها لـ ${userData.industry}`}
               </h2>
               <p className="text-blue-100 text-sm opacity-90">
                  {lang === 'en' ? 'Based on your goal to ' : 'بناءً على هدفك في '}
                  <span className="font-bold text-white underline decoration-secondary">{userData.goal === 'sales' ? (lang === 'en' ? 'increase sales' : 'زيادة المبيعات') : (lang === 'en' ? 'get leads' : 'جلب العملاء')}</span>
               </p>
            </div>
         </div>
      </div>

      {/* Tabs */}
      <div className="px-6 -mt-8 relative z-20">
         <div className="bg-white p-1.5 rounded-2xl shadow-lg border border-slate-100 flex max-w-md mx-auto">
            <button 
              onClick={() => setActiveTab('ads')}
              className={`flex-1 py-3 rounded-xl text-sm font-black transition-all flex items-center justify-center gap-2 ${activeTab === 'ads' ? 'bg-primary text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
            >
               <Zap size={16} />
               {lang === 'en' ? 'Ads Only' : 'إعلانات فقط'}
            </button>
            <button 
              onClick={() => setActiveTab('ads_web')}
              className={`flex-1 py-3 rounded-xl text-sm font-black transition-all flex items-center justify-center gap-2 ${activeTab === 'ads_web' ? 'bg-primary text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
            >
               <Layout size={16} />
               {lang === 'en' ? 'Ads + Website' : 'موقع + إعلانات'}
            </button>
         </div>
      </div>

      {/* Packages List */}
      <div className="px-6 mt-8 space-y-6 max-w-xl mx-auto">
         {packages[activeTab].map((pkg) => (
           <div key={pkg.id} className={`bg-white rounded-[2rem] p-6 border-2 transition-all relative overflow-hidden ${pkg.recommended ? 'border-secondary shadow-xl shadow-secondary/10' : 'border-slate-100 shadow-sm'}`}>
              
              {pkg.recommended && (
                <div className="absolute top-0 right-0 bg-secondary text-white text-[10px] font-black px-4 py-1.5 rounded-bl-2xl">
                   {lang === 'en' ? 'BEST VALUE' : 'الأكثر طلباً'}
                </div>
              )}

              <div className="mb-6">
                 <h3 className="text-xl font-black text-slate-900 mb-1">{pkg.name[lang]}</h3>
                 <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.platforms.map((p, i) => (
                       <span key={i} className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded-md">{p}</span>
                    ))}
                 </div>
                 <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold text-slate-400">{userData.currency}</span>
                    <span className="text-4xl font-black text-primary">{formatPrice(pkg.priceUSD)}</span>
                    <span className="text-xs text-slate-400">{lang === 'en' ? '/month' : '/شهرياً'}</span>
                 </div>
              </div>

              <div className="space-y-3 mb-8">
                 {pkg.features[lang].map((feat: string, i: number) => (
                   <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                         <CheckCircle2 size={12} />
                      </div>
                      <span className="text-sm font-medium text-slate-600">{feat}</span>
                   </div>
                 ))}
              </div>

              <a 
                href={`https://wa.me/201010742430?text=${encodeURIComponent(lang === 'en' 
                  ? `Hi, I'm interested in the "${pkg.name.en}" package for ${userData.country}. Industry: ${userData.industry}` 
                  : `مرحباً، أنا مهتم بباقة "${pkg.name.ar}" لدولة ${userData.country}. المجال: ${userData.industry}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-black flex items-center justify-center gap-2 transition-transform active:scale-95 ${pkg.recommended ? 'bg-secondary text-white shadow-lg shadow-secondary/30' : 'bg-slate-900 text-white'}`}
              >
                 <MessageCircle size={20} />
                 {lang === 'en' ? 'Get Started' : 'اشترك الآن'}
              </a>

           </div>
         ))}
         
         <p className="text-center text-xs text-slate-400 font-medium px-4 leading-relaxed">
            {lang === 'en' 
              ? 'Prices may vary slightly based on specific custom requirements discussed during consultation.' 
              : 'الأسعار قد تختلف قليلاً بناءً على المتطلبات الخاصة التي سيتم مناقشتها أثناء الاستشارة.'}
         </p>
      </div>
    </div>
  );
};

// Simple Header for Wizard Steps
const Header = ({ lang, step, onBack }: { lang: Language, step: number, onBack: () => void }) => {
  const isRTL = lang === 'ar';
  return (
    <div className="px-6 pt-12 pb-4 flex items-center justify-between max-w-2xl mx-auto w-full">
       <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-slate-200 transition-colors">
          <ArrowLeft size={24} className={`text-slate-900 ${isRTL ? 'rotate-180' : ''}`} />
       </button>
       <div className="flex gap-2">
          {[1, 2, 3].map(i => (
             <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i <= step ? 'w-8 bg-primary' : 'w-2 bg-slate-200'}`}></div>
          ))}
       </div>
    </div>
  );
};
