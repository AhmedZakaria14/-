
export const COUNTRIES = [
  { name: { en: 'Saudi Arabia', ar: 'السعودية' }, code: 'SAR', flag: '🇸🇦' },
  { name: { en: 'UAE', ar: 'الإمارات' }, code: 'AED', flag: '🇦🇪' },
  { name: { en: 'Egypt', ar: 'مصر' }, code: 'EGP', flag: '🇪🇬' },
  { name: { en: 'Kuwait', ar: 'الكويت' }, code: 'KWD', flag: '🇰🇼' },
  { name: { en: 'Qatar', ar: 'قطر' }, code: 'QAR', flag: '🇶🇦' },
  { name: { en: 'Bahrain', ar: 'البحرين' }, code: 'BHD', flag: '🇧🇭' },
  { name: { en: 'Oman', ar: 'عمان' }, code: 'OMR', flag: '🇴🇲' },
  { name: { en: 'Jordan', ar: 'الأردن' }, code: 'JOD', flag: '🇯🇴' },
  { name: { en: 'Iraq', ar: 'العراق' }, code: 'USD', flag: '🇮🇶' }, 
  { name: { en: 'Morocco', ar: 'المغرب' }, code: 'MAD', flag: '🇲🇦' },
  { name: { en: 'Algeria', ar: 'الجزائر' }, code: 'DZD', flag: '🇩🇿' },
  { name: { en: 'Tunisia', ar: 'تونس' }, code: 'TND', flag: '🇹🇳' },
  { name: { en: 'Libya', ar: 'ليبيا' }, code: 'LYD', flag: '🇱🇾' },
  { name: { en: 'Palestine', ar: 'فلسطين' }, code: 'USD', flag: '🇵🇸' },
  { name: { en: 'Lebanon', ar: 'لبنان' }, code: 'USD', flag: '🇱🇧' },
  { name: { en: 'Yemen', ar: 'اليمن' }, code: 'USD', flag: '🇾🇪' },
  { name: { en: 'Sudan', ar: 'السودان' }, code: 'USD', flag: '🇸🇩' },
  { name: { en: 'Syria', ar: 'سوريا' }, code: 'USD', flag: '🇸🇾' },
  { name: { en: 'Rest of World', ar: 'دولة أخرى' }, code: 'USD', flag: '🌍' },
];

export const MULTIPLIERS: Record<string, number> = {
  'USD': 1,
  'SAR': 3.75,
  'AED': 3.67,
  'EGP': 50,
  'QAR': 3.64,
  'KWD': 0.31,
  'BHD': 0.38,
  'OMR': 0.38,
  'JOD': 0.71,
  'MAD': 10,
  'DZD': 134,
  'TND': 3.1,
  'LYD': 4.8,
  'IQD': 1310
};

export const PACKAGES = {
  ads: [
    {
      id: 'starter',
      name: { en: 'Starter Growth', ar: 'بداية النمو' },
      priceUSD: 500,
      platforms: ['Meta (FB/IG)'],
      features: {
        en: ['1 Campaign', '4 Creative Designs', 'Weekly Reporting', 'Pixel Setup'],
        ar: ['حملة إعلانية واحدة', '4 تصاميم إبداعية', 'تقارير أسبوعية', 'ربط البيكسل']
      },
      recommended: false
    },
    {
      id: 'pro',
      name: { en: 'Market Leader', ar: 'قائد السوق' },
      priceUSD: 1000,
      platforms: ['Meta', 'Snapchat OR TikTok'],
      features: {
        en: ['3 Campaigns', '8 Creative Designs', 'Advanced Targeting', 'Copywriting', '24/7 Support'],
        ar: ['3 حملات إعلانية', '8 تصاميم احترافية', 'استهداف متقدم', 'كتابة محتوى إعلاني', 'دعم فني 24/7']
      },
      recommended: true
    },
    {
      id: 'dominate',
      name: { en: 'Domination', ar: 'السيطرة الكاملة' },
      priceUSD: 1800,
      platforms: ['Meta', 'Google', 'TikTok/Snap'],
      features: {
        en: ['Unlimited Campaigns', 'Video Production (Reels)', 'Full Funnel Strategy', 'Dedicated Account Manager'],
        ar: ['حملات غير محدودة', 'إنتاج فيديو (ريلز)', 'استراتيجية قمع مبيعات', 'مدير حساب خاص']
      },
      recommended: false
    }
  ],
  ads_web: [
    {
      id: 'launchpad',
      name: { en: 'Business Launchpad', ar: 'انطلاق الأعمال' },
      priceUSD: 1200,
      platforms: ['Landing Page', 'Meta Ads'],
      features: {
        en: ['High Converting Landing Page', '1 Month Ads Management', 'Domain & Hosting', 'Lead Form Integration'],
        ar: ['صفحة هبوط عالية التحويل', 'إدارة إعلانات لمدة شهر', 'دومين واستضافة مجانية', 'ربط نماذج العملاء']
      },
      recommended: false
    },
    {
      id: 'scale',
      name: { en: 'E-commerce Scale', ar: 'توسع المتاجر' },
      priceUSD: 2500,
      platforms: ['Full E-commerce Store', 'Multi-Platform Ads'],
      features: {
        en: ['Professional Online Store', 'Payment Gateway Setup', '2 Months Ads Management', 'SEO Setup', 'Products Upload'],
        ar: ['متجر إلكتروني متكامل', 'ربط بوابات الدفع', 'إدارة إعلانات شهرين', 'تهيئة SEO', 'رفع المنتجات']
      },
      recommended: true
    }
  ]
};
