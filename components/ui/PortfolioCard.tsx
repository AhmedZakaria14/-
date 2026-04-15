import ImageWithFallback from './ImageWithFallback';
import { motion } from 'motion/react';

interface PortfolioCardProps {
  title: string;
  category: string;
  image: string;
  delay?: number;
}

export default function PortfolioCard({ title, category, image, delay = 0 }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
    >
      {image.includes('.mp4') ? (
        <video
          src={image}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <ImageWithFallback
          src={image}
          alt={`${title} - أعمال نجار بالرياض`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span className="text-accent text-sm font-medium mb-2 block">{category}</span>
        <h3 className="text-white font-serif text-xl font-bold">{title}</h3>
      </div>
    </motion.div>
  );
}
