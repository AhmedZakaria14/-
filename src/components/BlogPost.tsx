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
    <div className="min-h-screen bg-[#f4f1e9] text-[#0b1020] pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Navigation back button */}
        <button 
          onClick={() => navigate('/blog')}
          className="flex items-center text-[#667078] hover:text-[#0b1020] transition-colors mb-6 font-mono text-xs uppercase tracking-wider font-bold cursor-pointer"
        >
          {isRTL ? (
            <>
              <ArrowRight className="w-4 h-4 ml-2" />
              العودة لقائمة مدونة نشار هب
            </>
          ) : (
            <>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Nashar Hub Blog
            </>
          )}
        </button>

        <article className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#d1ccc0]">
          {/* Unified Article Header & Cover Image */}
          <header className="p-6 sm:p-8 md:p-10 pb-6 border-b border-[#d1ccc0]">
            {/* Category Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map(tag => (
                <span key={tag} className="bg-[#f4f1e9] text-[#0b1020] text-xs font-mono px-3 py-1 rounded border border-[#d1ccc0]">
                  {tag}
                </span>
              ))}
            </div>

            {/* Article Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0b1020] leading-snug md:leading-tight tracking-tight mb-4">
              {post.title[lang]}
            </h1>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center text-[#667078] font-mono text-xs gap-6 pb-2">
              <span className="flex items-center">
                <Calendar className="w-3.5 h-3.5 ml-1.5 text-[#007d87] shrink-0" />
                {new Date(post.date).toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="flex items-center">
                <User className="w-3.5 h-3.5 ml-1.5 text-[#007d87] shrink-0" />
                {post.author}
              </span>
            </div>

            {/* Clean Featured Cover Image */}
            <div className="relative w-full aspect-[16/9] max-h-[460px] rounded-lg overflow-hidden border border-[#d1ccc0] bg-[#0b1020] mt-6">
              <img 
                src={post.image} 
                alt={`${post.title[lang]} - ${post.tags.join(', ')}`} 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </header>

          {/* Excerpt Summary Box */}
          <div className={`mx-6 md:mx-10 my-6 p-5 bg-[#f8f6f0] rounded-lg ${isRTL ? 'border-r-4' : 'border-l-4'} border-[#1677d2] text-[#0b1020]`}>
            <p className="text-sm md:text-base leading-relaxed font-normal">
              {post.excerpt[lang]}
            </p>
          </div>

          {/* Markdown Main Body */}
          <div className="p-6 md:p-10 text-[#0b1020] leading-relaxed space-y-6">
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
                  ),
                  img: ({ src, alt }) => (
                    <span className="block my-8 my-auto">
                      <img 
                        src={src} 
                        alt={alt || ''} 
                        className="w-full h-auto max-h-[500px] object-cover object-center rounded-2xl shadow-md border border-slate-100" 
                        loading="lazy"
                      />
                      {alt && <span className="block text-center text-xs md:text-sm text-slate-500 mt-2 font-medium">{alt}</span>}
                    </span>
                  )
                }}
              >
                {post.content[lang]}
              </ReactMarkdown>
            </div>

            {/* Call To Action Footer Banner */}
            <div className="mt-14 bg-[#0b1020] text-white rounded-xl p-6 md:p-8 border border-white/10 relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 text-[#58a8f3] font-mono text-xs uppercase tracking-widest font-bold mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  {isRTL ? 'خدمات إعلانات وجوجل من نشار هب' : 'Nashar Hub Growth Infrastructure'}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
                  {isRTL ? 'جاهز لتحقيق أقصى عائد إعلاني لنشاطك التجاري؟' : 'Ready to scale commercial revenue?'}
                </h3>
                <p className="text-white/70 text-sm mb-6 max-w-xl leading-relaxed">
                  {isRTL 
                    ? 'يتولى فريق نشار هب المتخصص التخطيط، والإعداد، والمتابعة اليومية لحملاتك الإعلانية عبر Google Ads لضمان نمو مبيعاتك وأعلى معدل تحويل.' 
                    : 'Our dedicated team plans, configures, and manages your Google Ads campaigns to drive sustainable business growth.'}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://nasharhub.com/#contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1677d2] hover:bg-[#2c8de8] text-white font-mono font-bold text-xs uppercase tracking-wider px-5 py-3 rounded transition-colors inline-flex items-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {isRTL ? 'تواصل مع خبير الإعلانات' : 'Consult Ads Specialist'}
                  </a>
                  <a
                    href="https://nasharhub.com/paid-ads-services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/20 text-white hover:bg-white/10 font-mono text-xs uppercase tracking-wider px-5 py-3 rounded transition-colors inline-flex items-center gap-2 cursor-pointer"
                  >
                    {isRTL ? 'تصفح خدمات الإعلانات' : 'View Ad Services'}
                    <ExternalLink className="w-3.5 h-3.5" />
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
