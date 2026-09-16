import React, { useEffect } from 'react';
import { Language } from '../types';
import { updateSEO } from '../utils/seo';
import { blogPosts } from '../data/blog';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Calendar, User } from 'lucide-react';
import { Reveal } from './Reveal';
import { Breadcrumb } from './Breadcrumb';

interface BlogProps {
  lang: Language;
  onBack: () => void;
}

export const Blog: React.FC<BlogProps> = ({ lang, onBack }) => {
  const isRTL = lang === 'ar';

  useEffect(() => {
    window.scrollTo(0, 0);
    updateSEO({
      title: lang === 'en' ? 'Digital Marketing Blog | Nashar Hub' : 'مدونة التسويق الرقمي | نشار هب',
      description: lang === 'en' ? 'Read the latest insights, strategies, and tips on digital marketing, SEO, and web development in Saudi Arabia.' : 'اقرأ أحدث الرؤى والاستراتيجيات والنصائح حول التسويق الرقمي والسيو وتطوير المواقع في السعودية.',
      keywords: lang === 'en' ? 'Digital Marketing Blog, SEO Tips, Saudi Arabia Marketing, E-commerce UX' : 'مدونة التسويق الرقمي, نصائح سيو, التسويق في السعودية, تجربة المستخدم للمتاجر',
      url: 'https://nasharhub.com/blog',
      image: 'https://nasharhub.com/og-image.jpg'
    });
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#f4f1e9] text-[#0b1020] pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-8">
          <Breadcrumb 
            lang={lang} 
            items={[{ label: lang === 'en' ? 'Blog' : 'المدونة', href: '/blog' }]} 
          />
        </div>
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-[#007d87] font-mono text-xs uppercase tracking-widest font-bold mb-3">
               <span className="w-2 h-2 rounded-full bg-[#007d87]"></span>
               <span>{lang === 'en' ? 'STRATEGIC INSIGHTS & CASE REVIEWS' : 'أوراق بحثية وتحليلات نمو'}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#0b1020] mb-4 tracking-tight">
              {lang === 'en' ? 'Intelligence & Field Insights' : 'المدونة المعرفية'}
            </h1>
            <p className="text-base md:text-lg text-[#667078] max-w-2xl mx-auto font-normal leading-relaxed">
              {lang === 'en' 
                ? 'Insights and strategies for digital growth in the Saudi market. Field-tested playbooks for search, advertising, and digital infrastructure.' 
                : 'رؤى واستراتيجيات للنمو الرقمي في السوق السعودي. اكتشف أحدث مقالاتنا حول التسويق وإعلانات جوجل وتحسين محركات البحث.'}
            </p>
          </div>
        </Reveal>

        {blogPosts.length === 0 ? (
          <Reveal>
            <div className="text-center py-20 bg-white rounded-xl border border-[#d1ccc0] shadow-sm">
              <h2 className="text-2xl font-bold text-[#0b1020] mb-3">
                {lang === 'en' ? 'No Articles Yet' : 'لا توجد مقالات الآن'}
              </h2>
              <p className="text-[#667078] mb-6 max-w-md mx-auto text-sm">
                {lang === 'en' 
                  ? 'We are currently preparing exciting content and will publish new articles soon. Stay tuned!' 
                  : 'نحن نقوم حالياً بتجهيز محتوى متميز، وسيتم نشر مقالات جديدة قريباً.'}
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Reveal key={post.id} delay={index * 100}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#d1ccc0] flex flex-col h-full group hover:border-[#1677d2] transition-colors">
                  <Link to={`/blog/${post.slug}`} className="block relative h-64 overflow-hidden shrink-0 bg-[#0b1020]">
                    <img 
                      src={post.image} 
                      alt={`${post.title[lang]} - ${post.tags.join(', ')}`} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                </Link>
                <div className="p-7 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-xs font-mono text-[#667078] mb-3 gap-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#007d87]" />
                      {new Date(post.date).toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#007d87]" />
                      {post.author}
                    </span>
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="text-xl md:text-2xl font-bold text-[#0b1020] mb-3 hover:text-[#1677d2] transition-colors line-clamp-2">
                      {post.title[lang]}
                    </h2>
                  </Link>
                  <p className="text-[#667078] mb-6 line-clamp-3 flex-grow text-sm leading-relaxed">
                    {post.excerpt[lang]}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map(tag => (
                      <span key={tag} className="bg-[#f4f1e9] border border-[#d1ccc0] text-[#0b1020] text-xs font-mono px-2.5 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-wider text-[#1677d2] hover:text-[#0b1020] transition-colors mt-auto gap-1"
                  >
                    {lang === 'en' ? 'Read Full Analysis' : 'قراءة التحليل الكامل'}
                    {isRTL ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
          </div>
        )}
      </div>
    </div>

  );
};
