import React, { useEffect, useState } from 'react';
import { Language } from '../types';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  MessageCircle,
  Layout,
  Target,
  Search,
  Filter
} from 'lucide-react';
import { updateSEO } from '../utils/seo';

interface PackagesWizardProps {
  lang: Language;
  onBack: () => void;
  isPage?: boolean;
}

type TabType = 'all' | 'websites' | 'ads' | 'seo';

export const PackagesWizard: React.FC<PackagesWizardProps> = ({ lang, onBack, isPage = true }) => {
  const isRTL = lang === 'ar';
  const HeadingTag = isPage ? 'h1' : 'h2';
  const [activeTab, setActiveTab] = useState<TabType>('all');

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

  const tabs: { id: TabType; label: string }[] = [
    { id: 'all', label: lang === 'en' ? 'All Packages' : 'الكل' },
    { id: 'websites', label: lang === 'en' ? 'Websites' : 'المواقع' },
    { id: 'ads', label: lang === 'en' ? 'Ads' : 'الاعلانات' },
    { id: 'seo', label: lang === 'en' ? 'SEO' : 'السيو' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-24 pb-20">
      {/* Header */}
      <header className="bg-transparent">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-600 shadow-sm"
          >
            {isRTL ? <ArrowRight size={24} /> : <ArrowLeft size={24} />}
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <HeadingTag className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            {lang === 'en' ? 'Our Packages' : 'باقات الاعلانات والمواقع'}
          </HeadingTag>
          <p className="text-slate-500 text-lg font-medium mb-10">
            {lang === 'en' ? 'Transparent pricing designed for the Saudi market.' : 'أسعار شفافة لضمان أفضل عائد على استثمارك في السوق السعودي.'}
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-white p-2 rounded-2xl shadow-sm border border-slate-100 max-w-2xl mx-auto">
             <div className="hidden md:flex items-center justify-center w-10 h-10 bg-slate-50 rounded-xl text-slate-400 mr-2 rtl:ml-2 rtl:mr-0">
               <Filter size={20} />
             </div>
             {tabs.map((tab) => (
               <button
                 key={tab.id}
                 onClick={() => setActiveTab(tab.id)}
                 className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all flex-1 md:flex-none min-w-[100px] ${
                   activeTab === tab.id
                     ? 'bg-blue-600 text-white shadow-md'
                     : 'bg-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                 }`}
               >
                 {tab.label}
               </button>
             ))}
          </div>
        </div>

        {/* Websites Packages */}
        {(activeTab === 'all' || activeTab === 'websites') && (
        <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center gap-3 justify-center mb-8">
             <Layout className="text-blue-600" size={32} />
             <h2 className="text-3xl font-black text-slate-800">
               {lang === 'en' ? 'Websites Packages' : 'باقات المواقع'}
             </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Basic Package */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border-2 border-slate-100 shadow-sm hover:border-blue-500 transition-all flex flex-col">
               <h3 className="text-2xl font-black text-slate-900 mb-2">
                 {lang === 'en' ? 'Business Website' : 'الأساسية - موقع الأعمال'}
               </h3>
               <p className="text-slate-500 font-medium mb-6">
                 {lang === 'en' ? 'Everything you need to launch online' : 'كل ما تحتاجه للانطلاق رقمياً'}
               </p>
               <div className="mb-6">
                 <span className="text-sm font-bold text-slate-400 block mb-1">
                   {lang === 'en' ? 'Starts from' : 'تبدأ من'}
                 </span>
                 <div className="flex items-baseline gap-2">
                   <span className="text-4xl font-black text-blue-600">299</span>
                   <span className="text-lg font-bold text-slate-500">{lang === 'en' ? 'SAR / month' : 'ر.س / شهر'}</span>
                 </div>
                 <p className="text-sm text-amber-600 font-bold mt-2 bg-amber-50 inline-block px-3 py-1 rounded-full border border-amber-100">
                   {lang === 'en' ? 'Equals 3,588 SAR annually' : 'يعادل 3,588 ر.س سنوياً'}
                 </p>
               </div>
               
               <div className="space-y-4 mb-8 flex-1">
                 {[
                   lang === 'en' ? 'Full website design (within a week)' : 'تصميم الموقع كامل (خلال أسبوع)',
                   lang === 'en' ? 'All operational hosting resources' : 'جميع موارد الاستضافة التشغيلية',
                   lang === 'en' ? 'Custom professional domain' : 'دومين احترافي مخصص',
                   lang === 'en' ? 'Professional Email (1 Year)' : 'بريد إلكتروني احترافي (سنة)',
                   lang === 'en' ? 'Continuous technical support' : 'دعم فني مستمر',
                   lang === 'en' ? 'Unlimited code modifications' : 'تعديلات على الكود غير محدودة'
                 ].map((feat, i) => (
                   <div key={i} className="flex items-start gap-3">
                     <CheckCircle2 size={20} className="text-blue-500 mt-0.5 shrink-0" />
                     <span className="text-slate-700 font-medium leading-relaxed">{feat}</span>
                   </div>
                 ))}
               </div>
               
               <ContactButton lang={lang} packageName={lang === 'en' ? 'Business Website' : 'الباقة الأساسية للمواقع'} />
            </div>

            {/* Pro Package */}
            <div className="bg-blue-50/50 rounded-[2.5rem] p-8 md:p-10 border-2 border-blue-500 shadow-lg relative flex flex-col transform md:-translate-y-4">
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-blue-600 text-white text-[12px] font-black uppercase tracking-widest rounded-full shadow-lg whitespace-nowrap">
                  {lang === 'en' ? 'Most Popular' : 'الأكثر طلباً'}
               </div>
               
               <h3 className="text-2xl font-black text-slate-900 mb-2 mt-2">
                 {lang === 'en' ? 'Website + SEO & Ads' : 'موقع + SEO وإعلانات'}
               </h3>
               <p className="text-slate-500 font-medium mb-6">
                 {lang === 'en' ? 'Complete Digital Marketing Bundle' : 'حزمة التسويق الرقمي المتكاملة'}
               </p>
               <div className="mb-6">
                 <span className="text-sm font-bold text-slate-400 block mb-1">
                   {lang === 'en' ? 'Starts from' : 'تبدأ من'}
                 </span>
                 <div className="flex items-baseline gap-2">
                   <span className="text-4xl font-black text-blue-600">799</span>
                   <span className="text-lg font-bold text-slate-500">{lang === 'en' ? 'SAR / month' : 'ر.س / شهر'}</span>
                 </div>
                 <p className="text-sm text-green-600 font-bold mt-2 bg-green-50/80 inline-block px-3 py-1 rounded-full border border-green-100">
                   {lang === 'en' ? 'Equals 9,588 SAR annually' : 'يعادل 9,588 ر.س سنوياً'}
                 </p>
               </div>
               
               <div className="space-y-4 mb-8 flex-1">
                 {[
                   lang === 'en' ? 'All Basic Package Features' : 'كل مزايا الباقة الأساسية',
                   lang === 'en' ? 'Monthly SEO Optimization' : 'تحسين SEO شهري',
                   lang === 'en' ? 'Google Business Profile Management' : 'إدارة Google Business Profile',
                   lang === 'en' ? 'Paid Ads (Campaign Management)' : 'إعلانات مدفوعة (إدارة الحملات)',
                   lang === 'en' ? 'Detailed Monthly Performance Reports' : 'تقارير أداء تفصيلية شهرية',
                   lang === 'en' ? 'Monthly Marketing Consultation' : 'استشارة تسويقية شهرية'
                 ].map((feat, i) => (
                   <div key={i} className="flex items-start gap-3">
                     <CheckCircle2 size={20} className="text-blue-600 mt-0.5 shrink-0" />
                     <span className="text-slate-800 font-bold leading-relaxed">{feat}</span>
                   </div>
                 ))}
               </div>
               
               <ContactButton lang={lang} packageName={lang === 'en' ? 'Website + SEO & Ads' : 'موقع + SEO وإعلانات'} primary />
            </div>
          </div>
        </section>
        )}

        {/* Marketing Packages Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto pt-8 border-t border-slate-200 mt-16 ${activeTab === 'all' || activeTab === 'ads' || activeTab === 'seo' ? 'animate-in fade-in slide-in-from-bottom-4 duration-500' : 'hidden'}`}>
          
          {/* Ads Package */}
          {(activeTab === 'all' || activeTab === 'ads') && (
          <section className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-rose-400 transition-colors md:col-span-1">
            <div>
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500">
                   <Target size={24} />
                 </div>
                 <h2 className="text-2xl font-black text-slate-800">
                   {lang === 'en' ? 'Ads Packages' : 'باقات الاعلانات'}
                 </h2>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-black text-slate-900 mb-2">
                  {lang === 'en' ? 'Google Ads Campaign' : 'حملة إعلانية علي جوجل'}
                </h3>
                <div className="flex items-baseline gap-2 mt-4 text-slate-600 font-medium">
                   <span className="text-3xl font-black text-slate-900">500</span>
                   <span className="text-base">{lang === 'en' ? 'SAR / month' : 'ريال شهريا'}</span>
                 </div>
              </div>
            </div>
            <ContactButton lang={lang} packageName={lang === 'en' ? 'Google Ads Campaign' : 'حملة إعلانية علي جوجل'} />
          </section>
          )}

          {/* SEO Package */}
          {(activeTab === 'all' || activeTab === 'seo') && (
          <section className={`bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-emerald-400 transition-colors ${activeTab === 'seo' ? 'md:col-start-1' : ''}`}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500">
                   <Search size={24} />
                 </div>
                 <h2 className="text-2xl font-black text-slate-800">
                   {lang === 'en' ? 'SEO Packages' : 'باقة السيو'}
                 </h2>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-black text-slate-900 mb-2">
                  {lang === 'en' ? 'Search Engine Optimization' : 'السيو'}
                </h3>
                <div className="mt-4">
                  <span className="text-sm font-bold text-slate-400 block mb-1">
                     {lang === 'en' ? 'Starts from' : 'يبدأ من'}
                   </span>
                  <div className="flex items-baseline gap-2 text-slate-600 font-medium">
                     <span className="text-3xl font-black text-slate-900">700</span>
                     <span className="text-base">{lang === 'en' ? 'SAR / month' : 'ريال شهريا'}</span>
                   </div>
                </div>
              </div>
            </div>
            <ContactButton lang={lang} packageName={lang === 'en' ? 'SEO Package' : 'باقة السيو'} />
          </section>
          )}

        </div>
      </main>
    </div>
  );
};

const ContactButton = ({ lang, packageName, primary = false }: { lang: Language; packageName: string; primary?: boolean }) => (
  <a 
    href={`https://wa.me/201010742430?text=${encodeURIComponent(
      lang === 'en' 
        ? `Hi, I'm interested in the ${packageName} package.` 
        : `مرحباً، أنا مهتم بـ ${packageName}.`
    )}`} 
    target="_blank" 
    rel="noopener noreferrer" 
    className={`w-full py-4 rounded-2xl font-black text-base flex items-center justify-center gap-2 transition-all mt-6 ${
      primary 
        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-200 hover:-translate-y-1' 
        : 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl hover:-translate-y-1'
    }`}
  >
    <MessageCircle size={20} />
    {lang === 'en' ? 'Contact Us' : 'تواصل معنا'}
  </a>
);
