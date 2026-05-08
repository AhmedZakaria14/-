
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

// Lazy load admin components
const AdminLayout = lazy(() => import('@/admin/AdminLayout').then(m => ({ default: m.AdminLayout })));
const AdminLogin = lazy(() => import('@/admin/Login').then(m => ({ default: m.AdminLogin })));
const Dashboard = lazy(() => import('@/admin/Dashboard').then(m => ({ default: m.Dashboard })));
const ClientsManagement = lazy(() => import('@/admin/ClientsManagement').then(m => ({ default: m.ClientsManagement })));
const ClientDetails = lazy(() => import('@/admin/ClientDetails').then(m => ({ default: m.ClientDetails })));
const CalendarPage = lazy(() => import('@/admin/Calendar').then(m => ({ default: m.CalendarPage })));
const SettingsPage = lazy(() => import('@/admin/Settings').then(m => ({ default: m.SettingsPage })));
const Tasks = lazy(() => import('@/admin/Tasks').then(m => ({ default: m.Tasks })));
const Invoices = lazy(() => import('@/admin/Invoices').then(m => ({ default: m.Invoices })));
const Leads = lazy(() => import('@/admin/Leads').then(m => ({ default: m.Leads })));

// Lazy load other pages
const SaudiLandingPage = lazy(() => import('@/components/SaudiLandingPage').then(m => ({ default: m.SaudiLandingPage })));
const SEOServices = lazy(() => import('@/components/SEOServices').then(m => ({ default: m.SEOServices })));
const PaidAdsServices = lazy(() => import('@/components/PaidAdsServices').then(m => ({ default: m.PaidAdsServices })));
const WebDevServices = lazy(() => import('@/components/WebDevServices').then(m => ({ default: m.WebDevServices })));
const WebsiteOnboarding = lazy(() => import('@/components/WebsiteOnboarding').then(m => ({ default: m.WebsiteOnboarding })));
const PackagesWizard = lazy(() => import('@/components/PackagesWizard').then(m => ({ default: m.PackagesWizard })));
const Blog = lazy(() => import('@/components/Blog').then(m => ({ default: m.Blog })));
const BlogPost = lazy(() => import('@/components/BlogPost').then(m => ({ default: m.BlogPost })));
const PlatformDetail = lazy(() => import('@/components/PlatformDetail').then(m => ({ default: m.PlatformDetail })));
const CityLandingPage = lazy(() => import('@/components/CityLandingPage').then(m => ({ default: m.CityLandingPage })));
const NotFound = lazy(() => import('@/components/NotFound').then(m => ({ default: m.NotFound })));

// Lazy load below-the-fold components for the home page
const LazyServices = lazy(() => import('@/components/Services').then(m => ({ default: m.Services })));
const LazyPortfolio = lazy(() => import('@/components/Portfolio').then(m => ({ default: m.Portfolio })));
const LazyProcess = lazy(() => import('@/components/Process').then(m => ({ default: m.Process })));
const LazyWhyUs = lazy(() => import('@/components/WhyUs').then(m => ({ default: m.WhyUs })));
const LazyClientLogos = lazy(() => import('@/components/ClientLogos').then(m => ({ default: m.ClientLogos })));
const LazyFAQ = lazy(() => import('@/components/FAQ').then(m => ({ default: m.FAQ })));
const LazyContact = lazy(() => import('@/components/Contact').then(m => ({ default: m.Contact })));

// Wrapper for PlatformDetail to handle params
const PlatformDetailWrapper: React.FC<{ lang: Language, onBack: () => void, onWebsiteClick: () => void }> = ({ lang, onBack, onWebsiteClick }) => {
  const { id } = useParams<{ id: string }>();
  if (!id) return null;
  return <PlatformDetail platformId={id} lang={lang} onBack={onBack} onWebsiteClick={onWebsiteClick} />;
};

