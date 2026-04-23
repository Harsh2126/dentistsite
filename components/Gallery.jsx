'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const images = [
  { src: 'https://lh3.googleusercontent.com/p/AF1QipPCqmZjrRJthQb76Gj19x45JD0J4vN5i-vNXJn9=w800-h600-k-no', alt: 'V.S. Smile Bloom Dental Clinic', label: 'Our Clinic' },
  { src: 'https://lh3.googleusercontent.com/p/AF1QipNW2OQGmi_hSTiKtX4LG7-Cn_XIBqYoolg20Syx=w800-h600-k-no', alt: 'Clinic Interior', label: 'Clinic Interior' },
  { src: 'https://lh3.googleusercontent.com/p/AF1QipNjp1SBbTm6aXJrohwJoc2xr4M4cVYoiriqgBnS=w800-h600-k-no', alt: 'Treatment Area', label: 'Treatment Area' },
  { src: 'https://lh3.googleusercontent.com/p/AF1QipOGEgjLrtvS70KCSMDqXluKjpbb2jPF7CJ3mc71=w800-h600-k-no', alt: 'Dental Equipment', label: 'Dental Equipment' },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="py-20 px-5 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <span className="font-heading text-xs font-bold tracking-[2.5px] uppercase text-gold block mb-2">Our Clinic</span>
          <h2 className="font-heading font-bold text-3xl text-text-dark">A Glimpse Inside V.S. Smile Bloom</h2>
          <p className="text-text-mid mt-2 max-w-xl text-sm">A modern, clean and welcoming environment designed for your comfort and care.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.4 }}
              onClick={() => setSelected(img)}
              className="relative group overflow-hidden cursor-pointer aspect-[4/3] border border-border-light"
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-nav-black/0 group-hover:bg-nav-black/50 transition-all duration-300 flex items-center justify-center">
                <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
                <p className="text-white text-xs font-heading font-semibold uppercase tracking-wide">{img.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }} transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full overflow-hidden shadow-2xl">
              <Image src={selected.src} alt={selected.alt} width={900} height={600} className="object-cover w-full" />
              <button onClick={() => setSelected(null)}
                className="absolute top-3 right-3 w-9 h-9 bg-white flex items-center justify-center hover:bg-off-white transition-colors shadow-card">
                <X size={16} className="text-text-dark" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4">
                <p className="text-white font-heading font-semibold text-sm uppercase tracking-wide">{selected.label}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
