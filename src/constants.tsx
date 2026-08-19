
import React from 'react';
import { NavItem, Service, Testimonial, Translation, ProcessStep, FAQItem } from './types';
import { Globe, BarChart3, Code, Search, Zap, Target, Users, Mail, Phone, MapPin, Sparkles, Layout, Smartphone, TrendingUp, Microscope, Compass, Rocket, Repeat } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { key: 'home', label: { en: 'Home', ar: 'الرئيسية' }, href: '/#home' },
  { key: 'services', label: { en: 'Services', ar: 'الخدمات' }, href: '/#services' },
  { key: 'portfolio', label: { en: 'Portfolio', ar: 'سابقة الأعمال' }, href: 'https://portfolio.nasharhub.com' },
  { key: 'process', label: { en: 'Process', ar: 'آلية العمل' }, href: '/#process' },
  { key: 'blog', label: { en: 'Blog', ar: 'المدونة' }, href: '/blog' },
  { key: 'policy', label: { en: 'Work Policy', ar: 'سياسة العمل والشفافية' }, href: '/policy' },
  { key: 'stats', label: { en: 'Why Us', ar: 'لماذا نحن' }, href: '/#stats' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: { en: 'Audit & Discovery', ar: 'التدقيق والاكتشاف' },
    description: { 
      en: 'We deep dive into your current accounts, competitors, and market position to identify gaps.', 
      ar: 'نقوم بفحص شامل لحساباتك الحالية، ومنافسيك، وموقعك في السوق لتحديد الفجوات والفرص.' 
    },
    icon: 'Microscope'
  },
  {
    id: 2,
    title: { en: 'Strategy & Planning', ar: 'الاستراتيجية والتخطيط' },
    description: { 
      en: 'Our strategy team builds a custom roadmap with clear KPIs and budget allocation.', 
      ar: 'يقوم فريق الاستراتيجية ببناء خارطة طريق مخصصة مع مؤشرات أداء واضحة وتوزيع للميزانية.' 
    },
    icon: 'Compass'
  },
  {
    id: 3,
    title: { en: 'Launch & Execution', ar: 'الإطلاق والتنفيذ' },
    description: { 
      en: 'We deploy high-converting creatives and setup advanced tracking pixels for precision.', 
      ar: 'نقوم بنشر إعلانات ذات معدل تحويل عالي وإعداد بيكسلات تتبع متقدمة لضمان الدقة.' 
    },
    icon: 'Rocket'
  },
  {
    id: 4,
    title: { en: 'Optimization & Scaling', ar: 'التحسين والتوسع' },
    description: { 
      en: 'Continuous A/B testing and budget scaling based on real-time ROAS data.', 
      ar: 'اختبارات A/B مستمرة وتوسيع للميزانية بناءً على بيانات العائد على الإنفاق في الوقت الفالي.' 
    },
    icon: 'Repeat'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: { en: 'What website design services do you provide?', ar: 'ما هي خدمات تصميم المواقع التي تقدمونها؟' },
    answer: { 
      en: 'We provide custom website development, high-converting landing pages, and multi-page corporate or ecommerce websites tailored for Saudi businesses.', 
      ar: 'نقدم تصميم وتطوير مواقع إلكترونية مخصصة، صفحات هبوط ذات معدل تحويل عالي، ومتاجر إلكترونية متكاملة تناسب متطلبات السوق السعودي.' 
    }
  },
  {
    question: { en: 'What is included in website creation?', ar: 'ماذا تشمل خدمة تصميم المواقع الإلكترونية؟' },
    answer: { 
      en: 'Our web design services include hosting setup, domain configuration, SSL encryption, mobile responsiveness, fast loading speed, and initial SEO setup.', 
      ar: 'تشمل خدماتنا ضبط الاستضافة والدومين، حماية SSL، التصميم المتجاوب مع الجوال، سرعة التحميل الفائقة، والتهيئة الأولية لمحركات البحث SEO.' 
    }
  },
  {
    question: { en: 'Do you offer support and updates after launching?', ar: 'هل توفرون الدعم والتعديلات بعد إطلاق الموقع؟' },
    answer: { 
      en: 'Yes, we provide ongoing technical support, regular maintenance, and custom revisions to ensure your website operates flawlessly.', 
      ar: 'نعم، نوفر الدعم الفني المستمر، الصيانة الدورية، والتعديلات اللازمة لضمان عمل موقعك بأعلى كفاءة وبدون أي انقطاع.' 
    }
  },
  {
    question: { en: 'How long does it take to see results from marketing activities?', ar: 'كم من الوقت يستغرق ظهور النتائج من التسويق؟' },
    answer: { 
      en: 'For Paid Ads (Google & Social), you can see traffic and leads within days. SEO and organic authority typically build sustainable top rankings over a few months.', 
      ar: 'بالنسبة للإعلانات الممولة (إعلانات جوجل ومواقع التواصل)، يمكنك رؤية الزيارات والعملاء المهتمين خلال أيام قليلة. أما تحسين محركات البحث SEO فيستغرق بضعة أشهر لبناء تصدر مستدام.' 
    }
  },
  {
    question: { en: 'Do you manage ad campaign creation and SEO content?', ar: 'هل تقومون بإدارة الحملات الإعلانية ومحتوى الـ SEO؟' },
    answer: { 
      en: 'Yes! We handle creative ad campaign management across Google, Meta, Snapchat, and TikTok, alongside writing SEO-optimized content to boost your organic reach.', 
      ar: 'نعم! نقوم بإدارة الحملات الإعلانية المباشرة عبر جوجل، ميتا، سناب شات، وتيك توك، بالإضافة إلى كتابة وإدارة المحتوى المتوافق مع الـ SEO لزيادة وصولك الطبيعي.' 
    }
  },
  {
    question: { en: 'What is SEO and why is it important for my business?', ar: 'ما هو الـ SEO ولماذا هو مهم لنشاطي التجاري؟' },
    answer: { 
      en: 'SEO (Search Engine Optimization) increases your website visibility on Google. It brings organic, high-intent clients actively searching for your services in Saudi Arabia.', 
      ar: 'الـ SEO هو تحسين ظهور موقعك في نتائج البحث الأولى بـ جوجل. يساعدك على جذب عملاء مستهدفين يبحثون بالفعل عن خدماتك في المملكة العربية السعودية بدون تكلفة إعلانية مستمرة.' 
    }
  }
];

