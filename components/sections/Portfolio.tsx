'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import PortfolioCard from '../ui/PortfolioCard';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const CATEGORIES = ["الكل", "مطابخ", "غرف نوم", "أبواب", "ديكورات"];

const PROJECTS = [
  { id: 1, title: "مطبخ كلاسيكي فاخر", category: "مطابخ", image: "/whatsapp-9.jpeg" },
  { id: 2, title: "غرفة نوم ماستر", category: "غرف نوم", image: "/work-10.jpeg" },
  { id: 3, title: "باب رئيسي سنديان", category: "أبواب", image: "/whatsapp-11.jpeg" },
  { id: 4, title: "ديكور جداري للتلفزيون", category: "ديكورات", image: "/work-12.jpeg" },
  { id: 5, title: "جولة في أعمالنا", category: "ديكورات", image: "/whatsapp-vid-1.mp4" },
  { id: 6, title: "تصميم مطبخ حديث", category: "مطابخ", image: "/whatsapp-vid-2.mp4" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('الكل');

  const filteredProjects = activeCategory === 'الكل' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 bg-bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block"
            >
              معرض أعمالنا
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-6"
            >
              نماذج من إبداعاتنا في النجارة
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/portfolio" className="flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors">
              <span>شاهد كل الأعمال</span>
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-12"
        >
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
        </motion.div>

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
              >
                <PortfolioCard
                  title={project.title}
                  category={project.category}
                  image={project.image}
                  delay={index * 0.1}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
