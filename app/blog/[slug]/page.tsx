import { constructMetadata } from '@/lib/seo';
import CTA from '@/components/sections/CTA';
import ImageWithFallback from '@/components/ui/ImageWithFallback';
import { Calendar, Clock, User } from 'lucide-react';
import { generateBreadcrumbSchema } from '@/lib/schema';
import { notFound } from 'next/navigation';

// Mock data for blog posts
const POSTS_DATA: Record<string, any> = {
  'best-wood-for-kitchens-riyadh': {
    title: 'أفضل أنواع الخشب لتفصيل المطابخ في الرياض: دليلك الشامل',
    content: `
      <p>يعتبر اختيار نوع الخشب المناسب من أهم القرارات التي يجب اتخاذها عند تفصيل مطبخ جديد، خاصة في مدينة مثل الرياض التي تتميز بصيف حار وجاف.</p>
      <h2>1. خشب السنديان (Oak)</h2>
      <p>يعد السنديان من أقوى وأمتن أنواع الخشب الطبيعية، ويتحمل الاستخدام اليومي الشاق. يتميز بتجزيعاته الجميلة التي تضفي فخامة على المطبخ.</p>
      <h2>2. خشب الزان (Beech)</h2>
      <p>يتميز بصلابته ومقاومته للتقوس، وهو خيار ممتاز للأبواب والإطارات. يتحمل درجات الحرارة العالية.</p>
      <h2>3. خشب الـ MDF المقاوم للرطوبة</h2>
      <p>خيار عصري وعملي جداً لهياكل الخزائن. يتميز بسطحه الأملس الذي يسهل طلاؤه وتغليفه بطبقات الميلامين أو الـ MDF.</p>
      <p>في نجار بالرياض، ننصح دائماً باختيار الخشب الذي يتناسب مع ميزانيتك وطبيعة استخدامك، مع ضماننا لجودة التصنيع والتركيب.</p>
    `,
    category: 'مطابخ',
    date: '15 مايو 2024',
    readTime: '5 دقائق',
    author: 'نجار بالرياض',
    image: '/whatsapp-22.jpeg',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = POSTS_DATA[resolvedParams.slug] || {
    title: 'مقال حصري من نجار بالرياض',
    description: 'اقرأ أحدث المقالات في مجال النجارة والأعمال الخشبية.',
  };
  
  return constructMetadata({
    title: post.title,
    description: post.description || 'مقال مفيد حول النجارة والأعمال الخشبية.',
    path: `/blog/${resolvedParams.slug}`,
  });
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = POSTS_DATA[resolvedParams.slug];

  const currentPost = post || {
    title: 'مقال حصري من نجار بالرياض',
    content: '<p>محتوى المقال قيد الإعداد. يرجى العودة لاحقاً لقراءة المزيد من النصائح والمعلومات المفيدة.</p>',
    category: 'عام',
    date: '1 مايو 2024',
    readTime: '3 دقائق',
    author: 'فريق نجار بالرياض',
    image: '/work-23.jpeg',
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'الرئيسية', item: 'https://najjarriyadh.com' },
    { name: 'المدونة', item: 'https://najjarriyadh.com/blog' },
    { name: currentPost.title, item: `https://najjarriyadh.com/blog/${resolvedParams.slug}` },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": currentPost.title,
    "image": [
      `https://najjarriyadh.com${currentPost.image}`
    ],
    "datePublished": "2024-05-01T08:00:00+08:00",
    "dateModified": "2024-05-01T09:20:00+08:00",
    "author": [{
        "@type": "Person",
        "name": currentPost.author,
        "url": "https://najjarriyadh.com/about"
      }],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <article className="pt-32 pb-24 bg-bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Post Header */}
          <header className="mb-12 text-center">
            <div className="inline-block bg-accent text-bg-dark text-sm font-bold px-4 py-1.5 rounded-full mb-6">
              {currentPost.category}
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-8 leading-tight">
              {currentPost.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-text-muted">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                <span>{currentPost.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>{currentPost.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>{currentPost.readTime}</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-16 shadow-xl">
            <ImageWithFallback
              src={currentPost.image}
              alt={`${currentPost.title} - مدونة نجار بالرياض`}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Post Content */}
          <div 
            className="prose prose-lg prose-stone mx-auto rtl:prose-p:text-right rtl:prose-headings:text-right prose-headings:font-serif prose-a:text-primary hover:prose-a:text-primary-dark"
            dangerouslySetInnerHTML={{ __html: currentPost.content }}
          />
        </div>
      </article>

      <CTA />
    </>
  );
}
