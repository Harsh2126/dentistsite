'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, CalendarCheck, Award, Users, Zap } from 'lucide-react';

const badges = [
  { icon: Award, label: 'Ex AIIMS Dentist' },
  { icon: Users, label: '173+ Reviews' },
  { icon: Zap, label: '5.0 ⭐ Rated' },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 px-5 md:px-8 lg:px-16 flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-blue-50/40 -z-10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden" animate="show"
          className="flex flex-col gap-6"
        >
          <motion.div variants={fadeUp}
            className="inline-flex items-center gap-2 bg-white border border-primary/20 text-primary text-sm font-semibold px-4 py-2 rounded-full w-fit shadow-soft">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Now Accepting New Patients
          </motion.div>

          <motion.h1 variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 leading-[1.15]">
            Your Smile Deserves <br />
            <span className="text-gradient">Expert Care</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-gray-500 text-lg leading-relaxed max-w-md">
            Led by an <strong className="text-gray-700">Ex-AIIMS trained dentist</strong>, Integrity Dental brings hospital-grade expertise to South Extension, New Delhi. Rated <strong className="text-gray-700">5.0 ⭐ by 173+ patients.</strong>
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <a href="#appointment"
              className="flex items-center gap-2 bg-gradient-to-r from-primary to-blue-500 text-white font-semibold px-7 py-3.5 rounded-full hover:shadow-blue transition-all hover:-translate-y-0.5 shadow-md">
              <CalendarCheck size={18} /> Book Appointment
            </a>
            <a href="tel:+919911739439"
              className="flex items-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-6 py-3.5 rounded-full hover:border-primary hover:text-primary transition-all bg-white">
              <Phone size={18} /> Call Now
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-1">
            {badges.map(({ icon: Icon, label }) => (
              <div key={label}
                className="flex items-center gap-2 bg-white rounded-2xl px-4 py-2.5 shadow-soft border border-gray-100">
                <div className="w-8 h-8 bg-primary-light rounded-lg flex items-center justify-center">
                  <Icon size={15} className="text-primary" />
                </div>
                <span className="text-sm font-semibold text-gray-700">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-300/20 rounded-3xl rotate-3 scale-105" />
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=700&q=85&fm=webp"
              alt="Integrity Dental - Professional Dentist"
              width={600} height={650}
              className="relative rounded-3xl object-cover w-full shadow-2xl"
              priority
            />
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-card px-5 py-3.5 flex items-center gap-3 border border-gray-100">
              <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🦷</span>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Google Rating</p>
                <p className="font-bold text-gray-900">5.0 ⭐ · 173 Reviews</p>
              </div>
            </motion.div>
            {/* Top right badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -top-4 -right-4 bg-primary text-white rounded-2xl shadow-blue px-4 py-2.5 text-center">
              <p className="text-xs font-medium opacity-80">Trained at</p>
              <p className="font-bold text-sm">AIIMS Delhi</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
