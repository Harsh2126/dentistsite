'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GraduationCap, BadgeCheck, Heart } from 'lucide-react';

const highlights = [
  { icon: GraduationCap, text: 'RCT, Sedation & Aesthetic Dentistry' },
  { icon: BadgeCheck,    text: 'Oral Surgery & Maxillofacial Procedures' },
  { icon: Heart,         text: 'Gentle, Patient-Centered Approach' },
];

export default function AboutDoctor() {
  return (
    <section id="about" className="py-20 px-5 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* Image */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
          className="relative" style={{ aspectRatio: '560/620' }}>
          <Image
            src="https://lh3.googleusercontent.com/p/AF1QipNR5s2FQTmSAFj0jeytTubOMDlDuok2l3-gUZP8=w800-h600-k-no"
            alt="V.S. Smile Bloom Dental & Aesthetics"
            fill className="object-cover shadow-card"
          />
          <div className="absolute -bottom-4 -right-4 bg-white border-l-4 border-gold px-5 py-3.5 shadow-card z-10">
            <p className="font-heading font-bold text-text-dark text-sm">5.0 ⭐ · 119 Reviews</p>
            <p className="text-xs text-text-mid">Google Rating</p>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
          className="flex flex-col gap-5">
          <span className="font-heading text-xs font-bold tracking-[2.5px] uppercase text-gold">About Our Clinic</span>
          <h2 className="font-heading font-bold text-3xl text-text-dark leading-tight">
            V.S. Smile Bloom<br />
            <span className="text-gold">Dental & Aesthetics, Sikandra, Agra</span>
          </h2>
          <p className="text-gold font-semibold text-sm">RCT Specialist · Sedation Dentistry · Oral Surgery</p>
          <p className="text-text-mid text-sm leading-relaxed">
            V.S. Smile Bloom Dental & Aesthetics is a well-known and highly reputed dental clinic in Sikandra, Agra, conveniently located near Anthela. Rated 5.0 stars based on 119 reviews, the clinic offers top-quality dental care for patients of all age groups.
          </p>
          <p className="text-text-mid text-sm leading-relaxed">
            With a focus on advanced treatments, patient satisfaction and modern dental techniques, the clinic combines cutting-edge technology with compassionate care to deliver a comfortable and effective treatment experience.
          </p>

          <div className="flex flex-col gap-3 mt-1">
            {highlights.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 border border-border-light border-l-4 border-l-gold px-4 py-3 bg-off-white">
                <Icon size={16} className="text-gold shrink-0" />
                <span className="text-text-dark font-semibold text-sm">{text}</span>
              </div>
            ))}
          </div>

          <a href="#appointment"
            className="mt-2 bg-gold text-white font-heading font-bold text-sm tracking-widest uppercase px-7 py-3.5 border-2 border-gold-border hover:bg-gold-hover transition-colors w-fit">
            Book a Consultation →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
