"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ImageWithFallback from '@/components/ui/ImageWithFallback';
import Link from 'next/link';
import { X, ChevronRight, ChevronLeft, MapPin } from 'lucide-react';

const CATEGORIES = ["الكل", "مطابخ", "غرف نوم", "أبواب", "ديكورات", "أثاث مكتبي"];

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  location: string;
  year: string;
  description: string;
}

export default function PortfolioClient({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedProjectIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProjectIndex]);

  const filteredProjects = activeCategory === 'الكل' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedProjectIndex(index);
  };

  const closeLightbox = () => {
    setSelectedProjectIndex(null);
  };

  const nextProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProjectIndex !== null) {
      setSelectedProjectIndex((selectedProjectIndex + 1) % filteredProjects.length);
    }
  };

  const prevProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProjectIndex !== null) {
      setSelectedProjectIndex((selectedProjectIndex - 1 + filteredProjects.length) % filteredProjects.length);
    }
  };

  return (
    <div className="py-12">
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeCategory === category
                ? 'bg-primary text-white shadow-md'
                : 'bg-white text-text-muted hover:bg-accent-light hover:text-primary border border-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3] bg-gray-100"
              onClick={() => openLightbox(index)}
            >
              {project.image.includes('.mp4') ? (
                <video
                  src={project.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <ImageWithFallback
                  src={project.image}
                  alt={`${project.title} - نجار بالرياض لتفصيل غرف النوم والأبواب`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-accent text-sm font-bold mb-2">{project.category}</span>
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <div className="flex items-center text-gray-300 text-sm mb-4">
                  <MapPin className="w-4 h-4 ml-1" />
                  <span>{project.location}</span>
                </div>
                <span className="inline-block bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold text-center">
                  عرض التفاصيل
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProjectIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-accent transition-colors z-10 bg-black/50 p-2 rounded-full"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={prevProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors z-10 bg-black/50 p-3 rounded-full"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <button
              onClick={nextProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors z-10 bg-black/50 p-3 rounded-full"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <div 
              className="relative w-full max-w-5xl aspect-[16/9] md:aspect-auto md:h-[80vh] flex flex-col md:flex-row bg-bg-dark rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full md:w-2/3 h-64 md:h-full">
                {filteredProjects[selectedProjectIndex].image.includes('.mp4') ? (
                  <video
                    src={filteredProjects[selectedProjectIndex].image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    preload="auto"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <ImageWithFallback
                    src={filteredProjects[selectedProjectIndex].image}
                    alt={`${filteredProjects[selectedProjectIndex].title} - تفاصيل العمل - نجار بالرياض`}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                )}
              </div>
              <div className="w-full md:w-1/3 p-6 md:p-8 flex flex-col justify-center text-white">
                <span className="text-accent font-bold mb-2">{filteredProjects[selectedProjectIndex].category}</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{filteredProjects[selectedProjectIndex].title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {filteredProjects[selectedProjectIndex].description}
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-400">
                    <MapPin className="w-5 h-5 ml-2 text-primary" />
                    <span>{filteredProjects[selectedProjectIndex].location}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <span className="w-5 h-5 ml-2 text-primary font-bold flex items-center justify-center">📅</span>
                    <span>سنة التنفيذ: {filteredProjects[selectedProjectIndex].year}</span>
                  </div>
                </div>
                <Link href="/contact" className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors text-center">
                  اطلب مشروعاً مشابهاً
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