export const SERVICES: Service[] = [
  {
    id: 'paid-ads',
    title: { en: 'Paid Media Buying', ar: 'إدارة إعلانات جوجل والحملات الإعلانية' },
    description: { 
      en: 'Strategic ad campaigns on Meta, Google, TikTok, and SnapChat designed to maximize ROAS.', 
      ar: 'حملات إعلانية استراتيجية عبر إعلانات جوجل، ميتا، تيك توك وسناب شات. نقدم لك خطة متكاملة لتعظيم العائد على الإنفاق.' 
    },
    detailedInfo: {
      en: 'Instant Traffic • High ROAS • Precision Targeting • Scaling',
      ar: 'زيارات فورية • عائد مرتفع • استهداف دقيق • توسيع النطاق'
    },
    icon: 'Target',
  },
  {
    id: 'web-dev',
    title: { en: 'Web Development', ar: 'تصميم وتطوير المواقع' },
    description: { 
      en: 'Modern, responsive websites built with React & Next.js that convert visitors into customers.', 
      ar: 'مواقع عصرية ومتجاوبة مبنية بتقنيات React و Next.js تحول الزوار إلى عملاء فعليين.' 
    },
    detailedInfo: {
      en: 'Blazing Fast • SEO Ready • Mobile First • High Conversion',
      ar: 'سريع جداً • مهيأ لمحركات البحث • متوافق مع الجوال • معدل تحويل عالي'
    },
    icon: 'Code',
  },
  {
    id: 'seo',
    title: { en: 'SEO & Growth', ar: 'تحسين محركات البحث' },
    description: { 
      en: 'Dominate search results with advanced keyword research and technical optimization.', 
      ar: 'تصدر نتائج البحث عبر تحليل متقدم للكلمات المفتاحية وتحسين تقني شامل للصفحات.' 
    },
    detailedInfo: {
      en: 'Rank #1 • Organic Traffic • Technical Audit • Content Strategy',
      ar: 'تصدر النتائج • زيارات مجانية • تدقيق تقني • استراتيجية محتوى'
    },
    icon: 'Search',
  },
  {
    id: 'social-media',
    title: { en: 'Social Media Management', ar: 'إدارة منصات التواصل الاجتماعي' },
    description: { 
      en: 'Creative content creation and community building strategies that foster real brand loyalty.', 
      ar: 'صناعة محتوى إبداعي واستراتيجيات بناء مجتمعات رقمية تعزز الولاء الحقيقي للعلامة التجارية.' 
    },
    detailedInfo: {
      en: 'Viral Content • Community Growth • Brand Loyalty • Engagement',
      ar: 'محتوى فيروسي • نمو المجتمع • ولاء للعلامة • تفاعل عالي'
    },
    icon: 'Smartphone',
  },
  {
    id: 'branding',
    title: { en: 'Branding & Identity', ar: 'الهوية البصرية والعلامة التجارية' },
    description: { 
      en: 'Distinctive visual identities that make your brand memorable and professional.', 
      ar: 'هويات بصرية مميزة تجعل علامتك التجارية لا تُنسى وتعكس الاحترافية.' 
    },
    detailedInfo: {
      en: 'Unique Logo • Visual Language • Brand Voice • Style Guide',
      ar: 'شعار فريد • لغة بصرية • صوت العلامة • دليل الهوية'
    },
    icon: 'Layout',
  },
  {
    id: 'analytics',
    title: { en: 'Data Analytics', ar: 'تحليل البيانات' },
    description: { 
      en: 'Deep insights and reporting to understand user behavior and optimize performance.', 
      ar: 'رؤى عميقة وتقارير دقيقة لفهم سلوك المستخدم وتحسين الأداء المستمر.' 
    },
    icon: 'TrendingUp',
    detailedInfo: {
      en: 'Real-time Data • User Behavior • Conversion Tracking • ROI Reports',
      ar: 'بيانات لحظية • سلوك المستخدم • تتبع التحويلات • تقارير العائد'
    },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: { en: 'Sarah Johnson', ar: 'سارة جونسون' },
    role: { en: 'Marketing Director, TechStart', ar: 'مدير التسويق، تيك ستارت' },
    content: {
      en: "Nashar Hub transformed our online presence. Our leads increased by 300% in just 3 months thanks to their ad strategies.",
      ar: "قامت وكالة نشار هب بتحويل تواجدنا الرقمي. زادت العملاء المحتملين بنسبة 300٪ في 3 أشهر فقط بفضل استراتيجياتهم الإعلانية."
    },
    avatar: "https://picsum.photos/100/100?random=1"
  },
  {
    id: 2,
    name: { en: 'Ahmed Al-Farsi', ar: 'أحمد الفارسي' },
    role: { en: 'Founder, Oud Luxury', ar: 'مؤسس، عود لكشري' },
    content: {
      en: "The best SEO team I've worked with. We represent #1 for all our keywords now.",
      ar: "أفضل فريق SEO عملت معه على الإطلاق. نحن نتصدر الرقم 1 لجميع كلماتنا المفتاحية الآن."
    },
    avatar: "https://picsum.photos/100/100?random=2"
  },
];

