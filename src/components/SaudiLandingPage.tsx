import React, { useEffect, useState } from 'react';
import { CheckCircle, Monitor, Smartphone, Zap, ArrowLeft, MessageCircle, Send, Users, Target, Award } from 'lucide-react';
import { Logo } from './Logo';
import { CLIENTS } from './ClientLogos';
import { updateSEO } from '../utils/seo';

export const SaudiLandingPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', service: '' });

  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
    document.body.classList.add('font-arabic');

    const title = "أفضل شركة تسويق إلكتروني وتصميم مواقع في السعودية | نشار هب";
    const description = "نشار هب هي أفضل شركة تسويق إلكتروني وتصميم مواقع بالسعودية. نقدم خدمات إعلانات جوجل، سيو، وبرمجة المتاجر في الرياض وكافة أنحاء المملكة.";
    const keywords = "شركة تسويق الكتروني, شركة تسويق, شركة برمجة مواقع, تصميم مواقع, اعلانات جوجل, افضل شركة تسويق في السعودية, تصميم متاجر الكترونية, الرياض, جدة, الدمام, مكة, المدينة, الخبر, ابها, تبوك, الطائف, القصيم";

    updateSEO({
      title,
      description,
      keywords,
      url: 'https://nasharhub.com/saudi-arabia',
      image: 'https://nasharhub.com/og-image.jpg'
    });
  }, []);

  const CONTACT_NUMBER = "+20 10 10742430";
  const whatsappMsg = encodeURIComponent("مرحباً، مهتم بخدمات تصميم المواقع والمتاجر الإلكترونية في السعودية.");
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`طلب جديد من الموقع:\nالاسم: ${formData.name}\nرقم الجوال: ${formData.phone}\nالخدمة المطلوبة: ${formData.service}`);
    window.open(`https://wa.me/${CONTACT_NUMBER.replace(/\s/g, '')}?text=${msg}`, '_blank');
  };

  // Duplicate for seamless marquee
  const marqueeItems = [...CLIENTS, ...CLIENTS];

  return (
    <div className="min-h-screen bg-slate-50 font-arabic text-slate-900 selection:bg-secondary/30" dir="rtl">
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "نشار هب - شركة تصميم مواقع وتسويق رقمي",
            "image": "https://nasharhub.com/logo.png",
            "description": "نشار هب هي أفضل شركة تسويق إلكتروني وتصميم مواقع بالسعودية. نقدم خدمات إعلانات جوجل، سيو، وبرمجة المتاجر في الرياض وكافة أنحاء المملكة.",
            "areaServed": [
              { "@type": "City", "name": "الرياض" },
              { "@type": "City", "name": "جدة" },
              { "@type": "City", "name": "الدمام" },
              { "@type": "City", "name": "مكة المكرمة" },
              { "@type": "City", "name": "المدينة المنورة" },
              { "@type": "City", "name": "الخبر" },
              { "@type": "City", "name": "أبها" },
              { "@type": "City", "name": "تبوك" },
              { "@type": "City", "name": "القصيم" },
              { "@type": "City", "name": "الطائف" }
            ],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "SA"
            },
            "telephone": "+20 10 10742430",
            "priceRange": "$$"
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-50"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-sm mb-6 border border-blue-100 animate-fade-in-up opacity-0">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              عرض خاص لعملائنا في المملكة العربية السعودية 🇸🇦
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight animate-fade-in-up opacity-0 delay-100">
              أفضل شركة تسويق وتصميم مواقع <span className="gradient-text">في المملكة</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed animate-fade-in-up opacity-0 delay-200">
              سواء كنت تبحث عن شركة برمجة مواقع، تصميم متاجر إلكترونية، أو إعلانات جوجل وجوجل إعلانات، نحن في نشار هب نقدم لك الحلول الرقمية المتكاملة مع عرض الصورة كاملة لنجاحك في الرياض، جدة، الدمام، مكة، المدينة، وكافة أنحاء السعودية.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0 delay-300">
              <a 
                href={`https://wa.me/${CONTACT_NUMBER.replace(/[\s+]/g, '')}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-green-500/20 flex items-center justify-center gap-2 group"
              >
                <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
                تواصل معنا عبر واتساب
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-6 text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-secondary" />
                <span>تصميم عصري وجذاب</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-secondary" />
                <span>متوافق 100% مع الجوال</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-secondary" />
                <span>دعم فني مستمر</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">من نحن؟ أفضل شركة تسويق وبرمجة مواقع في السعودية</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                نشار هب هي وكالة تسويق رقمي رائدة متخصصة في تقديم حلول متكاملة للشركات والمؤسسات في كافة مدن المملكة العربية السعودية (الرياض، جدة، الدمام، مكة المكرمة، المدينة المنورة، الخبر، أبها، تبوك، الطائف، والقصيم). نجمع بين الإبداع في تصميم المواقع والخبرة التقنية في إعلانات جوجل لنقدم لك نتائج ملموسة.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">فريق خبراء متخصص</h3>
                    <p className="text-slate-600">نضم نخبة من أفضل المصممين والمبرمجين وخبراء التسويق.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 shrink-0">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">نتائج قابلة للقياس</h3>
                    <p className="text-slate-600">نركز على تحقيق أهدافك التجارية وزيادة العائد على الاستثمار.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="فريق عمل نشار هب في اجتماع تخطيط استراتيجي لمشاريع التسويق الرقمي" 
                width="800"
                height="400"
                fetchPriority="high"
                decoding="async"
                className="relative rounded-3xl shadow-2xl object-cover w-full h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">خدماتنا المتكاملة لنمو أعمالك</h2>
            <p className="text-slate-600 text-lg">نقدم باقة شاملة من الخدمات الرقمية المصممة خصيصاً للسوق السعودي</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'تصميم المواقع التعريفية', desc: 'مواقع احترافية تعكس هوية شركتك وتزيد من مصداقيتك أمام العملاء.', icon: <Monitor size={32} /> },
              { title: 'برمجة المتاجر الإلكترونية', desc: 'متاجر متكاملة مع بوابات الدفع وشركات الشحن لتجربة تسوق سلسة.', icon: <Smartphone size={32} /> },
              { title: 'تصميم صفحات الهبوط', desc: 'صفحات هبوط (Landing Pages) مصممة خصيصاً لزيادة المبيعات وتحويل الزوار إلى عملاء.', icon: <Target size={32} /> },
              { title: 'تطوير وتحديث المواقع', desc: 'إعادة تصميم وتطوير موقعك الحالي ليتوافق مع أحدث التقنيات ومعايير تجربة المستخدم.', icon: <Zap size={32} /> },
              { title: 'صيانة ودعم فني', desc: 'دعم فني مستمر وحماية لموقعك لضمان عمله بكفاءة عالية على مدار الساعة.', icon: <Users size={32} /> },
              { title: 'استضافة وحجز دومين', desc: 'خدمات استضافة سريعة وآمنة مع حجز النطاق (Domain) الخاص بنشاطك التجاري.', icon: <Award size={32} /> }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-20 bg-white border-y border-slate-200 overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">شركاء النجاح</h2>
          <p className="text-slate-500">نفخر بثقة العديد من الشركات والمؤسسات الرائدة</p>
        </div>

        <div className="relative w-full flex overflow-x-hidden" dir="ltr">
          <div className="animate-marquee flex gap-12 px-6 whitespace-nowrap items-center">
            {marqueeItems.map((client, index) => {
              if ('component' in client && client.component) {
                const LogoComponent = client.component;
                return (
                  <a 
                    key={`${client.id}-${index}`} 
                    href={client.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative shrink-0 group h-24 w-auto min-w-[180px] flex items-center justify-center transition-all duration-300 hover:scale-110 filter grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
                  >
                    <LogoComponent />
                  </a>
                );
              }
              return null;
            })}
          </div>
        </div>
      </section>

      {/* Features Section (Why Us) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">لماذا تختار نشار هب لخدمات التسويق وتصميم المواقع؟</h2>
            <p className="text-slate-600 text-lg">نقدم لك حلاً متكاملاً يضمن نجاح مشروعك الرقمي</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <Monitor size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">تصميم مخصص لمهنتك</h3>
              <p className="text-slate-600 leading-relaxed">
                ندرس مجال عملك بعناية لنصمم موقعاً يعكس احترافيتك ويجذب عملاءك المستهدفين في السوق السعودي.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
                <Smartphone size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">تجربة مستخدم ممتازة</h3>
              <p className="text-slate-600 leading-relaxed">
                مواقعنا تعمل بكفاءة عالية على جميع الأجهزة الذكية، مما يضمن بقاء الزائر لفترة أطول وزيادة فرص التحويل.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-6">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">سرعة وأداء عالي</h3>
              <p className="text-slate-600 leading-relaxed">
                نستخدم أحدث التقنيات لضمان تحميل موقعك في أجزاء من الثانية، مما يحسن ترتيبك في جوجل ويرضي زوارك.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Form Section */}
      <section id="contact-form" className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-slate-900 mb-4">اطلب عرض سعر مجاني</h2>
              <p className="text-slate-600">املأ النموذج وسنتواصل معك في أسرع وقت لتقديم الاستشارة المناسبة.</p>
            </div>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">الاسم الكريم</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="أدخل اسمك"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">رقم الجوال</label>
                <input 
                  type="tel" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-left"
                  placeholder="05X XXX XXXX"
                  dir="ltr"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">الخدمة المطلوبة</label>
                <select 
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                >
                  <option value="">اختر الخدمة...</option>
                  <option value="تصميم موقع تعريفي للشركات">تصميم موقع تعريفي للشركات</option>
                  <option value="برمجة وتصميم متجر إلكتروني">برمجة وتصميم متجر إلكتروني</option>
                  <option value="تصميم صفحة هبوط (Landing Page)">تصميم صفحة هبوط (Landing Page)</option>
                  <option value="تطوير وتحديث موقع حالي">تطوير وتحديث موقع حالي</option>
                  <option value="أخرى">أخرى</option>
                </select>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-green-500/20 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                أرسل طلبك عبر واتساب
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-bold text-sm mb-8 border border-white/20 backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            متاحون الآن للرد على استفساراتكم
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            لا تدع منافسيك يسبقونك!
          </h2>
          <p className="text-primary-light text-xl md:text-2xl mb-12 text-slate-300 max-w-2xl mx-auto leading-relaxed">
            احجز موقعك الآن وابدأ في استقبال عملاء جدد من جميع أنحاء المملكة. استشارة مجانية وعرض سعر مخصص بانتظارك.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`https://wa.me/${CONTACT_NUMBER.replace(/[\s+]/g, '')}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-2xl font-bold text-xl transition-all shadow-xl shadow-green-500/20 hover:-translate-y-1 group"
            >
              <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
              تواصل معنا عبر واتساب
            </a>
            <span className="text-slate-400 text-sm mt-4 sm:mt-0 sm:mr-4">
              نرد خلال دقائق ⚡️
            </span>
          </div>
        </div>
      </section>
      
    </div>
  );
};
