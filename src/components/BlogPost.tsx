import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Language } from '../types';
import { updateSEO } from '../utils/seo';
import { blogPosts } from '../data/blog';
import { ArrowRight, ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface BlogPostProps {
  lang: Language;
  onBack: () => void;
}

export const BlogPost: React.FC<BlogPostProps> = ({ lang, onBack }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const isRTL = lang === 'ar';

  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    if (!post) {
      navigate('/404', { replace: true });
      return;
    }

    window.scrollTo(0, 0);
    updateSEO({
      title: `${post.title[lang]} | Nashar Hub`,
      description: post.excerpt[lang],
      keywords: post.tags.join(', '),
      url: `https://nasharhub.com/blog/${post.slug}`,
      image: post.image
    });
  }, [lang, post, navigate]);

  if (!post) return null;

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <button 
          onClick={() => navigate('/blog')}
          className="flex items-center text-slate-600 hover:text-primary transition-colors mb-8 group"
        >
          {isRTL ? (
            <>
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              العودة للمدونة - إعلانات جوجل
            </>
          ) : (
            <>
              <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </>
          )}
        </button>

        <article className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
          <div className="relative h-[400px] md:h-[500px] w-full">
            <img 
              src={post.image} 
              alt={post.title[lang]} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
              <div className="flex flex-wrap gap-3 mb-4">
                {post.tags.map(tag => (
                  <span key={tag} className="bg-primary/90 backdrop-blur-sm text-white text-sm px-4 py-1.5 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                {post.title[lang]}
              </h1>
              <div className="flex items-center text-white/90 text-sm md:text-base gap-6">
                <span className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {new Date(post.date).toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  {post.author}
                </span>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 lg:p-16 prose prose-lg md:prose-xl max-w-none prose-slate prose-headings:text-slate-900 prose-a:text-primary hover:prose-a:text-primary/80">
            <div className="markdown-body" dir={isRTL ? 'rtl' : 'ltr'}>
              <ReactMarkdown>{post.content[lang]}</ReactMarkdown>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
