'use client';
import { motion } from 'framer-motion';
import { UserCheck, Wallet, Clock, Cpu, SmilePlus, ShieldCheck } from 'lucide-react';

const features = [
  { icon: UserCheck,   title: 'RCT & Laser Dentistry',      desc: 'Specialised in Root Canal Treatment including advanced Laser RCT for pain-free, precise and faster healing procedures.' },
  { icon: Wallet,      title: 'Affordable Treatment',        desc: 'Transparent pricing with no hidden charges. Quality dental care made accessible for every budget.' },
  { icon: Clock,       title: 'Mon–Sat 10AM–8PM',            desc: 'Open Monday to Saturday 10AM–8PM and Sunday 10AM–2PM. Emergency slots available. Walk-ins welcome.' },
  { icon: Cpu,         title: 'Advanced Equipment',          desc: 'Laser dentistry, digital X-rays and modern sterilisation technology for precise, safe treatments.' },
  { icon: SmilePlus,   title: '5.0 Star Rated Clinic',       desc: 'Rated 5.0 stars by 119+ patients on Google. Our track record of excellence speaks for itself.' },
  { icon: ShieldCheck, title: 'Strict Hygiene Standards',    desc: 'Hospital-grade sterilisation protocols maintained at all times for your complete safety and peace of mind.' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 px-5 md:px-8 lg:px-16 bg-off-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-12">
          <span className="font-heading text-xs font-bold tracking-[2.5px] uppercase text-gold block mb-2">Why Choose Us</span>
          <h2 className="font-heading font-bold text-3xl text-text-dark">The Integrity Dental Difference</h2>
          <p className="text-text-mid mt-2 max-w-xl text-sm">We go beyond dentistry to deliver an experience that's comfortable, affordable and exceptional.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.4 }}
              className="flex gap-4 bg-white border border-border-light p-6 hover:shadow-gold-sm hover:-translate-y-1 transition-all"
            >
              <div className="w-11 h-11 bg-gold-bg flex items-center justify-center shrink-0">
                <Icon size={20} className="text-gold" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-text-dark text-sm mb-1.5 uppercase tracking-wide">{title}</h3>
                <p className="text-text-mid text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
