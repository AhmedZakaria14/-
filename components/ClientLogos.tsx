
import React from 'react';
import { Language } from '@/types';

interface ClientLogosProps {
  lang: Language;
}

// Inline SVG Logos to avoid external dependencies (Hotlinking/CORS issues)

const ArkanLogo = () => (
  <svg viewBox="0 0 300 100" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="10" y="45" fontFamily="serif" fontWeight="bold" fontSize="32" fill="#D4AF37" letterSpacing="2">ARKAN</text>
    <rect x="145" y="10" width="2" height="50" fill="#333" />
    <text x="160" y="45" fontFamily="serif" fontWeight="bold" fontSize="32" fill="#D4AF37" letterSpacing="2">ELITE</text>
    <text x="150" y="85" fontFamily="Cairo, sans-serif" fontWeight="bold" fontSize="24" fill="#D4AF37" textAnchor="middle" letterSpacing="1">أركان | إليت</text>
  </svg>
);

const NapoliLogo = () => (
  <svg viewBox="0 0 100 100" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
     {/* Oven Dome */}
     <path d="M20 70 Q20 20 50 20 Q80 20 80 70" stroke="#ea580c" strokeWidth="4" fill="#fed7aa" />
     {/* Chimney */}
     <rect x="42" y="5" width="16" height="25" fill="#fdba74" stroke="#ea580c" strokeWidth="2" />
     {/* Base */}
     <rect x="15" y="70" width="70" height="10" fill="#c2410c" />
     {/* Fire */}
     <path d="M50 65 Q55 50 50 40 Q45 50 50 65" fill="#ef4444" />
     <path d="M45 65 Q45 55 48 50" fill="#f97316" />
     <path d="M55 65 Q55 55 52 50" fill="#f97316" />
     {/* Text */}
     <text x="50" y="95" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="#9a3412" textAnchor="middle">NAPOLI OVENS</text>
  </svg>
);

const InfinityLogo = () => (
  <svg viewBox="0 0 200 100" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Abstract Diamond Symbol representing the eye/infinity concept */}
    <path d="M100 15 L125 40 L100 65 L75 40 Z" stroke="#0f172a" strokeWidth="5" fill="none" />
    <path d="M100 15 L100 65" stroke="#f97316" strokeWidth="3" />
    <circle cx="100" cy="40" r="4" fill="#f97316" />
    
    {/* Stylized Text */}
    <text x="100" y="92" fontFamily="sans-serif" fontWeight="900" fontSize="38" fill="#0f172a" textAnchor="middle" letterSpacing="2">INFINITY</text>
  </svg>
);

const VipEventsLogo = () => (
  <svg viewBox="0 0 200 200" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer Circle */}
    <circle cx="100" cy="100" r="90" stroke="#D4AF37" strokeWidth="2.5" />
    
    {/* Top Leaves */}
    <g transform="translate(100, 45) scale(1.2)">
      <path d="M0 -15 Q5 -5 0 5 Q-5 -5 0 -15 Z" fill="#D4AF37" /> {/* Center Leaf */}
      <path d="M-8 -5 Q-5 0 -15 5 Q-15 -5 -8 -5 Z" fill="#D4AF37" transform="rotate(-30)" /> {/* Left Leaf */}
      <path d="M8 -5 Q5 0 15 5 Q15 -5 8 -5 Z" fill="#D4AF37" transform="rotate(30)" /> {/* Right Leaf */}
    </g>

    {/* Dome Structure */}
    <g transform="translate(0, 10)">
      {/* Base Line */}
      <line x1="55" y1="130" x2="145" y2="130" stroke="#D4AF37" strokeWidth="2.5" />
      
      {/* Side Steps */}
      <path d="M55 130 L55 120 L65 120 L65 112" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
      <path d="M145 130 L145 120 L135 120 L135 112" stroke="#D4AF37" strokeWidth="1.5" fill="none" />

      {/* Main Dome Arches */}
      <path d="M65 115 A 35 35 0 0 1 135 115" stroke="#D4AF37" strokeWidth="2" fill="none" />
      <path d="M75 130 A 25 25 0 0 1 125 130" stroke="#D4AF37" strokeWidth="2" fill="none" />
      
      {/* Grid Lines */}
      <path d="M100 80 L100 130" stroke="#D4AF37" strokeWidth="1" />
      <path d="M72 100 H128" stroke="#D4AF37" strokeWidth="1" />
    </g>

    {/* Text */}
    <text x="100" y="175" fontFamily="serif" fontSize="20" fontWeight="bold" fill="#D4AF37" textAnchor="middle" letterSpacing="1">VIP EVENTS</text>
  </svg>
);

