'use client';
import { motion } from 'framer-motion';

const stats = [
  { value: '5.0', suffix: '⭐', label: 'Google Rating' },
  { value: '119', suffix: '+', label: 'Patient Reviews' },
  { value: '6',   suffix: '/week', label: 'Days Open' },
  { value: 'RCT', suffix: '', label: 'Specialist' },
];

export default function Stats() {
  return (
    <section className="bg-nav-black py-10 px-5 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
        {stats.map(({ value, suffix, label }, i) => (
          <motion.div key={label}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="text-center py-4 px-6"
          >
            <p className="font-heading font-extrabold text-3xl text-white">
              {value}<span className="text-gold-light text-lg ml-0.5">{suffix}</span>
            </p>
            <p className="text-white/50 text-xs font-heading uppercase tracking-widest mt-1">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
