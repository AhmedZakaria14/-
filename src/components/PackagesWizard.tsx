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
import { Breadcrumb } from './Breadcrumb';

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
    if (isPage) {
      window.scrollTo(0, 0);
      updateSEO({
        title: lang === 'en' ? 'Pricing Packages | Nashar Hub' : 'باقات الأسعار | نشار هب',
        description: lang === 'en' ? 'Explore our flexible pricing packages for digital marketing and web development services.' : 'استكشف باقات الأسعار المرنة لخدمات التسويق الرقمي وتطوير المواقع.',
        keywords: lang === 'en' ? 'Pricing, Packages, Digital Marketing Cost, Web Development Packages' : 'باقات الأسعار, تكلفة التسويق الرقمي, باقات تصميم المواقع',
        url: 'https://nasharhub.com/packages',
        image: 'https://nasharhub.com/og-image.jpg'
      });
    }
  }, [lang, isPage]);

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
        <div className="max-w-7xl mx-auto px-4">
          {isPage && (
            <div className="mb-4">
              <Breadcrumb 
                lang={lang} 
                items={[{ label: lang === 'en' ? 'Pricing Packages' : 'باقات الأسعار', href: '/packages' }]} 
              />
            </div>
          )}
          <div className="h-20 flex items-center">
            <button 
              onClick={onBack}
              className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-600 shadow-sm"
            >
              {isRTL ? <ArrowRight size={24} /> : <ArrowLeft size={24} />}
            </button>
          </div>
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
            {/* Launch Package */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border-2 border-slate-100 shadow-sm hover:border-blue-500 transition-all flex flex-col">
               <div className="flex items-center justify-between mb-2">
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                   {lang === 'en' ? 'FOR STARTUPS' : 'للمشاريع الناشئة'}
                 </span>
                 <Layout size={20} className="text-slate-400" />
               </div>
               <h3 className="text-2xl font-black text-slate-900 mb-2">
                 {lang === 'en' ? 'Launch Package' : 'باقة الانطلاق'}
               </h3>
               <p className="text-slate-500 font-medium mb-6 text-sm">
                 {lang === 'en' ? 'Quick and effective digital presence to start attracting customers.' : 'حضور رقمي سريع وفعّال لبدء استقطاب العملاء.'}
               </p>
               <div className="mb-6">
                 <div className="flex items-baseline gap-2">
                   <span className="text-4xl font-black text-blue-600">800</span>
                   <span className="text-lg font-bold text-slate-500">{lang === 'en' ? 'SAR' : 'ريال'}</span>
                 </div>
               </div>
               
               <div className="space-y-6 mb-8 flex-1">
                 {[
                   {
                     title: lang === 'en' ? 'Professional Landing Page' : 'صفحة هبوط احترافية',
                     desc: lang === 'en' ? '3 integrated sections: Home, Services, and Contact Us — designed to convert visitors.' : '3 أقسام متكاملة: الرئيسية، الخدمات، وتواصل معنا — مصممة لتحويل الزوار إلى عملاء.'
                   },
                   {
                     title: lang === 'en' ? 'Google Ads Campaign' : 'إعلان ممول على جوجل',
                     desc: lang === 'en' ? 'Campaign setup + 1 month free management with keyword optimization.' : 'إنشاء حملة إعلانية مستهدفة + متابعة لمدة شهر مجاناً مع إعداد الكلمات المفتاحية.'
                   },
                   {
                     title: lang === 'en' ? 'Free Revision' : 'تعديل مجاني',
                     desc: lang === 'en' ? 'One comprehensive revision during the first month (texts, images, or colors).' : 'تعديل واحد شامل خلال الشهر الأول (نصوص، صور، أو ألوان).'
                   },
                   {
                     title: lang === 'en' ? 'Hosting + Domain + SSL' : 'استضافة + دومين + SSL',
                     desc: lang === 'en' ? 'Fast hosting, custom domain, and security certificate for one full year.' : 'استضافة سريعة، دومين خاص، وشهادة أمان للسنة الأولى.'
                   }
                 ].map((feat, i) => (
                   <div key={i} className="flex items-start gap-4">
                     <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                       <CheckCircle2 size={16} className="text-blue-500" />
                     </div>
                     <div className="flex flex-col gap-1">
                       <span className="text-slate-900 font-black text-sm">{feat.title}</span>
                       <span className="text-slate-500 text-xs leading-relaxed font-medium">{feat.desc}</span>
                     </div>
                   </div>
                 ))}
               </div>
               
               <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-6">
                 <p className="text-[11px] text-slate-500 font-bold leading-relaxed italic">
                   {lang === 'en' 
                    ? 'Ideal for freelancers, restaurants, clinics, and projects that need a fast digital presence.' 
                    : 'مثالية لأصحاب المهن الحرة، المطاعم، العيادات، والمشاريع التي تحتاج حضوراً رقمياً سريعاً.'}
                 </p>
               </div>

               <ContactButton lang={lang} packageName={lang === 'en' ? 'Launch Package' : 'باقة الانطلاق'} />
            </div>

            {/* Professional Package */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border-2 border-blue-500 shadow-xl relative flex flex-col transform md:-translate-y-4">
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg whitespace-nowrap">
                  {lang === 'en' ? 'Most Popular' : 'الأكثر طلباً'}
               </div>
               
               <div className="flex items-center justify-between mb-2 mt-2">
                 <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                   {lang === 'en' ? 'FOR BUSINESSES' : 'للشركات والمتاجر'}
                 </span>
                 <Target size={20} className="text-blue-400" />
               </div>

               <h3 className="text-2xl font-black text-slate-900 mb-2">
                 {lang === 'en' ? 'Professional Package' : 'باقة الاحتراف'}
               </h3>
               <p className="text-slate-500 font-medium mb-6 text-sm">
                 {lang === 'en' ? 'Complete website or store with unlimited content and SEO visibility.' : 'موقع أو متجر متكامل بمحتوى غير محدود وظهور في محركات البحث.'}
               </p>
               <div className="mb-6">
                 <div className="flex items-baseline gap-2">
                   <span className="text-4xl font-black text-blue-600">1,500</span>
                   <span className="text-lg font-bold text-slate-500">{lang === 'en' ? 'SAR' : 'ريال'}</span>
                 </div>
               </div>
               
               <div className="space-y-6 mb-8 flex-1">
                 {[
                   {
                     title: lang === 'en' ? 'Multi-page Website or Online Store' : 'موقع أو متجر إلكتروني متعدد الصفحات',
                     desc: lang === 'en' ? 'Full structure (Home, About, Products, Blog, Contact) + easy control panel.' : 'بنية متكاملة (الرئيسية، من نحن، المنتجات، المدونة، تواصل) + لوحة تحكم سهلة.'
                   },
                   {
                     title: lang === 'en' ? '5 Professional SEO Articles' : '5 مقالات SEO احترافية',
                     desc: lang === 'en' ? 'SEO-optimized articles to help your site rank higher in Google search results.' : 'مقالات محسّنة للسيو تساعد موقعك على الظهور في نتائج جوجل الأولى.'
                   },
                   {
                     title: lang === 'en' ? '3 Website Revisions' : '3 تعديلات على الموقع',
                     desc: lang === 'en' ? 'Three separate revision requests during the first month for any content or design changes.' : '3 طلبات تعديل منفصلة خلال الشهر الأول لأي تغييرات في المحتوى أو التصميم.'
                   },
                   {
                     title: lang === 'en' ? 'High Performance Hosting' : 'استضافة عالية الأداء',
                     desc: lang === 'en' ? 'Optimized hosting for stores, custom domain, and SSL protection for 1 year.' : 'استضافة مهيأة للمتاجر، دومين مخصص، وحماية SSL لسنة كاملة.'
                   }
                 ].map((feat, i) => (
                   <div key={i} className="flex items-start gap-4">
                     <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                       <CheckCircle2 size={16} className="text-blue-600" />
                     </div>
                     <div className="flex flex-col gap-1">
                       <span className="text-slate-900 font-black text-sm">{feat.title}</span>
                       <span className="text-slate-500 text-xs leading-relaxed font-medium">{feat.desc}</span>
                     </div>
                   </div>
                 ))}
               </div>

               <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 mb-6">
                 <p className="text-[11px] text-blue-600 font-bold leading-relaxed italic">
                   {lang === 'en' 
                    ? 'Ideal for companies, online stores, brands, and activities needing a strong digital presence.' 
                    : 'مثالية للشركات، المتاجر الإلكترونية، العلامات التجارية، وأي نشاط يحتاج حضوراً رقمياً قوياً.'}
                 </p>
               </div>
               
               <ContactButton lang={lang} packageName={lang === 'en' ? 'Professional Package' : 'باقة الاحتراف'} primary />
            </div>
          </div>
        </section>
        )}

        <div className="max-w-5xl mx-auto mt-8 p-6 bg-slate-100/50 rounded-3xl border border-slate-200 flex items-center gap-4">
           <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-400 shrink-0 shadow-sm">
             <CheckCircle2 size={20} />
           </div>
           <p className="text-xs text-slate-600 font-bold leading-relaxed">
             {lang === 'en' 
               ? 'All packages include: Responsive design for mobile and desktop — Optimized loading speed — Technical support during the warranty period.' 
               : 'جميع الباقات تشمل: تصميم متجاوب للجوال والحاسوب — سرعة تحميل محسّنة — دعم فني خلال فترة الضمان.'}
           </p>
        </div>

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
