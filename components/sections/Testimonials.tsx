'use client';

import { motion } from 'motion/react';
import TestimonialCard from '../ui/TestimonialCard';

const TESTIMONIALS = [
  {
    name: 'أحمد عبدالله',
    role: 'عميل بالرياض',
    content: 'تعاملت مع نجار بالرياض في تصميم مطبخ بيتي وغرفة النوم، بصراحة شغلهم نظيف جداً والمواعيد دقيقة. الخشب المستخدم جودته عالية والتشطيب ممتاز.',
    rating: 5,
  },
  {
    name: 'سارة محمد',
    role: 'مصممة ديكور',
    content: 'أعتمد عليهم دائماً في تنفيذ تصاميمي الخشبية للعملاء. دقة في التنفيذ وقدرة على تحويل أي تصميم معقد إلى واقع جميل. فريق محترف بمعنى الكلمة.',
    rating: 5,
  },
  {
    name: 'خالد العتيبي',
    role: 'صاحب شركة',
    content: 'جهزوا لنا مكاتب الشركة بالكامل. الأثاث عملي جداً ويعكس هوية شركتنا. الأسعار كانت مناسبة جداً مقارنة بالجودة المقدمة.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block"
          >
            آراء العملاء
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-6"
          >
            ماذا يقول عملاؤنا عنا؟
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
