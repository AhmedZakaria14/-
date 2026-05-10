import React, { useState, Suspense, lazy } from 'react';
import { Language } from '../types';
import { Layout, MapPin, Target, Sparkles, ExternalLink, Search } from 'lucide-react';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Lazy load a wrapper component for Lightbox
const LightboxWrapper = lazy(() => import('./LightboxWrapper'));

interface PortfolioProps {
  lang: Language;
  isPage?: boolean;
}

type Category = 'all' | 'websites' | 'maps' | 'ads';

export const Portfolio: React.FC<PortfolioProps> = ({ lang, isPage = false }) => {
  const [activeTab, setActiveTab] = useState<Category>('all');
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const isRTL = lang === 'ar';
  const HeadingTag = isPage ? 'h1' : 'h2';
  
  const categories = [
    { id: 'all', label: { en: 'All Work', ar: 'الكل' }, icon: Sparkles },
    { id: 'websites', label: { en: 'Websites & Stores', ar: 'المواقع والمتاجر' }, icon: Layout },
    { id: 'maps', label: { en: 'Google Maps', ar: 'خرائط جوجل' }, icon: MapPin },
    { id: 'ads', label: { en: 'Google Ads', ar: 'إعلانات جوجل' }, icon: Target },
  ];

  const portfolioItems = [
    {
      id: 1,
      category: 'websites',
      title: { en: 'Napoli Ovens - Web & SEO', ar: 'أفران نابولي - موقع وسيو' },
      description: { en: 'Achieved #1 ranking for stone pizza ovens in Riyadh search results.', ar: 'تصدر النتيجة الأولى لأفران البيتزا الحجرية في نتائج بحث الرياض.' },
      image: '/napoli.jpg',
    },
    {
      id: 2,
      category: 'websites',
      title: { en: 'Sedar Al-Shati - Web Presence', ar: 'سيدار الشاطئ - تواجد رقمي' },
      description: { en: 'Optimized Google Business Profile and web visibility for curtains and decor in Jeddah.', ar: 'تحسين ملف جوجل التجاري والظهور الرقمي لخدمات الستائر والديكور في مدينة جدة.' },
      image: '/sedar.jpg',
    },
    {
      id: 3,
      category: 'websites',
      title: { en: 'Gorilla Egypt - Kuwait Site', ar: 'فرقة الغوريلا - موقع الكويت' },
      description: { en: 'Professional website and search optimization for event services in Kuwait.', ar: 'موقع احترافي وتحسين نتائج البحث لخدمات الحفلات والمناسبات في الكويت.' },
      image: '/gorilla.jpg',
    },
    {
      id: 4,
      category: 'ads',
      title: { en: 'Google Search Ads - Blacksmith', ar: 'إعلانات جوجل - حداد جدة' },
      description: { en: 'Google Search Ads campaign for mobile blacksmith services in Jeddah.', ar: 'حملة إعلانات شبكة البحث لخدمات حداد متنقل في جدة.' },
      image: '/ads-blacksmith.jpg',
    },
    {
      id: 5,
      category: 'ads',
      title: { en: 'Google Search Ads - Carpenter', ar: 'إعلانات جوجل - نجار مكة' },
      description: { en: 'Targeted Google Ads for furniture maintenance and carpentry in Makkah.', ar: 'إعلانات جوجل مستهدفة لصيانة الأثاث وأعمال النجارة في مكة المكرمة.' },
      image: '/ads-carpenter.jpg',
    },
    {
      id: 6,
      category: 'ads',
      title: { en: 'Google Search Ads - Painter', ar: 'إعلانات جوجل - نقاش دبي' },
      description: { en: 'Lead generation campaign for professional painting services in Dubai and Sharjah.', ar: 'حملة توليد عملاء لخدمات النقاشة والدهانات الاحترافية في دبي والشارقة.' },
      image: '/ads-painter.jpg',
    },
    {
      id: 7,
      category: 'ads',
      title: { en: 'Google Search Ads - Tents', ar: 'إعلانات جوجل - خيام المدينة' },
      description: { en: 'Google Ads for event tent rentals and organization in Madinah.', ar: 'إعلانات جوجل لتأجير خيام المناسبات وتنظيم الفعاليات في المدينة المنورة.' },
      image: '/ads-tents.jpg',
    },
    {
      id: 8,
      category: 'ads',
      title: { en: 'Google Search Ads - Home Care', ar: 'إعلانات جوجل - رعاية منزلية' },
      description: { en: 'Search ads for elderly home care and nursing services in Jeddah.', ar: 'إعلانات البحث لخدمات الرعاية المنزلية والتمريض لكبار السن في جدة.' },
      image: '/ads-homecare.jpg',
    },
    {
      id: 9,
      category: 'ads',
      title: { en: 'Google Search Ads - AC Cleaning', ar: 'إعلانات جوجل - غسيل مكيفات' },
      description: { en: 'High-intent search campaign for split AC cleaning and maintenance.', ar: 'حملة بحث عالية النية لخدمات غسيل وصيانة المكيفات السبلت.' },
      image: '/ads-ac.jpg',
    },
    {
      id: 10,
      category: 'ads',
      title: { en: 'Google Search Ads - Electrician', ar: 'إعلانات جوجل - كهربائي سيارات' },
      description: { en: 'Google Ads for mobile car electrician and battery services in Makkah.', ar: 'إعلانات جوجل لخدمات كهربائي السيارات المتنقل والبطاريات في مكة.' },
      image: '/ads-electrician.jpg',
    },
  ];

  const filteredItems = activeTab === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

  const slides = filteredItems.map(item => ({
    src: item.image,
    title: item.title[lang],
    description: item.description[lang],
  }));

  const openLightbox = (idx: number) => {
    setIndex(idx);
    setOpen(true);
  };

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary font-bold text-sm mb-6 border border-primary/10">
            <Sparkles size={16} />
            {lang === 'en' ? 'Client Results' : 'نتائج العملاء'}
          </div>
          <HeadingTag className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            {lang === 'en' ? 'Some of our ' : 'بعض نتائج '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {lang === 'en' ? 'Clients\' Results' : 'عملاءنا'}
            </span>
          </HeadingTag>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            {lang === 'en' 
              ? 'Explore our recent success stories across web development, local SEO, and paid advertising. Each project represents a unique challenge we\'ve overcome through strategic thinking, creative design, and technical excellence. We don\'t just build websites; we build engines for growth.' 
              : 'اكتشف قصص نجاحنا الأخيرة في تطوير المواقع، تحسين خرائط جوجل، والحملات الإعلانية الممولة. يمثل كل مشروع تحدياً فريداً تغلبا عليه من خلال التفكير الاستراتيجي والتصميم الإبداعي والتميز التقني. نحن لا نبني مواقع ويب فحسب؛ نحن نبني محركات للنمو.'}
          </p>
          <p className="text-base text-slate-500 leading-relaxed">
            {lang === 'en'
              ? 'These results showcase our ability to deliver high-quality outcomes across various industries. From local businesses in Saudi Arabia to international brands, we apply the same level of dedication and expertise to every client. Our focus is always on creating value and driving measurable outcomes that help our clients stay ahead of the competition.'
              : 'تعرض هذه النتائج قدرتنا على تقديم جودة عالية في مختلف الصناعات. من الشركات المحلية في المملكة العربية السعودية إلى العلامات التجارية الدولية، نطبق نفس المستوى من التفاني والخبرة لكل عميل. تركيزنا دائمًا على خلق القيمة وتحقيق نتائج ملموسة تساعد عملائنا على البقاء في صدارة المنافسة.'}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id as Category)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                  isActive 
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-105' 
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-secondary' : 'text-slate-400'} />
                {category.label[lang]}
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <div 
              key={item.id} 
              className="group relative rounded-3xl overflow-hidden bg-slate-100 aspect-[4/3] shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => openLightbox(idx)}
            >
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.title[lang]} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className={`transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <span className="inline-block px-3 py-1 bg-secondary text-white text-xs font-bold rounded-full mb-3">
                    {categories.find(c => c.id === item.category)?.label[lang]}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title[lang]}</h3>
                  <p className="text-slate-300 text-sm mb-4 line-clamp-2">{item.description[lang]}</p>
                  
                  <div className="inline-flex items-center gap-2 text-white font-bold text-sm hover:text-secondary transition-colors">
                    <Search size={16} />
                    {lang === 'en' ? 'View Full Image' : 'عرض الصورة كاملة'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {open && (
          <Suspense fallback={null}>
            <LightboxWrapper
              index={index}
              open={open}
              close={() => setOpen(false)}
              slides={slides}
            />
          </Suspense>
        )}

      </div>
    </section>
  );
};
