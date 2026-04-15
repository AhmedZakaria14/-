'use client';

import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const AREAS = [
  'حي الملك فهد',
  'حي النرجس',
  'حي العليا',
  'حي الروضة',
  'حي المونسية',
  'حي الياسمين',
  'حي الورود',
  'حي النزهة',
  'حي السليمانية',
  'حي الربوة',
  'شمال الرياض',
  'جنوب الرياض',
  'شرق الرياض',
  'غرب الرياض',
];

export default function AreasWeServe() {
  return (
    <section className="py-24 bg-bg-light border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block"
          >
            تغطية شاملة
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-6"
          >
            أحياء الرياض التي نخدمها
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-muted"
          >
            نصل إليك أينما كنت في مدينة الرياض لتقديم أفضل خدمات النجارة والديكور.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {AREAS.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3 hover:border-primary hover:shadow-md transition-all"
            >
              <MapPin className="w-5 h-5 text-accent shrink-0" />
              <span className="font-medium text-text-dark">{area}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
