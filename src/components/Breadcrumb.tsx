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
      <ol className="flex items-center space-x-2 md:space-x-3 rtl:space-x-reverse text-xs font-mono uppercase tracking-wider">
        <li className="flex items-center">
          <a href="/" className="text-[#667078] hover:text-[#0b1020] transition-colors flex items-center gap-1">
            <Home size={14} className="text-[#007d87]" />
            <span className="sr-only">Home</span>
          </a>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <Icon size={14} className="text-[#d1ccc0] mx-1" />
            <a
              href={item.href}
              className={`hover:text-[#1677d2] transition-colors ${
                index === items.length - 1 ? 'text-[#0b1020] font-bold' : 'text-[#667078]'
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
