'use client';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919911739439"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold pl-4 pr-5 py-3.5 rounded-full shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 transition-shadow"
    >
      <MessageCircle size={22} />
      <span className="text-sm hidden sm:block">WhatsApp Us</span>
    </motion.a>
  );
}
