'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-bg-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
          >
            هل لديك فكرة أثاث تود تنفيذها؟
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 mb-12 leading-relaxed"
          >
            تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك. فريقنا جاهز لتحويل أفكارك إلى واقع ملموس.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-accent text-bg-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span dir="ltr">{process.env.NEXT_PUBLIC_PHONE}</span>
            </a>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}?text=السلام عليكم، أريد الاستفسار عن خدمات أبو ثابت للنجارة`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>تواصل عبر واتساب</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