const LuxuryContractorLogo = () => (
  <svg viewBox="0 0 250 100" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Modern House/Building Silhouette */}
    <path d="M30 65 L60 25 L90 65" stroke="#CA8A04" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M45 65 V80" stroke="#1e293b" strokeWidth="3" />
    <path d="M75 65 V80" stroke="#1e293b" strokeWidth="3" />
    <rect x="20" y="80" width="80" height="4" fill="#1e293b" />
    
    {/* Decorative Elements */}
    <circle cx="60" cy="50" r="8" stroke="#CA8A04" strokeWidth="2" />
    
    {/* Text */}
    <text x="120" y="50" fontFamily="Cairo, sans-serif" fontWeight="900" fontSize="26" fill="#1e293b">مقاول الفخامة</text>
    <text x="120" y="75" fontFamily="sans-serif" fontWeight="500" fontSize="13" fill="#CA8A04" letterSpacing="2">LUXURY CONTRACTOR</text>
  </svg>
);

const RiyadhContractingLogo = () => (
  <svg viewBox="0 0 260 100" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Icon: Paint Roller + Building Shape */}
    <rect x="25" y="30" width="40" height="40" rx="4" stroke="#0ea5e9" strokeWidth="3" fill="none" />
    <path d="M25 30 L45 15 L65 30" stroke="#0ea5e9" strokeWidth="3" fill="none" />
    
    {/* Roller mark */}
    <path d="M35 50 L55 50" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
    <path d="M45 50 V65" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
    
    {/* Paint Splash */}
    <circle cx="65" cy="65" r="4" fill="#0ea5e9" />
    
    {/* Text */}
    <text x="85" y="55" fontFamily="Cairo, sans-serif" fontWeight="900" fontSize="26" fill="#0f172a">مقاولات الرياض</text>
    <text x="85" y="80" fontFamily="sans-serif" fontWeight="bold" fontSize="11" fill="#0ea5e9" letterSpacing="1">RIYADH CONTRACTING</text>
  </svg>
);

const ArjiContractingLogo = () => (
  <svg viewBox="0 0 320 100" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Icon: Modern Structure M + H */}
    <path d="M30 70 L30 30 L50 50 L70 30 L70 70" stroke="#004d40" strokeWidth="6" strokeLinecap="square" fill="none" />
    <path d="M30 30 H70" stroke="#004d40" strokeWidth="2" strokeDasharray="4 2" />
    
    {/* Decorative underline */}
    <path d="M25 80 H75" stroke="#d4af37" strokeWidth="4" />
    
    {/* Text Group */}
    <g fill="#0f172a">
      <text x="90" y="45" fontFamily="Cairo, sans-serif" fontWeight="900" fontSize="22">مؤسسة حسين عارجي</text>
      <text x="90" y="75" fontFamily="sans-serif" fontWeight="700" fontSize="13" fill="#004d40" letterSpacing="0.5">ARJI CONTRACTING EST.</text>
    </g>
  </svg>
);

const SafaSteelLogo = () => (
  <svg viewBox="0 0 200 150" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Logo Mark Group centered */}
    <g transform="translate(60, 20) scale(0.6)">
        {/* The Black 'A' Shape - Sharp triangular form */}
        <path d="M0 100 L50 0 L100 100 H75 L62 75 H38 L25 100 H0 Z" fill="#231f20" />
        <path d="M50 25 L65 60 H35 L50 25 Z" fill="#ffffff" /> {/* Inner triangle negative space */}

        {/* The Red Ribbon 'S' Shape wrapping around */}
        <path d="M120 10 C 100 0, 80 20, 100 40 C 120 60, 120 80, 100 100 L 90 100" 
              stroke="#e31e24" strokeWidth="20" strokeLinecap="round" fill="none" />
    </g>
    
    {/* Text Group */}
    <text x="100" y="110" fontFamily="sans-serif" fontWeight="900" fontSize="20" fill="#231f20" textAnchor="middle">AL-SAFA</text>
    <text x="100" y="130" fontFamily="sans-serif" fontWeight="600" fontSize="12" fill="#bc2026" textAnchor="middle" letterSpacing="3">STEEL</text>
  </svg>
);

