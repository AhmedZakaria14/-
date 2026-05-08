import { Language } from '../types';

export interface CityData {
  id: string;
  name: { en: string; ar: string };
  seoTitle: { en: string; ar: string };
  seoDesc: { en: string; ar: string };
  seoKeywords: { en: string; ar: string };
  heroTitle: { en: string; ar: string };
  heroSubtitle: { en: string; ar: string };
  description: { en: string; ar: string };
  mapEmbedUrl: string;
  coordinates: { lat: number; lng: number };
  addressLocality: { en: string; ar: string };
  addressRegion: { en: string; ar: string };
}

export const CITIES_DATA: Record<string, CityData> = {
  riyadh: {
    id: 'riyadh',
    name: { en: 'Riyadh', ar: 'الرياض' },
    seoTitle: { 
      en: 'Digital Marketing Agency in Riyadh | SEO & Web Design | Nashar Hub', 
      ar: 'أفضل شركة تسويق إلكتروني في الرياض | وكالة سيو وتصميم مواقع | نشار هب' 
    },
    seoDesc: { 
      en: 'Top digital marketing agency in Riyadh. We provide expert SEO, Google Ads, Meta Ads, and Web Development services to grow your business in Saudi Arabia.', 
      ar: 'وكالة تسويق رقمي رائدة في الرياض. نقدم خدمات تحسين محركات البحث (سيو)، إعلانات جوجل وميتا، وتصميم المواقع لزيادة مبيعاتك ونمو أعمالك.' 
    },
    seoKeywords: { 
      en: 'Digital Marketing Riyadh, SEO Agency Riyadh, Web Design Riyadh, Marketing Company Saudi Arabia', 
      ar: 'شركة تسويق الكتروني بالرياض, وكالة تسويق الرياض, شركة سيو الرياض, تصميم مواقع الرياض, اعلانات جوجل الرياض, إعلانات جوجل' 
    },
    heroTitle: { 
      en: 'Digital Marketing Agency in Riyadh', 
      ar: 'أفضل وكالة تسويق رقمي في الرياض' 
    },
    heroSubtitle: { 
      en: 'Dominate the Riyadh market with data-driven SEO, high-converting Google Ads, and premium web design services.', 
      ar: 'سيطر على سوق الرياض من خلال استراتيجيات السيو المتقدمة، والحملات الإعلانية عالية التحويل، وتصميم المواقع الاحترافية.' 
    },
    description: {
      en: 'Riyadh is the beating heart of Saudi Arabia\'s economy. To stand out in this highly competitive market, you need a digital marketing partner who understands the local landscape. Nashar Hub provides tailored marketing solutions for Riyadh-based businesses, focusing on maximizing ROI and driving targeted local traffic.',
      ar: 'الرياض هي القلب النابض للاقتصاد السعودي. للتميز في هذا السوق التنافسي، تحتاج إلى شريك تسويق رقمي يفهم طبيعة السوق المحلي. نشار هب تقدم حلولاً تسويقية مخصصة للشركات في الرياض، مع التركيز على تعظيم العائد على الاستثمار وجذب العملاء المحتملين.'
    },
    mapEmbedUrl: '',
    coordinates: { lat: 24.7136, lng: 46.6753 },
    addressLocality: { en: 'Riyadh', ar: 'الرياض' },
    addressRegion: { en: 'Riyadh Province', ar: 'منطقة الرياض' }
  },
  jeddah: {
    id: 'jeddah',
    name: { en: 'Jeddah', ar: 'جدة' },
    seoTitle: { 
      en: 'Digital Marketing Agency in Jeddah | SEO & Ads | Nashar Hub', 
      ar: 'شركة تسويق إلكتروني في جدة | وكالة سيو وإعلانات ممولة | نشار هب' 
    },
    seoDesc: { 
      en: 'Expert digital marketing services in Jeddah. Boost your online presence with local SEO, targeted social media ads, and professional web development.', 
      ar: 'خدمات تسويق رقمي احترافية في جدة. ضاعف مبيعاتك مع تحسين محركات البحث المحلي (السيو)، الإعلانات الممولة، وتطوير المتاجر الإلكترونية.' 
    },
    seoKeywords: { 
      en: 'Digital Marketing Jeddah, SEO Agency Jeddah, Web Design Jeddah, Social Media Marketing Jeddah', 
      ar: 'شركة تسويق الكتروني بجدة, وكالة تسويق جدة, شركة سيو جدة, تصميم مواقع جدة, اعلانات ممولة جدة' 
    },
    heroTitle: { 
      en: 'Digital Marketing Agency in Jeddah', 
      ar: 'أفضل شركة تسويق إلكتروني في جدة' 
    },
    heroSubtitle: { 
      en: 'Accelerate your business growth in Jeddah with tailored SEO strategies, creative social media campaigns, and high-performance websites.', 
      ar: 'سرّع نمو أعمالك في جدة مع استراتيجيات السيو المخصصة، وحملات السوشيال ميديا الإبداعية، والمواقع الإلكترونية عالية الأداء.' 
    },
    description: {
      en: 'Jeddah is a vibrant commercial hub. We help Jeddah businesses connect with their target audience through hyper-local SEO, engaging social media marketing, and conversion-optimized web design. Whether you are a local shop or a growing enterprise, we have the right strategy for you.',
      ar: 'جدة هي مركز تجاري حيوي. نحن نساعد الشركات في جدة على التواصل مع جمهورها المستهدف من خلال السيو المحلي الدقيق، والتسويق الجذاب عبر وسائل التواصل الاجتماعي، وتصميم المواقع المحسنة للتحويل. سواء كنت متجراً محلياً أو شركة متنامية، لدينا الاستراتيجية المناسبة لك.'
    },
    mapEmbedUrl: '',
    coordinates: { lat: 21.4858, lng: 39.1925 },
    addressLocality: { en: 'Jeddah', ar: 'جدة' },
    addressRegion: { en: 'Makkah Province', ar: 'منطقة مكة المكرمة' }
  },
  dammam: {
    id: 'dammam',
    name: { en: 'Dammam', ar: 'الدمام' },
    seoTitle: { 
      en: 'Digital Marketing Agency in Dammam | SEO Experts | Nashar Hub', 
      ar: 'شركة تسويق رقمي في الدمام | تصميم مواقع وسيو | نشار هب' 
    },
    seoDesc: { 
      en: 'Grow your business in Dammam and the Eastern Province with our specialized digital marketing, SEO, and web design services.', 
      ar: 'نمّ أعمالك في الدمام والمنطقة الشرقية مع خدماتنا المتخصصة في التسويق الرقمي، تحسين محركات البحث، وتصميم المواقع الاحترافية.' 
    },
    seoKeywords: { 
      en: 'Digital Marketing Dammam, SEO Agency Dammam, Web Design Eastern Province, Marketing Company Dammam', 
      ar: 'شركة تسويق الكتروني بالدمام, تسويق رقمي الدمام, شركة سيو الدمام, تصميم مواقع الدمام, اعلانات جوجل الدمام' 
    },
    heroTitle: { 
      en: 'Digital Marketing Agency in Dammam', 
      ar: 'أفضل شركة تسويق رقمي في الدمام' 
    },
    heroSubtitle: { 
      en: 'Expand your reach in the Eastern Province with our data-driven marketing campaigns and expert SEO services.', 
      ar: 'وسع نطاق وصولك في المنطقة الشرقية من خلال حملاتنا التسويقية المبنية على البيانات وخدمات السيو الاحترافية.' 
    },
    description: {
      en: 'The Eastern Province is a key industrial and commercial region. Nashar Hub empowers Dammam-based businesses to establish a strong digital footprint. From B2B lead generation on LinkedIn to local SEO for retail businesses, we deliver measurable results.',
      ar: 'المنطقة الشرقية هي منطقة صناعية وتجارية رئيسية. نشار هب تمكّن الشركات في الدمام من تأسيس بصمة رقمية قوية. من توليد العملاء المحتملين للشركات (B2B) على لينكد إن إلى السيو المحلي لأعمال التجزئة، نحن نقدم نتائج ملموسة.'
    },
    mapEmbedUrl: '',
    coordinates: { lat: 26.4207, lng: 50.0888 },
    addressLocality: { en: 'Dammam', ar: 'الدمام' },
    addressRegion: { en: 'Eastern Province', ar: 'المنطقة الشرقية' }
  },
  mecca: {
    id: 'mecca',
    name: { en: 'Mecca', ar: 'مكة المكرمة' },
    seoTitle: { 
      en: 'Digital Marketing Agency in Mecca | SEO & Ads | Nashar Hub', 
      ar: 'وكالة تسويق إلكتروني في مكة | إدارة حملات وسيو | نشار هب' 
    },
    seoDesc: { 
      en: 'Professional digital marketing services in Mecca. We specialize in local SEO, Google Ads, and social media marketing to attract more customers.', 
      ar: 'خدمات تسويق إلكتروني احترافية في مكة المكرمة. نتخصص في السيو المحلي، إعلانات جوجل، والتسويق عبر منصات التواصل الاجتماعي لجذب المزيد من العملاء.' 
    },
    seoKeywords: { 
      en: 'Digital Marketing Mecca, SEO Agency Makkah, Web Design Mecca, Social Media Makkah', 
      ar: 'وكالة تسويق الكتروني بمكة, شركة تسويق مكة, شركة سيو مكة, تصميم مواقع مكة, ادارة حملات مكة' 
    },
    heroTitle: { 
      en: 'Digital Marketing Agency in Mecca', 
      ar: 'وكالة تسويق إلكتروني في مكة المكرمة' 
    },
    heroSubtitle: { 
      en: 'Connect with your local audience and pilgrims alike through highly targeted digital marketing and SEO strategies in Mecca.', 
      ar: 'تواصل مع جمهورك المحلي وزوار مكة المكرمة من خلال استراتيجيات التسويق الرقمي والسيو الموجهة بدقة عالية.' 
    },
    description: {
      en: 'Mecca presents unique opportunities for businesses catering to both locals and millions of visitors. Our digital marketing strategies for Mecca focus on high visibility in local searches, effective Google Maps optimization, and targeted advertising to capture high-intent customers.',
      ar: 'تقدم مكة المكرمة فرصاً فريدة للشركات التي تخدم السكان المحليين وملايين الزوار. تركز استراتيجياتنا للتسويق الرقمي في مكة على الظهور العالي في عمليات البحث المحلية، والتحسين الفعال لخرائط جوجل، والإعلانات المستهدفة لجذب العملاء ذوي النية الشرائية العالية.'
    },
    mapEmbedUrl: '',
    coordinates: { lat: 21.3891, lng: 39.8579 },
    addressLocality: { en: 'Mecca', ar: 'مكة المكرمة' },
    addressRegion: { en: 'Makkah Province', ar: 'منطقة مكة المكرمة' }
  }
};
