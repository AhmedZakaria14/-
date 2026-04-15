import { MetadataRoute } from 'next';

const mainKeywords = [
  'نجار-بالرياض',
  'نجار-الرياض',
  'نجار-خشب',
  'نجار-في-الرياض',
  'نجار-غرف-نوم-بالرياض',
  'نجار-ابواب-بالرياض',
  'نجار-فك-وتركيب',
  'نجار-تفصيل-غرف-نوم',
  'منجرة-بالرياض',
  'افضل-نجار-في-الرياض',
  'افضل-نجار-بالرياض',
];

const longTailKeywords = [
  'نجار-شمال-الرياض',
  'نجار-جنوب-الرياض',
  'نجار-شرق-الرياض',
  'نجار-غرب-الرياض',
  'نجار-حي-الملك-فهد',
  'نجار-حي-النرجس',
  'نجار-حي-العليا',
  'نجار-حي-الروضة',
  'نجار-حي-المونسية',
  'نجار-تركيب-ايكيا',
  'فني-تركيب-اثاث-ايكيا',
  'نجار-خشب-طاولات',
  'نجار-دواليب-بالرياض',
  'أفضل-نجار-غرف-نوم-في-الرياض',
  'نجارين-اثاث-بالرياض',
  'نجار-ابواب-خشب-بالرياض',
  'نجار-تركيب-ابواب-بالرياض',
  'نجار-باب-وشباك-بالرياض',
  'نجار-فك-وتركيب-غرف-نوم-بالرياض',
  'نجار-فك-وتركيب-الاثاث',
  'نجار-ابواب-الرياض',
  'نجار-الابواب-في-الرياض',
  'نجار-خشب-الرياض',
  'نجار-خشب-بالرياض',
  'نجار-خشب-في-الرياض',
  'نجار-خشب-شرق-الرياض',
  'نجار-ديكور',
  'أفضل-نجار-ممتاز-بالرياض',
  'نجار-ممتاز-في-الرياض',
  'نجار-بالرياض-رخيص',
  'افضل-محل-نجارة-بالرياض',
  'نجار-تركيب-أثاث-في-الرياض',
  'أفضل-أعمال-تركيب-أثاث-بالرياض',
  'نجار-تركيب-غرف-نوم',
  'إمكانيات-نجار-بالرياض-ومنها-انه-نجار-ابواب-بالرياض',
  'أفضل-نجار-ممتاز-بالرياض-أعمال-نجارة-بالرياض'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://najjarriyadh.com';
  const currentDate = new Date();

  const mainKeywordPages = mainKeywords.map((keyword) => ({
    url: `${baseUrl}/${keyword}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const longTailKeywordPages = longTailKeywords.map((keyword) => ({
    url: `${baseUrl}/${keyword}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const staticRoutes = [
    { route: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { route: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { route: '/portfolio', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/blog', priority: 0.8, changeFrequency: 'monthly' as const },
  ].map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency,
    priority,
  }));

  return [...staticRoutes, ...mainKeywordPages, ...longTailKeywordPages];
}
