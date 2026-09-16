import React, { useEffect } from 'react';
import { Language } from '../types';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { updateSEO } from '../utils/seo';

interface NotFoundProps {
  lang: Language;
  onBack: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ lang, onBack }) => {
  const isRTL = lang === 'ar';

  useEffect(() => {
    updateSEO({
      title: lang === 'en' ? '404 - Page Not Found | Nashar Hub' : '404 - الصفحة غير موجودة | نشار هب',
      description: lang === 'en' ? 'Page not found.' : 'الصفحة غير موجودة.',
      url: 'https://nasharhub.com/404',
      image: 'https://nasharhub.com/og-image.jpg'
    });
  }, [lang]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1020] text-white px-4">
      <meta name="robots" content="noindex, nofollow" />
      <div className="text-center max-w-md p-8 border border-white/10 rounded-2xl bg-white/5">
        <span className="font-mono text-xs text-[#58a8f3] uppercase tracking-widest font-bold block mb-2">ERROR STATUS</span>
        <h1 className="text-8xl font-extrabold text-white mb-2 tracking-tighter">404</h1>
        <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
          {isRTL ? 'عذراً، الصفحة غير موجودة' : 'Resource Not Found'}
        </h2>
        <p className="text-white/60 text-sm mb-6 leading-relaxed font-normal">
          {isRTL 
            ? 'يبدو أن الصفحة التي تبحث عنها قد تم نقلها أو تعديل مسارها.' 
            : 'The requested route does not exist or has been relocated.'}
        </p>
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#1677d2] hover:bg-[#2c8de8] text-white rounded font-mono font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
        >
          {isRTL ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          {isRTL ? 'العودة للرئيسية' : 'Return to Overview'}
        </button>
      </div>
    </div>

  );
};
