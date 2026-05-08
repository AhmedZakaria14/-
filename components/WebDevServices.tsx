import React, { useEffect } from 'react';
import { Language } from '@/types';
import { ArrowLeft, ArrowRight, Code, Smartphone, Zap, CheckCircle2, Layout, Database, ShoppingCart, Globe } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';

interface WebDevServicesProps {
  lang: Language;
  onBack: () => void;
}

export const WebDevServices: React.FC<WebDevServicesProps> = ({ lang, onBack }) => {
  const isRTL = lang === 'ar';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: lang === 'en' ? 'Web Design & Development Company Saudi Arabia | Custom Websites & E-commerce' : 'أفضل شركة تصميم وبرمجة مواقع ومتاجر إلكترونية في السعودية | الرياض، جدة، الدمام',
    description: lang === 'en' ? 'Build a high-performance website that converts. We specialize in custom React/Next.js development, Salla/Zid store customization, and corporate websites across KSA.' : 'أفضل شركة تصميم مواقع وبرمجة متاجر إلكترونية في السعودية. متخصصون في برمجة المواقع الخاصة، وتصميم متاجر سلة وزد لعملائنا في الرياض، جدة، مكة، المدينة، الدمام، وكافة أنحاء المملكة.',
    keywords: lang === 'en' ? 'Web Design Saudi Arabia, E-commerce Development, Salla Store Design, React Developers Riyadh, Corporate Website Design, UI/UX Design Agency' : 'شركة تصميم مواقع, شركة برمجة مواقع, تصميم متاجر الكترونية, تصميم متجر سلة, تصميم موقع تعريفي, تصميم مواقع بالرياض, برمجة مواقع بجدة, تصميم متاجر بالدمام, شركة تصميم مواقع بالسعودية',
  });

  const features = [
    {
      icon: <Layout className="text-blue-500" size={32} />,
      title: { en: 'Custom Web Design', ar: 'تصميم مواقع مخصص' },
      desc: { 
        en: 'Tailor-made designs that reflect your brand identity. No generic templates; just unique, pixel-perfect interfaces built for your audience.',
        ar: 'تصاميم مفصلة خصيصاً لتعكس هوية علامتك التجارية. لا نستخدم قوالب جاهزة؛ بل واجهات فريدة ومتقنة مبنية لجمهورك.'
      },
      list: {
        en: ['UI/UX Design', 'Interactive Prototypes', 'Brand Consistency', 'Accessibility Compliance'],
        ar: ['تصميم واجهة/تجربة المستخدم', 'نماذج تفاعلية', 'تناسق الهوية', 'توافق مع معايير الوصول']
      }
    },
    {
      icon: <ShoppingCart className="text-purple-500" size={32} />,
      title: { en: 'E-Commerce Solutions', ar: 'حلول التجارة الإلكترونية' },
      desc: {
        en: 'Launch a powerful online store on Salla, Zid, or a custom-built platform. We ensure seamless payment integration and inventory management.',
        ar: 'أطلق متجراً إلكترونياً قوياً على سلة، زد، أو منصة خاصة. نضمن تكامل سلس لبوابات الدفع وإدارة المخزون.'
      },
      list: {
        en: ['Salla/Zid Customization', 'Custom React Storefronts', 'Payment Gateway Setup', 'Product Migration'],
        ar: ['تخصيص متاجر سلة/زد', 'واجهات متاجر React خاصة', 'إعداد بوابات الدفع', 'نقل المنتجات']
      }
    },
    {
      icon: <Zap className="text-amber-500" size={32} />,
      title: { en: 'Performance & Speed', ar: 'الأداء والسرعة' },
      desc: {
        en: 'Speed kills... the competition. We build lightning-fast websites using Next.js that rank higher on Google and keep visitors engaged.',
        ar: 'السرعة تقتل... المنافسة. نبني مواقع فائقة السرعة باستخدام Next.js تتصدر نتائج جوجل وتحافظ على تفاعل الزوار.'
      },
      list: {
        en: ['Core Web Vitals Optimization', 'Server-Side Rendering (SSR)', 'Image Optimization', 'Code Splitting'],
        ar: ['تحسين مؤشرات الويب الأساسية', 'العرض من جانب الخادم (SSR)', 'تحسين الصور', 'تقسيم الكود']
      }
    }
  ];

  const techStack = [
    { name: 'React', icon: <Code size={24} /> },
    { name: 'Next.js', icon: <Globe size={24} /> },
    { name: 'Tailwind CSS', icon: <Layout size={24} /> },
    { name: 'Node.js', icon: <Database size={24} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white pt-24 pb-32 overflow-hidden rounded-b-[3rem]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50">
           <button 
             onClick={onBack}
             className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md bg-white/10 text-white hover:bg-white/20 transition-all active:scale-95"
           >
             {isRTL ? <ArrowRight size={24} /> : <ArrowLeft size={24} />}
           </button>
           <div className="px-4 py-1.5 rounded-full backdrop-blur-md text-xs font-bold uppercase tracking-widest bg-white/10 text-white border border-white/20">
              {lang === 'en' ? 'Web Development' : 'تطوير المواقع'}
           </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center mt-8">
          <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-xl border border-blue-500/30">
            <Code size={40} className="text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            {lang === 'en' ? 'Websites That Convert' : 'مواقع إلكترونية تحقق مبيعات'}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            {lang === 'en' 
              ? 'Your website is your digital HQ. We build secure, scalable, and stunning websites that turn visitors into loyal customers.'
              : 'موقعك هو مقرك الرقمي. نبني مواقع آمنة، قابلة للتوسع، ومذهلة تحول الزوار إلى عملاء مخلصين.'}
          </p>
          
          {/* Added Image Section */}
          <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10 mt-8 mb-16 group">
            <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200" 
              alt={lang === 'en' ? 'Custom Web Design and Development' : 'تصميم وتطوير مواقع احترافية'}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100">
                {feature.icon}
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{feature.title[lang]}</h2>
              <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                {feature.desc[lang]}
              </p>
              <ul className="space-y-3">
                {feature.list[lang].map((item, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="max-w-4xl mx-auto px-6 mt-24 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">
            {lang === 'en' ? 'Powered by Modern Tech' : 'مدعوم بأحدث التقنيات'}
        </h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {techStack.map((tech, idx) => (
                <div key={idx} className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-sm border border-slate-200 text-slate-600 font-bold">
                    {tech.icon}
                    <span>{tech.name}</span>
                </div>
            ))}
        </div>
      </div>

      {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-6 mt-20 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-6">
            {lang === 'en' ? 'Start Your Project Today' : 'ابدأ مشروعك اليوم'}
          </h2>
        <a 
          href={`https://wa.me/201010742430?text=${encodeURIComponent(lang === 'en' ? "Hi, I'm interested in Web Development services." : "مرحباً، أنا مهتم بخدمات تصميم وتطوير المواقع.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-1"
        >
          {lang === 'en' ? 'Get a Free Quote' : 'احصل على عرض سعر مجاني'}
          <ArrowRight size={20} className={isRTL ? 'rotate-180' : ''} />
        </a>
      </div>
    </div>
  );
};
