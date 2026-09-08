import fs from 'fs';
import path from 'path';

// All routes from sitemap with their SEO metadata
const routes = [
  {
    path: '/paid-ads-services',
    title: 'وكالة إعلانات جوجل في السعودية | حملات بعائد استثمار مرتفع | نشار هب',
    description: 'حقق أقصى عائد على استثمارك الإعلاني مع خدمات إدارة حملات إعلانات جوجل، ميتا، سناب شات، وتيك توك بالسعودية.'
  },
  {
    path: '/seo-services',
    title: 'خدمات السيو في السعودية | تصدر نتائج بحث جوجل | نشار هب',
    description: 'تصدر نتائج بحث جوجل في المملكة العربية السعودية مع خدمات تحسين محركات البحث التقنية والمحتوى الداخلي والخارجي.'
  },
  {
    path: '/web-dev-services',
    title: 'تصميم مواقع وتطوير متاجر إلكترونية في السعودية | نشار هب',
    description: 'تصميم وتطوير مواقع ومتاجر إلكترونية احترافية مخصصة للنمو والسرعة وأعلى معدل تحويل في السعودية.'
  },
  {
    path: '/saudi',
    title: 'التسويق الرقمي في السعودية | خدمات ونتائج ملموسة | نشار هب',
    description: 'حلول التسويق الرقمي المتكاملة في المملكة العربية السعودية: الرياض، جدة، الدمام، مكة، والمدينة المنورة.'
  },
  {
    path: '/saudi/riyadh',
    title: 'أفضل شركة تسويق رقمي في الرياض | نشار هب',
    description: 'خدمات تسويق رقمي متكاملة في الرياض: إدارة إعلانات جوجل ومواقع التواصل، سيو، وتصميم مواقع ومتاجر احترافية.'
  },
  {
    path: '/saudi/jeddah',
    title: 'أفضل شركة تسويق رقمي في جدة | نشار هب',
    description: 'حلول تسويق إلكتروني وتصميم متاجر ومواقع احترافية في جدة لتحقيق أعلى مبيعات لعملك.'
  },
  {
    path: '/saudi/dammam',
    title: 'أفضل شركة تسويق رقمي في الدمام والمنطقة الشرقية | نشار هب',
    description: 'خدمات سيو وإعلانات ممولة وتصميم مواقع وتطبيقات في الدمام والخبر والمنطقة الشرقية.'
  },
  {
    path: '/saudi/mecca',
    title: 'أفضل شركة تسويق رقمي وتصميم مواقع في مكة المكرمة | نشار هب',
    description: 'خدمات التسويق الرقمي وإدارة الحملات الإعلانية وتصميم المواقع للمشاريع والشركات في مكة المكرمة.'
  },
  {
    path: '/services/google',
    title: 'إعلانات جوجل Google Ads بالسعودية | نشار هب',
    description: 'إدارة حملات إعلانات جوجل الاحترافية (Search, Performance Max, Display) لتحقيق أعلى عائد على الإنفاق الإعلاني في السعودية.'
  },
  {
    path: '/services/meta',
    title: 'إعلانات فيسبوك وانستقرام Meta Ads بالسعودية | نشار هب',
    description: 'حملات إعلانات ميتا الاحترافية لاستهداف العملاء وتحقيق أعلى معدل تحويل ومبيعات في السوق السعودي.'
  },
  {
    path: '/services/tiktok',
    title: 'إعلانات تيك توك TikTok Ads بالسعودية | نشار هب',
    description: 'إنشاء وإدارة حملات إعلانية مبتكرة على تيك توك لجذب جمهور الشباب وزيادة المبيعات في السعودية.'
  },
  {
    path: '/services/snapchat',
    title: 'إعلانات سناب شات Snapchat Ads بالسعودية | نشار هب',
    description: 'استهدف الجمهور السعودي بأعلى كفاءة عبر إعلانات سناب شات التفاعلية وحقق أعلى عائد استثماري.'
  },
  {
    path: '/services/linkedin',
    title: 'إعلانات لينكد إن LinkedIn Ads بالسعودية | نشار هب',
    description: 'حملات B2B متخصصة على لينكد إن للوصول إلى صناع القرار وأصحاب الشركات في السعودية والخليج.'
  },
  {
    path: '/blog',
    title: 'مدونة التسويق الرقمي واستراتيجيات النمو | نشار هب',
    description: 'مقالات وأدلة عملية في تحسين محركات البحث، إعلانات جوجل، والتسويق الرقمي في السعودية.'
  },
  {
    path: '/policy',
    title: 'سياسة العمل والشفافية | نشار هب',
    description: 'تعرف على سياسة العمل ومعايير الجودة والشفافية المعتمدة في وكالة نشار هب للتسويق الرقمي.'
  },
  {
    path: '/website-onboarding',
    title: 'ابدأ مشروع تصميم موقعك | نشار هب',
    description: 'احصل على استشارة وعرض سعر مخصص لتصميم وتطوير موقعك الإلكتروني أو متجرك في السعودية.'
  },
  {
    path: '/lp/web-design',
    title: 'تصميم مواقع ومتاجر احترافية في السعودية | نشار هب',
    description: 'احصل على موقع أو متجر إلكتروني سريع ومتوافق مع محركات البحث بأعلى معايير التصميم في السعودية.'
  }
];

const distDir = path.resolve(process.cwd(), 'dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('Error: dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(templatePath, 'utf-8');

console.log('Generating pre-rendered HTML files for sitemap routes...');

routes.forEach(route => {
  const fullUrl = `https://nasharhub.com${route.path}`;
  
  // Replace canonical URL
  let html = baseHtml.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${fullUrl}" />`
  );
  
  // Replace og:url
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${fullUrl}" />`
  );

  // Replace twitter:url if present
  html = html.replace(
    /<meta\s+name="twitter:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:url" content="${fullUrl}" />`
  );

  // Replace Title if provided
  if (route.title) {
    html = html.replace(
      /<title>[^<]*<\/title>/i,
      `<title>${route.title}</title>`
    );
    html = html.replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:title" content="${route.title}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:title" content="${route.title}" />`
    );
  }

  // Replace Description if provided
  if (route.description) {
    html = html.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="description" content="${route.description}" />`
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:description" content="${route.description}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:description" content="${route.description}" />`
    );
  }

  // Write out directory and index.html
  // E.g. dist/services/google/index.html
  const routeRelPath = route.path.startsWith('/') ? route.path.slice(1) : route.path;
  const targetDir = path.join(distDir, routeRelPath);
  
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf-8');
  console.log(`✓ Generated: dist/${routeRelPath}/index.html (canonical: ${fullUrl})`);
});

console.log('Pre-rendering completed successfully!');
