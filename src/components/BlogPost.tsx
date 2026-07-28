import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Language } from '../types';
import { updateSEO } from '../utils/seo';
import { blogPosts } from '../data/blog';
import { ArrowRight, ArrowLeft, Calendar, User, Tag, ExternalLink, Sparkles, MessageCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface BlogPostProps {
  lang: Language;
  onBack: () => void;
}

const extractRawText = (node: any): string => {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractRawText).join('');
  if (node.props && node.props.children) return extractRawText(node.props.children);
  if (node.props && node.props.nodeValue) return node.props.nodeValue;
  if (node.value) return node.value;
  return '';
};

const normalizeArabic = (text: string) => {
  if (!text) return '';
  return text
    .trim()
    .toLowerCase()
    .replace(/[\u064B-\u0652]/g, '') // Remove tashkeel (tanween, fatha, damma, kasra, sukun, shadda)
    .replace(/[أإآ]/g, 'ا') // Normalize alef variants
    .replace(/ى/g, 'ي') // Normalize alef maqsura to ya
    .replace(/ة/g, 'ه') // Normalize taa marbouta
    .replace(/[*_~`#]/g, '')
    .replace(/[؟?!.,;:!'"()\[\]\/]/g, '')
    .replace(/\s+/g, '-');
};

const slugifyHeading = (text: string) => {
  return normalizeArabic(text);
};

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

    // Add JSON-LD Structured Data for SEO
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'article-schema';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title[lang],
      "image": [post.image],
      "datePublished": post.date,
      "dateModified": post.date,
      "author": [{
        "@type": "Organization",
        "name": post.author,
        "url": "https://nasharhub.com"
      }],
      "publisher": {
        "@type": "Organization",
        "name": "Nashar Hub",
        "logo": {
          "@type": "ImageObject",
          "url": "https://nasharhub.com/logo.png"
        }
      },
      "description": post.excerpt[lang]
    });

    const existingSchema = document.getElementById('article-schema');
    if (existingSchema) {
      existingSchema.remove();
    }
    document.head.appendChild(schemaScript);

    return () => {
      const scriptToRemove = document.getElementById('article-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [lang, post, navigate]);

  if (!post) return null;

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Navigation back button */}
        <button 
          onClick={() => navigate('/blog')}
          className="flex items-center text-slate-600 hover:text-primary transition-colors mb-8 group font-medium"
        >
          {isRTL ? (
            <>
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              العودة لقائمة مدونة نشار هب
            </>
          ) : (
            <>
              <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              Back to Nashar Hub Blog
            </>
          )}
        </button>

        <article className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
          {/* Mobile Cover Header (< md) */}
          <div className="md:hidden p-5 sm:p-6 space-y-4">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-semibold">
                  {tag}
                </span>
              ))}
            </div>

            {/* Article Title */}
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug tracking-tight">
              {post.title[lang]}
            </h1>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center text-slate-500 text-xs sm:text-sm gap-4 pb-1">
              <span className="flex items-center">
                <Calendar className="w-3.5 h-3.5 ml-1.5 text-primary" />
                {new Date(post.date).toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="flex items-center">
                <User className="w-3.5 h-3.5 ml-1.5 text-primary" />
                {post.author}
              </span>
            </div>

            {/* Uncropped Featured Image */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-sm bg-slate-100 mt-3">
              <img 
                src={post.image} 
                alt={`${post.title[lang]} - ${post.tags.join(', ')}`} 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Desktop Cover Header (>= md) */}
          <div className="hidden md:block relative h-[480px] w-full">
            <img 
              src={post.image} 
              alt={`${post.title[lang]} - ${post.tags.join(', ')}`} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-white">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map(tag => (
                  <span key={tag} className="bg-primary/90 backdrop-blur-md text-white text-xs md:text-sm px-3.5 py-1 rounded-full font-medium shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
                {post.title[lang]}
              </h1>
              <div className="flex items-center text-white/90 text-sm md:text-base gap-6">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 ml-2" />
                  {new Date(post.date).toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span className="flex items-center">
                  <User className="w-4 h-4 ml-2" />
                  {post.author}
                </span>
              </div>
            </div>
          </div>

          {/* Excerpt Summary Box */}
          <div className="mx-6 md:mx-12 my-8 p-6 bg-slate-50 rounded-2xl border-r-4 border-primary shadow-xs">
            <p className="text-base md:text-lg text-slate-700 leading-relaxed font-medium">
              {post.excerpt[lang]}
            </p>
          </div>

          {/* Markdown Main Body */}
          <div className="p-6 md:p-12 lg:p-16 text-slate-800 leading-relaxed space-y-6">
            <div className="markdown-body text-slate-800 leading-loose space-y-6" dir={isRTL ? 'rtl' : 'ltr'}>
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-10 mb-6 pb-3 border-b border-slate-200">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => {
                    const raw = extractRawText(children);
                    const id = slugifyHeading(raw);
                    const norm = normalizeArabic(raw);
                    return (
                      <h2 id={id} data-heading-raw={raw} data-heading-norm={norm} className="text-2xl md:text-3xl font-bold text-slate-900 mt-10 mb-5 pb-2 border-b border-slate-100 scroll-mt-28 flex items-center gap-2">
                        <span className="w-2 h-7 bg-primary rounded-full inline-block"></span>
                        {children}
                      </h2>
                    );
                  },
                  h3: ({ children }) => {
                    const raw = extractRawText(children);
                    const id = slugifyHeading(raw);
                    const norm = normalizeArabic(raw);
                    return (
                      <h3 id={id} data-heading-raw={raw} data-heading-norm={norm} className="text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-4 scroll-mt-28">
                        {children}
                      </h3>
                    );
                  },
                  h4: ({ children }) => {
                    const raw = extractRawText(children);
                    const id = slugifyHeading(raw);
                    const norm = normalizeArabic(raw);
                    return (
                      <h4 id={id} data-heading-raw={raw} data-heading-norm={norm} className="text-lg md:text-xl font-bold text-slate-800 mt-6 mb-3 scroll-mt-28">
                        {children}
                      </h4>
                    );
                  },
                  p: ({ children }) => (
                    <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-4">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 text-base md:text-lg bg-slate-50/70 p-5 rounded-2xl border border-slate-100">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside space-y-2 mb-6 text-slate-700 text-base md:text-lg bg-slate-50/70 p-5 rounded-2xl border border-slate-100">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="leading-relaxed">
                      {children}
                    </li>
                  ),
                  a: ({ href, children, ...props }) => {
                    const rawHref = href?.trim() || '';
                    const hashIndex = rawHref.indexOf('#');
                    const isHashLink = hashIndex !== -1 && (
                      rawHref.startsWith('#') ||
                      rawHref.includes(post.slug + '#') ||
                      rawHref.includes('nasharhub.com/blog/' + post.slug + '#')
                    );
                    
                    if (isHashLink) {
                      return (
                        <a
                          {...props}
                          href={rawHref}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();

                            const hashPart = rawHref.substring(hashIndex + 1);
                            if (!hashPart) return;

                            let decodedHash = hashPart;
                            try {
                              decodedHash = decodeURIComponent(hashPart);
                            } catch (err) {}

                            const targetNorm = normalizeArabic(decodedHash);
                            const targetSlug = slugifyHeading(decodedHash);

                            // Strategy 1: Direct ID match
                            let el = document.getElementById(hashPart) || 
                                     document.getElementById(decodedHash) || 
                                     document.getElementById(targetSlug) ||
                                     document.getElementById(targetNorm);

                            // Strategy 2: Search by data-heading-norm attribute
                            if (!el && targetNorm) {
                              const headings = document.querySelectorAll('[data-heading-norm]');
                              headings.forEach((heading) => {
                                const norm = heading.getAttribute('data-heading-norm');
                                if (norm && (norm === targetNorm || norm.includes(targetNorm) || targetNorm.includes(norm))) {
                                  el = heading as HTMLElement;
                                }
                              });
                            }

                            // Strategy 3: Text content match on headings
                            if (!el && targetNorm) {
                              const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
                              for (let i = 0; i < allHeadings.length; i++) {
                                const h = allHeadings[i] as HTMLElement;
                                const textNorm = normalizeArabic(h.textContent || '');
                                if (textNorm && (textNorm === targetNorm || textNorm.includes(targetNorm) || targetNorm.includes(textNorm))) {
                                  el = h;
                                  break;
                                }
                              }
                            }

                            if (el) {
                              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                          }}
                          className="text-primary hover:text-secondary font-medium transition-colors cursor-pointer inline-flex items-center gap-1"
                        >
                          {children}
                        </a>
                      );
                    }
                    
                    return (
                      <a
                        {...props}
                        href={rawHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-secondary font-semibold underline decoration-primary/40 hover:decoration-secondary transition-colors inline-flex items-center gap-1"
                      >
                        {children}
                        <ExternalLink className="w-3.5 h-3.5 inline-block opacity-70" />
                      </a>
                    );
                  },
                  blockquote: ({ children }) => (
                    <blockquote className="bg-primary/5 border-r-4 border-primary p-6 my-6 rounded-l-xl text-slate-800 italic">
                      {children}
                    </blockquote>
                  )
                }}
              >
                {post.content[lang]}
              </ReactMarkdown>
            </div>

            {/* Call To Action Footer Banner */}
            <div className="mt-16 bg-gradient-to-r from-primary to-slate-900 text-white rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-secondary text-xs md:text-sm px-4 py-1.5 rounded-full font-semibold mb-4">
                  <Sparkles className="w-4 h-4" />
                  {isRTL ? 'خدمات إعلانات وجوجل من نشار هب' : 'Nashar Hub Google Ads Services'}
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold mb-3 leading-snug">
                  {isRTL ? 'جاهز لتحقيق أقصى عائد إعلاني لنشاطك التجاري؟' : 'Ready to maximize your return on ad spend?'}
                </h3>
                <p className="text-slate-200 text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
                  {isRTL 
                    ? 'يتولى فريق نشار هب المتخصص التخطيط، والإعداد، والمتابعة اليومية لحملاتك الإعلانية عبر Google Ads لضمان نمو مبيعاتك وأعلى معدل تحويل.' 
                    : 'Our dedicated team plans, configures, and manages your Google Ads campaigns to drive sustainable business growth.'}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://nasharhub.com/#contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary text-slate-950 font-bold px-7 py-3.5 rounded-xl hover:bg-secondary/90 transition-all shadow-md inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {isRTL ? 'تواصل مع خبير الإعلانات' : 'Contact Ads Specialist'}
                  </a>
                  <a
                    href="https://nasharhub.com/paid-ads-services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/20 transition-all inline-flex items-center gap-2"
                  >
                    {isRTL ? 'تصفح خدمات الإعلانات' : 'View Ad Services'}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </article>
      </div>
    </div>
  );
};
