'use client';

import { motion } from 'motion/react';
import { Hammer, DoorOpen, Bed, Sofa, Wrench, PaintBucket } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';

const SERVICES = [
  {
    title: 'تفصيل وتصنيع غرف النوم',
    description: 'تصميم وتنفيذ غرف نوم رئيسية وأطفال ذكية تستغل المساحات بأناقة وعملية.',
    icon: <Bed className="w-8 h-8" />,
    href: '/نجار-غرف-نوم-بالرياض',
  },
  {
    title: 'تركيب الأبواب الخشبية',
    description: 'تصنيع وتركيب أبواب داخلية وخارجية متينة بتصاميم عصرية وكلاسيكية تناسب ذوقك.',
    icon: <DoorOpen className="w-8 h-8" />,
    href: '/نجار-ابواب-بالرياض',
  },
  {
    title: 'فك وتركيب الأثاث',
    description: 'خدمات فك وتركيب ونقل الأثاث باحترافية عالية لضمان سلامة مقتنياتك.',
    icon: <Wrench className="w-8 h-8" />,
    href: '/نجار-فك-وتركيب-الاثاث',
  },
  {
    title: 'تركيب أثاث إيكيا',
    description: 'فنيون متخصصون في تركيب جميع أنواع أثاث إيكيا بسرعة ودقة متناهية.',
    icon: <Hammer className="w-8 h-8" />,
    href: '/نجار-تركيب-ايكيا',
  },
  {
    title: 'ديكورات خشبية',
    description: 'تنفيذ أعمال الديكور الجداري، تكسيات خشبية، والبرجولات بأعلى جودة ودقة.',
    icon: <PaintBucket className="w-8 h-8" />,
    href: '/نجار-ديكور',
  },
  {
    title: 'تصميم الخزائن والرفوف',
    description: 'تفصيل دواليب وخزائن ملابس مخصصة تناسب مساحتك واحتياجاتك.',
    icon: <Sofa className="w-8 h-8" />,
    href: '/نجار-دواليب-بالرياض',
  },
];

export default function Services() {
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
            ماذا نقدم
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-6"
          >
            خدمات نجارة متكاملة في الرياض
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-muted"
          >
            نقدم مجموعة واسعة من خدمات النجارة والأعمال الخشبية المخصصة لتلبية كافة احتياجاتك السكنية والتجارية.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
