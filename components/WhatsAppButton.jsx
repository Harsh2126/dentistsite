'use client';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/917078858555"
      target="_blank" rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-600 text-white font-heading font-bold text-xs tracking-widest uppercase pl-4 pr-5 py-3.5 shadow-xl hover:bg-green-700 transition-colors"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:block">WhatsApp Us</span>
    </motion.a>
  );
}
