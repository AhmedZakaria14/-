'use client';

import { Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingCallButton() {
  return (
    <motion.a
      href="tel:+966563892344"
      className="fixed bottom-24 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition-colors flex items-center justify-center group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1.2 // Slightly delayed after WhatsApp button
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="اتصل بنا الآن"
    >
      <Phone className="w-8 h-8" />
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-primary opacity-40 animate-ping"></span>
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-text-dark text-sm font-medium py-2 px-4 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        اتصل بنا الآن!
      </span>
    </motion.a>
  );
}
