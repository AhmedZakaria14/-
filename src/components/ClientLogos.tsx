import React from 'react';
import { Language } from '../types';

interface ClientLogosProps {
  lang: Language;
}

export const CLIENTS = [
  { name: 'Arkan Elite Events', nameAr: 'أركان | إليت لتنظيم الفعاليات', url: 'https://arkaneliteevents.com/' },
  { name: 'Infinity', nameAr: 'انفينيتي', url: 'https://infinityeg.shop/' },
  { name: 'VIP Events', nameAr: 'VIP Events', url: 'https://vipeventsriyadh.com/' },
  { name: 'Luxury Contractor', nameAr: 'مقاول الفخامة', url: 'https://finishingsriyadh.com/' },
  { name: 'Dahanat Riyadh', nameAr: 'ديكورات ودهانات الرياض', url: 'https://dahanat-riyadh.com/' },
  { name: 'Dehanat Maka', nameAr: 'معلم دهانات مكة', url: 'https://dehanatmaka.com/' },
  { name: 'Arji Contracting', nameAr: 'مؤسسة حسين عارجي', url: 'https://arjicontracting.com/' },
  { name: 'Furniture Fix UAE', nameAr: 'Furniture Fix UAE', url: 'https://furniturefixuae.com/' },
  { name: 'Moket Floor', nameAr: 'موكيت ارضيات', url: 'https://moketfloor.com/' },
  { name: 'Shbook Al Mamlaka', nameAr: 'الشبوك والمظلات', url: 'https://shbookalmamlaka.com/' },
  { name: 'Safa Steels', nameAr: 'الصفا للحديد', url: 'https://safa-steels.com/' },
  { name: 'Napoli Ovens', nameAr: 'أفران نابولي', url: 'https://napoliovensksa.com/' },
];

export const ClientLogos: React.FC<ClientLogosProps> = ({ lang }) => {
  return (
    <section className="py-24 bg-white border-b border-slate-100 w-full" aria-label="Our Clients">
       <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
         <h2 className="text-xl md:text-2xl font-black text-slate-800 tracking-wide">
           {lang === 'en' ? 'Our Clients' : 'عملائنا'}
         </h2>
         <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
       </div>
       
       <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5">
             {CLIENTS.map((client, index) => (
               <a 
                 key={index} 
                 href={client.url} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="px-6 py-3 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-semibold hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 transition-all duration-300 text-sm md:text-base text-center shadow-sm hover:shadow-md"
               >
                 {lang === 'en' ? client.name : (client.nameAr || client.name)}
               </a>
             ))}
          </div>
       </div>
    </section>
  );
};
