'use client';

import { motion } from 'motion/react';
import ImageWithFallback from '../ui/ImageWithFallback';
import { ShieldCheck, Clock, ThumbsUp, Wrench } from 'lucide-react';

const FEATURES = [
  {
    title: 'خبرة طويلة',
    description: 'أكثر من 15 عاماً من الخبرة في السوق السعودي.',
    icon: <ShieldCheck className="w-6 h-6 text-accent shrink-0" />,
  },
  {
    title: 'جودة عالية',
    description: 'نستخدم أفضل أنواع الأخشاب والمواد لضمان المتانة.',
    icon: <ThumbsUp className="w-6 h-6 text-accent shrink-0" />,
  },
  {
    title: 'سرعة التنفيذ',
    description: 'نلتزم بالمواعيد المحددة ونسلم المشاريع في وقتها.',
    icon: <Clock className="w-6 h-6 text-accent shrink-0" />,
  },
  {
    title: 'أسعار منافسة',
    description: 'نقدم أفضل الأسعار مع الحفاظ على أعلى معايير الجودة.',
    icon: <Wrench className="w-6 h-6 text-accent shrink-0" />,
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">
              لماذا تختارنا
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-6">
              نجمع بين <span className="text-accent">الفن</span> والمتانة في كل قطعة
            </h2>
            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              في نجار بالرياض، لا نصنع مجرد أثاث، بل نبتكر قطعاً فنية تعيش معك لسنوات. نعتمد على أمهر النجارين وأحدث التقنيات لضمان تقديم أعمال تفوق توقعاتك.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {FEATURES.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold text-text-dark text-lg mb-1">{feature.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
              <ImageWithFallback
                src="/work-8.jpeg"
                alt="نجار يعمل على تفصيل غرف نوم وأبواب خشبية بأعلى جودة - نجار بالرياض"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-serif text-2xl font-bold">
                  15+
                </div>
                <div>
                  <div className="font-bold text-text-dark text-lg">سنة من</div>
                  <div className="text-text-muted">الخبرة والإتقان</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
