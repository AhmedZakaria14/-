import React, { useEffect } from 'react';
import { Language } from '../types';
import { ArrowLeft, ArrowRight, Target, BarChart3, Zap, CheckCircle2, TrendingUp, Award, Smartphone, MousePointerClick } from 'lucide-react';
import { updateSEO } from '../utils/seo';
import { Breadcrumb } from './Breadcrumb';

interface PaidAdsServicesProps {
  lang: Language;
  onBack: () => void;
  isPage?: boolean;
}

export const PaidAdsServices: React.FC<PaidAdsServicesProps> = ({ lang, onBack, isPage = true }) => {
  const isRTL = lang === 'ar';
  const HeadingTag = isPage ? 'h1' : 'h2';

  useEffect(() => {
    window.scrollTo(0, 0);

    const title = lang === 'en' ? 'Paid Ads Services & PPC Management | Nashar Hub' : 'شركة إدارة حملات إعلانية ممولة في السعودية | نشار هب';
    const description = lang === 'en' ? 'Scale your revenue with high-performance Google Ads, Meta Ads, TikTok, and Snapchat campaigns.' : 'شركة إدارة إعلانات ممولة في السعودية. ندير حملات إعلانات جوجل، سناب شات، تيك توك، وميتا لزيادة المبيعات وعائد الاستثمار.';
    const keywords = lang === 'en' ? 'Paid Ads, PPC Management, Google Ads Agency, Social Media Ads' : 'اعلانات ممولة, ادارة حملات اعلانية, إعلانات جوجل, سناب شات, تيك توك, شركة تسويق, السعودية';

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": lang === 'en' ? "What is the best advertising platform in Saudi Arabia?" : "ما هي أفضل منصة إعلانية في السعودية؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": lang === 'en' 
              ? "The best platform depends on your target audience and goals. Google Ads is excellent for high-intent searches, while Snapchat and TikTok are highly effective for reaching younger demographics and driving brand awareness in Saudi Arabia. Meta (Instagram/Facebook) remains a strong all-rounder." 
              : "تعتمد أفضل منصة على جمهورك المستهدف وأهدافك. إعلانات جوجل ممتازة لعمليات البحث ذات النية العالية، بينما سناب شات وتيك توك فعالان للغاية للوصول إلى الفئات العمرية الشابة وزيادة الوعي بالعلامة التجارية في السعودية. تظل ميتا (إنستغرام/فيسبوك) خياراً قوياً شاملاً."
          }
        },
        {
          "@type": "Question",
          "name": lang === 'en' ? "What is the required budget to start paid ads?" : "كم الميزانية المطلوبة للبدء في الإعلانات الممولة؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": lang === 'en' 
              ? "We recommend a starting budget that allows for sufficient data collection and testing, typically around $1,000 to $3,000 per month depending on the industry and platforms used. We optimize this budget to maximize your return." 
              : "نوصي بميزانية أولية تسمح بجمع بيانات واختبارات كافية، وعادة ما تتراوح بين 1000 إلى 3000 دولار شهرياً اعتماداً على الصناعة والمنصات المستخدمة. نحن نحسن هذه الميزانية لتعظيم العائد."
          }
        },
        {
          "@type": "Question",
          "name": lang === 'en' ? "How do you guarantee the success of ad campaigns?" : "كيف تضمنون نجاح الحملات الإعلانية؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": lang === 'en' 
              ? "We rely on data-driven strategies, continuous A/B testing, precise audience targeting, and advanced conversion tracking. While no one can guarantee specific numbers, our methodology consistently delivers high ROAS for our clients." 
              : "نعتمد على استراتيجيات مبنية على البيانات، واختبار A/B المستمر، واستهداف دقيق للجمهور، وتتبع متقدم للتحويلات. على الرغم من أنه لا يمكن لأحد ضمان أرقام محددة، إلا أن منهجيتنا تحقق باستمرار عائداً عالياً على الإنفاق الإعلاني (ROAS) لعملائنا."
          }
        },
        {
          "@type": "Question",
          "name": lang === 'en' ? "What is the expected Return on Ad Spend (ROAS)?" : "ما هو العائد على الإنفاق الإعلاني (ROAS) المتوقع؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": lang === 'en' 
              ? "ROAS varies widely by industry, product margin, and campaign maturity. Our goal is always to achieve a profitable ROAS that scales your business. We set realistic benchmarks during our initial strategy phase." 
              : "يختلف العائد على الإنفاق الإعلاني (ROAS) بشكل كبير حسب الصناعة، وهامش ربح المنتج، ونضج الحملة. هدفنا دائماً هو تحقيق عائد مربح ينمي عملك. نضع معايير واقعية خلال مرحلة الاستراتيجية الأولية."
          }
        }
      ]
    };

    updateSEO({
      title,
      description,
      keywords,
      url: 'https://nasharhub.com/paid-ads-services',
      image: 'https://nasharhub.com/og-image.jpg',
      structuredData: faqSchema
    });
  }, [lang]);

  const faqs = [
    {
      q: { en: "What is the best advertising platform in Saudi Arabia?", ar: "ما هي أفضل منصة إعلانية في السعودية؟" },
      a: { 
        en: "The best platform depends on your target audience and goals. Google Ads is excellent for high-intent searches, while Snapchat and TikTok are highly effective for reaching younger demographics and driving brand awareness in Saudi Arabia. Meta (Instagram/Facebook) remains a strong all-rounder.", 
        ar: "تعتمد أفضل منصة على جمهورك المستهدف وأهدافك. إعلانات جوجل ممتازة لعمليات البحث ذات النية العالية، بينما سناب شات وتيك توك فعالان للغاية للوصول إلى الفئات العمرية الشابة وزيادة الوعي بالعلامة التجارية في السعودية. تظل ميتا (إنستغرام/فيسبوك) خياراً قوياً شاملاً." 
      }
    },
    {
      q: { en: "What is the required budget to start paid ads?", ar: "كم الميزانية المطلوبة للبدء في الإعلانات الممولة؟" },
      a: { 
        en: "We recommend a starting budget that allows for sufficient data collection and testing, typically around $1,000 to $3,000 per month depending on the industry and platforms used. We optimize this budget to maximize your return.", 
        ar: "نوصي بميزانية أولية تسمح بجمع بيانات واختبارات كافية، وعادة ما تتراوح بين 1000 إلى 3000 دولار شهرياً اعتماداً على الصناعة والمنصات المستخدمة. نحن نحسن هذه الميزانية لتعظيم العائد." 
      }
    },
    {
      q: { en: "How do you guarantee the success of ad campaigns?", ar: "كيف تضمنون نجاح الحملات الإعلانية؟" },
      a: { 
        en: "We rely on data-driven strategies, continuous A/B testing, precise audience targeting, and advanced conversion tracking. While no one can guarantee specific numbers, our methodology consistently delivers high ROAS for our clients.", 
        ar: "نعتمد على استراتيجيات مبنية على البيانات، واختبار A/B المستمر، واستهداف دقيق للجمهور، وتتبع متقدم للتحويلات. على الرغم من أنه لا يمكن لأحد ضمان أرقام محددة، إلا أن منهجيتنا تحقق باستمرار عائداً عالياً على الإنفاق الإعلاني (ROAS) لعملائنا." 
      }
    },
    {
      q: { en: "What is the expected Return on Ad Spend (ROAS)?", ar: "ما هو العائد على الإنفاق الإعلاني (ROAS) المتوقع؟" },
      a: { 
        en: "ROAS varies widely by industry, product margin, and campaign maturity. Our goal is always to achieve a profitable ROAS that scales your business. We set realistic benchmarks during our initial strategy phase.", 
        ar: "يختلف العائد على الإنفاق الإعلاني (ROAS) بشكل كبير حسب الصناعة، وهامش ربح المنتج، ونضج الحملة. هدفنا دائماً هو تحقيق عائد مربح ينمي عملك. نضع معايير واقعية خلال مرحلة الاستراتيجية الأولية." 
      }
    }
  ];

  const platforms = [
    {
      icon: <Target className="text-blue-500" size={32} />,
      title: { en: 'Google Ads (PPC)', ar: 'إعلانات جوجل (Google Ads)' },
      desc: { 
        en: 'Capture high-intent customers exactly when they are searching for your products or services. Our Google Ads management focuses on maximizing your return on ad spend (ROAS) through precise keyword targeting, compelling ad copy, and continuous bid optimization. We manage everything from Search and Display to YouTube and Performance Max campaigns, ensuring your brand appears at the very top of search results when it matters most.',
        ar: 'اقتنص العملاء ذوي النية العالية للشراء في اللحظة التي يبحثون فيها عن منتجاتك أو خدماتك. تركز إدارتنا لإعلانات جوجل على تعظيم العائد على الإنفاق الإعلاني (ROAS) من خلال استهداف دقيق للكلمات المفتاحية، ونصوص إعلانية جذابة، وتحسين مستمر للمزايدات. نحن ندير كل شيء من حملات البحث والعرض إلى يوتيوب و Performance Max، مما يضمن ظهور علامتك التجارية في قمة نتائج البحث عندما يكون ذلك مهماً.'
      },
      features: {
        en: ['Strategic Keyword Research & Selection', 'High-Converting Ad Copywriting', 'Advanced Bid Management & Optimization', 'Full Conversion Tracking & Attribution', 'Negative Keyword Filtering & Quality Score Improvement'],
        ar: ['بحث واختيار استراتيجي للكلمات المفتاحية', 'كتابة نصوص إعلانية عالية التحويل', 'إدارة متقدمة للمزايدات والتحسين', 'تتبع كامل للتحويلات والإسناد', 'تصفية الكلمات السلبية وتحسين درجة الجودة']
      }
    },
    {
      icon: <Smartphone className="text-pink-500" size={32} />,
      title: { en: 'Social Media Ads', ar: 'إعلانات التواصل الاجتماعي' },
      desc: {
        en: 'Reach your ideal audience on Meta (Facebook/Instagram), TikTok, and Snapchat with engaging creatives that drive action. We specialize in crafting visually stunning and psychologically compelling ad campaigns that resonate with the Saudi audience. By leveraging advanced targeting options and creative A/B testing, we ensure your message reaches the right people at the right time, driving both brand awareness and direct sales.',
        ar: 'وصل لجمهورك المثالي على ميتا (فيسبوك/إنستغرام)، تيك توك، وسناب شات بتصاميم جذابة تدفعهم لاتخاذ إجراء. نحن متخصصون في صياغة حملات إعلانية مذهلة بصرياً ومقنعة نفسياً تلقى صدى لدى الجمهور السعودي. من خلال الاستفادة من خيارات الاستهداف المتقدمة واختبار A/B للمحتوى الإبداعي، نضمن وصول رسالتك إلى الأشخاص المناسبين في الوقت المناسب، مما يعزز الوعي بالعلامة التجارية والمبيعات المباشرة.'
      },
      features: {
        en: ['Granular Audience Segmentation & Targeting', 'Creative Strategy & Continuous A/B Testing', 'Pixel, CAPI & SDK Technical Setup', 'Advanced Retargeting & Lookalike Audiences', 'Influencer Whitelisting & Paid Social Integration'],
        ar: ['تقسيم واستهداف دقيق للجمهور', 'استراتيجية إبداعية واختبار A/B مستمر', 'إعداد تقني للبيكسل و CAPI و SDK', 'إعادة استهداف متقدمة وجماهير مشابهة', 'إعلانات المؤثرين وتكامل التواصل الاجتماعي الممول']
      }
    },
    {
      icon: <BarChart3 className="text-emerald-500" size={32} />,
      title: { en: 'Performance Analytics', ar: 'تحليل الأداء والتقارير' },
      desc: {
        en: 'We don\'t guess; we measure. Data is the heartbeat of our paid advertising strategy. We provide transparent, real-time reporting that gives you a clear view of your ad spend, ROAS, and CPA. Our team of analysts dives deep into the numbers to identify growth opportunities and eliminate waste. We use advanced attribution modeling to understand the full customer journey and optimize your budget for maximum impact.',
        ar: 'نحن لا نخمن؛ نحن نقيس. البيانات هي نبض استراتيجيتنا للإعلانات الممولة. نحن نوفر تقارير شفافة ولحظية تمنحك رؤية واضحة لإنفاقك الإعلاني، والعائد على الاستثمار، وتكلفة الاستحواذ. يغوص فريق المحللين لدينا في الأرقام لتحديد فرص النمو والقضاء على الهدر. نحن نستخدم نمذجة الإسناد المتقدمة لفهم رحلة العميل الكاملة وتحسين ميزانيتك لتحقيق أقصى قدر من التأثير.'
      },
      features: {
        en: ['Custom Real-Time Dashboards (Looker Studio)', 'Multi-Touch Attribution Modeling', 'In-Depth Competitor Ad Analysis', 'Weekly Performance Reviews & Strategy Calls', 'Data-Driven ROI Forecasting & Budget Planning'],
        ar: ['لوحات تحكم لحظية مخصصة (Looker Studio)', 'نمذجة الإسناد متعدد اللمس', 'تحليل متعمق لإعلانات المنافسين', 'مراجعات أداء أسبوعية ومكالمات استراتيجية', 'توقعات العائد على الاستثمار وتخطيط الميزانية']
      }
    }
  ];

  const whyPaidAds = [
    {
      title: { en: 'Instant Visibility', ar: 'ظهور فوري' },
      desc: { en: 'Get your brand in front of potential customers immediately, without waiting for organic growth.', ar: 'ضع علامتك التجارية أمام العملاء المحتملين على الفور، دون انتظار النمو المجاني.' }
    },
    {
      title: { en: 'Laser-Focused Targeting', ar: 'استهداف دقيق' },
      desc: { en: 'Reach people based on their interests, behaviors, location, and even the specific keywords they search for.', ar: 'صل للأشخاص بناءً على اهتماماتهم، سلوكياتهم، موقعهم، وحتى الكلمات المفتاحية المحددة التي يبحثون عنها.' }
    },
    {
      title: { en: 'Measurable Results', ar: 'نتائج قابلة للقياس' },
      desc: { en: 'Track every riyal spent and see exactly how much revenue each campaign is generating for your business.', ar: 'تتبع كل ريال يتم إنفاقه وشاهد بالضبط مقدار الإيرادات التي تحققها كل حملة لعملك.' }
    }
  ];

  const caseStudy = {
    client: { en: 'Moda Fashion KSA', ar: 'مودا فاشن السعودية' },
    industry: { en: 'Fashion E-Commerce', ar: 'تجارة الأزياء الإلكترونية' },
    duration: { en: '3 Months', ar: '3 أشهر' },
    challenge: {
      en: 'The brand was struggling with high CPA on Snapchat and low conversion rates on their website. They were burning budget with little return and lacked a clear strategy for scaling their online sales in the competitive Saudi fashion market.',
      ar: 'كانت العلامة التجارية تعاني من ارتفاع تكلفة الاستحواذ (CPA) على سناب شات وانخفاض معدلات التحويل على موقعهم. كانوا يحرقون الميزانية بعائد قليل ويفتقرون إلى استراتيجية واضحة لتوسيع مبيعاتهم عبر الإنترنت في سوق الأزياء السعودي التنافسي.'
    },
    solution: {
      en: 'We restructured their Snapchat ad account, introduced high-energy UGC creatives on TikTok, and implemented dynamic retargeting on Meta. We also optimized their landing pages for mobile speed and conversion rate optimization (CRO).',
      ar: 'أعدنا هيكلة حساب إعلانات سناب شات، وأدخلنا محتوى UGC عالي الطاقة على تيك توك، ونفذنا إعادة استهداف ديناميكية على ميتا. قمنا أيضاً بتحسين صفحات الهبوط لسرعة الجوال وتحسين معدل التحويل (CRO).'
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
      {/* Breadcrumb - Added for SEO */}
      <div className="max-w-7xl mx-auto px-6 pt-24 -mb-16 relative z-30">
        <Breadcrumb 
          lang={lang} 
          items={[{ label: lang === 'en' ? 'Paid Ads' : 'إعلانات جوجل الممولة', href: '/paid-ads-services' }]} 
        />
      </div>

      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white pt-24 pb-32 overflow-hidden rounded-b-[3rem]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-center items-center z-50">
           <div className="px-4 py-1.5 rounded-full backdrop-blur-md text-xs font-bold uppercase tracking-widest bg-white/10 text-white border border-white/20">
              {lang === 'en' ? 'Paid Ads Services' : 'خدمات الإعلانات الممولة'}
           </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center mt-8">
          <div className="w-20 h-20 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-xl border border-purple-500/30">
            <MousePointerClick size={40} className="text-purple-400" />
          </div>
          <HeadingTag className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            {lang === 'en' ? 'Scale Your Revenue Fast' : 'ضاعف إيراداتك بسرعة مع إعلانات جوجل'}
          </HeadingTag>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {lang === 'en' 
              ? 'Stop wasting budget on clicks that don\'t convert. We build high-performance, data-backed campaigns that turn every riyal of ad spend into measurable profit.'
              : 'توقف عن إهدار ميزانيتك على نقرات لا تتحول لبيع. نحن نبني حملات عالية الأداء مدعومة بالبيانات تحول كل ريال من الإنفاق الإعلاني إلى أرباح ملموسة.'}
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

      {/* Why Paid Ads Section */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            {lang === 'en' ? 'The Power of Targeted Advertising' : 'قوة الإعلانات المستهدفة'}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            {lang === 'en' 
              ? 'Paid advertising is the fastest way to grow your business. Here is why it should be a core part of your digital marketing strategy.'
              : 'الإعلانات الممولة هي أسرع وسيلة لتنمية عملك. إليك سبب وجوب كونها جزءاً أساسياً من استراتيجيتك للتسويق الرقمي.'}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyPaidAds.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title[lang]}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc[lang]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-6 mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            {lang === 'en' ? 'Frequently Asked Questions' : 'الأسئلة الشائعة'}
          </h2>
          <p className="text-slate-500">
            {lang === 'en' ? 'Common questions about our paid advertising services.' : 'أسئلة شائعة حول خدمات الإعلانات الممولة لدينا.'}
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q[lang]}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{faq.a[lang]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-6 mt-24 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-6">
            {lang === 'en' ? 'Ready to scale your ads?' : 'مستعد لتوسيع حملاتك الإعلانية؟'}
          </h2>
          <p className="text-slate-500 mb-10 max-w-2xl mx-auto">
            {lang === 'en' 
              ? 'Stop guessing and start growing. Contact us today for a free ad account audit and let\'s build a high-performance advertising strategy for your brand.'
              : 'توقف عن التخمين وابدأ في النمو. اتصل بنا اليوم لإجراء تدقيق مجاني لحسابك الإعلاني ولنبني استراتيجية إعلانية عالية الأداء لعلامتك التجارية.'}
          </p>
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
