import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { Language } from '../types';
import { Analytics } from '../services/analytics';

interface MobileStickyBarProps {
  lang: Language;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ lang }) => {
  const CONTACT_NUMBER = "+20 10 10742430";
  const whatsappMsg = encodeURIComponent("مرحباً، مهتم بخدماتكم.");

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 p-3 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="flex gap-3">
        <a 
          href={`tel:${CONTACT_NUMBER}`}
          onClick={() => Analytics.trackLead('phone', 'mobile_sticky_bar')}
          className="flex-1 bg-slate-100 text-slate-900 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors"
        >
          <Phone size={20} />
          <span>{lang === 'en' ? 'Call Now' : 'اتصل الآن'}</span>
        </a>
        <a 
          href={`https://wa.me/${CONTACT_NUMBER.replace(/[\s+]/g, '')}?text=${whatsappMsg}`}
          onClick={() => Analytics.trackLead('whatsapp', 'mobile_sticky_bar')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors shadow-lg shadow-green-500/20"
        >
          <MessageCircle size={20} />
          <span>{lang === 'en' ? 'WhatsApp' : 'واتساب'}</span>
        </a>
      </div>
    </div>
  );
};
