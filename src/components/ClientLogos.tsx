import React, { useRef } from 'react';
import { Language } from '../types';
import { ChevronLeft, ChevronRight, Share2 } from 'lucide-react';
import { Reveal } from './Reveal';

interface ClientLogosProps {
  lang: Language;
}

export const CLIENTS: Array<{d: string, l: string, img?: string}> = [
  { d: "gorillaegyptkw.com", l: "Gorilla Egypt KW" },
  { d: "shbookalmamlaka.com", l: "شبوك المملكة" },
  { d: "dehanatmaka.com", l: "دهانات ماكا" },
  { d: "furniturefixuae.com", l: "Furniture Fix UAE" },
  { d: "moketfloor.com", l: "موكيت فلور" },
  { d: "awazelriyadh.com", l: "أوازل الرياض" },
  { d: "nasharhub.com", l: "Nashar Hub" },
  { d: "finishingsriyadh.com", l: "Finishings Riyadh" },
  { d: "arkaneliteevents.com", l: "Arkan Elite Events" },
  { d: "vipeventsriyadh.com", l: "VIP Events Riyadh" },
  { d: "dahanat-riyadh.com", l: "دهانات الرياض" },
  { d: "napoliovensksa.com", l: "Napolio Vens KSA" },
  { d: "arjicontracting.com", l: "Arji Contracting" },
  { d: "zain5grouter.com", l: "زين 5G روتر" },
  { d: "zain-fiber-riyadh.com", l: "زين فايبر الرياض" },
  { d: "moalemzujajmadina.com", l: "معلم زجاج المدينة" },
  { d: "xn--mgbpl2fh2f5d0a.com", l: "مندوب راوتر زين" },
  { d: "nazafariyadh.com", l: "نظافة الرياض" },
  { d: "paintriyadh.com", l: "Paint Riyadh" },
  { d: "valueadvagency.com", l: "Value Adv Agency" },
  { d: "najjarriyadh.com", l: "نجار الرياض" },
  { d: "riyadhwave.com", l: "Riyadh Wave" },
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-white border-b border-slate-100 w-full overflow-hidden relative" aria-label="Our Clients">
       <style>
         {`
           .marquee-wrapper { 
             overflow: hidden; 
             position: relative; 
             padding: 20px 0; 
           }
           .marquee-wrapper::before, .marquee-wrapper::after {
             content: ''; position: absolute; top: 0; bottom: 0; width: 100px; z-index: 5; pointer-events: none;
           }
           .marquee-wrapper::before { left: 0; background: linear-gradient(to right, #fff 10%, transparent); }
           .marquee-wrapper::after  { right: 0; background: linear-gradient(to left, #fff 10%, transparent); }
           
           .marquee-track { 
             display: flex; 
             animation: marquee 60s linear infinite; 
             width: max-content; 
             will-change: transform;
           }
           .marquee-track:hover { animation-play-state: paused; }
           
           @keyframes marquee { 
             0% { transform: translateX(0); } 
             100% { transform: translateX(-50%); } 
           }
           
           .logo-card {
             display: flex; 
             flex-direction: column; 
             align-items: center; 
             justify-content: center;
             width: 140px; 
             height: 100px; 
             background: #fff; 
             border: 1px solid #f1f5f9;
             border-radius: 12px; 
             text-decoration: none; 
             padding: 12px;
             transition: all 0.3s ease;
             box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);
             flex-shrink: 0;
           }
           .logo-card:hover { 
             transform: translateY(-5px); 
             border-color: #3b82f6; 
             box-shadow: 0 10px 15px -3px rgb(59 130 246 / 0.1); 
           }
           .logo-card img { 
             max-width: 100%; 
             max-height: 52px; 
             object-fit: contain; 
             filter: none;
             transition: transform 0.3s ease;
             opacity: 1;
           }
           .logo-card:hover img { 
             transform: scale(1.05);
           }
           .logo-card span { 
             font-size: 11px; 
             font-weight: 700; 
             color: #475569; 
             text-align: center; 
             margin-top: 12px; 
             white-space: nowrap;
             overflow: hidden;
             text-overflow: ellipsis;
             max-width: 100%;
           }
         `}
       </style>

       <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-slate-600 mb-4">
              <Share2 size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">
                {lang === 'en' ? 'OUR PARTNERS' : 'شركاء النجاح'}
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-slate-800 tracking-tight leading-tight">
              {lang === 'en' ? 'Trusted by Brands Worldwide' : 'شركاء النجاح والعلامات التي تثق بنا'}
            </h2>
            <p className="mt-4 text-slate-500 font-medium max-w-2xl mx-auto">
              {lang === 'en' 
                ? 'We help businesses across various sectors achieve digital dominance in Saudi Arabia and beyond.' 
                : 'نساعد الشركات في مختلف القطاعات على تحقيق الهيمنة الرقمية في المملكة العربية السعودية وخارجها.'}
            </p>
          </Reveal>
       </div>
       
       <div className="relative group/marquee">
         {/* Navigation Arrows */}
         <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10 opacity-0 group-hover/marquee:opacity-100 transition-opacity">
           <button 
             onClick={() => scroll('left')}
             className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-lg"
           >
             <ChevronLeft size={20} />
           </button>
         </div>
         <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10 opacity-0 group-hover/marquee:opacity-100 transition-opacity">
           <button 
             onClick={() => scroll('right')}
             className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-lg"
           >
             <ChevronRight size={20} />
           </button>
         </div>

         <div className="marquee-wrapper" ref={scrollRef} dir="ltr">
           <div className="marquee-track">
             {[0, 1].map((setIndex) => (
               <div key={setIndex} className="flex gap-4 pr-4">
                 {CLIENTS.map((site, index) => (
                   <a 
                     key={`${setIndex}-${index}`}
                     href={`https://${site.d}`} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="logo-card"
                   >
                     <img 
                       src={site.img || `https://www.google.com/s2/favicons?sz=128&domain_url=https://${site.d}`} 
                       alt={site.l} 
                       loading="lazy"
                     />
                     <span>{site.l}</span>
                   </a>
                 ))}
               </div>
             ))}
           </div>
         </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 mt-8 flex justify-center md:hidden">
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="p-2 rounded-full border border-slate-200 text-slate-400"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 rounded-full border border-slate-200 text-slate-400"
            >
              <ChevronRight size={20} />
            </button>
          </div>
       </div>
    </section>
  );
};

