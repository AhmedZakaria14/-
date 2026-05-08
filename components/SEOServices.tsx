import React, { useEffect } from 'react';
import { Language } from '@/types';
import { ArrowLeft, ArrowRight, Search, BarChart3, Globe, Zap, CheckCircle2, TrendingUp, Award, Target } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';

interface SEOServicesProps {
  lang: Language;
  onBack: () => void;
}

export const SEOServices: React.FC<SEOServicesProps> = ({ lang, onBack }) => {
  const isRTL = lang === 'ar';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: lang === 'en' ? 'Advanced SEO Services & Organic Growth | Nashar Hub' : 'أفضل شركة سيو وتحسين محركات البحث في السعودية | الرياض، جدة، الدمام',
    description: lang === 'en' ? 'Dominate search rankings with our comprehensive SEO strategies including On-Page, Off-Page, and Technical SEO. Serving all of KSA.' : 'تصدر نتائج البحث مع أفضل شركة سيو في السعودية. نقدم استراتيجيات السيو الداخلي، الخارجي، والتقني لعملائنا في الرياض، جدة، الدمام، مكة، المدينة وكافة المدن.',
    keywords: lang === 'en' ? 'SEO Services, On-Page SEO, Off-Page SEO, Technical SEO, SEO Case Study, Organic Growth, Search Engine Optimization' : 'شركة سيو, خدمات سيو, تحسين محركات البحث, سيو داخلي, سيو خارجي, تصدر نتائج البحث, خبير سيو الرياض, سيو جدة, سيو الدمام, شركة سيو السعودية',
  });

  const strategies = [
    {
      icon: <Globe className="text-blue-500" size={32} />,
      title: { en: 'On-Page SEO', ar: 'السيو الداخلي (On-Page)' },
      desc: { 
        en: 'Optimizing individual web pages to rank higher and earn more relevant traffic. We focus on keyword optimization, content quality, meta tags, and user intent alignment.',
        ar: 'تحسين صفحات الويب الفردية للحصول على ترتيب أعلى وجذب زيارات ذات صلة. نركز على تحسين الكلمات المفتاحية، جودة المحتوى، العلامات الوصفية، وتوافق نية المستخدم.'
      },
      features: {
        en: ['Keyword Research & Mapping', 'Content Optimization', 'Meta Title & Description Tuning', 'Internal Linking Strategy', 'URL Structure Optimization'],
        ar: ['بحث وتوزيع الكلمات المفتاحية', 'تحسين جودة المحتوى', 'ضبط العناوين والوصف (Meta Tags)', 'استراتيجية الروابط الداخلية', 'تحسين هيكل الروابط (URLs)']
      }
    },
    {
      icon: <Zap className="text-amber-500" size={32} />,
      title: { en: 'Technical SEO', ar: 'السيو التقني (Technical)' },
      desc: {
        en: 'Ensuring your website meets the technical requirements of modern search engines. We improve site speed, mobile-friendliness, indexing, and crawlability.',
        ar: 'ضمان تلبية موقعك للمتطلبات التقنية لمحركات البحث الحديثة. نقوم بتحسين سرعة الموقع، التوافق مع الجوال، الفهرسة، وقابلية الزحف.'
      },
      features: {
        en: ['Core Web Vitals Optimization', 'Mobile-First Indexing', 'XML Sitemaps & Robots.txt', 'Schema Markup Implementation', 'Fixing Crawl Errors & Broken Links'],
        ar: ['تحسين مؤشرات أداء الويب الأساسية', 'فهرسة الهواتف المحمولة أولاً', 'خرائط الموقع وملف Robots.txt', 'تطبيق البيانات المنظمة (Schema)', 'إصلاح أخطاء الزحف والروابط المكسورة']
      }
    },
    {
      icon: <Target className="text-emerald-500" size={32} />,
      title: { en: 'Off-Page SEO', ar: 'السيو الخارجي (Off-Page)' },
      desc: {
        en: 'Building your website\'s authority and reputation across the internet. We execute high-quality link building, digital PR, and local SEO strategies.',
        ar: 'بناء موثوقية وسمعة موقعك عبر الإنترنت. نقوم بتنفيذ استراتيجيات بناء روابط عالية الجودة، العلاقات العامة الرقمية، والسيو المحلي.'
      },
      features: {
        en: ['High-Authority Link Building', 'Digital PR & Outreach', 'Local SEO & Google Business Profile', 'Brand Mentions', 'Competitor Backlink Analysis'],
        ar: ['بناء روابط (Backlinks) عالية الموثوقية', 'العلاقات العامة الرقمية والتواصل', 'السيو المحلي وملف نشاطي التجاري', 'الإشارات للعلامة التجارية', 'تحليل الروابط الخلفية للمنافسين']
      }
    }
  ];

  const caseStudy = {
    client: { en: 'Oud Luxury E-Commerce', ar: 'متجر عود لكشري الإلكتروني' },
    industry: { en: 'Fragrance & Perfumes', ar: 'العطور والبخور' },
    duration: { en: '6 Months', ar: '6 أشهر' },
    challenge: {
      en: 'The client had a beautiful website but struggled with low organic traffic and high dependency on paid ads. They ranked on page 4 for their main money keywords.',
      ar: 'كان لدى العميل موقع جميل ولكنه عانى من انخفاض الزيارات المجانية والاعتماد الكبير على الإعلانات الممولة. كانوا في الصفحة الرابعة للكلمات المفتاحية الرئيسية.'
    },
    solution: {
      en: 'We conducted a comprehensive technical audit, fixed 120+ crawl errors, optimized category pages with long-tail keywords, and acquired 45 high-authority backlinks from relevant niche sites.',
      ar: 'أجرينا تدقيقاً تقنياً شاملاً، وأصلحنا أكثر من 120 خطأ زحف، وقمنا بتحسين صفحات الأقسام بكلمات مفتاحية طويلة الذيل، وحصلنا على 45 رابط خلفي عالي الجودة من مواقع ذات صلة.'
    },
    results: [
      { metric: '+340%', label: { en: 'Organic Traffic', ar: 'الزيارات المجانية' } },
      { metric: '#1', label: { en: 'Rank for 15+ Keywords', ar: 'الترتيب لـ 15+ كلمة مفتاحية' } },
      { metric: '-60%', label: { en: 'Customer Acquisition Cost', ar: 'تكلفة الاستحواذ على العميل' } },
      { metric: '+215%', label: { en: 'Organic Revenue', ar: 'الإيرادات المجانية' } }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white pt-24 pb-32 overflow-hidden rounded-b-[3rem]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50">
           <button 
             onClick={onBack}
             className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md bg-white/10 text-white hover:bg-white/20 transition-all active:scale-95"
           >
             {isRTL ? <ArrowRight size={24} /> : <ArrowLeft size={24} />}
           </button>
           <div className="px-4 py-1.5 rounded-full backdrop-blur-md text-xs font-bold uppercase tracking-widest bg-white/10 text-white border border-white/20">
              {lang === 'en' ? 'SEO Services' : 'خدمات السيو'}
           </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center mt-8">
          <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-xl border border-blue-500/30">
            <Search size={40} className="text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            {lang === 'en' ? 'Dominate Search Results' : 'تصدر نتائج محركات البحث'}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {lang === 'en' 
              ? 'Stop hiding on page 2. Our data-driven SEO strategies turn your website into a 24/7 lead generation machine.'
              : 'توقف عن الاختباء في الصفحة الثانية. استراتيجيات السيو المبنية على البيانات لدينا تحول موقعك إلى آلة لجلب العملاء على مدار الساعة.'}
          </p>
        </div>
      </div>

      {/* Strategies Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {strategies.map((strategy, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100">
                {strategy.icon}
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{strategy.title[lang]}</h2>
              <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                {strategy.desc[lang]}
              </p>
              <ul className="space-y-3">
                {strategy.features[lang].map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Section */}
      <div className="max-w-5xl mx-auto px-6 mt-24">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">
            {lang === 'en' ? 'Success Story' : 'قصة نجاح'}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            {lang === 'en' ? 'SEO Case Study' : 'دراسة حالة سيو'}
          </h2>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-slate-900 p-10 text-white flex flex-col justify-center">
            <Award size={48} className="text-amber-400 mb-6" />
            <h3 className="text-2xl font-bold mb-2">{caseStudy.client[lang]}</h3>
            <p className="text-slate-400 mb-8">{caseStudy.industry[lang]}</p>
            
            <div className="space-y-6">
              <div>
                <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1">{lang === 'en' ? 'Duration' : 'المدة'}</span>
                <span className="font-bold text-lg">{caseStudy.duration[lang]}</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 p-10 md:p-12">
            <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <TrendingUp className="text-rose-500" size={24} />
                {lang === 'en' ? 'The Challenge' : 'التحدي'}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {caseStudy.challenge[lang]}
              </p>
            </div>
            
            <div className="mb-10">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Zap className="text-amber-500" size={24} />
                {lang === 'en' ? 'Our Solution' : 'الحل'}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {caseStudy.solution[lang]}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {caseStudy.results.map((result, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-4 text-center border border-slate-100">
                  <span className="block text-2xl md:text-3xl font-black text-blue-600 mb-1">{result.metric}</span>
                  <span className="block text-xs font-bold text-slate-500">{result.label[lang]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-6 mt-24 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-6">
            {lang === 'en' ? 'Ready to dominate your niche?' : 'هل أنت مستعد لتصدر مجالك؟'}
          </h2>
        <a 
          href={`https://wa.me/201010742430?text=${encodeURIComponent(lang === 'en' ? "Hi, I'm interested in your SEO Services." : "مرحباً، أنا مهتم بخدمات تحسين محركات البحث (SEO).")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-1"
        >
          {lang === 'en' ? 'Get a Free SEO Audit' : 'احصل على تدقيق سيو مجاني'}
          <ArrowRight size={20} className={isRTL ? 'rotate-180' : ''} />
        </a>
      </div>
    </div>
  );
};
