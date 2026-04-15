'use client';

import { motion } from 'motion/react';
import { PhoneCall, PenTool, Hammer, CheckSquare } from 'lucide-react';

const STEPS = [
  {
    title: 'الاستشارة والقياس',
    description: 'نتواصل معك لفهم احتياجاتك ونقوم بزيارة الموقع لأخذ المقاسات الدقيقة مجاناً.',
    icon: <PhoneCall className="w-8 h-8" />,
  },
  {
    title: 'التصميم والاتفاق',
    description: 'نقدم لك تصاميم مبدئية ونتفق على نوع الخشب والألوان والأسعار.',
    icon: <PenTool className="w-8 h-8" />,
  },
  {
    title: 'التنفيذ والتصنيع',
    description: 'نبدأ العمل في ورشتنا باستخدام أفضل أنواع الخشب وأحدث المعدات.',
    icon: <Hammer className="w-8 h-8" />,
  },
  {
    title: 'التركيب والتسليم',
    description: 'نقوم بتركيب العمل في موقعك بدقة عالية ونسلمه لك في الموعد المحدد.',
    icon: <CheckSquare className="w-8 h-8" />,
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block"
          >
            آلية العمل
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-6"
          >
            كيف نحول فكرتك إلى <span className="text-accent">واقع</span>؟
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-200 z-0"></div>

          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative z-10 text-center"
            >
              <div className="w-24 h-24 mx-auto bg-bg-light border-4 border-white shadow-lg rounded-full flex items-center justify-center text-primary mb-6 relative">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-text-muted leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