export const UI_TEXT: Translation = {
  heroTitle: {
    en: "The Leading Digital Marketing Agency in Saudi Arabia",
    ar: "أفضل شركة تسويق إلكتروني بالسعودية"
  },
  heroSubtitle: {
    en: "We are a top-tier digital marketing agency serving Riyadh, Jeddah, Dammam, and all of KSA. We specialize in high-ROI paid ads, custom web design, and Salla store creation to multiply your sales.",
    ar: "وكالة تسويق رقمي رائدة في السعودية. متخصصون في إطلاق الحملات الإعلانية، وتصميم مواقع إلكترونية احترافية. معنا ستحصل على نمو مستدام لزيادة مبيعاتك وتعزيز تواجدك الرقمي."
  },
  getStarted: {
    en: "Start Your Growth",
    ar: "ابدأ رحلة النمو"
  },
  viewServices: {
    en: "Our Services",
    ar: "خدماتنا"
  },
  ourServices: {
    en: "What We Do",
    ar: "ماذا نقدم"
  },
  servicesTitle: {
    en: "Comprehensive Digital Solutions",
    ar: "حلول رقمية شاملة"
  },
  processTitle: {
    en: "Our Process",
    ar: "كيف نعمل؟"
  },
  processSubtitle: {
    en: "A proven framework for consistent results.",
    ar: "منهجية مثبتة لنتائج مستمرة."
  },
  faqTitle: {
    en: "Frequently Asked Questions",
    ar: "الأسئلة الشائعة"
  },
  statsTitle: {
    en: "Why Choose Nashar Hub?",
    ar: "لماذا تختار نشار هب؟"
  },
  contactTitle: {
    en: "Ready To Scale?",
    ar: "مستعد لتكبير حجم أعمالك؟"
  },
  contactSubtitle: {
    en: "Book a free consultation call with our strategists today.",
    ar: "احجز مكالمة استشارية مجانية مع خبرائنا الاستراتيجيين اليوم."
  },
  contactName: { en: "Full Name", ar: "الاسم الكامل" },
  contactEmail: { en: "Business Email", ar: "بريد العمل" },
  contactMessage: { en: "Tell us about your project", ar: "أخبرنا عن مشروعك" },
  contactSend: { en: "Send Message", ar: "إرسال الرسالة" },
  footerRights: { en: "All Rights Reserved", ar: "جميع الحقوق محفوظة" },
};

export const ICONS_MAP: Record<string, React.FC<any>> = {
  Target: Target,
  Code: Code,
  Search: Search,
  BarChart3: BarChart3,
  Zap: Zap,
  Globe: Globe,
  Users: Users,
  Mail: Mail,
  Phone: Phone,
  MapPin: MapPin,
  Sparkles: Sparkles,
  Layout: Layout,
  Smartphone: Smartphone,
  TrendingUp: TrendingUp,
  Microscope: Microscope,
  Compass: Compass,
  Rocket: Rocket,
  Repeat: Repeat
};
