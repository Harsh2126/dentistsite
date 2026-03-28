'use client';
import { motion } from 'framer-motion';

const stats = [
  { value: '5.0', suffix: '⭐', label: 'Google Rating' },
  { value: '173', suffix: '+', label: 'Patient Reviews' },
  { value: '7', suffix: '/week', label: 'Days Open' },
  { value: 'AIIMS', suffix: '', label: 'Trained Dentist' },
];

export default function Stats() {
  return (
    <section className="py-12 px-5 md:px-8 lg:px-16 bg-gradient-to-r from-primary to-blue-500">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map(({ value, suffix, label }, i) => (
          <motion.div key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <p className="text-3xl md:text-4xl font-extrabold text-white">
              {value}<span className="text-blue-200 text-xl ml-0.5">{suffix}</span>
            </p>
            <p className="text-blue-100 text-sm font-medium mt-1">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
