import React, { useRef } from 'react';
import { Language } from '../types';
import { ChevronLeft, ChevronRight, Share2 } from 'lucide-react';
import { Reveal } from './Reveal';

interface ClientLogosProps {
  lang: Language;
}

export const CLIENTS = [
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
             white-space: nowrap;
             gap: 16px; 
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

         <div className="marquee-wrapper" ref={scrollRef}>
           <div className="marquee-track">
             {[...CLIENTS, ...CLIENTS].map((site, index) => (
               <a 
                 key={index}
                 href={`https://${site.d}`} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="logo-card"
               >
                 <img 
                   src={`https://www.google.com/s2/favicons?sz=128&domain_url=https://${site.d}`} 
                   alt={site.l} 
                   loading="lazy"
                 />
                 <span>{site.l}</span>
               </a>
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

