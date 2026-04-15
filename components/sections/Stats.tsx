'use client';

import { motion } from 'motion/react';

const STATS = [
  { value: '15+', label: 'سنة خبرة' },
  { value: '+2000', label: 'مشروع منجز' },
  { value: '98%', label: 'رضا العملاء' },
  { value: '24/7', label: 'دعم فني' },
];

export default function Stats() {
  return (
    <section className="bg-primary text-white py-16 relative z-20 -mt-10 mx-4 md:mx-auto md:max-w-6xl rounded-3xl shadow-2xl overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-x-reverse divide-white/20">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center px-4"
            >
              <div className="font-serif text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-sm md:text-base font-medium text-white/90">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
