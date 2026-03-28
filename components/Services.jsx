'use client';
import { motion } from 'framer-motion';
import { Sparkles, Activity, Smile, Sun, Layers, Star, Crown, Scissors } from 'lucide-react';

const services = [
  { icon: Sparkles, title: 'Teeth Cleaning', desc: 'Professional scaling and polishing by our Ex-AIIMS dentist to remove plaque, tartar and stains. Recommended every 6 months.', color: 'from-blue-500 to-cyan-400', bg: 'bg-blue-50' },
  { icon: Activity, title: 'Root Canal (RCT)', desc: 'Advanced pain-free RCT using rotary endodontics to save your infected tooth with high success rates.', color: 'from-red-500 to-rose-400', bg: 'bg-red-50' },
  { icon: Layers, title: 'Braces & Aligners', desc: 'Metal, ceramic and invisible aligners to straighten teeth. Customised plans for children, teens and adults.', color: 'from-purple-500 to-violet-400', bg: 'bg-purple-50' },
  { icon: Sun, title: 'Teeth Whitening', desc: 'Professional laser and bleaching treatments to brighten your smile by several shades in a single visit.', color: 'from-yellow-500 to-amber-400', bg: 'bg-yellow-50' },
  { icon: Star, title: 'Dental Implants', desc: 'Permanent titanium tooth replacements that look, feel and function like natural teeth with 95%+ success rate.', color: 'from-green-500 to-emerald-400', bg: 'bg-green-50' },
  { icon: Smile, title: 'Smile Makeover', desc: 'Complete cosmetic transformation combining veneers, whitening and contouring for your dream smile.', color: 'from-pink-500 to-rose-400', bg: 'bg-pink-50' },
  { icon: Crown, title: 'Fixed Prosthodontics', desc: 'Expert placement of crowns, bridges and fixed dentures to restore damaged or missing teeth permanently.', color: 'from-orange-500 to-amber-400', bg: 'bg-orange-50' },
  { icon: Crown, title: 'Crowns & Bridges', desc: 'Custom porcelain and zirconia crowns and bridges precision-fitted for comfort and a seamless natural look.', color: 'from-teal-500 to-cyan-400', bg: 'bg-teal-50' },
  { icon: Scissors, title: 'Tooth Extraction', desc: 'Painless simple and surgical extractions including wisdom tooth removal with quick healing and minimal discomfort.', color: 'from-rose-500 to-pink-400', bg: 'bg-rose-50' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-5 md:px-8 lg:px-16 bg-blue-50/40">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block bg-primary-light text-primary text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Comprehensive Dental Care</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-base">From routine checkups to advanced cosmetic procedures — all under one roof.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc, color, bg }, i) => (
            <motion.div key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-card transition-all border border-gray-100 group cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${bg} group-hover:scale-110 transition-transform`}>
                <div className={`bg-gradient-to-br ${color} w-8 h-8 rounded-lg flex items-center justify-center`}>
                  <Icon size={16} className="text-white" />
                </div>
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
