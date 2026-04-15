import { ReactNode } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  delay?: number;
}

export default function ServiceCard({ title, description, icon, href, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group flex flex-col h-full"
    >
      <div className="w-16 h-16 bg-accent-light text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="font-serif text-2xl font-bold mb-4">{title}</h3>
      <p className="text-text-muted leading-relaxed flex-grow mb-6">{description}</p>
      <Link href={href} className="flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors mt-auto">
        <span>اقرأ المزيد</span>
        <ArrowLeft className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}