const ShbookLogo = () => (
  <svg viewBox="0 0 300 160" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Icons Group */}
    <g transform="translate(70, 10) scale(0.8)">
      {/* Tent / Canopy (Top Right) */}
      <path d="M70 10 C 100 -5, 130 10, 160 25 L 160 85 L 150 85 L 150 30 L 70 10 Z" fill="#1b4d3e" />
      <path d="M70 10 C 90 20, 110 25, 130 25" stroke="#fff" strokeWidth="2" fill="none" />

      {/* Hammer (Under Tent) */}
      <g transform="translate(100, 30) rotate(45)">
         <rect x="5" y="10" width="12" height="40" rx="2" fill="#1b4d3e" /> {/* Handle */}
         <path d="M-5 10 H 25 V 25 H -5 Z" fill="#1b4d3e" /> {/* Head */}
         <path d="M-5 10 Q -10 0 5 0 L 5 10 Z" fill="#1b4d3e" /> {/* Claw */}
      </g>

      {/* Fence (Left Side) */}
      <g transform="translate(0, 40)">
        <path d="M10 0 L 15 -10 L 20 0 V 50 H 10 V 0 Z" fill="#1b4d3e" /> {/* Picket 1 */}
        <path d="M35 0 L 40 -10 L 45 0 V 50 H 35 V 0 Z" fill="#1b4d3e" /> {/* Picket 2 */}
        <path d="M60 0 L 65 -10 L 70 0 V 50 H 60 V 0 Z" fill="#1b4d3e" /> {/* Picket 3 */}
        
        <rect x="0" y="10" width="80" height="8" rx="2" fill="#1b4d3e" /> {/* Rail 1 */}
        <rect x="0" y="35" width="80" height="8" rx="2" fill="#1b4d3e" /> {/* Rail 2 */}
      </g>
    </g>

    {/* Text */}
    <g transform="translate(150, 110)" textAnchor="middle">
      <text x="0" y="0" fontFamily="Cairo, sans-serif" fontWeight="900" fontSize="24" fill="#1b4d3e">الشبوك والمظلات</text>
      <text x="0" y="28" fontFamily="Cairo, sans-serif" fontWeight="900" fontSize="24" fill="#1b4d3e">والحدادة</text>
    </g>
  </svg>
);

const DehanatMakaLogo = () => (
  <svg viewBox="0 0 300 100" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Icon: Paint Roller + Splash */}
    <g transform="translate(20, 10)">
      {/* Roller Handle */}
      <path d="M40 50 L40 80" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
      <path d="M40 50 L20 40 L20 20 L70 20 L70 40 L50 50" stroke="#334155" strokeWidth="4" fill="none" />
      
      {/* Roller Cylinder */}
      <rect x="15" y="10" width="60" height="20" rx="4" fill="#f59e0b" />
      
      {/* Paint Stroke Background */}
      <path d="M80 30 Q 120 10, 160 30 T 240 30" stroke="#f59e0b" strokeWidth="20" strokeOpacity="0.2" strokeLinecap="round" />
      <path d="M90 45 Q 130 25, 170 45" stroke="#f59e0b" strokeWidth="10" strokeOpacity="0.4" strokeLinecap="round" />
    </g>

    {/* Text */}
    <g transform="translate(100, 0)">
       <text x="0" y="55" fontFamily="Cairo, sans-serif" fontWeight="900" fontSize="28" fill="#1e293b">معلم دهانات مكة</text>
       <text x="0" y="80" fontFamily="sans-serif" fontWeight="700" fontSize="14" fill="#d97706" letterSpacing="1">DEHANAT MAKA</text>
    </g>
  </svg>
);

const FurnitureFixLogo = () => (
  <svg viewBox="0 0 300 100" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Icon Group scaled to fit height */}
    <g transform="translate(10, 5) scale(0.9)">
       {/* House Roof (Orange) */}
       <path d="M50 10 L90 40" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" />
       <path d="M50 10 L10 40" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" />
       
       {/* House Walls/Floor (Orange) */}
       <path d="M20 40 V85 H80" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
       
       {/* Furniture (Dark Blue) */}
       <rect x="30" y="35" width="30" height="40" stroke="#0f172a" strokeWidth="3" fill="none" />
       <line x1="30" y1="45" x2="45" y2="45" stroke="#0f172a" strokeWidth="3" /> {/* Drawer line */}
       <line x1="45" y1="35" x2="45" y2="75" stroke="#0f172a" strokeWidth="3" /> {/* Vertical divider */}

       {/* Screwdriver (Dark Blue) */}
       <g transform="rotate(-45 70 60)">
         <path d="M68 55 L72 45 L77 47 L73 57" fill="#0f172a" /> {/* Handle */}
         <line x1="68" y1="55" x2="68" y2="75" stroke="#0f172a" strokeWidth="3" /> {/* Shaft */}
       </g>
    </g>
    
    {/* Text Group */}
     <g transform="translate(110, 0)">
       <text x="0" y="55" fontFamily="sans-serif" fontWeight="900" fontSize="22" fill="#0f172a">FURNITURE FIX</text>
       <text x="0" y="80" fontFamily="sans-serif" fontWeight="700" fontSize="14" fill="#f59e0b" letterSpacing="1">UAE SERVICES</text>
    </g>
  </svg>
);

