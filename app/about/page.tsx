import { Metadata } from 'next';
import CTA from '@/components/sections/CTA';
import { generateBreadcrumbSchema } from '@/lib/schema';
import ImageWithFallback from '@/components/ui/ImageWithFallback';

export const metadata: Metadata = {
  title: "عن الشركة | نجار بالرياض - نجارة الرياض منذ 2009",
  description: "تعرف على نجار بالرياض، شركة نجارة رائدة في الرياض منذ 2009. فريق محترف وخبرة تتجاوز 15 عامًا في الأعمال الخشبية الفاخرة.",
  alternates: { canonical: "https://najjarriyadh.com/about" }
};

const TEAM = [
  { name: 'ثابت العتيبي', role: 'المؤسس والمدير التنفيذي', initials: 'ث.ع' },
  { name: 'محمد الشمري', role: 'كبير المصممين (15 سنة خبرة)', initials: 'م.ش' },
  { name: 'خالد السبيعي', role: 'رئيس فريق النجارة (12 سنة خبرة)', initials: 'خ.س' },
  { name: 'فيصل الدوسري', role: 'مدير المشاريع (10 سنوات خبرة)', initials: 'ف.د' },
];

const VALUES = [
  { title: 'الجودة', description: 'نستخدم فقط أجود أنواع الخشب المستوردة' },
  { title: 'الدقة', description: 'نلتزم بالمقاسات والمواعيد بشكل صارم' },
  { title: 'الأمانة', description: 'أسعار شفافة بدون رسوم مخفية' },
  { title: 'الابتكار', description: 'نواكب أحدث التصاميم العالمية' },
  { title: 'الضمان', description: 'نقدم ضماناً حقيقياً على كل أعمالنا' },
  { title: 'الخدمة', description: 'دعم ما بعد البيع لضمان رضاك الكامل' },
];

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'الرئيسية', item: 'https://najjarriyadh.com' },
    { name: 'عن الشركة', item: 'https://najjarriyadh.com/about' },
  ]);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "نجار بالرياض",
    "url": "https://najjarriyadh.com",
    "logo": "https://najjarriyadh.com/logo.png",
    "description": "شركة نجارة رائدة في الرياض منذ 2009، متخصصة في تفصيل المطابخ، غرف النوم، الأبواب، والديكورات الخشبية.",
    "foundingDate": "2009",
    "founders": [
      {
        "@type": "Person",
        "name": "ثابت العتيبي"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">عن نجار بالرياض</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            خبرة تتجاوز 15 عاماً في تقديم أرقى الأعمال الخشبية في الرياض.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark mb-6">
                قصتنا مع الإبداع منذ عام 2009
              </h2>
              <div className="space-y-6 text-lg text-text-muted leading-relaxed">
                <p>
                  بدأت رحلة نجار بالرياض عام 2009 على يد الأستاذ ثابت العتيبي، حرفي نجار موهوب تعلّم مهنة النجارة على يد والده منذ صغره، وورث عنه حب الخشب وشغف تحويله إلى قطع فنية تنبض بالحياة.
                </p>
                <p>
                  انطلقت مسيرتنا من ورشة صغيرة متواضعة في قلب الرياض، حيث كان التركيز منصباً على تقديم أعمال نجارة يدوية متقنة الصنع. وبفضل الله ثم بفضل التزامنا الصارم بالجودة، والأمانة في التعامل، والحرص على إرضاء كل عميل، بدأت سمعتنا الطيبة تنتشر، وتوسعت أعمالنا لتشمل مشاريع نجارة وديكورات خشبية كبرى.
                </p>
                <p>
                  اليوم، نفخر بكوننا إحدى الشركات الرائدة في مجال النجارة والأعمال الخشبية في المملكة العربية السعودية. لقد تطورنا من ورشة صغيرة إلى مصنع مجهز بأحدث آلات النجارة والتقنيات، يضم فريقاً متكاملاً من أمهر النجارين والمصممين والفنيين. وعلى الرغم من هذا النمو، لا زلنا نحتفظ بالقيم الأساسية التي بدأنا بها: الجودة، الحرفية، والاهتمام بأدق التفاصيل. لقد تشرفنا بخدمة أكثر من 2000 عميل راضٍ، ونتطلع دائماً لتقديم المزيد من الإبداع والتميز في كل قطعة نصنعها.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="/whatsapp-21.jpeg"
                  alt="حرفي نجار يعمل على تفصيل الأخشاب - نجار بالرياض"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-accent-light text-primary rounded-2xl flex items-center justify-center mb-6 font-serif text-2xl font-bold">
                رسالتنا
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">إرضاء العميل أولاً</h3>
              <p className="text-text-muted leading-relaxed text-lg">
                تقديم أعمال خشبية فاخرة تجمع بين الجودة والجمال والمتانة، مع الالتزام بمواعيد التسليم وأسعار شفافة تناسب جميع الميزانيات.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-accent-light text-primary rounded-2xl flex items-center justify-center mb-6 font-serif text-2xl font-bold">
                رؤيتنا
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">الريادة في النجارة</h3>
              <p className="text-text-muted leading-relaxed text-lg">
                أن نكون الشركة الأولى في مجال النجارة والأعمال الخشبية على مستوى المملكة العربية السعودية بحلول عام 2030.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Bar */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-x-reverse divide-white/20">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-primary-light font-medium">سنة خبرة</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2000+</div>
              <div className="text-primary-light font-medium">مشروع منجز</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-light font-medium">عميل راضٍ</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">6</div>
              <div className="text-primary-light font-medium">مناطق نخدمها</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-6">
              قيمنا الأساسية
            </h2>
            <p className="text-lg text-text-muted">
              المبادئ التي نرتكز عليها في كل مشروع نقوم بتنفيذه.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUES.map((value, index) => (
              <div key={index} className="bg-bg-light p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-xl text-primary mb-3">{value.title}</h3>
                <p className="text-text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-6">
              فريقنا المحترف
            </h2>
            <p className="text-lg text-text-muted">
              نفخر بضم نخبة من أمهر النجارين والمصممين والفنيين الذين يجمعهم الشغف والاحترافية.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, index) => (
              <div key={index} className="group text-center bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="relative aspect-square rounded-full overflow-hidden mb-6 mx-auto w-32 h-32 bg-accent-light text-primary flex items-center justify-center text-3xl font-bold border-4 border-white shadow-inner">
                  {member.initials}
                </div>
                <h3 className="font-bold text-xl text-text-dark mb-2">{member.name}</h3>
                <p className="text-text-muted text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
