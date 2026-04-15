import { Metadata } from 'next';
import CTA from '@/components/sections/CTA';
import PortfolioClient from './PortfolioClient';
import { generateBreadcrumbSchema } from '@/lib/schema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "أعمالنا | معرض مشاريع نجار بالرياض",
  description: "شاهد أحدث أعمال نجار بالرياض. مشاريع مطابخ، غرف نوم، أبواب وديكورات خشبية راقية منفذة بأعلى معايير الجودة.",
  alternates: { canonical: "https://najjarriyadh.com/portfolio" }
};

const CATEGORIES = ["مطابخ", "غرف نوم", "أبواب", "ديكورات", "أثاث مكتبي"];
const PROJECTS = [
  ...Array.from({ length: 70 }, (_, i) => {
    const isWhatsapp = i < 35;
    const index = isWhatsapp ? i + 1 : i - 34;
    const prefix = isWhatsapp ? 'whatsapp' : 'work';
    return {
      id: i + 1,
      title: `مشروع ${i + 1}`,
      category: CATEGORIES[i % CATEGORIES.length],
      image: `/${prefix}-${index}.jpeg`,
      location: "الرياض",
      year: "2024",
      description: `تصميم وتنفيذ ${CATEGORIES[i % CATEGORIES.length]} بأعلى معايير الجودة.`
    };
  }),
  {
    id: 71,
    title: "جولة في أعمالنا - 1",
    category: "ديكورات",
    image: "/whatsapp-vid-1.mp4",
    location: "الرياض",
    year: "2024",
    description: "فيديو يستعرض دقة التنفيذ وجودة التشطيبات في أعمالنا الخشبية."
  },
  {
    id: 72,
    title: "جولة في أعمالنا - 2",
    category: "مطابخ",
    image: "/whatsapp-vid-2.mp4",
    location: "الرياض",
    year: "2024",
    description: "فيديو يستعرض تفاصيل تصميم وتنفيذ مطبخ حديث."
  }
];

export default function PortfolioPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'الرئيسية', item: 'https://najjarriyadh.com' },
    { name: 'أعمالنا', item: 'https://najjarriyadh.com/portfolio' },
  ]);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": PROJECTS.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.description,
        "image": `https://najjarriyadh.com${project.image}`,
        "author": {
          "@type": "LocalBusiness",
          "name": "أبو ثابت للنجارة"
        }
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">معرض أعمالنا</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            شاهد أحدث مشاريعنا المنفذة بأعلى معايير الجودة في الرياض.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="bg-bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioClient projects={PROJECTS} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark mb-6">هل أعجبك ما رأيت؟</h2>
          <p className="text-lg text-text-muted mb-8 max-w-2xl mx-auto">
            نحن جاهزون لتحويل أفكارك إلى واقع. تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر لمشروعك.
          </p>
          <Link href="/contact" className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl">
            اتصل بنا الآن
          </Link>
        </div>
      </section>
    </>
  );
}
