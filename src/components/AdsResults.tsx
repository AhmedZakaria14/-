import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { Target, TrendingUp, ChevronLeft, ChevronRight, BarChart3 } from 'lucide-react';
import { Reveal } from './Reveal';

interface AdsResultsProps {
  lang: Language;
}

const RESULTS_IMAGES = [
  'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781362324/296089.jpg_elan9q.jpg',
  'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781362353/%D9%84%D9%82%D8%B7%D8%A9_%D8%B4%D8%A7%D8%B4%D8%A9_2026-06-13_170857_bhlk56.png',
  'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781362325/296092.jpg_gfmdzm.jpg',
  'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781362341/296093.jpg_dwsxpp.jpg',
  'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781362325/296090.jpg_xpavtl.jpg',
];

export const AdsResults: React.FC<AdsResultsProps> = ({ lang }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + RESULTS_IMAGES.length) % RESULTS_IMAGES.length);
  };

  React.useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-slate-50 overflow-hidden relative" id="results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <Reveal>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-600">
                <Target size={16} className="animate-pulse" />
                <span className="text-xs font-black uppercase tracking-widest">
                  {lang === 'en' ? 'Performance Proof' : 'نتائج حقيقية'}
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                {lang === 'en' ? (
                  <>Real Results from <span className="text-blue-600">Google Ads</span></>
                ) : (
                  <>نتائج حقيقية لعملائنا في <span className="text-blue-600">إعلانات جوجل</span></>
                )}
              </h2>
              <p className="text-lg text-slate-600 font-medium max-w-2xl leading-relaxed">
                {lang === 'en' 
                  ? 'Numbers don\'t lie. Explore the performance of some of our recent high-converting campaigns across Saudi Arabia.' 
                  : 'الأرقام لا تكذب. اطلع على أداء بعض حملاتنا الإعلانية الأخيرة التي حققت أعلى معدلات التحويل في السوق السعودي.'}
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="hidden md:flex gap-3">
              <button 
                onClick={() => paginate(-1)}
                className="p-4 rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => paginate(1)}
                className="p-4 rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </Reveal>
        </div>

        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full max-w-6xl mx-auto group">
          <div className="absolute inset-0 bg-blue-200/20 blur-3xl rounded-[3rem] -z-10 group-hover:bg-blue-300/30 transition-colors duration-700"></div>
          
          <div className="h-full w-full relative overflow-hidden rounded-[2.5rem] bg-white border-2 border-slate-100 shadow-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={currentIndex}
                src={RESULTS_IMAGES[currentIndex]}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 w-full h-full object-contain p-4 md:p-8"
              />
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
            {RESULTS_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        <Reveal delay={400}>
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
            {[
              { 
                label: lang === 'en' ? 'Avg. ROI' : 'متوسط العائد', 
                value: '450%+', 
                icon: TrendingUp,
                color: 'text-green-600'
              },
              { 
                label: lang === 'en' ? 'Conversion Rate' : 'معدل التحويل', 
                value: '+12%', 
                icon: Target,
                color: 'text-blue-600'
              },
              { 
                label: lang === 'en' ? 'Managed Ad Spend' : 'مبالغ مدارة', 
                value: 'SAR 5M+', 
                icon: BarChart3,
                color: 'text-purple-600'
              },
              { 
                label: lang === 'en' ? 'Success Rate' : 'نسبة النجاح', 
                value: '98%', 
                icon: Target,
                color: 'text-amber-600'
              }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <stat.icon className={`${stat.color} mb-3`} size={24} />
                <span className="text-2xl font-black text-slate-900 mb-1">{stat.value}</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
};
