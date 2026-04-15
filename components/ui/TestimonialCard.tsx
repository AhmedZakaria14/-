import { Star } from 'lucide-react';
import { motion } from 'motion/react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating?: number;
}

export default function TestimonialCard({ name, role, content, rating = 5 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
    >
      <div className="flex gap-1 mb-4 text-accent">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-current" />
        ))}
      </div>
      <p className="text-text-muted mb-6 leading-relaxed italic">&quot;{content}&quot;</p>
      <div>
        <h4 className="font-bold text-lg">{name}</h4>
        <span className="text-sm text-gray-500">{role}</span>
      </div>
    </motion.div>
  );
}
