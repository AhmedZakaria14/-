import React, { useEffect } from 'react';
import { Language } from '../types';
import { ArrowLeft, ArrowRight, Code, Smartphone, Zap, CheckCircle2, Layout, Database, ShoppingCart, Globe } from 'lucide-react';
import { updateSEO } from '../utils/seo';

interface WebDevServicesProps {
  lang: Language;
  onBack: () => void;
  isPage?: boolean;
}

export const WebDevServices: React.FC<WebDevServicesProps> = ({ lang, onBack, isPage = true }) => {
  const isRTL = lang === 'ar';
  const HeadingTag = isPage ? 'h1' : 'h2';

  useEffect(() => {
    window.scrollTo(0, 0);

    const title = lang === 'en' ? 'Web Design & Development Company in Saudi Arabia | Nashar Hub' : 'تصميم وبرمجة مواقع ومتاجر إلكترونية في السعودية | نشار هب';
    const description = lang === 'en' ? 'Build a high-performance website that converts. We specialize in custom React/Next.js development, Salla/Zid store customization, and corporate websites across KSA.' : 'أفضل شركة تصميم مواقع وبرمجة متاجر إلكترونية بالسعودية. متخصصون في برمجة المواقع الخاصة، وتصميم متاجر سلة وزد في الرياض وكافة أنحاء المملكة.';
    const keywords = lang === 'en' ? 'Web Design Saudi Arabia, E-commerce Development, Salla Store Design, React Developers Riyadh, Corporate Website Design, UI/UX Design Agency' : 'شركة تصميم مواقع, شركة برمجة مواقع, تصميم متاجر الكترونية, تصميم متجر سلة, تصميم موقع تعريفي, تصميم مواقع بالرياض, برمجة مواقع بجدة, تصميم متاجر بالدمام, شركة تصميم مواقع بالسعودية';

    updateSEO({
      title,
      description,
      keywords,
      url: 'https://nasharhub.com/web-dev-services',
      image: 'https://nasharhub.com/og-image.jpg'
    });
  }, [lang]);

  const features = [
    {
      icon: <Layout className="text-blue-500" size={32} />,
      title: { en: 'Custom Web Design', ar: 'تصميم مواقع مخصص' },
      desc: { 
        en: 'Our custom web design services focus on creating unique, pixel-perfect interfaces that align perfectly with your brand identity. We don\'t believe in one-size-fits-all templates. Instead, we dive deep into your brand values and target audience to craft a visual experience that stands out in the competitive Saudi market. Every element is carefully considered to ensure maximum engagement and brand recall.',
        ar: 'تركز خدمات تصميم المواقع المخصصة لدينا على إنشاء واجهات فريدة ومتقنة تتماشى تماماً مع هوية علامتك التجارية. نحن لا نؤمن بالقوالب الجاهزة التي تناسب الجميع. بدلاً من ذلك، نغوص في قيم علامتك التجارية وجمهورك المستهدف لصياغة تجربة بصرية تبرز في السوق السعودي التنافسي. يتم دراسة كل عنصر بعناية لضمان أقصى قدر من التفاعل وتذكر العلامة التجارية.'
      },
      list: {
        en: ['UI/UX Design Strategy', 'Interactive High-Fidelity Prototypes', 'Brand Consistency & Visual Language', 'Accessibility Compliance (WCAG)'],
        ar: ['استراتيجية تصميم واجهة/تجربة المستخدم', 'نماذج تفاعلية عالية الدقة', 'تناسق الهوية واللغة البصرية', 'التوافق مع معايير الوصول العالمية']
      }
    },
    {
      icon: <ShoppingCart className="text-purple-500" size={32} />,
      title: { en: 'E-Commerce Solutions', ar: 'حلول التجارة الإلكترونية' },
      desc: {
        en: 'Launch a powerful, high-converting online store optimized for the Saudi consumer. Whether you need a customized Salla or Zid store or a completely bespoke headless commerce solution using React, we provide the technical expertise to scale your sales. We handle everything from seamless payment gateway integrations (Mada, Apple Pay) to complex inventory management systems.',
        ar: 'أطلق متجراً إلكترونياً قوياً وعالي التحويل ومحسناً للمستهلك السعودي. سواء كنت بحاجة إلى متجر سلة أو زد مخصص أو حل تجارة إلكترونية خاص بالكامل باستخدام React، فنحن نوفر الخبرة التقنية لزيادة مبيعاتك. نحن نتعامل مع كل شيء من تكامل بوابات الدفع السلسة (مدى، آبل باي) إلى أنظمة إدارة المخزون المعقدة.'
      },
      list: {
        en: ['Salla & Zid Advanced Customization', 'Headless Commerce with React/Next.js', 'Mada & Local Payment Integration', 'Seamless Product & Data Migration'],
        ar: ['تخصيص متقدم لمتاجر سلة وزد', 'تجارة إلكترونية خاصة بـ React/Next.js', 'تكامل مدى والدفع المحلي', 'نقل سلس للمنتجات والبيانات']
      }
    },
    {
      icon: <Zap className="text-amber-500" size={32} />,
      title: { en: 'Performance & SEO Optimization', ar: 'الأداء وتحسين محركات البحث' },
      desc: {
        en: 'In today\'s fast-paced digital world, speed is a critical ranking factor and a key driver of user satisfaction. We build lightning-fast websites using modern frameworks like Next.js that achieve top scores in Core Web Vitals. Our development process integrates SEO best practices from the ground up, ensuring your site is not only fast but also highly discoverable by search engines.',
        ar: 'في العالم الرقمي سريع الوتيرة اليوم، تعد السرعة عاملاً حاسماً في الترتيب ومحركاً رئيسياً لرضا المستخدم. نحن نبني مواقع فائقة السرعة باستخدام أطر عمل حديثة مثل Next.js تحقق أعلى الدرجات في مؤشرات الويب الأساسية. تدمج عملية التطوير لدينا أفضل ممارسات السيو منذ البداية، مما يضمن أن موقعك ليس سريعاً فحسب، بل يسهل أيضاً اكتشافه بواسطة محركات البحث.'
      },
      list: {
        en: ['Core Web Vitals & PageSpeed Optimization', 'Server-Side Rendering (SSR) for SEO', 'Advanced Image Compression & Lazy Loading', 'Clean Code & Efficient Asset Bundling'],
        ar: ['تحسين مؤشرات الويب وسرعة الصفحة', 'العرض من جانب الخادم (SSR) للسيو', 'ضغط الصور المتقدم والتحميل المتأخر', 'كود نظيف وتجميع فعال للملفات']
      }
    }
  ];

  const processSteps = [
    {
      title: { en: 'Discovery & Planning', ar: 'الاكتشاف والتخطيط' },
      desc: { en: 'We start by understanding your business goals, target audience, and technical requirements to create a detailed project roadmap.', ar: 'نبدأ بفهم أهداف عملك، وجمهورك المستهدف، والمتطلبات التقنية لإنشاء خارطة طريق مفصلة للمشروع.' }
    },
    {
      title: { en: 'Design & Prototyping', ar: 'التصميم والنماذج' },
      desc: { en: 'Our designers create interactive prototypes that allow you to visualize the user journey and provide feedback before development begins.', ar: 'يقوم مصممونا بإنشاء نماذج تفاعلية تتيح لك تصور رحلة المستخدم وتقديم الملاحظات قبل بدء التطوير.' }
    },
    {
      title: { en: 'Development & Testing', ar: 'التطوير والاختبار' },
      desc: { en: 'Our developers write clean, scalable code and perform rigorous testing across all devices and browsers to ensure a flawless experience.', ar: 'يقوم مطورونا بكتابة كود نظيف وقابل للتوسع وإجراء اختبارات صارمة عبر جميع الأجهزة والمتصفحات لضمان تجربة مثالية.' }
    },
    {
      title: { en: 'Launch & Support', ar: 'الإطلاق والدعم' },
      desc: { en: 'We handle the deployment process and provide ongoing maintenance and support to keep your website running at peak performance.', ar: 'نتولى عملية الإطلاق ونوفر الصيانة والدعم المستمر للحفاظ على عمل موقعك بأعلى أداء.' }
    }
  ];

  const techStack = [
    { name: 'React', icon: <Code size={24} /> },
    { name: 'Next.js', icon: <Globe size={24} /> },
    { name: 'Tailwind CSS', icon: <Layout size={24} /> },
    { name: 'Node.js', icon: <Database size={24} /> },
    { name: 'TypeScript', icon: <Code size={24} /> },
    { name: 'Firebase', icon: <Database size={24} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white pt-24 pb-32 overflow-hidden rounded-b-[3rem]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-center items-center z-50">
           <div className="px-4 py-1.5 rounded-full backdrop-blur-md text-xs font-bold uppercase tracking-widest bg-white/10 text-white border border-white/20">
              {lang === 'en' ? 'Web Development' : 'تطوير المواقع'}
           </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center mt-8">
          <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-xl border border-blue-500/30">
            <Code size={40} className="text-blue-400" />
          </div>
          <HeadingTag className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            {lang === 'en' ? 'High-Performance Websites' : 'مواقع إلكترونية عالية الأداء'}
          </HeadingTag>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            {lang === 'en' 
              ? 'Your website is your most powerful sales tool. We build secure, scalable, and stunning digital experiences that drive growth and turn visitors into loyal customers.'
              : 'موقعك هو أقوى أداة مبيعات لديك. نحن نبني تجارب رقمية آمنة وقابلة للتوسع ومذهلة تدفع النمو وتحول الزوار إلى عملاء مخلصين. مع خدماتنا، ستحصل على عرض الصورة كاملة لنجاحك الرقمي، متكاملة مع إعلانات جوجل وجوجل إعلانات.'}
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

      {/* Process Section */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            {lang === 'en' ? 'Our Development Process' : 'عملية التطوير لدينا'}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            {lang === 'en' 
              ? 'We follow a structured approach to ensure every project is delivered on time, within budget, and to the highest quality standards.'
              : 'نحن نتبع نهجاً منظماً لضمان تسليم كل مشروع في الوقت المحدد، وضمن الميزانية، وبأعلى معايير الجودة.'}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm h-full">
                <span className="text-4xl font-black text-blue-500/10 absolute top-4 right-8">0{idx + 1}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title[lang]}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc[lang]}</p>
              </div>
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
          <p className="text-slate-500 mb-10 max-w-2xl mx-auto">
            {lang === 'en' 
              ? 'Ready to take your business to the next level? Contact us today for a free consultation and let\'s build something amazing together.'
              : 'هل أنت مستعد لنقل عملك إلى المستوى التالي؟ اتصل بنا اليوم للحصول على استشارة مجانية ولنبني شيئاً مذهلاً معاً.'}
          </p>
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
