import React, { useEffect } from 'react';
import { Language } from '../types';
import { ArrowLeft, ArrowRight, Search, BarChart3, Globe, Zap, CheckCircle2, TrendingUp, Award, Target } from 'lucide-react';
import { updateSEO } from '../utils/seo';
import { Breadcrumb } from './Breadcrumb';

interface SEOServicesProps {
  lang: Language;
  onBack: () => void;
  isPage?: boolean;
}

export const SEOServices: React.FC<SEOServicesProps> = ({ lang, onBack, isPage = true }) => {
  const isRTL = lang === 'ar';
  const HeadingTag = isPage ? 'h1' : 'h2';

  useEffect(() => {
    window.scrollTo(0, 0);

    const title = lang === 'en' ? 'Advanced SEO Services & Organic Growth | Nashar Hub' : 'خدمات السيو SEO في السعودية | نشار هب - تصدر جوجل';
    const description = lang === 'en' ? 'Dominate search rankings with our comprehensive SEO strategies including On-Page, Off-Page, and Technical SEO. Serving all of KSA.' : 'خدمات تحسين محركات البحث SEO المتكاملة في السعودية. سيو داخلي وخارجي وتقني لتصدر نتائج جوجل وزيادة الزيارات المجانية.';
    const keywords = lang === 'en' ? 'SEO Services, On-Page SEO, Off-Page SEO, Technical SEO, SEO Case Study, Organic Growth, Search Engine Optimization' : 'شركة سيو, خدمات سيو, تحسين محركات البحث, سيو داخلي, سيو خارجي, تصدر نتائج البحث, خبير سيو الرياض, سيو جدة, سيو الدمام, شركة سيو السعودية, سيو';

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": lang === 'en' ? "How do I improve my website ranking on Google?" : "كيف أحسن ترتيب موقعي في جوجل؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": lang === 'en' 
              ? "Improving your Google ranking requires a combination of Technical SEO (fast loading, mobile-friendly), On-Page SEO (optimizing content for target keywords), and Off-Page SEO (building high-quality backlinks). We provide a comprehensive strategy covering all these aspects." 
              : "تحسين ترتيب موقعك يتطلب مزيجاً من السيو التقني (سرعة الموقع، التوافق مع الجوال)، السيو الداخلي (تحسين المحتوى للكلمات المفتاحية المستهدفة)، والسيو الخارجي (بناء روابط خلفية عالية الجودة). نحن نقدم استراتيجية شاملة تغطي كل هذه الجوانب."
          }
        },
        {
          "@type": "Question",
          "name": lang === 'en' ? "How long does SEO take to show results?" : "كم يستغرق السيو للظهور في الصفحة الأولى؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": lang === 'en' 
              ? "SEO is a long-term strategy. Typically, you can start seeing noticeable improvements in 3 to 6 months, depending on your website's current state, industry competitiveness, and the targeted keywords." 
              : "السيو هو استراتيجية طويلة المدى. عادةً، يمكنك البدء في رؤية تحسن ملحوظ خلال 3 إلى 6 أشهر، اعتماداً على حالة موقعك الحالية، والمنافسة في مجالك، والكلمات المفتاحية المستهدفة."
          }
        },
        {
          "@type": "Question",
          "name": lang === 'en' ? "Is SEO better or Paid Ads?" : "هل السيو أفضل أم الإعلانات الممولة؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": lang === 'en' 
              ? "Both are important. Paid ads provide immediate traffic and sales, while SEO builds sustainable, long-term organic traffic that reduces your overall customer acquisition cost over time. We recommend a combined approach." 
              : "كلاهما مهم. توفر الإعلانات الممولة زيارات ومبيعات فورية، بينما يبني السيو زيارات مجانية مستدامة وطويلة المدى تقلل من تكلفة الاستحواذ على العملاء بمرور الوقت. نوصي بنهج يجمع بين الاثنين."
          }
        },
        {
          "@type": "Question",
          "name": lang === 'en' ? "What is the cost of SEO services in Saudi Arabia?" : "ما هي تكلفة خدمات السيو في السعودية؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": lang === 'en' 
              ? "The cost varies based on the scope of work, website size, and market competition. We offer customized packages tailored to your specific business goals and budget to ensure maximum ROI." 
              : "تختلف التكلفة بناءً على حجم العمل، وحجم الموقع، والمنافسة في السوق. نحن نقدم باقات مخصصة تتناسب مع أهداف عملك وميزانيتك لضمان أقصى عائد على الاستثمار."
          }
        }
      ]
    };

    updateSEO({
      title,
      description,
      keywords,
      url: 'https://nasharhub.com/seo-services',
      image: 'https://nasharhub.com/og-image.jpg',
      structuredData: faqSchema
    });
  }, [lang]);

  const faqs = [
    {
      q: { en: "How do I improve my website ranking on Google?", ar: "كيف أحسن ترتيب موقعي في جوجل؟" },
      a: { 
        en: "Improving your Google ranking requires a combination of Technical SEO (fast loading, mobile-friendly), On-Page SEO (optimizing content for target keywords), and Off-Page SEO (building high-quality backlinks). We provide a comprehensive strategy covering all these aspects.", 
        ar: "تحسين ترتيب موقعك يتطلب مزيجاً من السيو التقني (سرعة الموقع، التوافق مع الجوال)، السيو الداخلي (تحسين المحتوى للكلمات المفتاحية المستهدفة)، والسيو الخارجي (بناء روابط خلفية عالية الجودة). نحن نقدم استراتيجية شاملة تغطي كل هذه الجوانب." 
      }
    },
    {
      q: { en: "How long does SEO take to show results?", ar: "كم يستغرق السيو للظهور في الصفحة الأولى؟" },
      a: { 
        en: "SEO is a long-term strategy. Typically, you can start seeing noticeable improvements in 3 to 6 months, depending on your website's current state, industry competitiveness, and the targeted keywords.", 
        ar: "السيو هو استراتيجية طويلة المدى. عادةً، يمكنك البدء في رؤية تحسن ملحوظ خلال 3 إلى 6 أشهر، اعتماداً على حالة موقعك الحالية، والمنافسة في مجالك، والكلمات المفتاحية المستهدفة." 
      }
    },
    {
      q: { en: "Is SEO better or Paid Ads?", ar: "هل السيو أفضل أم الإعلانات الممولة؟" },
      a: { 
        en: "Both are important. Paid ads provide immediate traffic and sales, while SEO builds sustainable, long-term organic traffic that reduces your overall customer acquisition cost over time. We recommend a combined approach.", 
        ar: "كلاهما مهم. توفر الإعلانات الممولة زيارات ومبيعات فورية، بينما يبني السيو زيارات مجانية مستدامة وطويلة المدى تقلل من تكلفة الاستحواذ على العملاء بمرور الوقت. نوصي بنهج يجمع بين الاثنين." 
      }
    },
    {
      q: { en: "What is the cost of SEO services in Saudi Arabia?", ar: "ما هي تكلفة خدمات السيو في السعودية؟" },
      a: { 
        en: "The cost varies based on the scope of work, website size, and market competition. We offer customized packages tailored to your specific business goals and budget to ensure maximum ROI.", 
        ar: "تختلف التكلفة بناءً على حجم العمل، وحجم الموقع، والمنافسة في السوق. نحن نقدم باقات مخصصة تتناسب مع أهداف عملك وميزانيتك لضمان أقصى عائد على الاستثمار." 
      }
    }
  ];

  const strategies = [
    {
      icon: <Globe className="text-blue-500" size={32} />,
      title: { en: 'On-Page SEO', ar: 'السيو الداخلي (On-Page)' },
      desc: { 
        en: 'Our On-Page SEO services go beyond simple keyword placement. We analyze user intent to ensure your content provides real value while being perfectly optimized for search engine algorithms. We meticulously tune every element of your web pages, from semantic HTML structure to high-quality multimedia integration, ensuring a seamless experience for both users and search bots. Our goal is to make your site the most authoritative source for your target keywords.',
        ar: 'تتجاوز خدمات السيو الداخلي لدينا مجرد وضع الكلمات المفتاحية البسيطة. نحن نحلل نية المستخدم لضمان أن المحتوى الخاص بك يوفر قيمة حقيقية مع كونه محسناً تماماً لخوارزميات محركات البحث. نقوم بضبط كل عنصر في صفحات الويب الخاصة بك بدقة، من هيكل HTML الدلالي إلى تكامل الوسائط المتعددة عالية الجودة، مما يضمن تجربة سلسة لكل من المستخدمين وروبوتات البحث. هدفنا هو جعل موقعك المصدر الأكثر موثوقية للكلمات المفتاحية المستهدفة.'
      },
      features: {
        en: ['Deep Keyword Research & Intent Mapping', 'Semantic Content Optimization', 'Advanced Meta Tag Tuning', 'Strategic Internal Linking', 'Dynamic URL Structure Optimization'],
        ar: ['بحث عميق للكلمات المفتاحية وتحليل النية', 'تحسين المحتوى الدلالي', 'ضبط متقدم للعلامات الوصفية', 'الروابط الداخلية الاستراتيجية', 'تحسين هيكل الروابط الديناميكي']
      }
    },
    {
      icon: <Zap className="text-amber-500" size={32} />,
      title: { en: 'Technical SEO', ar: 'السيو التقني (Technical)' },
      desc: {
        en: 'Technical SEO is the foundation of your digital presence. We conduct rigorous audits to identify and resolve underlying issues that might be hindering your search visibility. From optimizing server response times to implementing complex schema markups, we ensure your website\'s infrastructure is robust and search-engine friendly. We focus on Core Web Vitals to provide a lightning-fast experience that Google loves and users appreciate.',
        ar: 'السيو التقني هو أساس تواجدك الرقمي. نحن نجري عمليات تدقيق صارمة لتحديد وحل المشكلات الكامنة التي قد تعيق ظهورك في البحث. من تحسين أوقات استجابة الخادم إلى تنفيذ ترميزات المخطط المعقدة، نضمن أن البنية التحتية لموقعك قوية وصديقة لمحركات البحث. نحن نركز على مؤشرات الويب الأساسية لتوفير تجربة سريعة للغاية يحبها جوجل ويقدرها المستخدمون.'
      },
      features: {
        en: ['Core Web Vitals & Speed Optimization', 'Mobile-First Indexing Audit', 'Advanced XML Sitemaps & Robots.txt', 'Custom Schema Markup Implementation', 'Comprehensive Crawl Error Resolution'],
        ar: ['تحسين مؤشرات الويب والسرعة', 'تدقيق الفهرسة للجوال أولاً', 'خرائط XML وملفات Robots.txt متقدمة', 'تطبيق بيانات منظمة مخصصة', 'حل شامل لأخطاء الزحف']
      }
    },
    {
      icon: <Target className="text-emerald-500" size={32} />,
      title: { en: 'Off-Page SEO', ar: 'السيو الخارجي (Off-Page)' },
      desc: {
        en: 'Building authority in the digital space requires a strategic approach to Off-Page SEO. We execute sophisticated link-building campaigns that focus on quality over quantity, acquiring backlinks from high-authority, relevant websites that pass real ranking power. Our digital PR strategies help build brand mentions and social signals that reinforce your website\'s reputation as a leader in your industry within the Saudi market.',
        ar: 'يتطلب بناء السلطة في الفضاء الرقمي نهجاً استراتيجياً للسيو الخارجي. نحن ننفذ حملات بناء روابط متطورة تركز على الجودة بدلاً من الكمية، ونحصل على روابط خلفية من مواقع ذات سلطة عالية وصلة تمرر قوة تصنيف حقيقية. تساعد استراتيجيات العلاقات العامة الرقمية لدينا في بناء إشارات العلامة التجارية والإشارات الاجتماعية التي تعزز سمعة موقعك كقائد في صناعتك داخل السوق السعودي.'
      },
      features: {
        en: ['High-Authority Niche Link Building', 'Strategic Digital PR & Outreach', 'Advanced Local SEO & GMB Optimization', 'Brand Reputation Management', 'In-Depth Competitor Backlink Analysis'],
        ar: ['بناء روابط متخصصة عالية الموثوقية', 'علاقات عامة رقمية وتواصل استراتيجي', 'سيو محلي متقدم وتحسين GMB', 'إدارة سمعة العلامة التجارية', 'تحليل متعمق للروابط الخلفية للمنافسين']
      }
    }
  ];

  const whySEOMatters = [
    {
      title: { en: 'Sustainable Growth', ar: 'نمو مستدام' },
      desc: { en: 'Unlike paid ads, SEO provides long-term results that continue to drive traffic and leads long after the initial investment.', ar: 'على عكس الإعلانات الممولة، يوفر السيو نتائج طويلة المدى تستمر في دفع الزيارات والعملاء بعد فترة طويلة من الاستثمار الأولي.' }
    },
    {
      title: { en: 'Higher Trust & Credibility', ar: 'ثقة ومصداقية أعلى' },
      desc: { en: 'Users trust organic search results more than paid advertisements. Ranking at the top signals authority and reliability.', ar: 'يثق المستخدمون في نتائج البحث المجانية أكثر من الإعلانات الممولة. الترتيب في الأعلى يشير إلى السلطة والموثوقية.' }
    },
    {
      title: { en: 'Better User Experience', ar: 'تجربة مستخدم أفضل' },
      desc: { en: 'SEO involves optimizing site speed and navigation, which directly improves the overall experience for your visitors.', ar: 'يتضمن السيو تحسين سرعة الموقع والتنقل، مما يحسن بشكل مباشر التجربة العامة لزوارك.' }
    }
  ];

  const caseStudy = {
    client: { en: 'Oud Luxury E-Commerce', ar: 'متجر عود لكشري الإلكتروني' },
    industry: { en: 'Fragrance & Perfumes', ar: 'العطور والبخور' },
    duration: { en: '6 Months', ar: '6 أشهر' },
    challenge: {
      en: 'The client had a beautiful website but struggled with low organic traffic and high dependency on paid ads. They ranked on page 4 for their main money keywords, missing out on thousands of potential customers searching for high-end fragrances in Saudi Arabia.',
      ar: 'كان لدى العميل موقع جميل ولكنه عانى من انخفاض الزيارات المجانية والاعتماد الكبير على الإعلانات الممولة. كانوا في الصفحة الرابعة للكلمات المفتاحية الرئيسية، مما أدى إلى ضياع آلاف العملاء المحتملين الذين يبحثون عن عطور فاخرة في السعودية.'
    },
    solution: {
      en: 'We conducted a comprehensive technical audit, fixed 120+ crawl errors, optimized category pages with long-tail keywords, and acquired 45 high-authority backlinks from relevant niche sites. We also implemented a content strategy focused on fragrance guides and reviews.',
      ar: 'أجرينا تدقيقاً تقنياً شاملاً، وأصلحنا أكثر من 120 خطأ زحف، وقمنا بتحسين صفحات الأقسام بكلمات مفتاحية طويلة الذيل، وحصلنا على 45 رابط خلفي عالي الجودة من مواقع ذات صلة. كما نفذنا استراتيجية محتوى تركز على أدلة العطور والمراجعات.'
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
      {/* Breadcrumb - Added for SEO */}
      <div className="max-w-7xl mx-auto px-6 pt-24 -mb-16 relative z-30">
        <Breadcrumb 
          lang={lang} 
          items={[{ label: lang === 'en' ? 'SEO Services' : 'خدمات السيو في السعودية', href: '/seo-services' }]} 
        />
      </div>

      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white pt-24 pb-32 overflow-hidden rounded-b-[3rem]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-center items-center z-50">
           <div className="px-4 py-1.5 rounded-full backdrop-blur-md text-xs font-bold uppercase tracking-widest bg-white/10 text-white border border-white/20">
              {lang === 'en' ? 'SEO Services' : 'خدمات السيو'}
           </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center mt-8">
          <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-xl border border-blue-500/30">
            <Search size={40} className="text-blue-400" />
          </div>
          <HeadingTag className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            {lang === 'en' ? 'Dominate Search Results' : 'تصدر نتائج محركات البحث'}
          </HeadingTag>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {lang === 'en' 
              ? 'Stop hiding on page 2. Our data-driven SEO strategies turn your website into a 24/7 lead generation machine that works while you sleep.'
              : 'توقف عن الاختباء في الصفحة الثانية. استراتيجيات السيو المبنية على البيانات لدينا تحول موقعك إلى آلة لجلب العملاء تعمل على مدار الساعة حتى أثناء نومك.'}
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

      {/* Why SEO Matters Section */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            {lang === 'en' ? 'Why SEO is Vital for Your Business' : 'لماذا السيو حيوي لعملك'}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            {lang === 'en' 
              ? 'In the digital age, being discoverable is not an option—it\'s a necessity. Here is why investing in SEO is the smartest move for your brand.'
              : 'في العصر الرقمي، لا يعد كونك قابلاً للاكتشاف خياراً - بل هو ضرورة. إليك سبب كون الاستثمار في السيو هو أذكى خطوة لعلامتك التجارية.'}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whySEOMatters.map((item, idx) => (
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
            {lang === 'en' ? 'Common questions about our SEO services.' : 'أسئلة شائعة حول خدمات تحسين محركات البحث لدينا.'}
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
            {lang === 'en' ? 'Ready to dominate your niche?' : 'هل أنت مستعد لتصدر مجالك؟'}
          </h2>
          <p className="text-slate-500 mb-10 max-w-2xl mx-auto">
            {lang === 'en' 
              ? 'Don\'t let your competitors take all the traffic. Contact us today for a comprehensive SEO audit and discover the hidden potential of your website.'
              : 'لا تدع منافسيك يأخذون كل الزيارات. اتصل بنا اليوم لإجراء تدقيق شامل للسيو واكتشف الإمكانات الخفية لموقعك.'}
          </p>
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
