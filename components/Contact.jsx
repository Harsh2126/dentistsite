'use client';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const info = [
  { icon: MapPin, label: 'Address', value: 'Near Anthela, Sikandra, Agra' },
  { icon: Phone,  label: 'Phone',   value: '+91 70788 58555', href: 'tel:+917078858555' },
  { icon: Mail,   label: 'Email',   value: 'info@vssmilebloom.in', href: 'mailto:info@vssmilebloom.in' },
];

const hours = [
  { day: 'Monday – Saturday', time: '10:00 AM – 8:00 PM' },
  { day: 'Sunday',            time: '10:00 AM – 2:00 PM' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-5 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <span className="font-heading text-xs font-bold tracking-[2.5px] uppercase text-gold block mb-2">Contact</span>
          <h2 className="font-heading font-bold text-3xl text-text-dark">Find Us & Get in Touch</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex flex-col gap-5">

            <div className="bg-white border border-border-light border-t-4 border-t-gold p-6 flex flex-col gap-5">
              {info.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold-bg flex items-center justify-center shrink-0">
                    <Icon size={17} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-text-light font-bold uppercase tracking-wider mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-text-dark font-semibold hover:text-gold transition-colors text-sm">{value}</a>
                    ) : (
                      <p className="text-text-dark font-semibold text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white border border-border-light p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} className="text-gold" />
                <h3 className="font-heading font-bold text-text-dark text-sm uppercase tracking-wide">Opening Hours</h3>
              </div>
              <div className="flex flex-col gap-2">
                {hours.map(({ day, time }) => (
                  <div key={day} className="flex justify-between items-center text-sm border-b border-border-light pb-2 last:border-0 last:pb-0">
                    <span className="text-text-mid font-medium">{day}</span>
                    <span className="text-gold font-heading font-bold">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="https://wa.me/917078858555" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-600 text-white font-heading font-bold text-sm tracking-widest uppercase py-4 hover:bg-green-700 transition-colors">
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="border border-border-light overflow-hidden h-[420px] lg:h-auto min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.123!2d77.9692921!3d27.2030155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397477000e3db0ff%3A0xb54ebf7f580456e!2sV.S.%20Smile%20Bloom%20Dental%20%26%20Aesthetics!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%" height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="V.S. Smile Bloom Dental Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
