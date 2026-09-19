
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation, useNavigate, useParams, Outlet } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { CustomCursor } from '@/components/CustomCursor';
import { BottomNav } from '@/components/BottomNav';
import { Language } from './types';

const LazyGlobalCTA = lazy(() => import('@/components/GlobalCTA').then(m => ({ default: m.GlobalCTA })));
const LazyFooter = lazy(() => import('@/components/Footer').then(m => ({ default: m.Footer })));
const LazyBottomNav = lazy(() => import('@/components/BottomNav').then(m => ({ default: m.BottomNav })));
import { updateSEO } from '@/utils/seo';

// Lazy load other pages
const SaudiLandingPage = lazy(() => import('@/components/SaudiLandingPage').then(m => ({ default: m.SaudiLandingPage })));
const SEOServices = lazy(() => import('@/components/SEOServices').then(m => ({ default: m.SEOServices })));
const PaidAdsServices = lazy(() => import('@/components/PaidAdsServices').then(m => ({ default: m.PaidAdsServices })));
const WebDevServices = lazy(() => import('@/components/WebDevServices').then(m => ({ default: m.WebDevServices })));
const SnapchatWebDev = lazy(() => import('@/components/SnapchatWebDev').then(m => ({ default: m.SnapchatWebDev })));
const WebsiteOnboarding = lazy(() => import('@/components/WebsiteOnboarding').then(m => ({ default: m.WebsiteOnboarding })));
import { Blog } from '@/components/Blog';
import { BlogPost } from '@/components/BlogPost';
const WorkPolicy = lazy(() => import('@/components/WorkPolicy').then(m => ({ default: m.WorkPolicy })));
const PlatformDetail = lazy(() => import('@/components/PlatformDetail').then(m => ({ default: m.PlatformDetail })));
const CityLandingPage = lazy(() => import('@/components/CityLandingPage').then(m => ({ default: m.CityLandingPage })));
const NotFound = lazy(() => import('@/components/NotFound').then(m => ({ default: m.NotFound })));
const AIPage = lazy(() => import('@/components/AIPage').then(m => ({ default: m.AIPage })));

// Lazy load below-the-fold components for the home page
const LazyServices = lazy(() => import('@/components/Services').then(m => ({ default: m.Services })));
const LazyProcess = lazy(() => import('@/components/Process').then(m => ({ default: m.Process })));
const LazyWhyUs = lazy(() => import('@/components/WhyUs').then(m => ({ default: m.WhyUs })));
const LazyFAQ = lazy(() => import('@/components/FAQ').then(m => ({ default: m.FAQ })));
const LazyContact = lazy(() => import('@/components/Contact').then(m => ({ default: m.Contact })));

// Wrapper for PlatformDetail to handle params
const PlatformDetailWrapper: React.FC<{ lang: Language, onBack: () => void, onWebsiteClick: () => void }> = ({ lang, onBack, onWebsiteClick }) => {
  const { id } = useParams<{ id: string }>();
  if (!id) return null;
  return <PlatformDetail platformId={id} lang={lang} onBack={onBack} onWebsiteClick={onWebsiteClick} />;
};

interface PublicLayoutProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onPlatformClick: (id: string) => void;
  onWebsiteOnboardingClick: () => void;
  onSEOClick: () => void;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({
  lang,
  setLang,
  onPlatformClick,
  onWebsiteOnboardingClick,
  onSEOClick,
}) => (
  <>
    <CustomCursor />
    <Navbar lang={lang} setLang={setLang} />
    
    <main className="min-h-screen">
      <Outlet />
    </main>

    <Suspense fallback={null}>
      <LazyGlobalCTA lang={lang} />
      
      <LazyBottomNav 
        lang={lang} 
        onPlatformSelect={onPlatformClick} 
        onWebsiteClick={onWebsiteOnboardingClick}
      />
      <LazyFooter lang={lang} onSEOClick={onSEOClick} />
    </Suspense>
  </>
);

