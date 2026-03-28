'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const images = [
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAweqOBpgqGeKLJWt9_p8ra32SwKI6zhxMZXP4CaoktKC7ZQiCev3fjOYAeKdP-22II4acDlmmlqX_1034BS5s8582EiZeESdlpDd-Qs_ihUzrvluvSaiIUOMGoLyRLZNN6bdfc7FC=w397-h298-k-no',
    alt: 'Integrity Dental Clinic',
    label: 'Our Clinic',
  },
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAweoEB2d3fBjGNfBdE45MVFesBIUROV-sOFvaeDJMgTxi3bZBuwiSVswZhzfGTPAn6MtWs1NxyYWq3EYbhJoLqm5NpCrcQ-eG5Yn73wl4sgWSXUTNBy5pKO4_afr5jDx-L18NNjeR=w404-h298-k-no',
    alt: 'Integrity Dental Treatment Room',
    label: 'Treatment Room',
  },

  {
    src: 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?cb_client=maps_sv.tactile&w=900&h=600&pitch=0&panoid=6X6LLXQ8zvjYSCqYVfo3kw&yaw=102.958084',
    alt: 'Integrity Dental Clinic Exterior',
    label: 'Clinic Exterior',
  },
  {
    src: 'https://lh3.googleusercontent.com/p/AF1QipOmc-VHunE6RjCTh71ZtCuettVBrEFPa_z7L1mN=w800-h600-k-no',
    alt: 'Integrity Dental Clinic',
    label: 'Our Clinic',
  },
  {
    src: 'https://lh3.googleusercontent.com/p/AF1QipP5abKZHrXMoFJjRAnqfZiERU25pqmiH6InkQWt=w800-h600-k-no',
    alt: 'Integrity Dental Clinic',
    label: 'Dental Chair',
  },

];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="py-20 px-4 md:px-8 lg:px-16 bg-blue-50/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Clinic</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            A Glimpse Inside Integrity Dental
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            A modern, clean and welcoming environment designed for your comfort and care.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelected(img)}
              className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all aspect-[4/3]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
                <p className="text-white text-sm font-semibold">{img.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={selected.src}
                alt={selected.alt}
                width={900}
                height={600}
                className="object-cover w-full"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-md"
              >
                <X size={18} className="text-gray-800" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4">
                <p className="text-white font-semibold">{selected.label}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
