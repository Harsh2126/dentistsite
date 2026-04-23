'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarCheck, Phone, Award, Users, Zap } from 'lucide-react';

const clinicImages = [
  'https://lh3.googleusercontent.com/p/AF1QipPCqmZjrRJthQb76Gj19x45JD0J4vN5i-vNXJn9=w800-h600-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipNW2OQGmi_hSTiKtX4LG7-Cn_XIBqYoolg20Syx=w800-h600-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipNjp1SBbTm6aXJrohwJoc2xr4M4cVYoiriqgBnS=w800-h600-k-no',
  'https://lh3.googleusercontent.com/p/AF1QipOGEgjLrtvS70KCSMDqXluKjpbb2jPF7CJ3mc71=w800-h600-k-no',
];

const badges = [
  { icon: Award, label: 'Ex AIIMS Dentist' },
  { icon: Users, label: '119+ Reviews' },
  { icon: Zap,   label: '5.0 ⭐ Rated' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % clinicImages.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="pt-[168px] lg:pt-[148px] min-h-screen flex flex-col">
      {/* Split layout */}
      <div className="flex flex-col md:grid md:grid-cols-2 flex-1">

        {/* Left — content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }}
          className="bg-white flex flex-col justify-center px-10 lg:px-20 py-16 gap-7"
        >
          {/* Logo block */}
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 shrink-0">
            <Image src="/Screenshot_2026-04-23_002738-removebg-preview.png" alt="VS Smile Bloom Logo" width={80} height={80} className="object-contain w-full h-full" />
          </div>
            <div>
              <span className="font-heading font-extrabold text-2xl text-text-dark block leading-tight">V.S. Smile Bloom Dental & Aesthetics</span>
              <span className="text-gold text-base">Sikandra, Agra</span>
            </div>
          </div>

          {/* Tagline */}
          <h1 className="font-heading font-bold text-gold text-2xl md:text-3xl leading-snug">
            Advanced Dental Care &<br />Aesthetic Treatments, Agra
          </h1>

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <a href="#appointment"
              className="bg-gold text-white font-heading font-bold text-sm tracking-widest uppercase px-6 py-3.5 border-2 border-gold-border hover:bg-gold-hover transition-colors flex items-center gap-2 w-72">
              <CalendarCheck size={16} /> Book Appointment
            </a>
            <a href="tel:+919911739439"
              className="border-2 border-gold-border text-gold font-heading font-bold text-sm tracking-widest uppercase px-6 py-3.5 hover:bg-gold hover:text-white transition-colors flex items-center gap-2 w-72">
              <Phone size={16} /> +91 99117 39439
            </a>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 pt-2">
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 border border-border-light px-4 py-2.5 bg-off-white">
                <Icon size={15} className="text-gold" />
                <span className="text-xs font-heading font-semibold text-text-dark uppercase tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — image */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative bg-[#e8e0cc] min-h-[360px] md:min-h-0"
        >
          <AnimatePresence mode="wait">
            <motion.div key={current} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }} className="absolute inset-0">
              <Image src={clinicImages[current]} alt="V.S. Smile Bloom Dental & Aesthetics"
                fill className="object-cover" priority />
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-3 right-3 flex gap-1.5 z-10">
            {clinicImages.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-gold' : 'bg-white/60'}`} />
            ))}
          </div>
          {/* Rating badge */}
          <div className="absolute bottom-5 left-5 bg-white border-l-4 border-gold px-5 py-3 shadow-card">
            <p className="font-heading font-bold text-text-dark text-sm">5.0 ⭐ · 119 Reviews</p>
            <p className="text-xs text-text-mid">Google Rating</p>
          </div>
          {/* AIIMS badge */}
          <div className="absolute top-5 right-5 bg-gold text-white px-4 py-2.5 text-center shadow-gold-sm">
            <p className="text-xs font-sans opacity-80">Located at</p>
            <p className="font-heading font-bold text-sm">Sikandra, Agra</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
