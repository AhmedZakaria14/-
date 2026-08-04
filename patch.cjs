const fs = require('fs');
let code = fs.readFileSync('src/components/SnapchatWebDev.tsx', 'utf8');

code = code.replace("import React, { useEffect } from 'react';", "import React, { useEffect, useState } from 'react';");

const imagesConst = `
  const slideImages = [
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1785845984/WhatsApp_Image_2026-08-04_at_3.17.16_PM_1_dny4la.jpg",
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1785845984/WhatsApp_Image_2026-08-04_at_3.17.16_PM_zt43w0.jpg",
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1785845985/WhatsApp_Image_2026-08-04_at_3.17.32_PM_1_ssoh8m.jpg",
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1785845985/WhatsApp_Image_2026-08-04_at_3.17.33_PM_1_frdzkk.jpg",
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1785845986/WhatsApp_Image_2026-08-04_at_3.17.32_PM_pjrxip.jpg",
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1785845988/WhatsApp_Image_2026-08-04_at_3.17.32_PM_2_xap0d1.jpg",
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1785845983/WhatsApp_Image_2026-08-04_at_3.17.33_PM_awtws7.jpg",
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1785845983/WhatsApp_Image_2026-08-04_at_3.17.16_PM_2_g4g8fr.jpg",
    "https://res.cloudinary.com/ddrsmtsvj/image/upload/v1785845983/WhatsApp_Image_2026-08-04_at_3.17.32_PM_3_fsqymm.jpg"
  ];
`;

const stateHooks = `
  const isRTL = lang === 'ar';
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const fontClass = isRTL ? 'font-arabic' : 'font-sans';
  const WHATSAPP_LINK = "https://wa.me/966505244583";
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
`;

code = code.replace(
  "  const isRTL = lang === 'ar';\n  const { scrollYProgress } = useScroll();\n  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);\n  const fontClass = isRTL ? 'font-arabic' : 'font-sans';\n  const WHATSAPP_LINK = \"https://wa.me/966505244583\";",
  imagesConst + stateHooks
);

const oldMockup = `<div className="absolute inset-0 bg-slate-50 flex flex-col p-5 pt-12">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-100 rounded-b-2xl" />
                
                <div className="flex justify-between items-center mb-8">
                  <div className="w-24 h-6 bg-slate-200 rounded-full" />
                  <div className="w-8 h-8 bg-slate-200 rounded-full" />
                </div>
                
                <div className="w-3/4 h-8 bg-slate-300 rounded-lg mb-4" />
                <div className="w-full h-4 bg-slate-200 rounded-lg mb-2" />
                <div className="w-5/6 h-4 bg-slate-200 rounded-lg mb-8" />
                
                <div className="w-full aspect-square bg-slate-100 rounded-2xl mb-8 relative overflow-hidden border border-slate-200">
                  <motion.div 
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent w-1/2 opacity-60"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                    <Palette className="w-12 h-12" />
                  </div>
                </div>
                
                <div className="mt-auto w-full h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white text-sm font-bold">
                  {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                </div>
              </div>`;

const newMockup = `<div className="absolute inset-0 bg-slate-900 flex flex-col">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-100 rounded-b-2xl z-20" />
                
                <div className="relative w-full h-full bg-slate-900">
                  {slideImages.map((src, index) => (
                    <img 
                      key={src}
                      src={src} 
                      className={\`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 \${currentSlide === index ? 'opacity-100' : 'opacity-0'}\`} 
                      alt="Website Mockup" 
                    />
                  ))}
                </div>
                
                {/* Gradient overlay at bottom for smooth look if needed, or just let image fill */}
              </div>`;

code = code.replace(oldMockup, newMockup);

fs.writeFileSync('src/components/SnapchatWebDev.tsx', code);
console.log('patched');
