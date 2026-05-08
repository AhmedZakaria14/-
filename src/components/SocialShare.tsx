import React, { useState } from 'react';
import { Twitter, Linkedin, Facebook, Link as LinkIcon, MessageCircle, Check } from 'lucide-react';
import { Language } from '../types';

interface SocialShareProps {
  url: string;
  title: string;
  lang: Language;
}

export const SocialShare: React.FC<SocialShareProps> = ({ url, title, lang }) => {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: 'bg-[#25D366] hover:bg-[#20bd5a]',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: 'bg-black hover:bg-slate-800',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: 'bg-[#0077b5] hover:bg-[#006396]',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'bg-[#1877f2] hover:bg-[#166fe5]',
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-wrap gap-3 items-center">
      <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">
        {lang === 'en' ? 'Share:' : 'مشاركة:'}
      </span>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-transform hover:-translate-y-1 ${link.color}`}
          aria-label={`Share on ${link.name}`}
        >
          <link.icon size={18} />
        </a>
      ))}
      <button
        onClick={copyToClipboard}
        className="relative w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 hover:bg-slate-200 transition-transform hover:-translate-y-1"
        aria-label="Copy Link"
      >
        {copied ? <Check size={18} className="text-emerald-500" /> : <LinkIcon size={18} />}
        {copied && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
            {lang === 'en' ? 'Copied!' : 'تم النسخ!'}
          </span>
        )}
      </button>
    </div>
  );
};
