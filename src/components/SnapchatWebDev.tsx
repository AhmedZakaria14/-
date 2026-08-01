import React, { useEffect } from 'react';
import { Language } from '../types';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { updateSEO } from '../utils/seo';
import { Smartphone, Zap, Palette, Layout, MessageCircle, ArrowLeft, ArrowRight, ShieldCheck, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SnapchatWebDevProps {
  lang: Language;
}

export const SnapchatWebDev: React.FC<SnapchatWebDevProps> = ({ lang }) => {
  const isRTL = lang === 'ar';

  useEffect(() => {
    window.scrollTo(0, 0);
    const title = lang === 'ar' ? 'تصميم مواقع إلكترونية احترافية | نشار هب' : 'Professional Web Design | Nashar Hub';
    const description = lang === 'ar' ? 'نصمم مواقع إلكترونية سريعة، متجاوبة مع الجوال، وأنيقة لتعكس هوية علامتك التجارية وترفع مبيعاتك.' : 'We design fast, mobile-responsive, and elegant websites to reflect your brand identity and boost sales.';
    
    updateSEO({
      title,
      description,
      url: 'https://nasharhub.com/lp/web-design'
    });
  }, [lang]);

  const features = [
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: lang === 'ar' ? 'مصمم للجوال أولاً' : 'Mobile First',
      desc: lang === 'ar' ? '90% من عملائك يتصفحون من الجوال، نصمم تجربة مثالية لهم.' : '90% of your customers browse on mobile, we design a perfect experience for them.'
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: lang === 'ar' ? 'سرعة تحميل فائقة' : 'Lightning Fast',
      desc: lang === 'ar' ? 'مواقع محسنة برمجياً لضمان أسرع وقت تحميل لزوار إعلاناتك.' : 'Programmatically optimized websites to ensure the fastest load times.'
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: lang === 'ar' ? 'تصميم عصري وأنيق' : 'Elegant Design',
      desc: lang === 'ar' ? 'واجهات مستخدم جذابة تعكس فخامة وجودة خدماتك.' : 'Attractive UIs that reflect the luxury and quality of your services.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: lang === 'ar' ? 'حماية وأمان' : 'Security',
      desc: lang === 'ar' ? 'أعلى معايير الأمان لحماية بيانات موقعك وعملائك.' : 'Highest security standards to protect your site and customer data.'
    }
  ];

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-50 font-sans ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>{lang === 'ar' ? 'تصميم مواقع إلكترونية احترافية | نشار هب' : 'Professional Web Design | Nashar Hub'}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-auto z-50">
        <a 
          href="https://wa.me/966500000000" // Replace with actual number if needed
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white w-full py-4 px-8 rounded-full font-bold text-lg shadow-[0_8px_30px_rgba(34,197,94,0.4)] transition-all transform hover:scale-105"
        >
          <MessageCircle className="w-6 h-6" />
          {lang === 'ar' ? 'اطلب موقعك عبر واتساب' : 'Request via WhatsApp'}
        </a>
      </div>

      {/* Simple Header */}
      <header className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10">
        <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
          نشار هب
        </Link>
        <Link to="/" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
          {lang === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
          {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
        </Link>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex flex-col justify-center items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6">
              {lang === 'ar' ? 'مُصمم خصيصاً لزيادة مبيعاتك 🚀' : 'Designed to boost your sales 🚀'}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              {lang === 'ar' ? (
                <>صمّم موقعاً يعكس <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">فخامة نشاطك</span></>
              ) : (
                <>Design a site that reflects <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">your luxury</span></>
              )}
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              {lang === 'ar' 
                ? 'لا تدع زوار إعلاناتك يغادرون بسبب موقع بطيء أو تصميم غير متجاوب. نحن نبني لك واجهة رقمية عصرية تحول الزوار إلى عملاء فعليين.'
                : 'Don\'t let your ad traffic bounce due to a slow or unresponsive site. We build modern digital interfaces that convert.'}
            </p>
            
            <a href="#features" className="inline-flex items-center justify-center gap-2 text-white bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-full font-medium transition-all">
              {lang === 'ar' ? 'اكتشف مميزاتنا' : 'Discover Features'}
              {isRTL ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </a>
          </motion.div>
        </div>

        {/* Abstract Mockup Element */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mt-16 w-full max-w-lg mx-auto"
        >
          <div className="aspect-[9/19] md:aspect-video bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 left-0 right-0 h-12 bg-slate-900 border-b border-slate-800 flex items-center px-6 gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-800" />
              <div className="w-3 h-3 rounded-full bg-slate-800" />
              <div className="w-3 h-3 rounded-full bg-slate-800" />
            </div>
            <div className="p-6 pt-20 h-full flex flex-col gap-4">
              <div className="w-3/4 h-8 bg-slate-800 rounded-lg animate-pulse" />
              <div className="w-1/2 h-4 bg-slate-800/50 rounded-lg animate-pulse" />
              <div className="w-full h-32 bg-primary/10 rounded-xl border border-primary/20 mt-4" />
              <div className="w-full h-12 bg-primary/20 rounded-lg mt-auto" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 relative z-10 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {lang === 'ar' ? 'لماذا تختارنا لتصميم موقعك؟' : 'Why choose us?'}
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              {lang === 'ar' 
                ? 'نحن نركز على التفاصيل التي تجعل موقعك يتصدر ويبيع، من السرعة إلى تجربة المستخدم.'
                : 'We focus on details that make your site rank and sell, from speed to UX.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-primary/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-950 flex items-center justify-center mb-6 border border-slate-800">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/20 to-slate-900 border border-primary/20 rounded-3xl p-10 md:p-16 text-center">
          <Rocket className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {lang === 'ar' ? 'جاهز لإطلاق موقعك الجديد؟' : 'Ready to launch your new site?'}
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            {lang === 'ar' 
              ? 'تواصل معنا الآن وافهم كيف يمكننا تحويل أفكارك إلى موقع إلكتروني احترافي يحقق أهدافك.'
              : 'Contact us now and see how we can turn your ideas into a professional website.'}
          </p>
          <div className="inline-block text-slate-400 text-sm">
            {lang === 'ar' ? '⬇ اضغط على زر الواتساب بالأسفل للبدء' : '⬇ Click the WhatsApp button below to start'}
          </div>
        </div>
      </section>

      {/* Footer spacing for mobile floating button */}
      <div className="h-32 md:h-24"></div>
    </div>
  );
};
