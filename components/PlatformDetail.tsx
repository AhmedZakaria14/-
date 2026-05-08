
import React, { useEffect, useState } from 'react';
import { Language } from '@/types';
import { ArrowLeft, ArrowRight, CheckCircle2, Zap, Target, BarChart3, MessageCircle, TrendingUp, Users, Award, MousePointerClick } from 'lucide-react';
import { Globe, Instagram, Music, Ghost, Linkedin } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';

interface PlatformDetailProps {
  platformId: string;
  lang: Language;
  onBack: () => void;
  onWebsiteClick?: () => void;
}

export const PlatformDetail: React.FC<PlatformDetailProps> = ({ platformId, lang, onBack, onWebsiteClick }) => {
  const isRTL = lang === 'ar';
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMounted(true);
  }, []);

  const platforms: any = {
    'google': {
      name: 'Google Ads',
      seoTitle: { en: 'Google Ads Management Agency | Nashar Hub', ar: 'أفضل شركة إدارة حملات إعلانات جوجل (Google Ads) | نشار هب' },
      seoDesc: { en: 'Maximize your ROI with expert Google Ads management. We target high-intent keywords to drive immediate results.', ar: 'ضاعف مبيعاتك مع أفضل وكالة إدارة إعلانات جوجل. نقوم بإعداد وإدارة حملات شبكة البحث، إعلانات يوتيوب، والشبكة الإعلانية باستهداف دقيق للعملاء المحتملين لضمان أعلى عائد على الاستثمار (ROI).' },
      seoKeywords: { en: 'Google Ads, PPC Agency, Search Ads, YouTube Ads, Display Ads', ar: 'اعلانات جوجل, ادارة حملات جوجل, شركة اعلانات جوجل, اعلانات يوتيوب, تسويق عبر محركات البحث, SEM, وكالة تسويق رقمي, اعلانات جوجل ممولة, شركة تسويق الكتروني' },
      icon: Globe,
      theme: 'blue',
      gradient: 'from-[#4285F4] via-[#EA4335] to-[#FBBC05]',
      bgGradient: 'bg-slate-50',
      accent: 'text-blue-600',
      border: 'border-blue-100',
      tags: [
        { en: 'High Intent', ar: 'نية شرائية عالية' },
        { en: 'Immediate Results', ar: 'نتائج فورية' }
      ],
      description: { en: 'Capture customers exactly when they search for what you offer.', ar: 'استحوذ على العملاء في اللحظة التي يبحثون فيها عن خدماتك.' },
      stats: [
        { label: { en: 'Daily Searches', ar: 'بحث يومي' }, value: '8.5B', icon: SearchIcon },
        { label: { en: 'Avg. ROI', ar: 'متوسط العائد' }, value: '8:1', icon: TrendingUp },
        { label: { en: 'Conversion', ar: 'التحويل' }, value: 'Top #1', icon: MousePointerClick },
      ],
      features: [
        { title: {en: 'Search Ads', ar: 'إعلانات البحث'}, desc: {en: 'Appear at the top of results', ar: 'الظهور في صدارة النتائج'} },
        { title: {en: 'YouTube Ads', ar: 'إعلانات يوتيوب'}, desc: {en: 'Video engagement', ar: 'تفاعل عبر الفيديو'} },
        { title: {en: 'Display', ar: 'الشبكة الإعلانية'}, desc: {en: 'Retargeting visual ads', ar: 'إعادة استهداف بصري'} },
      ],
      infographic: [
        { title: { en: 'Keyword Strategy', ar: 'استراتيجية الكلمات' }, desc: { en: 'We identify high-value keywords.', ar: 'نحدد الكلمات ذات القيمة العالية.' }, icon: Target },
        { title: { en: 'Ad Creation', ar: 'تصميم الإعلان' }, desc: { en: 'Compelling copy that clicks.', ar: 'نصوص إعلانية مقنعة تجذب النقرات.' }, icon: Globe },
        { title: { en: 'Optimization', ar: 'التحسين المستمر' }, desc: { en: 'Bid adjustment for max ROI.', ar: 'ضبط الأسعار لتعظيم العائد.' }, icon: Zap },
      ]
    },
    'meta': {
      name: 'Meta Ads',
      seoTitle: { en: 'Meta Ads Management (Facebook & Instagram) | Nashar Hub', ar: 'أفضل شركة إدارة إعلانات انستقرام وفيسبوك (Meta Ads) | نشار هب' },
      seoDesc: { en: 'Turn scrollers into customers with visually stunning Meta ads. Expert targeting and retargeting strategies.', ar: 'أطلق حملات إعلانية ممولة وناجحة على انستقرام وفيسبوك مع خبراء نشار هب. استهداف دقيق للجمهور، تصاميم إبداعية، وإعادة استهداف احترافية لزيادة المبيعات والوعي بعلامتك التجارية.' },
      seoKeywords: { en: 'Meta Ads, Facebook Ads, Instagram Ads, Social Media Advertising', ar: 'اعلانات انستقرام, اعلانات فيسبوك ممولة, ادارة حملات ميتا, شركة اعلانات ممولة, تسويق عبر السوشيال ميديا, اعلانات منصات التواصل الاجتماعي, شركة تسويق رقمي' },
      icon: Instagram,
      theme: 'indigo',
      gradient: 'from-[#0668E1] via-[#d62976] to-[#fa7e1e]', // Facebook Blue to Insta Gradient
      bgGradient: 'bg-indigo-50/30',
      accent: 'text-[#0668E1]',
      border: 'border-indigo-100',
      tags: [
        { en: 'Brand Awareness', ar: 'وعي بالعلامة' },
        { en: 'Retargeting', ar: 'إعادة الاستهداف' }
      ],
      description: { en: 'Turn scrollers into customers with visually stunning ads.', ar: 'حول المتصفحين إلى عملاء دائمين بإعلانات بصرية مذهلة.' },
      stats: [
        { label: { en: 'Active Users', ar: 'مستخدم نشط' }, value: '3.9B+', icon: Users },
        { label: { en: 'Targeting', ar: 'الدقة' }, value: '98%', icon: Target },
        { label: { en: 'Formats', ar: 'التنسيقات' }, value: 'Diverse', icon: LayoutIcon },
      ],
      features: [
        { title: {en: 'Instagram Reels', ar: 'ريلز إنستقرام'}, desc: {en: 'High engagement video', ar: 'تفاعل فيديو عالي'} },
        { title: {en: 'Lead Forms', ar: 'نماذج التواصل'}, desc: {en: 'Collect data instantly', ar: 'جمع البيانات فورياً'} },
        { title: {en: 'Catalog Sales', ar: 'مبيعات الكتالوج'}, desc: {en: 'For E-commerce', ar: 'للمتاجر الإلكترونية'} },
      ],
      infographic: [
        { title: { en: 'Audience Persona', ar: 'شخصية العميل' }, desc: { en: 'Deep demographic targeting.', ar: 'استهداف ديموغرافي عميق.' }, icon: Users },
        { title: { en: 'Creative Magic', ar: 'سحر التصميم' }, desc: { en: 'Visuals that stop the scroll.', ar: 'تصاميم توقف التمرير.' }, icon: Instagram },
        { title: { en: 'Scale & Retarget', ar: 'التوسع والملاحقة' }, desc: { en: 'Bring back lost visitors.', ar: 'إعادة جذب الزوار المغادرين.' }, icon: TrendingUp },
      ]
    },
    'tiktok': {
      name: 'TikTok Ads',
      seoTitle: { en: 'TikTok Ads Agency | Viral Marketing | Nashar Hub', ar: 'أفضل شركة إدارة إعلانات تيك توك (TikTok Ads) | نشار هب' },
      seoDesc: { en: 'Go viral instantly with TikTok Ads. Reach Gen Z and millennials with native, engaging video content.', ar: 'استفد من قوة الانتشار السريع مع إعلانات تيك توك الممولة. ننشئ حملات فيديو جذابة تستهدف جمهورك بدقة وتزيد من تفاعل ومبيعات متجرك الإلكتروني أو نشاطك التجاري بشكل ملحوظ.' },
      seoKeywords: { en: 'TikTok Ads, Viral Marketing, Short Form Video Ads, Gen Z Marketing', ar: 'اعلانات تيك توك ممولة, ادارة حملات تيك توك, تسويق عبر تيك توك, شركة اعلانات تيك توك, تسويق بالفيديو, زيادة مبيعات المتجر الالكتروني, وكالة اعلانات' },
      icon: Music,
      theme: 'slate',
      gradient: 'from-[#000000] via-[#00f2ea] to-[#ff0050]',
      bgGradient: 'bg-slate-50',
      accent: 'text-slate-900',
      border: 'border-slate-200',
      tags: [
        { en: 'Viral Reach', ar: 'انتشار فيروسي' },
        { en: 'Gen Z', ar: 'جيل Z' }
      ],
      description: { en: 'Don\'t make ads. Make TikToks. Go viral instantly.', ar: 'لا تصنع إعلانات تقليدية. اصنع تيك توك وانتشر بسرعة البرق.' },
      stats: [
        { label: { en: 'Engagement', ar: 'التفاعل' }, value: 'Highest', icon: Zap },
        { label: { en: 'Time Spent', ar: 'وقت الاستخدام' }, value: '95m/day', icon: ClockIcon },
        { label: { en: 'Cost', ar: 'التكلفة' }, value: 'Low CPM', icon: TrendingUp },
      ],
      features: [
        { title: {en: 'Spark Ads', ar: 'سبارك أدز'}, desc: {en: 'Boost organic posts', ar: 'ترويج المنشورات العضوية'} },
        { title: {en: 'Challenges', ar: 'التحديات'}, desc: {en: 'Hashtag challenges', ar: 'تحديات الهاشتاق'} },
        { title: {en: 'Influencers', ar: 'المؤثرين'}, desc: {en: 'Creator marketplace', ar: 'سوق المبدعين'} },
      ],
      infographic: [
        { title: { en: 'Trend Analysis', ar: 'صيد الترند' }, desc: { en: 'Using trending sounds.', ar: 'استخدام الأصوات الرائجة.' }, icon: Music },
        { title: { en: 'Native Content', ar: 'محتوى أصلي' }, desc: { en: 'UGC style videos.', ar: 'فيديوهات تبدو طبيعية.' }, icon: VideoIcon },
        { title: { en: 'Massive Blast', ar: 'انطلاق ضخم' }, desc: { en: 'Rapid exposure.', ar: 'وصول سريع لعدد ضخم.' }, icon: Zap },
      ]
    },
    'snapchat': {
      name: 'Snap Ads',
      seoTitle: { en: 'Snapchat Ads Agency in Saudi Arabia & GCC | Nashar Hub', ar: 'أفضل شركة إعلانات سناب شات في السعودية والخليج | نشار هب' },
      seoDesc: { en: 'Dominate the GCC market with Snapchat Ads. High purchasing power and massive reach in Saudi Arabia.', ar: 'استهدف الجمهور السعودي والخليجي بدقة عالية عبر إعلانات سناب شات الممولة. ندير حملاتك الإعلانية باحترافية لتحقيق أعلى تفاعل، وزيادة مبيعات متجرك الإلكتروني أو خدماتك.' },
      seoKeywords: { en: 'Snapchat Ads, Snap Ads, GCC Marketing, Saudi Arabia Ads, AR Lenses', ar: 'اعلانات سناب شات ممولة, ادارة حملات سناب شات, شركة اعلانات سناب شات في السعودية, تسويق عبر سناب شات, اعلانات المتاجر الالكترونية, وكالة تسويق في الرياض' },
      icon: Ghost,
      theme: 'yellow',
      gradient: 'from-[#FFFC00] to-[#F2A900]',
      textOverride: 'text-black', // Special case for Snap
      bgGradient: 'bg-yellow-50/50',
      accent: 'text-yellow-600',
      border: 'border-yellow-200',
      tags: [
        { en: 'GCC Dominance', ar: 'سيطرة خليجية' },
        { en: 'High Purchasing', ar: 'قوة شرائية' }
      ],
      description: { en: 'The most powerful platform in Saudi Arabia & GCC.', ar: 'المنصة الأقوى والأكثر تأثيراً في السعودية والخليج العربي.' },
      stats: [
        { label: { en: 'KSA Reach', ar: 'الوصول بالسعودية' }, value: '90%', icon: Target },
        { label: { en: 'Ad View', ar: 'عرض الإعلان' }, value: '100%', icon: EyeIcon },
        { label: { en: 'Swipe Up', ar: 'معدل الرفع' }, value: '15%+', icon: MousePointerClick },
      ],
      features: [
        { title: {en: 'Story Ads', ar: 'إعلانات القصة'}, desc: {en: 'Discover section', ar: 'قسم اكتشف'} },
        { title: {en: 'Commercials', ar: 'إعلانات لا تتخطى'}, desc: {en: 'Non-skippable', ar: 'إجبارية المشاهدة'} },
        { title: {en: 'Filters', ar: 'الفلاتر'}, desc: {en: 'Branded AR lenses', ar: 'عدسات الواقع المعزز'} },
      ],
      infographic: [
        { title: { en: 'Full Screen', ar: 'ملء الشاشة' }, desc: { en: 'Zero distractions.', ar: 'بدون أي مشتتات.' }, icon: Ghost },
        { title: { en: 'Direct Response', ar: 'استجابة مباشرة' }, desc: { en: 'Swipe to buy.', ar: 'ارفع الشاشة للشراء.' }, icon: MousePointerClick },
        { title: { en: 'Retargeting', ar: 'الملاحقة' }, desc: { en: 'Cross-platform.', ar: 'عبر المنصات المختلفة.' }, icon: Target },
      ]
    },
    'linkedin': {
      name: 'LinkedIn Ads',
      seoTitle: { en: 'LinkedIn B2B Ads Agency | Nashar Hub', ar: 'أفضل شركة إدارة إعلانات لينكد إن للشركات (B2B) | نشار هب' },
      seoDesc: { en: 'Reach B2B decision-makers and professionals with precision LinkedIn Ads. Generate high-quality leads.', ar: 'استهدف صناع القرار والمديرين التنفيذيين عبر إعلانات لينكد إن الممولة. نقدم استراتيجيات تسويق B2B متكاملة لجلب عملاء محتملين (Leads) ذوي جودة عالية لشركتك.' },
      seoKeywords: { en: 'LinkedIn Ads, B2B Marketing, Lead Generation, Professional Networking Ads', ar: 'اعلانات لينكد ان ممولة, تسويق الشركات B2B, ادارة حملات لينكد ان, شركة تسويق B2B, جلب عملاء محتملين للشركات, تسويق الخدمات المهنية' },
      icon: Linkedin,
      theme: 'blue',
      gradient: 'from-[#0077B5] to-[#004182]',
      bgGradient: 'bg-blue-50/30',
      accent: 'text-[#0077B5]',
      border: 'border-blue-100',
      tags: [
        { en: 'B2B Exclusive', ar: 'للشركات فقط' },
        { en: 'Decision Makers', ar: 'صناع القرار' }
      ],
      description: { en: 'Reach CEOs, Managers, and Professionals precisely.', ar: 'صل إلى المدراء التنفيذيين وأصحاب القرار بدقة متناهية.' },
      stats: [
        { label: { en: 'Decision Makers', ar: 'صناع قرار' }, value: '65M+', icon: BriefcaseIcon },
        { label: { en: 'Lead Quality', ar: 'جودة العميل' }, value: 'Premium', icon: Award },
        { label: { en: 'Conversion', ar: 'التحويل' }, value: '2x Higher', icon: TrendingUp },
      ],
      features: [
        { title: {en: 'InMail', ar: 'الرسائل الخاصة'}, desc: {en: 'Direct to inbox', ar: 'مباشرة لصندوق الوارد'} },
        { title: {en: 'Lead Gen Forms', ar: 'نماذج الشركات'}, desc: {en: 'Pre-filled data', ar: 'بيانات معبأة مسبقاً'} },
        { title: {en: 'Text Ads', ar: 'الإعلانات النصية'}, desc: {en: 'Desktop sidebar', ar: 'الشريط الجانبي'} },
      ],
      infographic: [
        { title: { en: 'Professional Targeting', ar: 'استهداف وظيفي' }, desc: { en: 'By job title & company.', ar: 'بالمسمى الوظيفي والشركة.' }, icon: Target },
        { title: { en: 'High Value Content', ar: 'محتوى ذو قيمة' }, desc: { en: 'Whitepapers & offers.', ar: 'تقارير وعروض خاصة.' }, icon: Linkedin },
        { title: { en: 'Close Deals', ar: 'إغلاق الصفقات' }, desc: { en: 'Long-term contracts.', ar: 'عقود طويلة الأمد.' }, icon: CheckCircle2 },
      ]
    }
  };

  const data = platforms[platformId];

  useSEO({
    title: data?.seoTitle?.[lang] || (lang === 'en' ? `${data?.name} | Nashar Hub` : `${data?.name} | نشار هب`),
    description: data?.seoDesc?.[lang] || data?.description?.[lang] || '',
    keywords: data?.seoKeywords?.[lang] || '',
  });

  if (!data) return null;

  const MainIcon = data.icon;
  const isSnapchat = platformId === 'snapchat';

  return (
    <div className={`min-h-screen pb-24 ${data.bgGradient} transition-colors duration-500`}>
      
      {/* 1. Dynamic Hero Section */}
      <div className={`relative min-h-[45vh] overflow-hidden rounded-b-[3rem] shadow-2xl`}>
        {/* Animated Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${data.gradient} animate-gradient-xy`}></div>
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        
        {/* Floating Shapes */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-black/5 rounded-full blur-2xl animate-float delay-700"></div>

        {/* Navigation Bar (Glass) */}
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50">
           <button 
             onClick={onBack}
             className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all active:scale-95 ${isSnapchat ? 'bg-black/10 text-black hover:bg-black/20' : 'bg-white/20 text-white hover:bg-white/30'}`}
           >
             {isRTL ? <ArrowRight size={24} /> : <ArrowLeft size={24} />}
           </button>
           <div className={`px-4 py-1.5 rounded-full backdrop-blur-md text-xs font-bold uppercase tracking-widest ${isSnapchat ? 'bg-black/10 text-black' : 'bg-white/20 text-white'}`}>
              {lang === 'en' ? 'Platform Overview' : 'نظرة عامة'}
           </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 pt-16 pb-12 text-center">
           
           {/* Logo Container with Glow */}
           <div className="relative mb-6 group">
              <div className={`absolute inset-0 bg-white blur-xl opacity-30 group-hover:opacity-50 transition-opacity rounded-full`}></div>
              <div className={`relative w-24 h-24 rounded-[2rem] bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                 <MainIcon size={48} className={data.platformId === 'snapchat' ? 'text-black' : 'text-slate-900'} style={{ color: data.theme === 'slate' ? 'black' : undefined }} />
              </div>
           </div>

           <h1 className={`text-4xl md:text-5xl font-black mb-3 tracking-tight ${isSnapchat ? 'text-slate-900' : 'text-white'}`}>
             {data.name}
           </h1>
           
           <p className={`text-sm md:text-lg font-medium max-w-lg mx-auto leading-relaxed mb-6 opacity-90 ${isSnapchat ? 'text-slate-800' : 'text-white'}`}>
             {data.description[lang]}
           </p>

           {/* Tags */}
           <div className="flex flex-wrap gap-2 justify-center">
              {data.tags.map((tag: any, i: number) => (
                <span key={i} className={`px-3 py-1 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-wider backdrop-blur-md border ${isSnapchat ? 'bg-black/5 border-black/10 text-black' : 'bg-white/10 border-white/20 text-white'}`}>
                  {tag[lang]}
                </span>
              ))}
           </div>
        </div>
      </div>

      {/* 2. Stats Section (Floating Cards) */}
      <div className="px-6 -mt-10 relative z-20 max-w-3xl mx-auto">
         <div className="grid grid-cols-3 gap-3">
            {data.stats.map((stat: any, idx: number) => {
              const StatIcon = stat.icon;
              return (
                <div key={idx} className={`bg-white p-4 rounded-2xl shadow-xl border ${data.border} flex flex-col items-center text-center transform transition-all duration-500 hover:-translate-y-1`}>
                   <div className={`mb-2 p-2 rounded-full ${data.bgGradient}`}>
                      <StatIcon size={18} className={data.accent} />
                   </div>
                   <span className={`text-xl md:text-2xl font-black text-slate-900`}>{stat.value}</span>
                   <span className="text-[10px] text-slate-400 font-bold uppercase">{stat.label[lang]}</span>
                </div>
              );
            })}
         </div>
      </div>

      {/* 3. Features Horizontal Scroll */}
      <div className="mt-12 px-6">
         <div className="flex items-center justify-between mb-4">
            <h2 className="font-black text-slate-900 text-lg">{lang === 'en' ? 'Key Features' : 'أهم المميزات'}</h2>
            <div className={`h-1 flex-1 mx-4 rounded-full bg-slate-100 relative overflow-hidden`}>
               <div className={`absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r ${data.gradient}`}></div>
            </div>
         </div>
         
         <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar snap-x">
            {data.features.map((feat: any, idx: number) => (
              <div key={idx} className={`snap-center min-w-[200px] bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between group hover:border-${data.theme}-200 transition-colors`}>
                 <div className={`w-10 h-10 rounded-xl ${data.bgGradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <CheckCircle2 size={20} className={data.accent} />
                 </div>
                 <div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">{feat.title[lang]}</h3>
                    <p className="text-xs text-slate-500">{feat.desc[lang]}</p>
                 </div>
              </div>
            ))}
         </div>
      </div>

      {/* 4. The Roadmap (Infographic) */}
      <div className="mt-8 px-6 pb-20">
         <div className="bg-white rounded-[2.5rem] p-6 shadow-xl border border-slate-100/50 relative overflow-hidden">
            {/* Background Blob */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${data.gradient} opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2`}></div>
            
            <h2 className="relative font-black text-slate-900 text-xl mb-8 text-center">{lang === 'en' ? 'Roadmap to ROI' : 'رحلة العائد على الاستثمار'}</h2>
            
            <div className="relative space-y-8">
               {/* Connecting Line with Gradient */}
               <div className={`absolute top-4 bottom-4 left-[23px] rtl:left-auto rtl:right-[23px] w-1 bg-gradient-to-b ${data.gradient} rounded-full opacity-30`}></div>

               {data.infographic.map((step: any, idx: number) => {
                 const StepIcon = step.icon;
                 return (
                   <div key={idx} className="relative flex items-center gap-5 group">
                      {/* Node Circle */}
                      <div className={`relative z-10 w-12 h-12 rounded-full bg-white border-4 border-slate-50 shadow-md flex items-center justify-center transition-transform group-hover:scale-110`}>
                         <StepIcon size={20} className={data.accent} />
                      </div>
                      
                      {/* Text Content */}
                      <div className="flex-1 bg-slate-50/50 p-4 rounded-2xl border border-slate-100 group-hover:bg-white group-hover:shadow-md transition-all">
                         <h3 className="font-bold text-slate-900 text-sm">{step.title[lang]}</h3>
                         <p className="text-xs text-slate-500 font-medium">{step.desc[lang]}</p>
                      </div>
                   </div>
                 );
               })}
            </div>
         </div>
      </div>

      {/* Cross-Link to Web Design */}
      {onWebsiteClick && (
        <div className="px-6 pb-32">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 mix-blend-overlay"></div>
            <div className="relative z-10">
              <h2 className="text-white font-black text-2xl mb-3">
                {lang === 'en' ? 'Need a High-Converting Website?' : 'هل تحتاج إلى موقع إلكتروني يزيد من مبيعاتك؟'}
              </h2>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                {lang === 'en' 
                  ? 'Maximize your ad ROI with a custom-built website or Salla store designed for conversions.' 
                  : 'لتحقيق أقصى استفادة من حملاتك الإعلانية، تأكد من أن موقعك الإلكتروني مصمم لزيادة التحويلات. تعرف على خدمات تصميم المواقع الإلكترونية لدينا.'}
              </p>
              <button 
                onClick={onWebsiteClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full font-bold text-sm hover:bg-slate-50 transition-colors shadow-lg"
              >
                {lang === 'en' ? 'Explore Web Design' : 'اكتشف خدمات تصميم المواقع'}
                <ArrowRight size={16} className={isRTL ? 'rotate-180' : ''} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. Sticky CTA */}
      <div className="fixed bottom-6 left-4 right-4 z-40">
        <div className="absolute inset-4 bg-white/50 blur-xl"></div>
        <a 
          href={`https://wa.me/201010742430?text=${encodeURIComponent(lang === 'en' ? `Hi, I want to start ads on ${data.name}` : `مرحباً، أريد بدء إعلانات على ${data.name}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative block w-full py-4 rounded-2xl bg-gradient-to-r ${data.gradient} text-white font-black text-lg text-center shadow-2xl shadow-slate-900/20 active:scale-95 transition-transform overflow-hidden group`}
        >
          {/* Shine Effect */}
          <div className="absolute top-0 -left-full w-full h-full bg-white/20 skew-x-12 group-hover:animate-shine"></div>
          
          <div className="flex items-center justify-center gap-3 relative z-10">
            <MessageCircle size={24} className="fill-white/20" />
            <span>{lang === 'en' ? `Launch ${data.name}` : `أطلق حملة ${data.name}`}</span>
          </div>
        </a>
      </div>

      <style>{`
        @keyframes shine {
          100% { left: 125%; }
        }
        .animate-shine {
          animation: shine 1s;
        }
        .animate-gradient-xy {
            background-size: 200% 200%;
            animation: gradient-xy 6s ease infinite;
        }
        @keyframes gradient-xy {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
};

// Helper Icons
const SearchIcon = (p:any) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;
const ClockIcon = (p:any) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const VideoIcon = (p:any) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>;
const EyeIcon = (p:any) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>;
const BriefcaseIcon = (p:any) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const LayoutIcon = (p:any) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>;