const MoketFloorLogo = () => (
  <svg viewBox="0 0 200 160" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Icon Group */}
    <g transform="translate(50, 0) scale(0.5)">
       {/* Gold Spiral: #C19A6B */}
       <path d="M20 120 H 20 V 20 H 120 V 90" stroke="#C19A6B" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
       <path d="M50 90 H 50 V 50 H 90 V 70 H 70" stroke="#C19A6B" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
       
       {/* 3D Stack: Brown #966F4B, Dark #0F172A */}
       <g transform="translate(60, 60)">
          {/* Top Face */}
          <path d="M0 25 L 45 5 L 90 25 L 45 45 Z" fill="#966F4B" />
          
          {/* Right Side */}
          <path d="M45 45 L 90 25 V 40 L 45 60 Z" fill="#7A5636" /> {/* Top layer */}
          <path d="M45 60 L 90 40 V 50 L 45 70 Z" fill="#0F172A" /> {/* Dark layer */}
          <path d="M45 70 L 90 50 V 65 L 45 85 Z" fill="#7A5636" /> {/* Bottom layer */}
          
          {/* Left Side */}
          <path d="M0 25 L 45 45 V 60 L 0 40 Z" fill="#966F4B" />   {/* Top layer */}
          <path d="M0 40 L 45 60 V 70 L 0 50 Z" fill="#0F172A" />   {/* Dark layer */}
          <path d="M0 50 L 45 70 V 85 L 0 65 Z" fill="#966F4B" />   {/* Bottom layer */}
       </g>
    </g>

    {/* Text */}
    <g transform="translate(100, 120)" textAnchor="middle">
      <text x="0" y="0" fontFamily="Cairo, sans-serif" fontWeight="900" fontSize="24" fill="#0F172A">مفروشات</text>
      <text x="0" y="25" fontFamily="Cairo, sans-serif" fontWeight="900" fontSize="20" fill="#0F172A">موكيت ارضيات</text>
    </g>
  </svg>
);

const GenericLogo: React.FC<{ name: string; color: string; iconPath: string }> = ({ name, color, iconPath }) => (
  <div className="flex items-center gap-2 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
    <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center text-white`}>
       <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d={iconPath} />
       </svg>
    </div>
    <span className="font-bold text-lg text-slate-600">{name}</span>
  </div>
);

export const CLIENTS = [
  { 
    id: 'arkan',
    component: ArkanLogo,
    url: 'https://arkaneliteevents.com/' 
  },
  {
    id: 'infinity',
    component: InfinityLogo,
    url: 'https://infinityeg.shop/'
  },
  {
    id: 'vipevents',
    component: VipEventsLogo,
    url: 'https://vipeventsriyadh.com/'
  },
  {
    id: 'luxury',
    component: LuxuryContractorLogo,
    url: 'https://finishingsriyadh.com/'
  },
  {
    id: 'riyadh-contracting',
    component: RiyadhContractingLogo,
    url: 'https://dahanat-riyadh.com/'
  },
  {
    id: 'dehanat-maka',
    component: DehanatMakaLogo,
    url: 'https://dehanatmaka.com/'
  },
  {
    id: 'arji',
    component: ArjiContractingLogo,
    url: 'https://arjicontracting.com/'
  },
  {
    id: 'furniture-fix',
    component: FurnitureFixLogo,
    url: 'https://furniturefixuae.com/'
  },
  {
    id: 'moket-floor',
    component: MoketFloorLogo,
    url: 'https://moketfloor.com/'
  },
  {
    id: 'shbook',
    component: ShbookLogo,
    url: 'https://shbookalmamlaka.com/'
  },
  {
    id: 'safa',
    component: SafaSteelLogo,
    url: 'https://safa-steels.com/'
  },
  { 
    id: 'napoli',
    component: NapoliLogo,
    url: 'https://napoliovensksa.com/' 
  },
  // Generic Placeholders
  { name: 'FinanceX', color: 'bg-green-500', icon: 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' },
];

export const ClientLogos: React.FC<ClientLogosProps> = ({ lang }) => {
  return (
    <section className="py-24 bg-white border-b border-slate-100 w-full" aria-label="Trusted Clients">
       <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
         <p className="text-sm font-black text-slate-300 uppercase tracking-[0.2em]">
           {lang === 'en' ? 'Trusted by Market Leaders' : 'نحظى بثقة قادة السوق'}
         </p>
       </div>
       
       <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-12 md:gap-x-20">
             {CLIENTS.map((client, index) => {
               if ('component' in client && client.component) {
                 const LogoComponent = client.component;
                 return (
                   <a 
                     key={index} 
                     href={client.url} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="group relative h-20 w-auto min-w-[140px] px-4 flex items-center justify-center transition-all duration-300 hover:scale-110 filter grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
                   >
                     <LogoComponent />
                   </a>
                 );
               }
               // Handle generic logos
               const generic = client as { name: string; color: string; icon: string };
               return (
                 <div key={index} className="group cursor-default select-none">
                    <GenericLogo name={generic.name} color={generic.color} iconPath={generic.icon} />
                 </div>
               );
             })}
          </div>
       </div>
    </section>
  );
};
