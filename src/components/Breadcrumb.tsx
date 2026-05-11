import React from 'react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { Language } from '../types';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  lang: Language;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, lang }) => {
  const isRTL = lang === 'ar';
  const Icon = isRTL ? ChevronLeft : ChevronRight;

  // JSON-LD for BreadcrumbList
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": lang === 'en' ? 'Home' : 'الرئيسية',
        "item": "https://nasharhub.com"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": `https://nasharhub.com${item.href}`
      }))
    ]
  };

  return (
    <nav className="flex mb-8 overflow-x-auto whitespace-nowrap py-2 no-scrollbar" aria-label="Breadcrumb">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex items-center space-x-2 md:space-x-4 rtl:space-x-reverse text-sm font-medium">
        <li className="flex items-center">
          <a href="/" className="text-slate-500 hover:text-primary transition-colors flex items-center gap-1">
            <Home size={16} />
            <span className="sr-only">Home</span>
          </a>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <Icon size={16} className="text-slate-300 mx-1" />
            <a
              href={item.href}
              className={`hover:text-primary transition-colors ${
                index === items.length - 1 ? 'text-slate-900 font-bold' : 'text-slate-500'
              }`}
              aria-current={index === items.length - 1 ? 'page' : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};
