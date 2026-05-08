import React from 'react';

export const SchemaMarkup: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Nashar Hub - شركة تسويق إلكتروني بالسعودية",
    "image": "https://nasharhub.com/logo.png",
    "url": "https://nasharhub.com",
    "telephone": "+201010742430",
    "email": "info@nasharhub.com",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "King Fahd Road",
        "addressLocality": "Riyadh",
        "addressRegion": "Riyadh Province",
        "postalCode": "12214",
        "addressCountry": "SA"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Prince Sultan Road",
        "addressLocality": "Jeddah",
        "addressRegion": "Makkah Province",
        "postalCode": "23421",
        "addressCountry": "SA"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.7136,
      "longitude": 46.6753
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/nasharhub",
      "https://twitter.com/nasharhub",
      "https://www.linkedin.com/company/nasharhub",
      "https://www.instagram.com/nasharhub"
    ],
    "priceRange": "$$",
    "description": "أفضل شركة تسويق إلكتروني وتصميم مواقع في السعودية. وكالة تسويق رقمي متخصصة في إعلانات جوجل، سيو، تصميم مواقع إلكترونية، وإنشاء متاجر سلة وزد لزيادة المبيعات في الرياض، جدة، الدمام وكافة المدن.",
    "areaServed": [
      { "@type": "City", "name": "Riyadh" },
      { "@type": "City", "name": "Jeddah" },
      { "@type": "City", "name": "Dammam" },
      { "@type": "City", "name": "Mecca" },
      { "@type": "City", "name": "Medina" },
      { "@type": "City", "name": "Khobar" },
      { "@type": "City", "name": "Abha" },
      { "@type": "City", "name": "Tabuk" },
      { "@type": "City", "name": "Taif" },
      { "@type": "City", "name": "Qassim" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Search Engine Optimization (SEO)"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pay Per Click (PPC) & Paid Ads"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Design & Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Store Creation (Salla/Zid)"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
