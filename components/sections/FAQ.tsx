'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { generateFAQSchema } from '@/lib/schema';

const FAQS = [
  {
    question: 'هل تقدمون ضمان على أعمال النجارة؟',
    answer: 'نعم، نقدم ضماناً شاملاً يصل إلى 5 سنوات على جميع أعمالنا الخشبية ضد عيوب التصنيع والمفصلات.',
  },
  {
    question: 'كم يستغرق تفصيل مطبخ جديد؟',
    answer: 'تختلف المدة حسب حجم المطبخ والتصميم المطلوب، ولكن في المتوسط يستغرق العمل من أسبوعين إلى ثلاثة أسابيع من تاريخ اعتماد التصميم النهائي.',
  },
  {
    question: 'هل الزيارة لأخذ المقاسات مجانية؟',
    answer: 'نعم، الزيارة الأولى لأخذ المقاسات وتقديم الاستشارة المبدئية مجانية تماماً داخل مدينة الرياض.',
  },
  {
    question: 'ما هي أنواع الخشب التي تستخدمونها؟',
    answer: 'نستخدم أفضل أنواع الخشب الطبيعية والصناعية حسب طلب العميل والميزانية، مثل السنديان، الزان، الماهوجني، والـ MDF المقاوم للرطوبة.',
  },
  {
    question: 'هل يمكنكم تنفيذ تصاميم من الإنترنت؟',
    answer: 'بالتأكيد، يمكننا تنفيذ أي تصميم تقدمه لنا بدقة عالية، مع إمكانية التعديل عليه ليناسب مساحتك واحتياجاتك.',
  },
  {
    question: 'هل تقومون بصيانة الأثاث القديم؟',
    answer: 'نعم، لدينا فريق متخصص في صيانة وترميم وتجديد الأثاث الخشبي القديم ليعود كأنه جديد.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqSchema = generateFAQSchema(FAQS);

  return (
    <section className="py-24 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block"
            >
              الأسئلة الشائعة
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-6"
            >
              كل ما تود معرفته عن <span className="text-accent">خدماتنا</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-text-muted mb-8"
            >
              جمعنا لك إجابات لأكثر الأسئلة التي تصلنا من عملائنا. إذا لم تجد إجابة لسؤالك، لا تتردد في التواصل معنا.
            </motion.p>
          </div>

          <div className="lg:w-2/3">
            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-gray-200 rounded-2xl overflow-hidden bg-bg-light"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-right focus:outline-none"
                  >
                    <span className="font-bold text-lg text-text-dark">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-6 pt-0 text-text-muted leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
