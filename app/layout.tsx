import type { Metadata } from 'next';
import { Tajawal, Amiri } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import FloatingCallButton from '@/components/layout/FloatingCallButton';

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '800', '900'],
  variable: '--font-tajawal',
  display: 'swap',
});

const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "نجار بالرياض | تفصيل وتصنيع غرف النوم والأثاث",
    template: "%s | نجار بالرياض"
  },
  description: "نجار بالرياض متخصص في تفصيل وتصنيع غرف النوم وجميع أعمال النجارة. خبرة طويلة، جودة عالية، وأسعار منافسة في جميع أحياء الرياض.",
  metadataBase: new URL("https://najjarriyadh.com"),
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    siteName: "نجار بالرياض",
    locale: "ar_SA",
    type: "website"
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "نجار بالرياض",
  "url": "https://najjarriyadh.com",
  "telephone": "+966563892344",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "حي الملك فهد، مخرج 5، طريق الأمير نايف بن عبد العزيز",
    "addressLocality": "الرياض",
    "addressRegion": "منطقة الرياض",
    "addressCountry": "SA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 24.7136,
    "longitude": 46.6753
  },
  "openingHours": "Sa-Th 08:00-22:00",
  "priceRange": "$$",
  "image": "https://najjarriyadh.com/logo.png",
  "description": "نجار بالرياض متخصص في تفصيل وتصنيع غرف النوم وجميع أعمال النجارة"
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "نجار بالرياض",
  "url": "https://najjarriyadh.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://najjarriyadh.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} ${amiri.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans bg-bg-light text-text-dark antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <FloatingCallButton />
      </body>
    </html>
  );
}