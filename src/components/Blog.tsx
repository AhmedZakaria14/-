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
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12">
          <Breadcrumb 
            lang={lang} 
            items={[{ label: lang === 'en' ? 'Blog' : 'المدونة', href: '/blog' }]} 
          />
        </div>
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {lang === 'en' ? 'Our Blog' : 'المدونة'}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {lang === 'en' 
                ? 'Insights and strategies for digital growth in the Saudi market.' 
                : 'رؤى واستراتيجيات للنمو الرقمي في السوق السعودي. اكتشف أحدث مقالاتنا حول التسويق وإعلانات جوجل.'}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Reveal key={post.id} delay={index * 100}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
                <Link to={`/blog/${post.slug}`} className="block relative h-64 overflow-hidden shrink-0">
                  <img 
                    src={post.image} 
                    alt={post.title[lang]} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-slate-500 mb-4 gap-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.date).toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </span>
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 hover:text-primary transition-colors line-clamp-2">
                      {post.title[lang]}
                    </h2>
                  </Link>
                  <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">
                    {post.excerpt[lang]}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map(tag => (
                      <span key={tag} className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors mt-auto"
                  >
                    {lang === 'en' ? 'Read More' : 'اقرأ المزيد'}
                    {isRTL ? <ArrowLeft className="w-4 h-4 mr-2" /> : <ArrowRight className="w-4 h-4 ml-2" />}
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};
