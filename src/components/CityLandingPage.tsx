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
  const CONTACT_NUMBER = "+20 10 10742430"; // Main contact

  return (
    <div className={`min-h-screen bg-slate-50 ${isRTL ? 'font-arabic' : 'font-sans'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">{data.name[lang]}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            {data.heroTitle[lang]}
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            {data.heroSubtitle[lang]}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`https://wa.me/${CONTACT_NUMBER.replace(/[\s+]/g, '')}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              {lang === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Now'}
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                {lang === 'ar' ? `لماذا تختارنا في ${data.name.ar}؟` : `Why Choose Us in ${data.name.en}?`}
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {data.description[lang]}
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Target, title: lang === 'ar' ? 'استهداف دقيق' : 'Precise Targeting', desc: lang === 'ar' ? 'نصل لعملائك المحتملين في مدينتك بدقة عالية.' : 'We reach your potential customers in your city with high precision.' },
                  { icon: TrendingUp, title: lang === 'ar' ? 'زيادة المبيعات' : 'Increase Sales', desc: lang === 'ar' ? 'حملات مصممة خصيصاً لزيادة التحويلات والمبيعات مع تقارير شفافة لنتائجك.' : 'Campaigns specifically designed to increase conversions and sales.' },
                  { icon: Globe, title: lang === 'ar' ? 'سيو محلي' : 'Local SEO', desc: lang === 'ar' ? 'تصدر نتائج البحث المحلية في خرائط جوجل ومحرك البحث.' : 'Dominate local search results in Google Maps and Search.' }
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                      <p className="text-slate-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
