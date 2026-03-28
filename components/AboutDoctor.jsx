'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GraduationCap, BadgeCheck, Heart } from 'lucide-react';

const highlights = [
  { icon: GraduationCap, text: 'Ex-AIIMS Dentist – Premier Dental Training' },
  { icon: BadgeCheck, text: 'Specialist in RCT & Fixed Prosthodontics' },
  { icon: Heart, text: 'Gentle, Patient-Centered Approach' },
];

export default function AboutDoctor() {
  return (
    <section id="about" className="py-24 px-5 md:px-8 lg:px-16 bg-blue-50/40">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-200/20 rounded-3xl -rotate-2 scale-105" />
          <Image
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=85&fm=webp"
            alt="Integrity Dental Doctor"
            width={560} height={620}
            className="relative rounded-3xl object-cover w-full shadow-2xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-card px-5 py-4 border border-gray-100">
            <p className="text-3xl font-extrabold text-gradient">5.0 ⭐</p>
            <p className="text-xs text-gray-500 font-medium mt-0.5">173+ Google Reviews</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <span className="inline-block bg-primary-light text-primary text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest w-fit">About Our Clinic</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Integrity Dental <br />
            <span className="text-gradient">South Extension, Delhi</span>
          </h2>
          <p className="text-primary font-semibold text-base">Ex-AIIMS Dentist | Specialist in RCT & Prosthodontics</p>
          <p className="text-gray-600 leading-relaxed text-sm">
            Integrity Dental has been a trusted pillar in dental healthcare in South Extension, Delhi. Founded and led by an Ex-AIIMS trained dentist, our clinic brings the highest standard of dental expertise directly to your neighbourhood — conveniently located near Croma, South Extension Part-II.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm">
            With a perfect 5.0 star rating based on 173 patient reviews, our commitment to integrity, precision and patient comfort sets us apart. Every patient receives personalised, pain-free treatment in a clean and welcoming environment.
          </p>

          <div className="flex flex-col gap-3">
            {highlights.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-soft border border-gray-100">
                <div className="w-9 h-9 bg-gradient-to-br from-primary to-blue-400 rounded-lg flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-white" />
                </div>
                <span className="text-gray-700 font-medium text-sm">{text}</span>
              </div>
            ))}
          </div>

          <a href="#appointment"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-500 text-white font-semibold px-7 py-3.5 rounded-full hover:shadow-blue transition-all hover:-translate-y-0.5 shadow-md w-fit mt-2">
            Book a Consultation →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
