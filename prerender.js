import fs from 'fs';
import path from 'path';
import { blogPosts } from './src/data/blog';

// Core static routes with their SEO metadata
const routes = [
  {
    path: '/paid-ads-services',
    title: 'إدارة الحملات الإعلانية الممولة وإعلانات جوجل | نشار هب',
    description: 'حقق أقصى عائد على استثمارك الإعلاني مع وكالة نشار هب عبر إدارة حملات إعلانات جوجل، ميتا، سناب شات، وتيك توك في السعودية والخليج ومختلف الأسواق.'
  },
  {
    path: '/seo-services',
    title: 'خدمات السيو وتصدر نتائج بحث جوجل | نشار هب SEO',
    description: 'تصدر نتائج بحث جوجل مع وكالة نشار هب عبر خدمات تحسين محركات البحث التقنية والمحتوى للشركات في السعودية والخليج ومختلف الأسواق.'
  },
  {
    path: '/web-dev-services',
    title: 'تصميم مواقع وتطوير متاجر إلكترونية احترافية | نشار هب',
    description: 'تصميم وتطوير مواقع ومتاجر إلكترونية احترافية مخصصة للسرعة والنمو وأعلى معدل تحويل في السعودية والخليج والوطن العربي.'
  },
  {
    path: '/ai',
    title: 'معلومات وكالة نشار هب لمحركات بحث الذكاء الاصطناعي | نشار هب',
    description: 'معلومات رسمية موجهة لنماذج ومحركات الذكاء الاصطناعي (ChatGPT, Perplexity, Claude, Gemini) حول خدمات وكالة نشار هب للتسويق الرقمي والسيو.'
  },
  {
    path: '/saudi',
    title: 'التسويق الرقمي وتصميم المواقع في السعودية | نشار هب',
    description: 'حلول التسويق الرقمي المتكاملة من وكالة نشار هب لخدمة الشركات في المملكة العربية السعودية: الرياض، جدة، الدمام، مكة، والمدينة المنورة.'
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
    title: 'إدارة إعلانات جوجل Google Ads الاحترافية | نشار هب',
    description: 'إدارة حملات إعلانات جوجل الاحترافية (Search, Performance Max, Display) لتحقيق أعلى عائد على الإنفاق الإعلاني في السعودية والخليج ومختلف الأسواق.'
  },
  {
    path: '/services/meta',
    title: 'إعلانات فيسبوك وانستقرام Meta Ads | نشار هب',
    description: 'حملات إعلانات ميتا الاحترافية لاستهداف العملاء وتحقيق أعلى معدل تحويل ومبيعات في السعودية والخليج ومختلف الأسواق.'
  },
  {
    path: '/services/tiktok',
    title: 'إعلانات تيك توك TikTok Ads | نشار هب',
    description: 'إنشاء وإدارة حملات إعلانية مبتكرة على تيك توك لجذب الجمهور المستهدف وزيادة المبيعات في السعودية والخليج والشرق الأوسط.'
  },
  {
    path: '/services/snapchat',
    title: 'إعلانات سناب شات Snapchat Ads | نشار هب',
    description: 'استهدف الجمهور بأعلى كفاءة عبر إعلانات سناب شات التفاعلية وحقق أعلى عائد استثماري في السعودية ودول الخليج.'
  },
  {
    path: '/services/linkedin',
    title: 'إعلانات لينكد إن LinkedIn Ads للشركات | نشار هب',
    description: 'حملات B2B متخصصة على لينكد إن للوصول إلى صناع القرار وأصحاب الشركات في السعودية والخليج ومختلف القطاعات.'
  },
  {
    path: '/blog',
    title: 'مدونة التسويق الرقمي واستراتيجيات النمو | نشار هب',
    description: 'مقالات وأدلة عملية في تحسين محركات البحث، إعلانات جوجل، والتسويق الرقمي في السعودية والخليج والوطن العربي.'
  },
  {
    path: '/policy',
    title: 'سياسة العمل والشفافية | نشار هب',
    description: 'تعرف على سياسة العمل ومعايير الجودة والشفافية المعتمدة في وكالة نشار هب للتسويق الرقمي.'
  },
  {
    path: '/website-onboarding',
    title: 'ابدأ مشروع تصميم موقعك | نشار هب',
    description: 'احصل على استشارة وعرض سعر مخصص لتصميم وتطوير موقعك الإلكتروني أو متجرك في السعودية ومختلف الدول.'
  },
  {
    path: '/lp/web-design',
    title: 'تصميم مواقع ومتاجر إلكترونية احترافية | نشار هب',
    description: 'احصل على موقع أو متجر إلكتروني سريع ومتوافق مع محركات البحث بأعلى معايير التصميم في السعودية والخليج وكافة الأسواق.'
  }
];

// Dynamically add all blog post articles for SEO pre-rendering
blogPosts.forEach(post => {
  const rawTitle = post.title?.ar || 'مدونة نشار هب';
  const title = rawTitle.includes('نشار هب') ? rawTitle : `${rawTitle} | نشار هب`;
  const description = post.excerpt?.ar || '';
  routes.push({
    path: `/blog/${post.slug}`,
    title,
    description,
    image: post.image,
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title?.ar,
      "description": description,
      "image": post.image,
      "datePublished": post.date,
      "dateModified": post.date,
      "author": {
        "@type": "Organization",
        "name": post.author || "وكالة نشار هب"
      },
      "publisher": {
        "@type": "Organization",
        "name": "وكالة نشار هب للتسويق الرقمي",
        "logo": {
          "@type": "ImageObject",
          "url": "https://nasharhub.com/favicon.svg"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://nasharhub.com/blog/${post.slug}`
      }
    }
  });
});

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

  // Replace Image if provided
  if (route.image) {
    html = html.replace(
      /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:image" content="${route.image}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:image" content="${route.image}" />`
    );
  }

  // Inject route schema if provided
  if (route.schema) {
    const schemaScript = `    <script type="application/ld+json">\n${JSON.stringify(route.schema, null, 2)}\n    </script>\n`;
    html = html.replace('</head>', `${schemaScript}</head>`);
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
