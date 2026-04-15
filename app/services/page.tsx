import { Metadata } from 'next';
import CTA from '@/components/sections/CTA';
import { generateBreadcrumbSchema } from '@/lib/schema';
import ImageWithFallback from '@/components/ui/ImageWithFallback';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "خدماتنا | نجار بالرياض",
  description: "نجار بالرياض يقدم: مطابخ، غرف نوم، أبواب، ديكورات خشبية، وصيانة في الرياض. جودة مضمونة وأسعار تنافسية.",
  alternates: { canonical: "https://najjarriyadh.com/services" }
};

const SERVICES_DETAIL = [
  {
    id: 'kitchens',
    title: 'تفصيل مطابخ خشبية وألمنيوم بالرياض',
    description: 'نحن في نجار بالرياض نؤمن بأن المطبخ هو قلب المنزل. لذلك نقدم خدمات تفصيل مطابخ خشبية وألمنيوم بتصاميم عصرية وكلاسيكية تناسب جميع الأذواق والمساحات. نستخدم أجود أنواع الأخشاب المقاومة للرطوبة والحرارة، مع إكسسوارات عالية الجودة لضمان متانة وعمر افتراضي طويل. فريقنا من المصممين والنجارين المحترفين جاهز لتحويل أفكارك إلى مطبخ أحلامك، مع الاهتمام بأدق التفاصيل من التصميم ثلاثي الأبعاد وحتى التركيب النهائي.',
    features: ['تصاميم 3D قبل التنفيذ', 'خشب مقاومة للرطوبة', 'إكسسوارات أصلية', 'استغلال أمثل للمساحات', 'دقة واحترافية في التركيب', 'ضمان على الأعمال'],
    image: '/work-15.jpeg',
    alt: 'تفصيل مطابخ خشبية - نجار بالرياض',
    cta: 'اطلب تصميم مطبخك'
  },
  {
    id: 'bedrooms',
    title: 'تفصيل غرف نوم رئيسية وأطفال بالرياض',
    description: 'غرفة النوم هي ملاذك للراحة والاسترخاء. في نجار بالرياض، نصمم وننفذ غرف نوم رئيسية وغرف أطفال بتصاميم فريدة تعكس ذوقك الشخصي وتوفر لك أقصى درجات الراحة. نستخدم أخشاب طبيعية وصناعية عالية الجودة، مع خيارات متعددة من الألوان والتشطيبات. سواء كنت تفضل الطراز المودرن البسيط أو الكلاسيكي الفخم، فإننا نضمن لك الحصول على غرفة نوم متينة وأنيقة تدوم لسنوات.',
    features: ['غرف نوم رئيسية', 'غرف نوم أطفال', 'دواليب ملابس مدمجة', 'تصاميم مودرن وكلاسيك', 'خشب عالية الجودة', 'تشطيبات فاخرة'],
    image: '/whatsapp-16.jpeg',
    alt: 'تفصيل غرف نوم رئيسية وأطفال - نجار بالرياض',
    cta: 'اطلب تفصيل غرفة نوم'
  },
  {
    id: 'doors',
    title: 'تفصيل أبواب خشبية داخلية وخارجية بالرياض',
    description: 'الأبواب الخشبية تضفي لمسة من الفخامة والدفء على منزلك. نقدم في نجار بالرياض خدمات تفصيل أبواب خشبية داخلية وخارجية بتصاميم متنوعة تناسب جميع الديكورات. نستخدم أخشاب صلبة ومقاومة للعوامل الجوية للأبواب الخارجية، وأخشاب خفيفة وعازلة للصوت للأبواب الداخلية. نضمن لك جودة تصنيع عالية، مفصلات وأقفال متينة، وتركيب احترافي يضمن سلاسة الفتح والإغلاق.',
    features: ['أبواب خارجية صلبة', 'أبواب داخلية عازلة', 'أبواب سحاب ومخفية', 'تصاميم متنوعة', 'دهانات مقاومة للخدش', 'تركيب احترافي'],
    image: '/work-17.jpeg',
    alt: 'تفصيل أبواب خشبية داخلية وخارجية - نجار بالرياض',
    cta: 'اطلب تفصيل أبواب'
  },
  {
    id: 'decor',
    title: 'ديكورات خشبية جدارية وبرجولات بالرياض',
    description: 'أضف لمسة من الجمال والتميز إلى مساحاتك مع خدمات الديكور الخشبي من نجار بالرياض. ننفذ ديكورات جدارية خشبية للتلفزيون والمجالس تعكس الفخامة والرقي. كما نقوم بتصميم وتنفيذ برجولات خشبية للحدائق والجلسات الخارجية توفر لك ظلاً جميلاً ومساحة مريحة للاسترخاء. نستخدم أخشاب معالجة ومقاومة للشمس والمطر لضمان استمرار جمال الديكورات الخارجية.',
    features: ['ديكورات جدارية للتلفزيون', 'تكسيات خشبية للمجالس', 'برجولات ومظلات خشبية', 'أخشاب معالجة للخارج', 'تصاميم عصرية', 'تنفيذ دقيق'],
    image: '/whatsapp-18.jpeg',
    alt: 'ديكورات خشبية جدارية وبرجولات - نجار بالرياض',
    cta: 'اطلب تصميم ديكور'
  },
  {
    id: 'office',
    title: 'تفصيل أثاث مكاتب وشركات بالرياض',
    description: 'بيئة العمل المريحة والأنيقة تزيد من إنتاجية الموظفين. يقدم نجار بالرياض حلولاً متكاملة لتأثيث المكاتب والشركات تشمل تفصيل مكاتب إدارية، طاولات اجتماعات، كاونترات استقبال، ودواليب حفظ الملفات. نراعي في تصاميمنا الاستغلال الأمثل للمساحات، وتوفير حلول عملية لتنظيم الأسلاك والأجهزة. نضمن لك أثاثاً مكتبياً متيناً يعكس احترافية شركتك.',
    features: ['مكاتب إدارية وموظفين', 'طاولات اجتماعات', 'كاونترات استقبال', 'دواليب حفظ ملفات', 'حلول تنظيم الأسلاك', 'أثاث متين وعملي'],
    image: '/work-19.jpeg',
    alt: 'تفصيل أثاث مكاتب وشركات - نجار بالرياض',
    cta: 'اطلب تأثيث مكتبك'
  }
];

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'الرئيسية', item: 'https://najjarriyadh.com' },
    { name: 'خدماتنا', item: 'https://najjarriyadh.com/services' },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": SERVICES_DETAIL.map((service, index) => ({
      "@type": "Service",
      "position": index + 1,
      "name": service.title,
      "description": service.description,
      "provider": {
        "@type": "LocalBusiness",
        "name": "نجار بالرياض"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">خدمات النجارة والأعمال الخشبية في الرياض</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            نقدم مجموعة متكاملة من خدمات النجارة وتفصيل الأثاث بأعلى معايير الجودة والاحترافية.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {SERVICES_DETAIL.map((service, index) => (
              <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <div className="lg:w-1/2">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg text-text-muted leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 mb-8 shadow-sm">
                    <h3 className="font-bold text-text-dark mb-4">مميزات الخدمة:</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-text-muted">
                          <div className="w-2 h-2 rounded-full bg-accent"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Link href="/contact" className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors flex items-center gap-2">
                      {service.cta} <span dir="ltr">&larr;</span>
                    </Link>
                  </div>
                </div>
                
                <div className="lg:w-1/2 w-full">
                  <div className="aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden relative shadow-xl">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
