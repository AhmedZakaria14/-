import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2, MapPin } from 'lucide-react';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';
import FAQ from '@/components/sections/FAQ';

const keyword = "نجار تركيب أثاث في الرياض";
const slug = "نجار-تركيب-أثاث-في-الرياض";

export const metadata: Metadata = {
  title: `${keyword} | تفصيل وتصنيع غرف النوم والأثاث`,
  description: `${keyword} متخصص في تفصيل وتصنيع غرف النوم المخصصة والأبواب والديكورات الخشبية بأعلى جودة وأفضل الأسعار في جميع أحياء الرياض.`,
  keywords: [
    keyword,
    'نجار بالرياض',
    'تفصيل غرف نوم',
    'نجار خشب',
    'تركيب اثاث'
  ],
  alternates: {
    canonical: `https://najjarriyadh.com/${slug}`,
  },
  openGraph: {
    title: `${keyword} | تفصيل وتصنيع غرف النوم`,
    description: `${keyword} متخصص في تفصيل وتصنيع غرف النوم المخصصة والأبواب والديكورات الخشبية بأعلى جودة.`,
    url: `https://najjarriyadh.com/${slug}`,
    siteName: 'نجار بالرياض',
    locale: 'ar_SA',
    type: 'website',
  },
};

const AREAS = [
  'حي الملك فهد', 'حي النرجس', 'حي العليا', 'حي الروضة', 'حي المونسية',
  'حي الياسمين', 'حي الورود', 'حي النزهة', 'حي السليمانية', 'حي الربوة',
  'شمال الرياض', 'جنوب الرياض', 'شرق الرياض', 'غرب الرياض'
];

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'الرئيسية', item: 'https://najjarriyadh.com' },
    { name: keyword, item: `https://najjarriyadh.com/${slug}` }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-bg-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {keyword}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            نحن نقدم خدمات {keyword} باحترافية عالية. نعتمد على خبرة تتجاوز 15 عاماً في تقديم أفضل خدمات النجارة، من تفصيل غرف النوم والمطابخ إلى تركيب الأبواب والديكورات الخشبية في كافة أحياء الرياض.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg prose-primary max-w-none text-text-dark">
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">لماذا تختار {keyword}؟</h2>
            <p className="mb-8 leading-relaxed">
              عندما تبحث عن <strong>{keyword}</strong>، فأنت تبحث عن الجودة، الدقة، والالتزام بالمواعيد. نحن نضمن لك الحصول على كل ذلك وأكثر. فريقنا المكون من أمهر النجارين مستعد لتنفيذ كافة متطلباتك الخشبية بأعلى معايير الحرفية.
            </p>

            <div className="bg-bg-light p-8 rounded-2xl mb-12 border border-gray-100">
              <h3 className="font-serif text-2xl font-bold mb-6">مميزات خدماتنا:</h3>
              <ul className="space-y-4 list-none pl-0">
                {[
                  'خبرة تزيد عن 15 عاماً في أعمال النجارة بالرياض.',
                  'استخدام أجود أنواع الأخشاب الطبيعية والصناعية.',
                  'أسعار تنافسية ومناسبة لجميع الميزانيات.',
                  'سرعة في التنفيذ والتزام تام بمواعيد التسليم.',
                  'ضمان شامل على جميع الأعمال المنفذة.'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="font-serif text-3xl font-bold text-primary mb-6">خدماتنا التفصيلية</h2>
            <p className="mb-6 leading-relaxed">
              بصفتنا <strong>{keyword}</strong>، نقدم مجموعة متكاملة من الخدمات التي تشمل:
            </p>
            <ul className="list-disc list-inside mb-12 space-y-2 text-text-muted">
              <li>تفصيل وتصنيع غرف النوم المودرن والكلاسيك.</li>
              <li>تصميم وتركيب المطابخ الخشبية.</li>
              <li>تصنيع وتركيب الأبواب الخشبية الداخلية والخارجية.</li>
              <li>فك وتركيب ونقل الأثاث باحترافية.</li>
              <li>تركيب أثاث إيكيا بدقة وسرعة.</li>
              <li>تنفيذ الديكورات الخشبية الجدارية والبرجولات.</li>
              <li>تفصيل الخزائن ودواليب الملابس المبتكرة.</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold text-primary mb-6">أحياء الرياض التي نخدمها</h2>
            <p className="mb-6 leading-relaxed">
              نحن نغطي كافة مناطق وأحياء مدينة الرياض لضمان وصول خدماتنا إليك أينما كنت:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {AREAS.map((area, idx) => (
                <div key={idx} className="flex items-center gap-2 text-text-muted">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">هل تبحث عن {keyword}؟</h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            تواصل معنا الآن للحصول على استشارة مجانية وتسعير لمشروعك. نحن هنا لخدمتك على مدار الساعة.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${process.env.NEXT_PUBLIC_PHONE || '+966563892344'}`}
              className="flex items-center justify-center gap-2 bg-accent text-bg-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>اتصل بنا الآن</span>
            </a>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || '966563892344'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#20bd5a] transition-colors"
            >
              <span>تواصل عبر واتساب</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}