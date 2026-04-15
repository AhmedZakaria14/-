import { constructMetadata } from '@/lib/seo';
import CTA from '@/components/sections/CTA';
import Link from 'next/link';
import ImageWithFallback from '@/components/ui/ImageWithFallback';
import { Calendar, Clock, ChevronLeft } from 'lucide-react';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata = constructMetadata({
  title: 'المدونة',
  description: 'اقرأ أحدث المقالات والنصائح حول النجارة، الديكورات الخشبية، والعناية بالأثاث من خبراء نجار بالرياض.',
  path: '/blog',
});

const POSTS = [
  {
    slug: 'best-wood-for-kitchens-riyadh',
    title: 'أفضل أنواع الخشب لتفصيل المطابخ في الرياض: دليلك الشامل',
    excerpt: 'تعرف على أفضل أنواع الأخشاب المقاومة للرطوبة والحرارة والمناسبة لأجواء مدينة الرياض لتفصيل مطبخ يدوم طويلاً.',
    category: 'مطابخ',
    date: '15 مايو 2024',
    readTime: '5 دقائق',
    image: '/whatsapp-22.jpeg',
  },
  {
    slug: 'how-to-choose-reliable-carpenter',
    title: 'كيف تختار نجار موثوق في الرياض؟ 5 معايير أساسية',
    excerpt: 'نصائح هامة تساعدك في اختيار النجار المناسب لتنفيذ أعمالك الخشبية بدقة واحترافية وبدون مفاجآت غير سارة.',
    category: 'نصائح',
    date: '2 مايو 2024',
    readTime: '4 دقائق',
    image: '/work-23.jpeg',
  },
  {
    slug: 'wooden-bedroom-designs-2024',
    title: 'أحدث تصاميم غرف النوم الخشبية لعام 2024',
    excerpt: 'اكتشف أحدث صيحات الموضة في تصميم غرف النوم الخشبية، من الألوان الدارجة إلى التصاميم المودرن والكلاسيكية.',
    category: 'تصميم',
    date: '20 أبريل 2024',
    readTime: '6 دقائق',
    image: '/whatsapp-24.jpeg',
  },
  {
    slug: 'maintaining-wooden-doors',
    title: 'طرق العناية بالأبواب الخشبية وحمايتها من التلف',
    excerpt: 'خطوات بسيطة وفعالة للحفاظ على أبواب منزلك الخشبية من التلف وتغير اللون بسبب العوامل الجوية.',
    category: 'صيانة',
    date: '10 أبريل 2024',
    readTime: '3 دقائق',
    image: '/work-25.jpeg',
  },
  {
    slug: 'mdf-vs-solid-wood',
    title: 'الفرق بين خشب الـ MDF والخشب الطبيعي وأيهما تختار؟',
    excerpt: 'مقارنة شاملة بين خشب الـ MDF والخشب الطبيعي من حيث المتانة، التكلفة، والاستخدامات الأفضل لكل منهما.',
    category: 'معلومات',
    date: '28 مارس 2024',
    readTime: '7 دقائق',
    image: '/whatsapp-26.jpeg',
  },
  {
    slug: 'wooden-decor-ideas-living-room',
    title: 'أفكار ديكورات خشبية جدارية لصالة الجلوس',
    excerpt: 'كيف تضيف لمسة من الفخامة والدفء لصالة منزلك باستخدام الديكورات الخشبية الجدارية.',
    category: 'ديكورات',
    date: '15 مارس 2024',
    readTime: '5 دقائق',
    image: '/work-27.jpeg',
  },
];

export default function BlogPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'الرئيسية', item: 'https://najjarriyadh.com' },
    { name: 'المدونة', item: 'https://najjarriyadh.com/blog' },
  ]);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "مدونة نجار بالرياض",
    "description": "اقرأ أحدث المقالات والنصائح حول النجارة، الديكورات الخشبية، والعناية بالأثاث من خبراء نجار بالرياض.",
    "url": "https://najjarriyadh.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "نجار بالرياض",
      "logo": {
        "@type": "ImageObject",
        "url": "https://najjarriyadh.com/logo.png"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">المدونة</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            نصائح، أفكار، ومعلومات قيمة من خبراء نجار بالرياض.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.map((post) => (
              <article key={post.slug} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group flex flex-col">
                <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] overflow-hidden block">
                  <ImageWithFallback
                    src={post.image}
                    alt={`${post.title} - مدونة نجار بالرياض`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-bg-dark text-sm font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h2 className="font-serif text-xl font-bold text-text-dark mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-text-muted mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors mt-auto"
                  >
                    <span>اقرأ المزيد</span>
                    <ChevronLeft className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
