import React from 'react';
import { Language } from '../types';
import { Share2 } from 'lucide-react';
import { Reveal } from './Reveal';

interface ClientLogosProps {
  lang: Language;
}

export const CLIENTS: Array<{d: string, l: string, img?: string}> = [
  { d: "gorillaegyptkw.com", l: "غوريلا مصر" },
  { d: "shbookalmamlaka.com", l: "شبوك المملكة" },
  { d: "dehanatmaka.com", l: "دهانات مكة" },
  { d: "furniturefixuae.com", l: "تصليح أثاث الإمارات" },
  { d: "moketfloor.com", l: "موكيت فلور" },
  { d: "awazelriyadh.com", l: "عوازل الرياض" },
  { d: "nasharhub.com", l: "نشار هب" },
  { d: "finishingsriyadh.com", l: "تشطيبات الرياض" },
  { d: "arkaneliteevents.com", l: "أركان النخبة للفعاليات" },
  { d: "vipeventsriyadh.com", l: "فعاليات كبار الشخصيات" },
  { d: "dahanat-riyadh.com", l: "دهانات الرياض" },
  { d: "napoliovensksa.com", l: "أفران نابولي السعودية" },
  { d: "arjicontracting.com", l: "عرجي للمقاولات" },
  { d: "zain5grouter.com", l: "راوتر زين 5G" },
  { d: "zain-fiber-riyadh.com", l: "زين فايبر الرياض" },
  { d: "moalemzujajmadina.com", l: "معلم زجاج المدينة" },
  { d: "xn--mgbpl2fh2f5d0a.com", l: "مندوب راوتر زين" },
  { d: "nazafariyadh.com", l: "نظافة الرياض" },
  { d: "paintriyadh.com", l: "دهانات الرياض" },
  { d: "valueadvagency.com", l: "وكالة فاليو الإعلانية" },
  { d: "najjarriyadh.com", l: "نجار الرياض" },
  { d: "riyadhwave.com", l: "أمواج الرياض" },
  { d: "azelhail.com", l: "مؤسسة العازل الحديث", img: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783930204/%D9%85%D8%A4%D8%B3%D8%B3%D8%A9_%D8%A7%D9%84%D8%B9%D8%A7%D8%B2%D9%84_%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB-removebg-preview_h2wf85.png" },
  { d: "mandoubsalam5g.com", l: "مندوب سلام 5G", img: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1780879292/salam_5g_mandoub_logo_uyucr5.png" },
  { d: "zain5gsaudi.com", l: "مندوب زين 5G", img: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1783750769/%D9%85%D9%86%D8%AF%D9%88%D8%A8_%D8%B2%D9%8A%D9%86_5g_%D8%A7%D8%AE%D8%B1_%D8%AA%D8%AD%D8%AF%D9%8A%D8%AB_gcjlva.png" },
  { d: "haddad-jeddah.com", l: "حداد كريتال جدة", img: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1782240782/%D8%AD%D8%AF%D8%A7%D8%AF_%D9%83%D8%B1%D9%8A%D8%AA%D8%A7%D9%84_%D8%AC%D8%AF%D8%A9_ua2idm.png" },
  { d: "grc-decor.com", l: "روائع الجي ار سي", img: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781979854/%D8%B1%D9%88%D8%A7%D8%A6%D8%B9_%D8%A7%D9%84%D8%AC%D9%8A_%D8%A7%D8%B1_%D8%B3%D9%8A_sqc6zf.png" },
  { d: "jeddahfullrepair.com", l: "صيانة جدة", img: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781928647/%D8%B5%D9%8A%D8%A7%D8%AA%D8%A9_%D8%AC%D8%AF%D8%A9_lavi0o.png" },
  { d: "fannicarpenteruae.com", l: "نجار دبي", img: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781715339/%D9%86%D8%AC%D8%A7%D8%B1_%D8%AF%D8%A8%D9%8A_sobbgv.png" },
  { d: "taaqebkhadamat.com", l: "تعقيب خدمات", img: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781694327/%D8%B4%D8%B9%D8%A7%D8%B1_%D8%AA%D8%B9%D9%82%D9%8A%D8%A8_koatju.png" },
  { d: "fannielectricuae.com", l: "فني كهرباء دبي", img: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781707687/%D9%81%D9%86%D9%8A_%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1_%D8%AF%D8%A8%D9%8A_ufefpo.png" },
  { d: "matabekhjeddah.com", l: "معلم مطابخ", img: "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781442195/%D9%85%D8%B9%D9%84%D9%85_%D9%85%D8%B7%D8%A7%D8%A8%D8%AE_2-removebg-preview_lc4mso.png" },
];

export const ClientLogos: React.FC<ClientLogosProps> = ({ lang }) => {
  return (
    <section className="py-28 bg-slate-50 border-y border-slate-100 w-full relative" aria-label="Our Clients">
       <div className="max-w-7xl mx-auto px-4 mb-20 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-600 mb-6 shadow-sm">
              <Share2 size={16} className="text-blue-600" />
              <span className="text-xs font-black uppercase tracking-widest text-slate-800">
                {lang === 'en' ? 'OUR PARTNERS' : 'شركاء النجاح'}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {lang === 'en' ? 'Trusted by Brands Worldwide' : 'شركاء النجاح والعلامات التي تثق بنا'}
            </h2>
            <p className="mt-6 text-slate-500 font-medium max-w-2xl mx-auto text-lg">
              {lang === 'en' 
                ? 'We help businesses across various sectors achieve digital dominance in Saudi Arabia and beyond.' 
                : 'نساعد الشركات في مختلف القطاعات على تحقيق الهيمنة الرقمية في المملكة العربية السعودية وخارجها.'}
            </p>
          </Reveal>
       </div>
       
       <div className="max-w-7xl mx-auto px-4">
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6" dir="ltr">
           {CLIENTS.map((site, index) => (
             <a 
               key={index}
               href={`https://${site.d}`} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="flex flex-col items-center justify-center bg-white border border-slate-200 rounded-xl p-4 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_10px_20px_-10px_rgba(59,130,246,0.2)] group"
             >
               <div className="h-14 flex items-center justify-center w-full mb-3">
                 <img 
                   src={site.img || `https://www.google.com/s2/favicons?sz=128&domain_url=https://${site.d}`} 
                   alt={site.l} 
                   loading="lazy"
                   className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                 />
               </div>
               <span className="text-[11px] font-bold text-slate-500 text-center w-full truncate group-hover:text-slate-800 transition-colors duration-300">
                 {site.l}
               </span>
             </a>
           ))}
         </div>
       </div>
    </section>
  );
};


