
import { Globe, Instagram, Music, Ghost, Linkedin, TrendingUp, MousePointerClick, Users, Award, Target, CheckCircle2 } from 'lucide-react';

export const ZapIcon = (p:any) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
export const SearchIcon = (p:any) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;
export const ClockIcon = (p:any) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
export const VideoIcon = (p:any) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>;
export const EyeIcon = (p:any) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>;
export const BriefcaseIcon = (p:any) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
export const LayoutIcon = (p:any) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>;

export const HELPER_ICONS: Record<string, React.FC<any>> = {
  SearchIcon,
  ClockIcon,
  VideoIcon,
  EyeIcon,
  BriefcaseIcon,
  LayoutIcon,
  ZapIcon
};

export const PLATFORMS_DATA: any = {
  'google': {
    name: 'Google Ads',
    seoTitle: { en: 'Google Ads Management Agency | Nashar Hub', ar: 'أفضل شركة إدارة حملات إعلانات جوجل | عرض الصورة كاملة' },
    seoDesc: { en: 'Maximize your ROI with expert Google Ads management. We target high-intent keywords to drive immediate results.', ar: 'ضاعف مبيعاتك مع أفضل وكالة إدارة إعلانات جوجل. نقوم بإعداد وإدارة حملات شبكة البحث، إعلانات يوتيوب، والشبكة الإعلانية باستهداف دقيق للعملاء المحتملين لضمان أعلى عائد على الاستثمار (ROI). معنا سترى عرض الصورة كاملة لنجاحك.' },
    seoKeywords: { en: 'Google Ads, PPC Agency, Search Ads, YouTube Ads, Display Ads', ar: 'اعلانات جوجل, ادارة حملات جوجل, شركة اعلانات جوجل, اعلانات يوتيوب, تسويق عبر محركات البحث, SEM, وكالة تسويق رقمي, اعلانات جوجل ممولة, شركة تسويق الكتروني, عرض الصورة كاملة, الصورة كاملة إعلانات, جوجل إعلانات' },
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
      { label: { en: 'Daily Searches', ar: 'بحث يومي' }, value: '8.5B', icon: 'SearchIcon' },
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
      { title: { en: 'Optimization', ar: 'التحسين المستمر' }, desc: { en: 'Bid adjustment for max ROI.', ar: 'ضبط الأسعار لتعظيم العائد.' }, icon: ZapIcon },
    ]
  },
  'meta': {
    name: 'Meta Ads',
    seoTitle: { en: 'Meta Ads Management Agency | Nashar Hub', ar: 'أفضل شركة إدارة إعلانات انستقرام وفيسبوك | نشار هب' },
    seoDesc: { en: 'Turn scrollers into customers with visually stunning Meta ads. Expert targeting and retargeting strategies.', ar: 'أطلق حملات إعلانية ممولة وناجحة على انستقرام وفيسبوك مع خبراء نشار هب. استهداف دقيق للجمهور، تصاميم إبداعية، وإعادة استهداف احترافية لزيادة المبيعات والوعي بعلامتك التجارية.' },
    seoKeywords: { en: 'Meta Ads, Facebook Ads, Instagram Ads, Social Media Advertising', ar: 'اعلانات انستقرام, اعلانات فيسبوك ممولة, ادارة حملات ميتا, شركة اعلانات ممولة, تسويق عبر السوشيال ميديا, اعلانات منصات التواصل الاجتماعي, شركة تسويق رقمي' },
    icon: Instagram,
    theme: 'indigo',
    gradient: 'from-[#0668E1] via-[#d62976] to-[#fa7e1e]', 
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
      { label: { en: 'Formats', ar: 'التنسيقات' }, value: 'Diverse', icon: 'LayoutIcon' },
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
    seoTitle: { en: 'TikTok Ads Agency | Viral Marketing | Nashar Hub', ar: 'أفضل شركة إدارة إعلانات تيك توك | نشار هب' },
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
      { label: { en: 'Engagement', ar: 'التفاعل' }, value: 'Highest', icon: 'Zap' },
      { label: { en: 'Time Spent', ar: 'وقت الاستخدام' }, value: '95m/day', icon: 'ClockIcon' },
      { label: { en: 'Cost', ar: 'التكلفة' }, value: 'Low CPM', icon: TrendingUp },
    ],
    features: [
      { title: {en: 'Spark Ads', ar: 'سبارك أدز'}, desc: {en: 'Boost organic posts', ar: 'ترويج المنشورات العضوية'} },
      { title: {en: 'Challenges', ar: 'التحديات'}, desc: {en: 'Hashtag challenges', ar: 'تحديات الهاشتاق'} },
      { title: {en: 'Influencers', ar: 'المؤثرين'}, desc: {en: 'Creator marketplace', ar: 'سوق المبدعين'} },
    ],
    infographic: [
      { title: { en: 'Trend Analysis', ar: 'صيد الترند' }, desc: { en: 'Using trending sounds.', ar: 'استخدام الأصوات الرائجة.' }, icon: Music },
      { title: { en: 'Native Content', ar: 'محتوى أصلي' }, desc: { en: 'UGC style videos.', ar: 'فيديوهات تبدو طبيعية.' }, icon: 'VideoIcon' },
      { title: { en: 'Massive Blast', ar: 'انطلاق ضخم' }, desc: { en: 'Rapid exposure.', ar: 'وصول سريع لعدد ضخم.' }, icon: 'Zap' },
    ]
  },
  'snapchat': {
    name: 'Snap Ads',
    seoTitle: { en: 'Snapchat Ads Agency in Saudi Arabia | Nashar Hub', ar: 'أفضل شركة إعلانات سناب شات في السعودية | نشار هب' },
    seoDesc: { en: 'Dominate the GCC market with Snapchat Ads. High purchasing power and massive reach in Saudi Arabia.', ar: 'استهدف الجمهور السعودي والخليجي بدقة عالية عبر إعلانات سناب شات الممولة. ندير حملاتك الإعلانية باحترافية لتحقيق أعلى تفاعل، وزيادة مبيعات متجرك الإلكتروني أو خدماتك.' },
    seoKeywords: { en: 'Snapchat Ads, Snap Ads, GCC Marketing, Saudi Arabia Ads, AR Lenses', ar: 'اعلانات سناب شات ممولة, ادارة حملات سناب شات, شركة اعلانات سناب شات في السعودية, تسويق عبر سناب شات, اعلانات المتاجر الالكترونية, وكالة تسويق في الرياض' },
    icon: Ghost,
    theme: 'yellow',
    gradient: 'from-[#FFFC00] to-[#F2A900]',
    textOverride: 'text-black', 
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
      { label: { en: 'Ad View', ar: 'عرض الإعلان' }, value: '100%', icon: 'EyeIcon' },
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
    seoTitle: { en: 'LinkedIn B2B Ads Agency | Nashar Hub', ar: 'أفضل شركة إدارة إعلانات لينكد إن للشركات | نشار هب' },
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
      { label: { en: 'Decision Makers', ar: 'صناع قرار' }, value: '65M+', icon: 'BriefcaseIcon' },
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
