'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          src="/whatsapp-vid-1.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-bg-dark/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent font-medium text-sm mb-6 border border-accent/30">
              نجار بالرياض - خبرة تتجاوز 15 عاماً
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              نجار بالرياض | تفصيل وتصنيع غرف النوم والأثاث
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              خدمات نجارة احترافية في جميع أحياء الرياض. نقدم أفضل خدمات تفصيل غرف النوم، تركيب الأبواب، ديكورات خشبية، وفك وتركيب الأثاث بجودة عالية وأسعار منافسة.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-accent text-bg-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>اتصل بنا الآن</span>
              </Link>
              <Link
                href="/services"
                className="flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-colors"
              >
                <span>تصفح خدماتنا</span>
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
