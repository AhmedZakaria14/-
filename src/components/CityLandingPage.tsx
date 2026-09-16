import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, MapPin, Target, TrendingUp, Globe } from 'lucide-react';
import { Language } from '../types';
import { CITIES_DATA } from '../data/cities';
import { updateSEO } from '../utils/seo';

interface CityLandingPageProps {
  lang: Language;
  onBack: () => void;
}

export const CityLandingPage: React.FC<CityLandingPageProps> = ({ lang, onBack }) => {
  const { city } = useParams<{ city: string }>();
  const isRTL = lang === 'ar';

  // Validate city
  if (!city || !CITIES_DATA[city]) {
    return <Navigate to="/saudi" replace />;
  }

  const data = CITIES_DATA[city];

  useEffect(() => {
    updateSEO({
      title: data.seoTitle[lang],
      description: data.seoDesc[lang],
      keywords: data.seoKeywords[lang],
      url: `https://nasharhub.com/saudi/${city}`,
      image: 'https://nasharhub.com/og-image.jpg'
    });

    // Inject LocalBusiness Schema for this specific city
    const schemaId = `schema-city-${city}`;
    let script = document.getElementById(schemaId);
    if (!script) {
      script = document.createElement('script');
      script.id = schemaId;
      script.setAttribute('type', 'application/ld+json');
      
      const schemaData = {
        "@context": "https://schema.org",
        "@type": "MarketingAgency",
        "name": `Nashar Hub ${data.name.en}`,
        "alternateName": `نشار هب ${data.name.ar}`,
        "url": `https://nasharhub.com/saudi/${city}`,
        "logo": "https://nasharhub.com/logo.png",
        "description": data.seoDesc.en,
        "telephone": "+201010742430",
        "email": "Info@nasharhub.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": data.addressLocality.en,
          "addressRegion": data.addressRegion.en,
          "addressCountry": "SA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": data.coordinates.lat,
          "longitude": data.coordinates.lng
        },
        "areaServed": {
          "@type": "City",
          "name": data.addressLocality.en
        }
      };
      
      script.textContent = JSON.stringify(schemaData);
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup schema on unmount
      const existingScript = document.getElementById(schemaId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [city, lang, data]);

  const whatsappMsg = encodeURIComponent(
    lang === 'ar' 
      ? `مرحباً، أود الاستفسار عن خدمات التسويق في ${data.name.ar}`
      : `Hello, I would like to inquire about marketing services in ${data.name.en}`
  );
  const CONTACT_NUMBER = "01010742430"; // Main contact

  return (
    <div className={`min-h-screen bg-[#f4f1e9] text-[#0b1020] ${isRTL ? 'font-arabic' : 'font-sans'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#0b1020] rounded-2xl p-8 md:p-14 text-center max-w-4xl mx-auto border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 text-[#58a8f3] mb-6 font-mono text-xs uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            <span>{data.name[lang]} REGION</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            {data.heroTitle[lang]}
          </h1>
          <p className="text-base md:text-lg text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto font-normal">
            {data.heroSubtitle[lang]}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`https://wa.me/201010742430?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-8 py-3.5 rounded bg-[#1677d2] hover:bg-[#2c8de8] text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              {lang === 'ar' ? 'تواصل معنا في هذه المنطقة' : 'Consult Local Specialist'}
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white border-t border-[#d1ccc0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[#007d87] font-mono text-xs uppercase tracking-widest font-bold mb-3">
               <span className="w-2 h-2 rounded-full bg-[#007d87]"></span>
               <span>{lang === 'ar' ? 'الميزة التنافسية الإقليمية' : 'REGIONAL EDGE'}</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#0b1020] mb-4">
              {lang === 'ar' ? `لماذا تختارنا في ${data.name.ar}؟` : `Why Choose Us in ${data.name.en}?`}
            </h2>
            <p className="text-base md:text-lg text-[#667078] mb-10 leading-relaxed font-normal">
              {data.description[lang]}
            </p>
            
            <div className="space-y-4">
              {[
                { icon: Target, title: lang === 'ar' ? 'استهداف دقيق' : 'Precise Targeting', desc: lang === 'ar' ? 'نصل لعملائك المحتملين في مدينتك بدقة عالية.' : 'We reach your potential customers in your city with high precision.' },
                { icon: TrendingUp, title: lang === 'ar' ? 'زيادة المبيعات' : 'Increase Sales', desc: lang === 'ar' ? 'حملات مصممة خصيصاً لزيادة التحويلات والمبيعات مع تقارير شفافة لنتائجك.' : 'Campaigns specifically designed to increase conversions and sales.' },
                { icon: Globe, title: lang === 'ar' ? 'سيو محلي' : 'Local SEO', desc: lang === 'ar' ? 'تصدر نتائج البحث المحلية في خرائط جوجل ومحرك البحث.' : 'Dominate local search results in Google Maps and Search.' }
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4 p-5 rounded-xl bg-[#f8f6f0] border border-[#d1ccc0]">
                  <div className="shrink-0 w-10 h-10 rounded bg-[#0b1020] text-[#58a8f3] flex items-center justify-center">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0b1020] mb-1">{feature.title}</h3>
                    <p className="text-sm text-[#667078] leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};