function App() {
  const [lang, setLang] = useState<Language>('ar');
  const location = useLocation();
  const navigate = useNavigate();

  // Set RTL direction on body when language changes
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // Update font based on language
    // 'Outfit' for English (font-sans), 'Cairo' for Arabic (font-arabic)
    if (lang === 'ar') {
      document.body.classList.remove('font-sans');
      document.body.classList.add('font-arabic');
      document.body.style.fontFamily = '"Cairo", ui-sans-serif, system-ui, sans-serif';
    } else {
      document.body.classList.remove('font-arabic');
      document.body.classList.add('font-sans');
      document.body.style.fontFamily = '"Outfit", ui-sans-serif, system-ui, sans-serif';
    }

    // Set home page title
    if (location.pathname === '/') {
      const title = lang === 'en' 
        ? 'Nashar Hub | Digital Marketing Agency in Saudi Arabia | Google Ads & SEO' 
        : 'نشار هب | وكالة تسويق رقمي في السعودية - إعلانات جوجل وسيو';
      
      const description = lang === 'en'
        ? 'Nashar Hub is a leading digital marketing agency in Saudi Arabia specializing in Google Ads, SEO, and web design. Real results and guaranteed ROI for your business.'
        : 'نشار هب وكالة تسويق رقمي في الرياض متخصصة في إعلانات جوجل، تحسين محركات البحث SEO، وتصميم المواقع والمتاجر. نتائج حقيقية وعائد استثمار مضمون لعملك في السعودية.';
      
      updateSEO({
        title,
        description,
        url: 'https://nasharhub.com/',
        image: 'https://nasharhub.com/og-image.jpg'
      });
    }

    // Update canonical and hreflang tags for the current route
    const currentUrl = `https://nasharhub.com${location.pathname === '/' ? '' : location.pathname}`;
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', currentUrl);
    }

    const updateHreflang = (hreflang: string) => {
      let link = document.querySelector(`link[hreflang="${hreflang}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', hreflang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', currentUrl);
    };

    updateHreflang('ar-SA');
    updateHreflang('en');
    updateHreflang('x-default');

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

  const handlePackagesClick = () => {
    navigate('/packages');
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

  const PublicLayout = () => (
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
          onPlatformSelect={handlePlatformClick} 
          onPackagesClick={handlePackagesClick}
          onWebsiteClick={handleWebsiteOnboardingClick}
        />
        <LazyFooter lang={lang} onSEOClick={handleSEOClick} />
      </Suspense>
    </>
  );

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
      <Routes>
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminLayout />}><Route index element={<Dashboard />} /></Route>
        <Route path="/admin/leads" element={<AdminLayout />}><Route index element={<Leads />} /></Route>
        <Route path="/admin/clients" element={<AdminLayout />}><Route index element={<ClientsManagement />} /></Route>
        <Route path="/admin/clients/:id" element={<AdminLayout />}><Route index element={<ClientDetails />} /></Route>
        <Route path="/admin/tasks" element={<AdminLayout />}><Route index element={<Tasks />} /></Route>
        <Route path="/admin/invoices" element={<AdminLayout />}><Route index element={<Invoices />} /></Route>
        <Route path="/admin/calendar" element={<AdminLayout />}><Route index element={<CalendarPage />} /></Route>
        <Route path="/admin/settings" element={<AdminLayout />}><Route index element={<SettingsPage />} /></Route>

        <Route element={<PublicLayout />}>
          <Route path="/saudi" element={<SaudiLandingPage />} />
          <Route path="/saudi/:city" element={<CityLandingPage lang={lang} onBack={handleBackToMain} />} />
          
          <Route path="/seo-services" element={<SEOServices lang={lang} onBack={handleBackToMain} />} />
          <Route path="/paid-ads-services" element={<PaidAdsServices lang={lang} onBack={handleBackToMain} />} />
          <Route path="/web-dev-services" element={<WebDevServices lang={lang} onBack={handleBackToMain} />} />
          <Route path="/website-onboarding" element={<WebsiteOnboarding lang={lang} onBack={handleBackToMain} />} />
          <Route path="/packages" element={<PackagesWizard lang={lang} onBack={handleBackToMain} />} />

          <Route path="/blog" element={<Blog lang={lang} onBack={handleBackToMain} />} />
          <Route path="/blog/:slug" element={<BlogPost lang={lang} onBack={handleBackToMain} />} />

          <Route path="/services/:id" element={<PlatformDetailWrapper lang={lang} onBack={handleBackToMain} onWebsiteClick={handleWebsiteOnboardingClick} />} />
          
          <Route path="/" element={
            <div className="main-content">
              <Hero lang={lang} />
              <Suspense fallback={<div className="py-20 flex justify-center"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
                <LazyServices lang={lang} onSEOClick={handleSEOClick} onPaidAdsClick={handlePaidAdsClick} onWebDevClick={handleWebDevClick} />
                <LazyPortfolio lang={lang} />
                <LazyProcess lang={lang} />
                <LazyWhyUs lang={lang} />
                <LazyClientLogos lang={lang} />
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
