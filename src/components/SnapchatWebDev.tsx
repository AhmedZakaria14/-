import React, { useEffect, useState } from 'react';
import { Language } from '../types';
import { motion, useScroll, useTransform } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { updateSEO } from '../utils/seo';
import { Smartphone, Zap, Palette, ArrowLeft, ArrowRight, ShieldCheck, Rocket, MousePointerClick, Gauge, Code2, Users, CheckCircle2, MessageCircle, BarChart3, Globe, Target, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SnapchatWebDevProps {
  lang: Language;
}

export const SnapchatWebDev: React.FC<SnapchatWebDevProps> = ({ lang }) => {

  const slideImages = [
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1789763470/ChatGPT_Image_Sep_18_2026_11_30_32_PM_1_pjhiek.png",
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1789763470/ChatGPT_Image_Sep_18_2026_11_30_33_PM_3_cg3ztk.png",
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1789763472/ChatGPT_Image_Sep_18_2026_11_30_33_PM_2_svoogv.png",
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1789763469/ChatGPT_Image_Sep_18_2026_11_30_33_PM_4_is2xzd.png",
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1789763469/ChatGPT_Image_Sep_18_2026_11_30_33_PM_5_ednk14.png",
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1789763454/ChatGPT_Image_Sep_18_2026_11_30_33_PM_6_d5jg7a.png"
  ];

  const isRTL = lang === 'ar';
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const fontClass = isRTL ? 'font-arabic' : 'font-sans';
  const WHATSAPP_LINK = "https://wa.me/201010742430";
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slideImages.length]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const title = lang === 'ar' ? 'تصميم جميع أنواع المواقع الإلكترونية | نشار هب' : 'Professional Web Design | Nashar Hub';
    const description = lang === 'ar' ? 'نصمم جميع أنواع المواقع الإلكترونية، سريعة، متجاوبة تماماً مع الجوال، ومصممة خصيصاً لتحويل الزوار إلى عملاء فعليين عبر واتساب.' : 'We design all types of websites, fast, fully responsive, and specifically optimized to convert visitors into actual customers via WhatsApp.';
    
    updateSEO({
      title,
      description,
      url: 'https://nasharhub.com/lp/web-design'
    });
  }, [lang]);

  const whyUs = [
    {
      icon: <Gauge className="w-6 h-6 text-[#9e7444]" />,
      title: lang === 'ar' ? 'سرعة استجابة فائقة' : 'Lightning Speed',
      desc: lang === 'ar' ? 'المستخدم لا ينتظر. نصمم مواقع تفتح في أقل من ثانيتين لضمان عدم ارتداد الزوار.' : 'Users do not wait. We build sites that load under 2 seconds to prevent bounces.'
    },
    {
      icon: <Smartphone className="w-6 h-6 text-[#9e7444]" />,
      title: lang === 'ar' ? 'مصمم للجوال (Mobile-First)' : 'Mobile-First Design',
      desc: lang === 'ar' ? 'أغلب زوار موقعك يستخدمون الجوال. واجهاتنا مصممة لتكون مثالية وسهلة الاستخدام بإصبع الإبهام.' : 'Most of your traffic is mobile. Our UIs are designed to be perfect and thumb-friendly.'
    },
    {
      icon: <MousePointerClick className="w-6 h-6 text-[#9e7444]" />,
      title: lang === 'ar' ? 'رحلة مستخدم تحفيزية' : 'Conversion Focused UX',
      desc: lang === 'ar' ? 'تصميم يوجه الزائر مباشرة لاتخاذ الإجراء (تواصل عبر واتساب) بأقل عدد ممكن من النقرات.' : 'Design that guides the visitor directly to action (WhatsApp) with the fewest possible clicks.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#9e7444]" />,
      title: lang === 'ar' ? 'موثوقية واحترافية' : 'Trust & Professionalism',
      desc: lang === 'ar' ? 'مظهر احترافي يعكس جودة علامتك التجارية ويبني الثقة الفورية مع الزائر.' : 'A professional look that reflects your brand quality and builds instant trust.'
    }
  ];

  const types = [
    {
      title: lang === 'ar' ? 'مواقع الشركات والخدمات' : 'Corporate & Services',
      desc: lang === 'ar' ? 'واجهة رقمية تعكس هوية مؤسستك وتبرز خدماتك وتقود العملاء لحجز المواعيد أو الاتصال مباشرة.' : 'Digital presence that showcases your services and drives direct inquiries.',
      icon: <Globe className="w-8 h-8 text-[#9e7444]" />
    },
    {
      title: lang === 'ar' ? 'المتاجر الإلكترونية' : 'E-Commerce Stores',
      desc: lang === 'ar' ? 'متاجر متكاملة وسلسة مصممة لعرض منتجاتك وتسهيل عمليات الدفع وإتمام الطلبات عبر واتساب أو بوابات الدفع.' : 'Seamless stores designed to showcase products and drive sales effortlessly.',
      icon: <Zap className="w-8 h-8 text-[#9e7444]" />
    },
    {
      title: lang === 'ar' ? 'صفحات الهبوط الإعلانية (Landing Pages)' : 'High-Converting Landing Pages',
      desc: lang === 'ar' ? 'صفحة مخصصة لحملتك الإعلانية على سناب شات، تيك توك، أو جوجل، لرفع معدل التحويل إلى أقصى حد.' : 'Specialized single-purpose pages for ads campaigns that multiply conversion rates.',
      icon: <Target className="w-8 h-8 text-[#9e7444]" />
    },
    {
      title: lang === 'ar' ? 'مواقع الملفات التعريفية (Portfolio)' : 'Portfolios & Personal Brands',
      desc: lang === 'ar' ? 'عرض أعمالك ومشاريعك السابقة بأسلوب بصري فريد يجذب العملاء ذوي القيمة العالية.' : 'Showcase your work and projects with unique visual prestige.',
      icon: <Palette className="w-8 h-8 text-[#9e7444]" />
    }
  ];

  const process = [
    {
      step: '01',
      title: lang === 'ar' ? 'فهم النشاط والهدف' : 'Discovery & Strategy',
      desc: lang === 'ar' ? 'ندرس طبيعة عملك ونحدد نوع الموقع الذي يحقق أهدافك الترويجية والبيعية بدقة.' : 'We analyze your business goals and define the optimal site architecture.'
    },
    {
      step: '02',
      title: lang === 'ar' ? 'تصميم الهوية وتجربة المستخدم' : 'UI/UX Design',
      desc: lang === 'ar' ? 'نصمم واجهة جذابة وسهلة التصفح تناسب هوية علامتك التجارية وتوجه الزائر للتواصل.' : 'We design an intuitive, high-converting layout that aligns with your brand.'
    },
    {
      step: '03',
      title: lang === 'ar' ? 'التطوير والتكامل التقني' : 'Development & Setup',
      desc: lang === 'ar' ? 'برمجة الموقع بأحدث التقنيات مع ربط بكسلات التتبع (Snapchat, TikTok, Meta, GA4) وأزرار الواتساب.' : 'High-performance coding integrated with analytics pixels and tracking.'
    },
    {
      step: '04',
      title: lang === 'ar' ? 'الإطلاق والدعم' : 'Launch & Support',
      desc: lang === 'ar' ? 'نختبر الموقع بدقة ثم نطلقه، مع توفير دعم فني مستمر لضمان استقرار عملك.' : 'We rigorously test and launch, providing ongoing support for stability.'
    }
  ];

  return (
    <div className={`min-h-screen bg-[#0b1020] text-[#f4f1e9] ${fontClass} ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>{lang === 'ar' ? 'تصميم جميع أنواع المواقع | نشار هب' : 'Professional Web Design | Nashar Hub'}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Floating CTA */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} z-50 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white py-3.5 px-5 md:px-6 rounded-full font-bold text-sm md:text-base shadow-xl shadow-green-500/20 transition-transform transform hover:scale-105`}
      >
        <MessageCircle className="w-6 h-6" />
        <span>{lang === 'ar' ? 'تواصل معنا' : 'WhatsApp'}</span>
      </a>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 p-6 md:px-12 flex justify-between items-center z-10 border-b border-white/5 bg-[#0b1020]/80 backdrop-blur-md">
        <Link to="/" className="text-xl font-black tracking-widest text-[#f4f1e9] flex items-center gap-2">
          <img 
            src="https://res.cloudinary.com/ddrsmtsvj/image/upload/v1789590583/unnamed_1_mtjci9.png" 
            alt="Nashar Hub" 
            width={32}
            height={32}
            style={{ height: '32px', width: '32px', maxHeight: '32px', maxWidth: '32px', objectFit: 'contain' }}
            className="h-8 w-8 object-contain block shrink-0"
          />
          <span className="font-extrabold tracking-tight text-white font-sans text-lg sm:text-xl">Nashar<span className="text-[#38bdf8]">HUB</span></span>
        </Link>
        <Link 
          to="/"
          className="text-xs uppercase tracking-wider text-[#f4f1e9]/70 hover:text-[#9e7444] transition-colors flex items-center gap-1 font-bold"
        >
          {lang === 'ar' ? 'الرئيسية' : 'Home'}
        </Link>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#0b1020]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#9e7444]/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-2 bg-[#9e7444]/10 border border-[#9e7444]/30 text-[#f4f1e9] px-5 py-2 rounded-full text-sm font-bold mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9e7444] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9e7444]"></span>
              </span>
              {lang === 'ar' ? 'الحل الأمثل لنجاح مشروعك الرقمي' : 'The Perfect Solution for Your Digital Project'}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.25] tracking-tight text-[#f4f1e9] max-w-4xl">
              {lang === 'ar' ? (
                <>صمم موقعاً يعكس <span className="text-[#9e7444]">قيمة علامتك</span> ويضاعف مبيعاتك</>
              ) : (
                <>Design a site that reflects <span className="text-[#9e7444]">your value</span> & doubles sales</>
              )}
            </h1>

            <p className="text-lg md:text-2xl text-[#f4f1e9]/70 max-w-3xl mb-12 font-medium leading-relaxed">
              {lang === 'ar' 
                ? 'سواء كنت تحتاج موقع شركة تعريفي، متجر إلكتروني، أو صفحة هبوط إعلانية، نبني لك موقعاً فائق السرعة، متجاوباً تماماً مع الجوال ومصمماً لإقناع العميل بالتواصل معك فوراً.'
                : 'Whether you need a corporate site, e-commerce store, or ad landing page, we craft ultra-fast, mobile-first websites engineered to turn visitors into paying customers.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#9e7444] hover:bg-[#8a6337] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-[#9e7444]/20 transition-transform transform hover:scale-105"
              >
                <MessageCircle className="w-6 h-6" />
                {lang === 'ar' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
              </a>
              <Link 
                to="/web-dev-services"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#121829] hover:bg-[#182035] text-[#f4f1e9] border border-white/10 px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                {lang === 'ar' ? 'تفاصيل الخدمات' : 'Our Services'}
              </Link>
            </div>
          </motion.div>

          {/* Mobile Device Mockup Showcase with Auto-sliding preview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 w-full max-w-4xl relative flex flex-col items-center"
          >
            {/* Ambient backlight glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-[500px] bg-[#9e7444]/15 blur-[100px] rounded-full pointer-events-none -z-10" />

            {/* Phone Showcase Container */}
            <div className="relative z-10 flex items-center justify-center">
              {/* Previous Arrow Button */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length)}
                className="hidden sm:flex absolute -left-6 md:-left-16 z-30 w-11 h-11 rounded-full bg-[#121829]/90 hover:bg-[#9e7444] text-[#f4f1e9] border border-white/10 items-center justify-center transition-all shadow-xl hover:scale-110 active:scale-95"
                aria-label="Previous Slide"
              >
                {isRTL ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
              </button>

              {/* Showcase Mockup Frame - Scaled precisely for mobile website screenshots */}
              <div className="relative border-4 sm:border-[6px] border-[#1e2738] bg-[#0c101c] rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(88,168,243,0.15)] ring-1 ring-white/15 overflow-hidden w-[280px] min-[360px]:w-[320px] sm:w-[380px] md:w-[440px] lg:w-[480px] max-w-[94vw] aspect-[1122/1402]">
                {/* Screen Content */}
                <div className="w-full h-full relative overflow-hidden bg-[#0c101c]">
                  {slideImages.map((src, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: currentSlide === index ? 1 : 0,
                        scale: currentSlide === index ? 1 : 1.02
                      }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <img 
                        src={src} 
                        alt={`نموذج تصميم موقع احترافي متجاوب للهاتف - نشار هب ${index + 1}`} 
                        className="w-full h-full object-cover object-center block select-none"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </motion.div>
                  ))}

                  {/* Subtle Screen Gloss Effect */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.04] z-20" />
                </div>
              </div>

              {/* Next Arrow Button */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slideImages.length)}
                className="hidden sm:flex absolute -right-6 md:-right-16 z-30 w-11 h-11 rounded-full bg-[#121829]/90 hover:bg-[#9e7444] text-[#f4f1e9] border border-white/10 items-center justify-center transition-all shadow-xl hover:scale-110 active:scale-95"
                aria-label="Next Slide"
              >
                {isRTL ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
              </button>
            </div>

            {/* Slide Indicators Below Phone */}
            <div className="mt-6 flex items-center gap-2 z-20 bg-[#121829]/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-md">
              {slideImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${currentSlide === i ? 'w-6 bg-[#9e7444]' : 'w-2 bg-white/30 hover:bg-white/60'}`}
                  aria-label={`نموذج ${i + 1}`}
                />
              ))}
            </div>

            {/* Mobile Previous/Next Touch Helpers */}
            <div className="flex sm:hidden items-center justify-center gap-4 mt-3 z-20">
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length)}
                className="px-4 py-1.5 rounded-full bg-[#121829] text-xs font-bold text-[#f4f1e9] border border-white/10 flex items-center gap-1 active:scale-95"
              >
                {isRTL ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
                <span>{lang === 'ar' ? 'السابق' : 'Prev'}</span>
              </button>
              <span className="text-xs font-mono text-[#f4f1e9]/60">
                {currentSlide + 1} / {slideImages.length}
              </span>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slideImages.length)}
                className="px-4 py-1.5 rounded-full bg-[#121829] text-xs font-bold text-[#f4f1e9] border border-white/10 flex items-center gap-1 active:scale-95"
              >
                <span>{lang === 'ar' ? 'التالي' : 'Next'}</span>
                {isRTL ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
            </div>

            {/* CTA Button */}
            <div className="mt-8 flex justify-center relative z-20">
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#9e7444] text-white hover:bg-[#8a6337] px-8 py-4 rounded-full font-bold text-lg transition-transform transform hover:scale-105 shadow-xl shadow-[#9e7444]/20 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
                {lang === 'ar' ? 'احجز موقعك الآن' : 'Book Your Site Now'}
              </a>
            </div>
            
            {/* Desktop Floating Badges */}
            <motion.div 
              style={{ y }}
              className="absolute top-1/3 -left-4 md:-left-10 lg:-left-20 bg-[#121829]/95 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl hidden md:flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 bg-[#9e7444]/15 text-[#9e7444] rounded-xl flex items-center justify-center border border-[#9e7444]/20">
                <Gauge className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-[#f4f1e9]/60 font-bold">{lang === 'ar' ? 'سرعة التحميل للجوال' : 'Mobile Load Speed'}</p>
                <p className="text-xl font-black text-[#f4f1e9]">0.8s</p>
              </div>
            </motion.div>

            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
              className="absolute bottom-1/3 -right-4 md:-right-10 lg:-right-20 bg-[#121829]/95 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl hidden md:flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 bg-green-500/15 text-green-400 rounded-xl flex items-center justify-center border border-green-500/20">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-[#f4f1e9]/60 font-bold">{lang === 'ar' ? 'معدل التحويل' : 'Conversion'}</p>
                <p className="text-xl font-black text-[#f4f1e9]">+340%</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-24 px-6 bg-[#0f1426] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-[#f4f1e9]">
              {lang === 'ar' ? 'أنواع المواقع التي نصممها' : 'Website Solutions We Provide'}
            </h2>
            <p className="text-[#f4f1e9]/70 text-lg font-medium">
              {lang === 'ar' ? 'حلول برمجية وتصميمية متكاملة مصممة خصيصاً لتلائم طبيعة نشاطك وميزانيتك.' : 'Custom web engineering tailored specifically to your business goals.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {types.map((type, idx) => (
              <div 
                key={idx} 
                className="bg-[#121829] border border-white/5 p-8 md:p-10 rounded-[2rem] hover:border-[#9e7444]/50 transition-all duration-300 group shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 bg-[#182035] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#f4f1e9] mb-4">{type.title}</h3>
                  <p className="text-[#f4f1e9]/70 text-base leading-relaxed font-medium mb-8">
                    {type.desc}
                  </p>
                </div>
                <div>
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#9e7444] hover:text-[#b88c5a] transition-colors"
                  >
                    <span>{lang === 'ar' ? 'استفسر عن هذه الباقة' : 'Inquire About This'}</span>
                    {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution Comparison */}
      <section className="py-24 px-6 bg-[#0b1020] border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#9e7444] font-bold mb-3 block">
              {lang === 'ar' ? 'لماذا تختارنا؟' : 'Why Us'}
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-[#f4f1e9] leading-tight">
              {lang === 'ar' ? 'موقعك ليس مجرد تصميم.. هو رجل مبيعات يعمل 24 ساعة' : 'Your website is not just code — it is your 24/7 top salesman'}
            </h2>
            <p className="text-[#f4f1e9]/70 text-lg mb-8 leading-relaxed font-medium">
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
                <li key={i} className="flex items-start gap-3 text-[#f4f1e9]/80 font-bold text-lg">
                  <div className="mt-1.5 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                    <div className="w-2.5 h-2.5 bg-red-400 rounded-full" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#121829] p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-black text-[#f4f1e9] mb-8">
              {lang === 'ar' ? 'الحل: واجهات مصممة للأداء والتحويل' : 'The Solution: Performance & Conversion Driven UI'}
            </h3>
            <div className="space-y-8">
              {whyUs.slice(0,3).map((item, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="w-14 h-14 bg-[#182035] rounded-2xl flex items-center justify-center shrink-0 border border-white/10 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#f4f1e9] mb-2">{item.title}</h4>
                    <p className="text-[#f4f1e9]/70 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-[#0f1426] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-[#f4f1e9]">
              {lang === 'ar' ? 'منهجية عمل واضحة' : 'Clear Working Process'}
            </h2>
            <p className="text-[#f4f1e9]/70 text-lg font-medium">
              {lang === 'ar' ? 'نتبع خطوات مدروسة لضمان تسليم مشروعك بأعلى جودة وفي الوقت المحدد.' : 'We follow studied steps to ensure delivering your project with highest quality on time.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-[#121829] border border-white/5 p-8 rounded-[2rem] shadow-sm hover:border-[#9e7444]/40 transition-all h-full">
                  <div className="text-5xl font-black text-white/10 mb-6 group-hover:text-[#9e7444]/30 transition-colors">{p.step}</div>
                  <h3 className="text-2xl font-bold text-[#f4f1e9] mb-3">{p.title}</h3>
                  <p className="text-[#f4f1e9]/70 font-medium leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 relative z-10 bg-[#0b1020] border-t border-white/5">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#121829] to-[#182035] border border-white/10 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#9e7444] to-transparent opacity-50" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#9e7444]/10 blur-[100px] rounded-full" />
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-[#f4f1e9] tracking-tight relative z-10 leading-[1.2]">
            {lang === 'ar' ? 'مستعد لتطوير حضورك الرقمي؟' : 'Ready to elevate your digital presence?'}
          </h2>
          <p className="text-[#f4f1e9]/75 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed relative z-10">
            {lang === 'ar' 
              ? 'ابدأ الآن بخطوة بسيطة. تواصل معنا لمناقشة فكرتك وسنقدم لك استشارة مجانية حول أفضل الحلول لمشروعك.'
              : 'Start now with a simple step. Contact us to discuss your idea and get a free consultation.'}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] text-white hover:bg-[#1DA851] px-10 py-5 rounded-full font-bold text-xl transition-transform transform hover:scale-105 shadow-xl shadow-green-500/20"
            >
              <MessageCircle className="w-7 h-7" />
              {lang === 'ar' ? 'تواصل معنا عبر واتساب الآن' : 'Contact via WhatsApp Now'}
            </a>
          </div>
          
          <div className="mt-10 flex items-center justify-center gap-8 text-base text-[#f4f1e9]/70 font-bold relative z-10">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-400" /> {lang === 'ar' ? 'استشارة مجانية' : 'Free Consultation'}</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-400" /> {lang === 'ar' ? 'دراسة سريعة' : 'Fast Assessment'}</span>
          </div>
        </div>
      </section>

      {/* Footer spacing for mobile floating button */}
      <div className="h-32 md:h-24 bg-[#0b1020]"></div>
    </div>
  );
};
