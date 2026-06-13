import React from 'react';
import { Language } from '../types';

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
  return (
    <section className="py-24 bg-white border-b border-slate-100 w-full overflow-hidden" aria-label="Our Clients">
       <style>
         {`
           .marquee-wrapper { 
             overflow: hidden; 
             position: relative; 
             padding: 20px 0; 
           }
           .marquee-wrapper::before, .marquee-wrapper::after {
             content: ''; position: absolute; top: 0; bottom: 0; width: 100px; z-index: 2; pointer-events: none;
           }
           .marquee-wrapper::before { left: 0; background: linear-gradient(to right, #fff, transparent); }
           .marquee-wrapper::after  { right: 0; background: linear-gradient(to left, #fff, transparent); }
           
           .marquee-track { 
             display: flex; 
             gap: 24px; 
             animation: marquee 20s linear infinite; 
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
             height: 90px; 
             background: #fff; 
             border: 1px solid #f1f5f9;
             border-radius: 16px; 
             text-decoration: none; 
             padding: 12px;
             transition: all 0.3s ease;
             box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);
           }
           .logo-card:hover { transform: translateY(-5px); border-color: #3b82f6; box-shadow: 0 10px 15px -3px rgb(59 130 246 / 0.1); }
           .logo-card img { max-width: 100%; max-height: 48px; object-fit: contain; }
           .logo-card span { font-size: 11px; font-weight: 600; color: #64748b; text-align: center; margin-top: 8px; }
         `}
       </style>

       <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
         <h2 className="text-xl md:text-3xl font-black text-slate-800 tracking-tight">
           {lang === 'en' ? 'Brands That Trust Us' : 'شركاء النجاح والعلامات التي تثق بنا'}
         </h2>
       </div>
       
       <div className="marquee-wrapper">
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
                 src={`https://www.google.com/s2/favicons?sz=64&domain_url=https://${site.d}`} 
                 alt={site.l} 
                 loading="lazy"
               />
               <span>{site.l}</span>
             </a>
           ))}
         </div>
       </div>
    </section>
  );
};
