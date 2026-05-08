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
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <meta name="robots" content="noindex, nofollow" />
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          {isRTL ? 'عذراً، الصفحة غير موجودة' : 'Oops! Page not found'}
        </h2>
        <p className="text-slate-600 mb-8">
          {isRTL 
            ? 'يبدو أن الصفحة التي تبحث عنها قد تم نقلها أو حذفها أو أن الرابط غير صحيح.' 
            : 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.'}
        </p>
        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary-light transition-colors"
        >
          {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
          {isRTL ? 'العودة للصفحة الرئيسية' : 'Back to Home'}
        </button>
      </div>
    </div>
  );
};
