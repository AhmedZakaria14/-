import { Language } from './types';

export interface CaseStudy {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  client: string;
  industry: {
    en: string;
    ar: string;
  };
  results: {
    metric: {
      en: string;
      ar: string;
    };
    value: string;
    icon: 'trending-up' | 'users' | 'dollar-sign' | 'shopping-cart';
  }[];
  description: {
    en: string;
    ar: string;
  };
  image: string;
  tags: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: {
      en: 'Scaling a Saudi Perfume Brand to 500+ Orders/Day',
      ar: 'توسيع علامة عطور سعودية لأكثر من 500 طلب يومياً'
    },
    client: 'Confidential Perfume Brand',
    industry: {
      en: 'E-commerce / Beauty',
      ar: 'تجارة إلكترونية / تجميل'
    },
    results: [
      {
        metric: { en: 'ROAS', ar: 'العائد على الإعلان' },
        value: '8.5x',
        icon: 'dollar-sign'
      },
      {
        metric: { en: 'Revenue Growth', ar: 'نمو الإيرادات' },
        value: '+300%',
        icon: 'trending-up'
      },
      {
        metric: { en: 'Orders', ar: 'الطلبات' },
        value: '15,000+',
        icon: 'shopping-cart'
      }
    ],
    description: {
      en: 'We utilized a mix of TikTok UGC ads and Snapchat retargeting to capture the Gen Z audience. By optimizing the offer (Buy 2 Get 1 Free), we increased the AOV by 40%.',
      ar: 'استخدمنا مزيجاً من إعلانات المحتوى (UGC) على تيك توك وإعادة الاستهداف على سناب شات للوصول لجيل Z. من خلال تحسين العرض (اشتر 2 واحصل على 1 مجاناً)، قمنا بزيادة متوسط قيمة الطلب بنسبة 40%.'
    },
    image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=800',
    tags: ['TikTok Ads', 'Snapchat Ads', 'CRO']
  },
  {
    id: '2',
    title: {
      en: 'Dominating Local SEO for a Riyadh Dental Clinic',
      ar: 'السيطرة على السيو المحلي لعيادة أسنان في الرياض'
    },
    client: 'Elite Dental Care',
    industry: {
      en: 'Healthcare',
      ar: 'رعاية صحية'
    },
    results: [
      {
        metric: { en: 'Organic Traffic', ar: 'زيارات مجانية' },
        value: '+450%',
        icon: 'users'
      },
      {
        metric: { en: 'New Leads', ar: 'عملاء جدد' },
        value: '120/mo',
        icon: 'trending-up'
      },
      {
        metric: { en: 'Keyword Ranking', ar: 'ترتيب الكلمات' },
        value: '#1',
        icon: 'trending-up'
      }
    ],
    description: {
      en: 'The clinic was invisible on Google Maps. We optimized their GMB profile, built local citations, and created content around "dental implants in Riyadh", leading to a massive influx of calls.',
      ar: 'كانت العيادة غير مرئية على خرائط جوجل. قمنا بتحسين ملف نشاطي التجاري، وبناء استشهادات محلية، وإنشاء محتوى حول "زراعة الأسنان في الرياض"، مما أدى إلى تدفق هائل للمكالمات.'
    },
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
    tags: ['Local SEO', 'Content Marketing', 'GMB']
  },
  {
    id: '3',
    title: {
      en: 'Real Estate Lead Generation in Dubai',
      ar: 'توليد عملاء محتملين للعقارات في دبي'
    },
    client: 'Luxury Homes DXB',
    industry: {
      en: 'Real Estate',
      ar: 'عقارات'
    },
    results: [
      {
        metric: { en: 'Cost Per Lead', ar: 'تكلفة العميل' },
        value: '$12',
        icon: 'dollar-sign'
      },
      {
        metric: { en: 'Qualified Leads', ar: 'عملاء مؤهلين' },
        value: '500+',
        icon: 'users'
      },
      {
        metric: { en: 'Sales Closed', ar: 'مبيعات مغلقة' },
        value: '$5M+',
        icon: 'shopping-cart'
      }
    ],
    description: {
      en: 'Using Meta Lead Forms and high-quality video walkthroughs, we targeted high-net-worth individuals in GCC and Europe interested in Dubai off-plan properties.',
      ar: 'باستخدام نماذج فيسبوك (Lead Forms) وفيديوهات عالية الجودة للعقارات، استهدفنا الأفراد ذوي الملاءة المالية العالية في الخليج وأوروبا المهتمين بالعقارات قيد الإنشاء في دبي.'
    },
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800',
    tags: ['Meta Ads', 'Lead Gen', 'Real Estate']
  }
];
