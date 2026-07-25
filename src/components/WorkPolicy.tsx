import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Scale, Briefcase, Store, Wrench, Lock, CreditCard, Building } from 'lucide-react';
import { Language } from '../types';

interface WorkPolicyProps {
  lang: Language;
  onBack: () => void;
}

export const WorkPolicy: React.FC<WorkPolicyProps> = ({ lang, onBack }) => {
  const isRTL = lang === 'ar';
  
  return (
    <div className={`min-h-screen bg-slate-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="bg-primary pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-8"
          >
            {isRTL ? <ArrowRight size={20} /> : <ChevronRight size={20} className="rotate-180" />}
            <span>{lang === 'en' ? 'Back to Home' : 'العودة للرئيسية'}</span>
          </button>
          
          <div className="flex items-center gap-3 mb-4">
            <Scale className="text-secondary" size={32} />
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {lang === 'en' ? 'Work Policy & Transparency' : 'سياسة العمل ومبادئ الشفافية'}
            </h1>
          </div>
          <p className="text-xl text-slate-300 mt-4 max-w-3xl">
            {lang === 'en' 
              ? 'At Nashar Hub, we believe that complete clarity is the foundation of a successful partnership. These terms are designed to organize our workflow, protect rights, and clarify financial obligations definitively before starting any project.' 
              : 'نؤمن في نشار هب بأن الوضوح التام هو أساس الشراكة الناجحة. صُممت هذه البنود لتنظيم آلية العمل، وحفظ الحقوق، وتوضيح الالتزامات المالية بشكل قاطع قبل البدء في أي مشروع.'}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-12">
        
        {/* Section 1: General Terms */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 border-b border-slate-100 pb-4">
            <ShieldCheck className="text-blue-500" size={28} />
            {lang === 'en' ? 'General Policies & Ownership Rights' : 'السياسات العامة وحقوق الملكية'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Lock className="text-blue-500" size={24} />,
                title: lang === 'en' ? 'Account Independence' : 'استقلالية الحسابات',
                desc: lang === 'en' 
                  ? 'We manage campaigns entirely through our own proprietary advertising accounts, which are never sold or rented to third parties.' 
                  : 'ندير حملاتنا الإعلانية بشكل كامل عبر حسابات مملوكة حصرياً لوكالتنا، ولا تُعرض للبيع أو التأجير لأي طرف ثالث.'
              },
              {
                icon: <Briefcase className="text-blue-500" size={24} />,
                title: lang === 'en' ? 'Contract Termination' : 'انتهاء التعاقد',
                desc: lang === 'en' 
                  ? "Upon ending our partnership, we promptly remove your payment card and unlink your website. This represents the full extent of your data held by us." 
                  : 'في حال إنهاء الشراكة، نلتزم بإزالة بطاقة الدفع الخاصة بك وإلغاء ارتباط رابط موقعك، وهذا يمثل النطاق الكامل لبياناتك لدينا.'
              },
              {
                icon: <Building className="text-blue-500" size={24} />,
                title: lang === 'en' ? 'Intellectual Property' : 'حقوق الملكية الفكرية',
                desc: lang === 'en' 
                  ? 'Nashar Hub retains exclusive ownership of all tools, advertising accounts, and platforms used. Ownership does not transfer to the client.' 
                  : 'تحتفظ وكالة نشار هب بالملكية الحصرية لكافة الأدوات، والحسابات الإعلانية، والمنصات المستخدمة، ولا تنتقل ملكيتها للعميل.'
              },
              {
                icon: <Scale className="text-blue-500" size={24} />,
                title: lang === 'en' ? 'Marketing & SEO Platforms' : 'منصات التسويق والأرشفة',
                desc: lang === 'en' 
                  ? 'All websites and infrastructure used for advertising or Search Engine Optimization (SEO) are entirely our proprietary assets.' 
                  : 'جميع المواقع والبنى التحتية المستخدمة في الإعلانات أو تحسين محركات البحث (SEO) تابعة بشكل كامل لملكيتنا الخاصة.'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="shrink-0 p-3 bg-blue-50 rounded-lg h-fit">
                  {item.icon}
                </div>
                <div>
                  <strong className="text-lg text-slate-900 block mb-2">{item.title}</strong>
                  <span className="text-slate-600 leading-relaxed block">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Section 2: Stores Model */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10 flex flex-col">
            <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3 border-b border-slate-100 pb-4">
              <Store className="text-blue-500" size={28} />
              {lang === 'en' ? 'Stores & Real Estate Model' : 'نموذج المتاجر والعقارات'}
            </h2>
            <p className="text-sm text-slate-500 mb-8 font-medium bg-slate-50 p-3 rounded-lg border border-slate-100 inline-block w-fit">
              {lang === 'en' ? 'E-commerce · Real Estate · Furniture · Automotive' : 'التسوق الإلكتروني · التسويق العقاري · معارض الأثاث · السيارات'}
            </p>
            <ul className="space-y-5 flex-grow">
              {[
                {
                  title: lang === 'en' ? 'Advertising Budget' : 'الميزانية الإعلانية',
                  desc: lang === 'en' ? 'The client provides a payment card to cover the daily and monthly click budget.' : 'يوفر العميل بطاقة دفع بنكية لتغطية الميزانية اليومية والشهرية المخصصة للنقرات.'
                },
                {
                  title: lang === 'en' ? 'Campaign Destination' : 'الوجهة الإعلانية',
                  desc: lang === 'en' ? "Campaigns are directed straight to the client's official website." : 'يتم توجيه الحملات بشكل مباشر إلى الموقع الإلكتروني الرسمي الخاص بالعميل.'
                },
                {
                  title: lang === 'en' ? 'Billing Transparency' : 'شفافية الفوترة',
                  desc: lang === 'en' ? 'Ad click costs are charged directly from the client\'s card by Google Ads. Our agency does not collect or handle these advertising funds.' : 'تُخصم تكلفة النقرات الإعلانية مباشرة من بطاقة العميل لصالح منصة إعلانات جوجل، ولا نقوم نحن كوكالة بتحصيل هذه التكاليف.'
                }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                  <div>
                    <strong className="text-slate-900 block mb-1">{item.title}</strong>
                    <span className="text-slate-600 leading-relaxed text-sm">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3: Services Model */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-10 flex flex-col">
            <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3 border-b border-slate-100 pb-4">
              <Wrench className="text-blue-500" size={28} />
              {lang === 'en' ? 'General Services Model' : 'نموذج الخدمات العامة'}
            </h2>
            <p className="text-sm text-slate-500 mb-8 font-medium bg-slate-50 p-3 rounded-lg border border-slate-100 inline-block w-fit">
              {lang === 'en' ? 'Cleaning · Moving · Insulation & Home Services' : 'خدمات التنظيف · نقل الأثاث · العزل · الخدمات المنزلية'}
            </p>
            <ul className="space-y-5 flex-grow">
              {[
                {
                  title: lang === 'en' ? 'Infrastructure' : 'البنية التحتية',
                  desc: lang === 'en' ? 'We rely on our own pre-built platforms and websites to launch campaigns, without transferring their ownership.' : 'نعتمد في إطلاق الحملات على منصاتنا ومواقعنا الخاصة والمجهزة مسبقاً، دون نقل ملكيتها للعميل.'
                },
                {
                  title: lang === 'en' ? 'Integration Mechanism' : 'آلية الربط',
                  desc: lang === 'en' ? 'The client provides a payment card and a dedicated business phone number, which we link to our systems to start receiving leads.' : 'يقوم العميل بتوفير بطاقة الدفع ورقم هاتف مخصص للعمل، ليتم ربطها بأنظمتنا لبدء تلقي الطلبات.'
                },
                {
                  title: lang === 'en' ? 'Management Fees' : 'رسوم الإدارة',
                  desc: lang === 'en' ? 'Monthly management and monitoring fees start at 1,000 SAR, subject to adjustment based on geographical scope and mutual agreement.' : 'تبدأ رسوم الإدارة والمتابعة الشهرية من 1000 ريال سعودي، وتخضع للتعديل بناءً على النطاق الجغرافي والاتفاق المُبرم.'
                },
                {
                  title: lang === 'en' ? 'Timeframe' : 'الإطار الزمني',
                  desc: lang === 'en' ? 'Once the payment is confirmed and required data is received, the campaign is setup and launched within 4 to 7 working days.' : 'بمجرد تأكيد الدفعة واستلام البيانات المطلوبة، يتم إعداد وإطلاق الحملة الإعلانية في فترة تتراوح بين 4 إلى 7 أيام عمل.'
                },
                {
                  title: lang === 'en' ? 'Taxes (For Egyptian Accounts)' : 'الضرائب (للحسابات المصرية)',
                  desc: lang === 'en' ? 'When using Egyptian individual ad accounts, a 14% Value Added Tax (VAT) is automatically deducted by Google. We do not collect this tax.' : 'في حال استخدام حسابات إعلانية فردية مصرية، يتم استقطاع 14% كضريبة قيمة مضافة من قِبل جوجل بشكل آلي، ولا يتم تحصيلها عبر وكالتنا.'
                }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                  <div>
                    <strong className="text-slate-900 block mb-1">{item.title}</strong>
                    <span className="text-slate-600 leading-relaxed text-sm">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