function App() {
  const [lang, setLang] = useState<Language>('ar');
  const location = useLocation();
  const navigate = useNavigate();

  // Set RTL direction on body when language changes
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // Update font based on language
    // 'Space Grotesk' for English, 'Almarai' / 'Noto Kufi Arabic' for Arabic
    if (lang === 'ar') {
      document.body.classList.remove('font-sans');
      document.body.classList.add('font-arabic');
      document.body.style.fontFamily = '"Almarai", "Noto Kufi Arabic", ui-sans-serif, system-ui, sans-serif';
    } else {
      document.body.classList.remove('font-arabic');
      document.body.classList.add('font-sans');
      document.body.style.fontFamily = '"Space Grotesk", "Almarai", ui-sans-serif, system-ui, sans-serif';
    }

    // Set page title and SEO metadata based on current path
    const path = location.pathname;
    let seoConfig = {
      title: lang === 'en' 
        ? 'Nashar Hub | Digital Marketing, SEO & Web Development Agency' 
        : 'وكالة نشار هب | تسويق رقمي، سيو، وتصميم مواقع احترافية | Nashar Hub',
      description: lang === 'en' 
        ? 'Nashar Hub is a leading digital marketing and web solutions agency specializing in Google Ads, SEO, Meta Ads, and ecommerce development across Saudi Arabia, the GCC, and globally.' 
        : 'وكالة نشار هب (Nashar Hub) الرائدة في التسويق الرقمي، إدارة الحملات الإعلانية الممولة (Google & Meta Ads)، تصدر نتائج السيو، وتصميم وتطوير المواقع والمتاجر الإلكترونية في السعودية والخليج ومختلف الأسواق.',
      url: `https://nasharhub.com${path === '/' ? '/' : path}`,
      image: 'https://nasharhub.com/og-image.jpg'
    };

    if (path === '/') {
      seoConfig.title = lang === 'en' 
        ? 'Nashar Hub | Digital Marketing, SEO, Paid Ads & Web Development Agency' 
        : 'وكالة نشار هب | تسويق رقمي، سيو، وإعلانات وتصميم مواقع | Nashar Hub';
      seoConfig.description = lang === 'en'
        ? 'Nashar Hub is your trusted partner for digital growth. We specialize in SEO, Google Ads, Meta Ads, and professional web development to drive high ROI.'
        : 'وكالة نشار هب (Nashar Hub) الرائدة في التسويق الرقمي، إدارة الحملات الإعلانية الممولة (Google & Meta Ads)، تصدر نتائج السيو، وتصميم وتطوير المواقع والمتاجر الإلكترونية في السعودية والخليج ومختلف الأسواق.';
    } else if (path === '/saudi') {
      seoConfig.title = lang === 'en' ? 'Digital Marketing in Saudi Arabia | Services & Insights | Nashar Hub' : 'التسويق الرقمي في السعودية | خدمات ونتائج ملموسة | نشار هب';
      seoConfig.description = lang === 'en' ? 'Comprehensive digital marketing solutions across Saudi Arabia including Riyadh, Jeddah, Dammam, Mecca, and Medina.' : 'حلول التسويق الرقمي المتكاملة في المملكة العربية السعودية: الرياض، جدة، الدمام، مكة، والمدينة المنورة.';
    } else if (path === '/seo-services') {
      seoConfig.title = lang === 'en' ? 'SEO Services & Google Ranking Dominance | Nashar Hub SEO' : 'خدمات السيو وتصدر نتائج بحث جوجل | نشار هب SEO';
      seoConfig.description = lang === 'en' ? 'Dominate Google search results with comprehensive technical, on-page, and off-page SEO optimization services in Saudi Arabia, GCC, and worldwide.' : 'تصدر نتائج بحث جوجل مع وكالة نشار هب عبر خدمات تحسين محركات البحث التقنية والمحتوى وبناء الروابط للشركات في السعودية والخليج ومختلف الأسواق.';
    } else if (path === '/paid-ads-services') {
      seoConfig.title = lang === 'en' ? 'Paid Ads Management & Google Ads Agency | Nashar Hub' : 'إدارة الحملات الإعلانية الممولة وإعلانات جوجل | نشار هب';
      seoConfig.description = lang === 'en' ? 'Maximize your marketing ROAS with Google Ads, Meta, Snapchat, and TikTok PPC campaign management in Saudi Arabia, the GCC, and global markets.' : 'حقق أقصى عائد على استثمارك الإعلاني مع وكالة نشار هب عبر إدارة حملات إعلانات جوجل، ميتا، سناب شات، وتيك توك في السعودية والخليج ومختلف الأسواق.';
    } else if (path === '/web-dev-services') {
      seoConfig.title = lang === 'en' ? 'Web Design & Ecommerce Development Agency | Nashar Hub' : 'تصميم مواقع وتطوير متاجر إلكترونية احترافية | نشار هب';
      seoConfig.description = lang === 'en' ? 'Custom web development and ecommerce solutions built for speed, SEO, and maximum conversion rates.' : 'تصميم وتطوير مواقع ومتاجر إلكترونية احترافية مخصصة للسرعة والنمو وأعلى معدل تحويل في السعودية والخليج والوطن العربي.';
    } else if (path === '/website-onboarding') {
      seoConfig.title = lang === 'en' ? 'Build Your Website | Nashar Hub' : 'ابدأ مشروع تصميم موقعك | نشار هب';
      seoConfig.description = lang === 'en' ? 'Get a custom web design quote and strategy tailored for your business.' : 'احصل على استشارة وعرض سعر مخصص لتصميم وتطوير موقعك الإلكتروني أو متجرك في السعودية ومختلف الدول.';
    } else if (path === '/ai' || path === '/llm' || path === '/about-for-ai') {
      seoConfig.title = lang === 'en' ? 'AI Search Context & Agency Overview | Nashar Hub' : 'معلومات وكالة نشار هب لمحركات بحث الذكاء الاصطناعي | نشار هب';
      seoConfig.description = lang === 'en' ? 'Official context and profile for AI engines and LLMs regarding Nashar Hub digital agency services.' : 'معلومات رسمية موجهة لنماذج ومحركات الذكاء الاصطناعي (ChatGPT, Perplexity, Claude, Gemini) حول خدمات وكالة نشار هب للتسويق الرقمي والسيو.';
    } else if (path === '/blog') {
      seoConfig.title = lang === 'en' ? 'Marketing Blog & Digital Strategy Insights | Nashar Hub' : 'مدونة التسويق الرقمي واستراتيجيات النمو | نشار هب';
      seoConfig.description = lang === 'en' ? 'Practical articles and guides on SEO, Google Ads, and digital marketing strategies in Saudi Arabia and the MENA region.' : 'مقالات وأدلة عملية في تحسين محركات البحث، إعلانات جوجل، والتسويق الرقمي في السعودية والخليج والوطن العربي.';
    } else if (path === '/policy') {
      seoConfig.title = lang === 'en' ? 'Work Policy & Transparency | Nashar Hub' : 'سياسة العمل والشفافية | نشار هب';
      seoConfig.description = lang === 'en' ? 'Learn about work ethics, delivery standards, and transparency at Nashar Hub.' : 'تعرف على سياسة العمل ومعايير الجودة والشفافية المعتمدة في وكالة نشار هب للتسويق الرقمي.';
    }

    updateSEO(seoConfig);

    // Update canonical tag for the current route
    const currentUrl = seoConfig.url;
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // Clean up any hreflang tags to prevent SEO duplicate/conflict errors
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());

  }, [lang, location.pathname]);

  // Handle smooth scrolling for anchor links with offset for sticky header
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.origin === window.location.origin) {
        // If we are not on the home page, navigate to home first
        if (location.pathname !== '/') {
          e.preventDefault();
          navigate('/');
          // We need a small timeout to let the main view render before scrolling
          setTimeout(() => {
            const id = anchor.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
          return;
        }

        e.preventDefault();
        const id = anchor.hash.substring(1);
        const element = document.getElementById(id);
        
        if (element) {
          const navHeight = 100; // Offset for sticky navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - navHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
          
          window.history.pushState(null, '', anchor.hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [location.pathname, navigate]);

  const handlePlatformClick = (id: string) => {
    navigate(`/services/${id}`);
  };

  const handleWebsiteOnboardingClick = () => {
    navigate('/website-onboarding');
  };

  const handleSEOClick = () => {
    navigate('/seo-services');
  };

  const handlePaidAdsClick = () => {
    navigate('/paid-ads-services');
  };

  const handleWebDevClick = () => {
    navigate('/web-dev-services');
  };

  const handleBackToMain = () => {
    navigate('/');
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Inject analytics only on client-side
    import('@vercel/analytics').then(({ inject }) => inject());
  }, []);

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={
          <PublicLayout 
            lang={lang} 
            setLang={setLang} 
            onPlatformClick={handlePlatformClick} 
            onWebsiteOnboardingClick={handleWebsiteOnboardingClick} 
            onSEOClick={handleSEOClick} 
          />
        }>
          <Route path="/saudi" element={<SaudiLandingPage />} />
          <Route path="/saudi/:city" element={<CityLandingPage lang={lang} onBack={handleBackToMain} />} />
          
          <Route path="/ai" element={<AIPage lang={lang} />} />
          <Route path="/llm" element={<AIPage lang={lang} />} />
          <Route path="/about-for-ai" element={<AIPage lang={lang} />} />

          <Route path="/seo-services" element={<SEOServices lang={lang} onBack={handleBackToMain} />} />
          <Route path="/paid-ads-services" element={<PaidAdsServices lang={lang} onBack={handleBackToMain} />} />
          <Route path="/web-dev-services" element={<WebDevServices lang={lang} onBack={handleBackToMain} />} />
          <Route path="/lp/web-design" element={<SnapchatWebDev lang={lang} />} />
          <Route path="/website-onboarding" element={<WebsiteOnboarding lang={lang} onBack={handleBackToMain} />} />

          <Route path="/blog" element={<Blog lang={lang} onBack={handleBackToMain} />} />
          <Route path="/blog/:slug" element={<BlogPost lang={lang} onBack={handleBackToMain} />} />
          <Route path="/policy" element={<WorkPolicy lang={lang} onBack={handleBackToMain} />} />

          <Route path="/services/:id" element={<PlatformDetailWrapper lang={lang} onBack={handleBackToMain} onWebsiteClick={handleWebsiteOnboardingClick} />} />
          
          <Route path="/" element={
            <div className="main-content">
              <Hero lang={lang} />
              <Suspense fallback={null}>
                <LazyServices lang={lang} onSEOClick={handleSEOClick} onPaidAdsClick={handlePaidAdsClick} onWebDevClick={handleWebDevClick} />
                <LazyProcess lang={lang} />
                <LazyWhyUs lang={lang} />
                <LazyFAQ lang={lang} />
                <LazyContact lang={lang} />
              </Suspense>
            </div>
          } />

          <Route path="*" element={<NotFound lang={lang} onBack={handleBackToMain} />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
