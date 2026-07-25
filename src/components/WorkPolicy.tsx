import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Scale } from 'lucide-react';
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
        <div className="max-w-4xl mx-auto px-4 relative z-10">
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
              {lang === 'en' ? 'Work Policy & Transparency' : 'سياسة العمل والشفافية'}
            </h1>
          </div>
          <p className="text-xl text-slate-300 mt-4 max-w-3xl">
            {lang === 'en' 
              ? 'Contract Terms and Ownership' 
              : 'بنود التعاقد والملكية'}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 mb-12">
          <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
            {lang === 'en'
              ? 'We are committed to the highest level of clarity with our clients. The following terms outline our workflow, ownership rights, and financial obligations before starting any contract.'
              : 'نلتزم بأعلى درجات الوضوح مع عملائنا. تُوضّح البنود التالية آلية عملنا وحقوق الملكية والالتزامات المالية قبل بدء أي تعاقد.'}
          </p>

          <div className="space-y-12">
            
            {/* Section 1: General Terms */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
                <ShieldCheck className="text-blue-500" />
                {lang === 'en' ? 'General Terms' : 'البنود العامة'}
              </h2>
              <ul className="space-y-4">
                {[
                  {
                    title: lang === 'en' ? 'Advertising Accounts' : 'الحسابات الإعلانية',
                    desc: lang === 'en' 
                      ? 'We work entirely through our own advertising accounts. We do not sell or rent them to any party.' 
                      : 'نعمل بالكامل من خلال حساباتنا الإعلانية المملوكة لنا، ولا نقوم ببيعها أو تأجيرها لأي طرف.'
                  },
                  {
                    title: lang === 'en' ? 'Upon Contract Termination' : 'عند فسخ التعاقد',
                    desc: lang === 'en' 
                      ? "Only the client's payment card and their website link are removed — this is the entirety of what the client owns with us." 
                      : 'يتم حذف بطاقة الدفع الخاصة بالعميل ورابط موقعه الإلكتروني فقط — وهذا هو كامل ما يملكه العميل لدينا.'
                  },
                  {
                    title: lang === 'en' ? 'Ownership' : 'الملكية',
                    desc: lang === 'en' 
                      ? 'Neither the client nor any other party owns any of the tools, accounts, or websites we use; they are the exclusive property of NasharHub.' 
                      : 'لا يملك العميل ولا أي طرف آخر أيًّا من الأدوات أو الحسابات أو المواقع التي نستخدمها؛ فهي ملكية خالصة لـ NasharHub.'
                  },
                  {
                    title: lang === 'en' ? 'Advertising and SEO Websites' : 'مواقع الإعلان والأرشفة',
                    desc: lang === 'en' 
                      ? 'All websites used for advertising or SEO are the exclusive property of NasharHub.' 
                      : 'جميع المواقع التي يتم الإعلان من خلالها أو أرشفتها (SEO) ملكٌ خالص لنشار هب.'
                  },
                  {
                    title: lang === 'en' ? 'Contracts' : 'العقود',
                    desc: lang === 'en' 
                      ? 'Official contracts are signed to regulate the relationship and obligations between both parties.' 
                      : 'يتم توقيع عقود رسمية تنظّم العلاقة والالتزامات بين الطرفين.'
                  }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                    <div>
                      <strong className="text-slate-900 block mb-1">{item.title}</strong>
                      <span className="text-slate-600 leading-relaxed">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 2: Stores Model */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3 border-b border-slate-100 pb-4">
                <ShieldCheck className="text-blue-500" />
                {lang === 'en' ? 'Stores and Exhibitions Model' : 'نموذج المتاجر والمعارض'}
              </h2>
              <p className="text-sm text-slate-500 mb-6 font-medium">
                {lang === 'en' ? 'Shopping · Real Estate · Furniture Exhibitions · Cars' : 'Shopping · العقارات · معارض الأثاث · السيارات'}
              </p>
              <ul className="space-y-4">
                {[
                  lang === 'en' ? 'The client provides their own payment card to cover the daily and monthly click budget.' : 'يُحضر العميل بطاقة دفع خاصة به تتحمّل ميزانية النقرات اليومية والشهرية.',
                  lang === 'en' ? 'The client provides a website link specific to their business.' : 'يُحضر العميل رابط موقع إلكتروني خاص بنشاطه.',
                  lang === 'en' ? 'The campaign is charged directly from the client\'s card, and Google handles the collection of click costs — we do not collect them.' : 'تُشحن الحملة مباشرةً من بطاقة العميل، ويتولّى Google تحصيل تكاليف النقرات — لسنا نحن من يحصّلها.'
                ].map((desc, idx) => (
                  <li key={idx} className="flex gap-4">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                    <span className="text-slate-600 leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 3: Services Model */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3 border-b border-slate-100 pb-4">
                <ShieldCheck className="text-blue-500" />
                {lang === 'en' ? 'Services Model' : 'نموذج الخدمات'}
              </h2>
              <p className="text-sm text-slate-500 mb-6 font-medium">
                {lang === 'en' ? 'Cleaning · Furniture Moving · Insulation' : 'التنظيف · نقل الأثاث · العزل'}
              </p>
              <ul className="space-y-4">
                {[
                  lang === 'en' ? 'We use our own websites without selling them.' : 'نستخدم مواقعنا الخاصة دون بيعها.',
                  lang === 'en' ? 'The client provides a payment card + a phone number, and we link this data to our websites and accounts.' : 'يُحضر العميل بطاقة دفع + رقم هاتف، ونربط هذه البيانات بمواقعنا وحساباتنا.',
                  lang === 'en' ? 'Monthly management starts from 1000 SAR — subject to increase based on the city and our agreements.' : 'متابعة شهرية تبدأ من 1000 ريال سعودي — قابلة للزيادة حسب المدينة وحسب الاتفاقيات بيننا.',
                  lang === 'en' ? 'Campaign Launch: After the transfer (payment) and sending the data, the advertising campaign is prepared and launched within 4 to 7 working days.' : 'انطلاق الحملة: بعد التحويل (الدفعة) وإرسال البيانات، يتم تجهيز الحملة الإعلانية وإطلاقها خلال 4 إلى 7 أيام عمل.',
                  lang === 'en' ? 'The client bears the click costs via their own card; ads are charged from a Saudi payment card, and Google collects these amounts — not us.' : 'يتحمّل العميل تكاليف النقرات عبر بطاقته الخاصة؛ تُشحن الإعلانات من بطاقة دفع سعودية، ويتولّى Google تحصيل هذه المبالغ — وليس نحن.',
                  lang === 'en' ? 'In case of running Egyptian individual ad accounts, a 14% Value Added Tax is automatically deducted in favor of the Egyptian government, and Google automatically collects the 14% directly during the payment process — we do not collect it.' : 'في حال تشغيل حسابات إعلانية فردية مصرية، يتم خصم 14% ضريبة القيمة المضافة تلقائيًا لصالح الدولة المصرية، ويتولّى Google تحصيل الـ14% مباشرةً أثناء تنفيذ الدفعة تلقائيًا — لسنا نحن من يحصّلها.',
                  lang === 'en' ? 'No one owns any of our tools, accounts, or websites — all are the exclusive property of NasharHub.' : 'لا يملك أحد أيًّا من الأدوات أو الحسابات أو المواقع الخاصة بنا — جميعها ملكية حصرية لـ NasharHub.'
                ].map((desc, idx) => (
                  <li key={idx} className="flex gap-4">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                    <span className="text-slate-600 leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};
