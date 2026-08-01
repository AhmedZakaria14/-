import React, { useEffect } from 'react';
import { Language } from '../types';
import { motion, useScroll, useTransform } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { updateSEO } from '../utils/seo';
import { Smartphone, Zap, Palette, ArrowLeft, ArrowRight, ShieldCheck, Rocket, MousePointerClick, Gauge, Code2, Users, CheckCircle2, MessageCircle, BarChart3, Globe, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SnapchatWebDevProps {
  lang: Language;
}

export const SnapchatWebDev: React.FC<SnapchatWebDevProps> = ({ lang }) => {
  const isRTL = lang === 'ar';
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const title = lang === 'ar' ? 'تصميم جميع أنواع المواقع الإلكترونية | نشار هب' : 'Professional Web Design | Nashar Hub';
    const description = lang === 'ar' ? 'نصمم جميع أنواع المواقع الإلكترونية، سريعة، متجاوبة تماماً مع الجوال، ومصممة خصيصاً لتحويل الزوار إلى عملاء فعليين.' : 'We design all types of websites, fast, fully responsive, and specifically optimized to convert visitors into actual customers.';
    
    updateSEO({
      title,
      description,
      url: 'https://nasharhub.com/lp/web-design'
    });
  }, [lang]);

  const whyUs = [
    {
      icon: <Gauge className="w-6 h-6 text-blue-600" />,
      title: lang === 'ar' ? 'سرعة استجابة فائقة' : 'Lightning Speed',
      desc: lang === 'ar' ? 'المستخدم لا ينتظر. نصمم مواقع تفتح في أقل من ثانيتين لضمان عدم ارتداد الزوار.' : 'Users do not wait. We build sites that load under 2 seconds to prevent bounces.'
    },
    {
      icon: <Smartphone className="w-6 h-6 text-blue-600" />,
      title: lang === 'ar' ? 'مصمم للجوال (Mobile-First)' : 'Mobile-First Design',
      desc: lang === 'ar' ? 'أغلب زوار موقعك يستخدمون الجوال. واجهاتنا مصممة لتكون مثالية وسهلة الاستخدام بإصبع الإبهام.' : 'Most of your traffic is mobile. Our UIs are designed to be perfect and thumb-friendly.'
    },
    {
      icon: <MousePointerClick className="w-6 h-6 text-blue-600" />,
      title: lang === 'ar' ? 'رحلة مستخدم تحفيزية' : 'Conversion Focused UX',
      desc: lang === 'ar' ? 'تصميم يوجه الزائر مباشرة لاتخاذ الإجراء (شراء، اتصال، واتساب) بأقل عدد ممكن من النقرات.' : 'Design that guides the visitor directly to action with the fewest possible clicks.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: lang === 'ar' ? 'موثوقية واحترافية' : 'Trust & Professionalism',
      desc: lang === 'ar' ? 'مظهر احترافي يعكس جودة علامتك التجارية ويبني الثقة الفورية مع الزائر.' : 'A professional look that reflects your brand quality and builds instant trust.'
    }
  ];

  const details = [
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: lang === 'ar' ? 'مواقع الشركات والمؤسسات' : 'Corporate Websites',
      desc: lang === 'ar' ? 'واجهات احترافية تعكس هوية ورؤية شركتك، مصممة لبناء الثقة مع عملائك وشركائك.' : 'Professional interfaces reflecting your company vision, designed to build trust.'
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: lang === 'ar' ? 'صفحات الهبوط (Landing Pages)' : 'Landing Pages',
      desc: lang === 'ar' ? 'صفحات مخصصة للحملات الإعلانية، محسنة بدقة عالية لتحقيق أقصى معدل تحويل.' : 'Campaign-specific pages, highly optimized to maximize conversion rates.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: lang === 'ar' ? 'لوحات تحكم متقدمة' : 'Advanced Dashboards',
      desc: lang === 'ar' ? 'أنظمة إدارة محتوى مخصصة تتيح لك التحكم الكامل بموقعك بكل سهولة وأمان.' : 'Custom CMS and dashboards for full control over your site easily and securely.'
    }
  ];

  const process = [
    {
      step: '01',
      title: lang === 'ar' ? 'تحليل ودراسة' : 'Analysis & Study',
      desc: lang === 'ar' ? 'ندرس نشاطك، جمهورك المستهدف، ومنافسيك لنضع استراتيجية تصميم تضمن تفوقك.' : 'We study your business, audience, and competitors to set a winning strategy.'
    },
    {
      step: '02',
      title: lang === 'ar' ? 'تصميم الواجهات (UI/UX)' : 'UI/UX Design',
      desc: lang === 'ar' ? 'نصمم تجربة مستخدم سلسلة وواجهات عصرية مريحة للعين وخالية من التعقيد.' : 'We design smooth user experiences and modern, eye-friendly interfaces.'
    },
    {
      step: '03',
      title: lang === 'ar' ? 'البرمجة والتطوير' : 'Development',
      desc: lang === 'ar' ? 'نحول التصميم إلى كود نظيف وسريع، مع مراعاة أفضل ممارسات الـ SEO والأمان.' : 'We turn designs into clean, fast code, keeping SEO and security best practices.'
    },
    {
      step: '04',
      title: lang === 'ar' ? 'الإطلاق والدعم' : 'Launch & Support',
      desc: lang === 'ar' ? 'نختبر الموقع بدقة ثم نطلقه، مع توفير دعم فني مستمر لضمان استقرار عملك.' : 'We rigorously test and launch, providing ongoing support for stability.'
    }
  ];

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 font-sans ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>{lang === 'ar' ? 'تصميم جميع أنواع المواقع | نشار هب' : 'Professional Web Design | Nashar Hub'}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Floating CTA */}
      <a 
        href="https://wa.me/966505244583" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} z-50 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white py-3 px-4 md:px-6 rounded-full font-bold text-sm md:text-base shadow-lg shadow-green-500/30 transition-transform transform hover:scale-105`}
      >
        <MessageCircle className="w-6 h-6" />
        <span>{lang === 'ar' ? 'واتساب' : 'WhatsApp'}</span>
      </a>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 p-6 md:px-12 flex justify-between items-center z-10 border-b border-slate-200 bg-white/50 backdrop-blur-md">
        <Link to="/" className="text-xl font-bold tracking-wider text-slate-900">
          NASHAR<span className="text-blue-600">HUB</span>
        </Link>
        <Link to="/" className="text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-2 text-sm font-medium">
          {lang === 'ar' ? 'العودة' : 'Back'}
          {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
        </Link>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-white">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-50 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              {lang === 'ar' ? 'الحل الأمثل لنجاح مشروعك الرقمي' : 'The Perfect Solution for Your Digital Project'}
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.15] tracking-tight text-slate-900 max-w-4xl">
              {lang === 'ar' ? (
                <>صمم موقعاً يعكس <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">قيمة علامتك</span></>
              ) : (
                <>Design a site that reflects <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">your value</span></>
              )}
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-600 mb-12 max-w-3xl leading-relaxed font-light">
              {lang === 'ar' 
                ? 'لا تدع تصميم موقعك يقف عائقاً أمام مبيعاتك. نحن نصمم ونطور واجهات عصرية فائقة السرعة، متجاوبة مع الجوال، وتحول الزوار إلى عملاء دائمين.'
                : 'Don\'t let poor web design hurt your sales. We design and develop ultra-fast, modern, mobile-responsive interfaces that convert visitors into loyal customers.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#services" className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-4 rounded-full font-medium transition-colors flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20">
                {lang === 'ar' ? 'استكشف خدماتنا' : 'Explore Services'}
              </a>
              <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900 border border-slate-200 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center gap-2 shadow-sm">
                {lang === 'ar' ? 'استشارة مجانية' : 'Free Consultation'}
              </a>
            </div>
          </motion.div>

          {/* Clean Light Device Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-2xl mx-auto mt-16"
          >
            <div className="relative mx-auto w-[280px] md:w-[320px] aspect-[9/19] bg-white rounded-[40px] border-[8px] border-slate-100 shadow-2xl overflow-hidden ring-1 ring-slate-900/5">
              {/* Dynamic Screen Content */}
              <div className="absolute inset-0 bg-slate-50 flex flex-col p-5 pt-12">
                {/* Simulated Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-100 rounded-b-2xl" />
                
                {/* Skeleton UI Light */}
                <div className="flex justify-between items-center mb-8">
                  <div className="w-24 h-6 bg-slate-200 rounded-full" />
                  <div className="w-8 h-8 bg-slate-200 rounded-full" />
                </div>
                
                <div className="w-3/4 h-8 bg-slate-300 rounded-lg mb-4" />
                <div className="w-full h-4 bg-slate-200 rounded-lg mb-2" />
                <div className="w-5/6 h-4 bg-slate-200 rounded-lg mb-8" />
                
                <div className="w-full aspect-square bg-slate-100 rounded-2xl mb-8 relative overflow-hidden border border-slate-200">
                  <motion.div 
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent w-1/2 opacity-60"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                    <Palette className="w-12 h-12" />
                  </div>
                </div>
                
                <div className="mt-auto w-full h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white text-sm font-medium">
                  {lang === 'ar' ? 'اطلب الآن' : 'Order Now'}
                </div>
              </div>
            </div>
            
            {/* Floating metric cards */}
            <motion.div 
              style={{ y }}
              className="absolute top-1/4 -left-8 md:-left-24 bg-white border border-slate-100 p-4 rounded-2xl shadow-xl hidden md:flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                <Gauge className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">{lang === 'ar' ? 'سرعة التحميل' : 'Load Time'}</p>
                <p className="text-xl font-bold text-slate-900">0.8s</p>
              </div>
            </motion.div>

            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
              className="absolute bottom-1/4 -right-8 md:-right-24 bg-white border border-slate-100 p-4 rounded-2xl shadow-xl hidden md:flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">{lang === 'ar' ? 'معدل التحويل' : 'Conversion'}</p>
                <p className="text-xl font-bold text-slate-900">+340%</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Details */}
      <section id="services" className="py-24 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              {lang === 'ar' ? 'نقدم حلولاً برمجية لجميع الاحتياجات' : 'We offer web solutions for all needs'}
            </h2>
            <p className="text-slate-600 text-lg">
              {lang === 'ar' 
                ? 'أياً كان حجم عملك، لدينا التصميم والتقنية المناسبة للارتقاء بحضورك الرقمي.'
                : 'Whatever your business size, we have the right design and technology to elevate your digital presence.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {details.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem & Solution Section */}
      <section className="py-24 px-6 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 leading-tight">
              {lang === 'ar' ? 'لماذا تفشل أغلب المواقع في جذب العملاء؟' : 'Why most sites fail to attract customers?'}
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              {lang === 'ar' 
                ? 'المستخدم يقرر البقاء أو المغادرة في جزء من الثانية. المواقع التقليدية المليئة بالصور الثقيلة والنصوص الطويلة تقتل رغبته في التفاعل.'
                : 'A user decides to stay or leave in a split second. Traditional sites with heavy images and long texts kill the interaction intent.'}
            </p>
            <ul className="space-y-4">
              {[
                lang === 'ar' ? 'بطء التحميل يفقدك 50% من الزوار فوراً.' : 'Slow loading loses 50% of visitors instantly.',
                lang === 'ar' ? 'تصميم غير متجاوب وصعب الاستخدام على الجوال.' : 'Unresponsive design, hard to use on mobile.',
                lang === 'ar' ? 'رسالة مشتتة وتجربة مستخدم معقدة.' : 'Distracted messaging and complex user experience.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                  <div className="mt-1 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              {lang === 'ar' ? 'الحل: واجهات مصممة للأداء والتحويل' : 'The Solution: Performance & Conversion Driven UI'}
            </h3>
            <div className="space-y-8">
              {whyUs.slice(0,3).map((item, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              {lang === 'ar' ? 'منهجية عمل واضحة' : 'Clear Working Process'}
            </h2>
            <p className="text-slate-600">
              {lang === 'ar' ? 'نتبع خطوات مدروسة لضمان تسليم مشروعك بأعلى جودة وفي الوقت المحدد.' : 'We follow studied steps to ensure delivering your project with highest quality on time.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="text-4xl font-black text-slate-100 mb-4 group-hover:text-blue-50 transition-colors">{p.step}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{p.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 relative z-10 bg-white">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-900 to-blue-950 border border-slate-800 rounded-[40px] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
          {/* Subtle glow inside CTA */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white tracking-tight relative z-10">
            {lang === 'ar' ? 'هل أنت مستعد لتطوير حضورك الرقمي؟' : 'Ready to elevate your digital presence?'}
          </h2>
          <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed relative z-10">
            {lang === 'ar' 
              ? 'ابدأ الآن بخطوة بسيطة. تواصل معنا لمناقشة فكرتك وسنقدم لك استشارة مجانية حول أفضل الحلول لمشروعك.'
              : 'Start now with a simple step. Contact us to discuss your idea and get a free consultation.'}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a 
              href="https://wa.me/966500000000" // Replace with actual number
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-slate-900 hover:bg-slate-100 px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg"
            >
              <MessageCircle className="w-6 h-6 text-[#25D366]" />
              {lang === 'ar' ? 'تواصل معنا عبر واتساب' : 'Contact via WhatsApp'}
            </a>
          </div>
          
          <div className="mt-10 flex items-center justify-center gap-6 text-sm text-slate-300 font-medium relative z-10">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> {lang === 'ar' ? 'استشارة مجانية' : 'Free Consultation'}</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> {lang === 'ar' ? 'دراسة سريعة' : 'Fast Assessment'}</span>
          </div>
        </div>
      </section>

      {/* Footer spacing for mobile floating button */}
      <div className="h-32 md:h-24 bg-white"></div>
    </div>
  );
};
