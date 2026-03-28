'use client';
import { motion } from 'framer-motion';
import { UserCheck, Wallet, Clock, Cpu, SmilePlus, ShieldCheck } from 'lucide-react';

const features = [
  { icon: UserCheck, title: 'Ex-AIIMS Trained Dentist', desc: "Trained at India's most prestigious medical institution — AIIMS Delhi. You get top-tier expertise right in South Extension.", color: 'text-blue-600 bg-blue-50' },
  { icon: Wallet, title: 'Affordable Treatment', desc: 'Transparent pricing with no hidden charges. Quality dental care made accessible for every budget.', color: 'text-green-600 bg-green-50' },
  { icon: Clock, title: 'Open 7 Days a Week', desc: 'Mon–Sat 10AM–8PM, Sun 10AM–2PM. Emergency slots available. Walk-ins warmly welcomed.', color: 'text-purple-600 bg-purple-50' },
  { icon: Cpu, title: 'Advanced Equipment', desc: 'Digital X-rays, rotary endodontics and modern sterilisation technology for precise, safe treatments.', color: 'text-orange-600 bg-orange-50' },
  { icon: SmilePlus, title: '5 Star Rated Clinic', desc: 'Rated 5.0 stars by 173+ patients on Google. Our track record of excellence speaks for itself.', color: 'text-yellow-600 bg-yellow-50' },
  { icon: ShieldCheck, title: 'Strict Hygiene Standards', desc: 'Hospital-grade sterilisation protocols maintained at all times for your complete safety and peace of mind.', color: 'text-red-600 bg-red-50' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 px-5 md:px-8 lg:px-16 bg-blue-50/40">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block bg-primary-light text-primary text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">The Integrity Dental Difference</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">We go beyond dentistry to deliver an experience that's comfortable, affordable and exceptional.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div key={title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="flex gap-4 bg-white border border-gray-100 rounded-2xl p-6 shadow-soft hover:shadow-card transition-all"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
                <Icon size={22} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1.5 text-base">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
