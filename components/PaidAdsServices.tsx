import React, { useEffect } from 'react';
import { Language } from '@/types';
import { ArrowLeft, ArrowRight, Target, BarChart3, Zap, CheckCircle2, TrendingUp, Award, Smartphone, MousePointerClick } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';

interface PaidAdsServicesProps {
  lang: Language;
  onBack: () => void;
}

export const PaidAdsServices: React.FC<PaidAdsServicesProps> = ({ lang, onBack }) => {
  const isRTL = lang === 'ar';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: lang === 'en' ? 'Paid Ads Management (PPC) | Google, Meta, TikTok & Snapchat Ads' : 'أفضل شركة إعلانات ممولة في السعودية | جوجل، سناب شات، تيك توك | الرياض، جدة',
    description: lang === 'en' ? 'Maximize your ROAS with our data-driven paid advertising strategies. We specialize in Google Ads, Facebook/Instagram Ads, TikTok Ads, and Snapchat Ads for the Saudi market.' : 'عظم مبيعاتك مع أفضل شركة تسويق وإعلانات ممولة في السعودية. متخصصون في إعلانات جوجل، سناب شات، تيك توك، وميتا للعملاء في الرياض، جدة، الدمام، وكافة مدن المملكة.',
    keywords: lang === 'en' ? 'PPC Agency, Google Ads Saudi Arabia, TikTok Ads Agency, Snapchat Ads, Meta Ads, Paid Social, Performance Marketing' : 'شركة تسويق, وكالة إعلانات ممولة, إعلانات جوجل السعودية, وكالة إعلانات تيك توك, إعلانات سناب شات, إعلانات ميتا, إدارة حملات PPC, شركة تسويق بالرياض, شركة تسويق بجدة, شركة تسويق بالدمام',
  });

  const platforms = [
    {
      icon: <Target className="text-blue-500" size={32} />,
      title: { en: 'Google Ads (PPC)', ar: 'إعلانات جوجل (Google Ads)' },
      desc: { 
        en: 'Capture high-intent customers exactly when they are searching for your products or services. We manage Search, Shopping, and YouTube campaigns.',
        ar: 'اقتنص العملاء ذوي النية العالية للشراء في اللحظة التي يبحثون فيها عن منتجاتك أو خدماتك. ندير حملات البحث، التسوق، ويوتيوب.'
      },
      features: {
        en: ['Keyword Research & Selection', 'Ad Copywriting & Extensions', 'Bid Management & Optimization', 'Conversion Tracking Setup', 'Negative Keyword Filtering'],
        ar: ['بحث واختيار الكلمات المفتاحية', 'كتابة النصوص الإعلانية والإضافات', 'إدارة المزايدات والتحسين', 'إعداد تتبع التحويلات', 'تصفية الكلمات السلبية']
      }
    },
    {
      icon: <Smartphone className="text-pink-500" size={32} />,
      title: { en: 'Social Media Ads', ar: 'إعلانات التواصل الاجتماعي' },
      desc: {
        en: 'Reach your ideal audience on Meta (Facebook/Instagram), TikTok, and Snapchat with engaging creatives that drive action.',
        ar: 'وصل لجمهورك المثالي على ميتا (فيسبوك/إنستغرام)، تيك توك، وسناب شات بتصاميم جذابة تدفعهم لاتخاذ إجراء.'
      },
      features: {
        en: ['Audience Segmentation & Targeting', 'Creative Strategy & A/B Testing', 'Pixel & CAPI Setup', 'Retargeting Campaigns', 'Influencer Whitelisting'],
        ar: ['تقسيم واستهداف الجمهور', 'استراتيجية المحتوى واختبار A/B', 'إعداد البيكسل و CAPI', 'حملات إعادة الاستهداف', 'إعلانات المؤثرين (Whitelisting)']
      }
    },
    {
      icon: <BarChart3 className="text-emerald-500" size={32} />,
      title: { en: 'Performance Analytics', ar: 'تحليل الأداء والتقارير' },
      desc: {
        en: 'We don\'t guess; we measure. Get transparent, real-time reporting on your ad spend, ROAS, and CPA to make informed decisions.',
        ar: 'نحن لا نخمن؛ نحن نقيس. احصل على تقارير شفافة ولحظية حول إنفاقك الإعلاني، العائد على الاستثمار، وتكلفة الاستحواذ لاتخاذ قرارات مدروسة.'
      },
      features: {
        en: ['Custom Dashboards (Looker Studio)', 'Attribution Modeling', 'Competitor Analysis', 'Weekly Performance Calls', 'ROI Forecasting'],
        ar: ['لوحات تحكم مخصصة (Looker Studio)', 'نمذجة الإسناد (Attribution)', 'تحليل المنافسين', 'مكالمات أداء أسبوعية', 'توقعات العائد على الاستثمار']
      }
    }
  ];

  const caseStudy = {
    client: { en: 'Moda Fashion KSA', ar: 'مودا فاشن السعودية' },
    industry: { en: 'Fashion E-Commerce', ar: 'تجارة الأزياء الإلكترونية' },
    duration: { en: '3 Months', ar: '3 أشهر' },
    challenge: {
      en: 'The brand was struggling with high CPA on Snapchat and low conversion rates on their website. They were burning budget with little return.',
      ar: 'كانت العلامة التجارية تعاني من ارتفاع تكلفة الاستحواذ (CPA) على سناب شات وانخفاض معدلات التحويل على موقعهم. كانوا يحرقون الميزانية بعائد قليل.'
    },
    solution: {
      en: 'We restructured their Snapchat ad account, introduced UGC creatives on TikTok, and implemented dynamic retargeting on Meta. We also optimized their landing pages for mobile speed.',
      ar: 'أعدنا هيكلة حساب إعلانات سناب شات، وأدخلنا محتوى UGC على تيك توك، ونفذنا إعادة استهداف ديناميكية على ميتا. قمنا أيضاً بتحسين صفحات الهبوط لسرعة الجوال.'
    },
    results: [
      { metric: '8.5x', label: { en: 'ROAS (Return on Ad Spend)', ar: 'العائد على الإنفاق الإعلاني' } },
      { metric: '-45%', label: { en: 'CPA Reduction', ar: 'انخفاض تكلفة الاستحواذ' } },
      { metric: '+200%', label: { en: 'Monthly Revenue', ar: 'الإيرادات الشهرية' } },
      { metric: '15k+', label: { en: 'New Customers', ar: 'عملاء جدد' } }
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
              {lang === 'en' ? 'Paid Ads Services' : 'خدمات الإعلانات الممولة'}
           </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center mt-8">
          <div className="w-20 h-20 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-xl border border-purple-500/30">
            <MousePointerClick size={40} className="text-purple-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            {lang === 'en' ? 'Scale Your Revenue Fast' : 'ضاعف إيراداتك بسرعة'}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {lang === 'en' 
              ? 'Stop wasting budget on clicks that don\'t convert. We build high-performance campaigns that turn ad spend into profit.'
              : 'توقف عن إهدار ميزانيتك على نقرات لا تتحول لبيع. نحن نبني حملات عالية الأداء تحول الإنفاق الإعلاني إلى أرباح حقيقية.'}
          </p>
        </div>
      </div>

      {/* Platforms Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map((platform, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100">
                {platform.icon}
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{platform.title[lang]}</h2>
              <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                {platform.desc[lang]}
              </p>
              <ul className="space-y-3">
                {platform.features[lang].map((feature, fIdx) => (
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
          <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-2 block">
            {lang === 'en' ? 'Success Story' : 'قصة نجاح'}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            {lang === 'en' ? 'PPC Case Study' : 'دراسة حالة إعلانات'}
          </h2>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-slate-900 p-10 text-white flex flex-col justify-center">
            <Award size={48} className="text-purple-400 mb-6" />
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
                  <span className="block text-2xl md:text-3xl font-black text-purple-600 mb-1">{result.metric}</span>
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
            {lang === 'en' ? 'Ready to scale your ads?' : 'مستعد لتوسيع حملاتك الإعلانية؟'}
          </h2>
        <a 
          href={`https://wa.me/201010742430?text=${encodeURIComponent(lang === 'en' ? "Hi, I'm interested in your Paid Ads Services." : "مرحباً، أنا مهتم بخدمات الإعلانات الممولة.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-purple-600 text-white rounded-full font-bold text-lg hover:bg-purple-700 transition-all shadow-lg shadow-purple-600/30 hover:-translate-y-1"
        >
          {lang === 'en' ? 'Get a Free Ad Audit' : 'احصل على تدقيق إعلاني مجاني'}
          <ArrowRight size={20} className={isRTL ? 'rotate-180' : ''} />
        </a>
      </div>
    </div>
  );
};
