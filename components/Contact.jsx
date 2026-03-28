'use client';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const info = [
  { icon: MapPin, label: 'Address', value: 'Shop No. 21 & 22, 2nd Floor, D-15 Building, Near Croma, South Extension Part-II, New Delhi – 110049' },
  { icon: Phone, label: 'Phone', value: '+91 99117 39439', href: 'tel:+919911739439' },
  { icon: Mail, label: 'Email', value: 'info@integritydental.in', href: 'mailto:info@integritydental.in' },
];

const hours = [
  { day: 'Monday – Saturday', time: '10:00 AM – 8:00 PM' },
  { day: 'Sunday', time: '10:00 AM – 2:00 PM' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-5 md:px-8 lg:px-16 bg-blue-50/40">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block bg-primary-light text-primary text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Find Us & Get in Touch</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col gap-5">
            <div className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100 flex flex-col gap-5">
              {info.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-gray-800 font-semibold hover:text-primary transition-colors text-sm">{value}</a>
                    ) : (
                      <p className="text-gray-800 font-semibold text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary-light rounded-lg flex items-center justify-center">
                  <Clock size={16} className="text-primary" />
                </div>
                <h3 className="font-bold text-gray-900">Opening Hours</h3>
              </div>
              <div className="flex flex-col gap-3">
                {hours.map(({ day, time }) => (
                  <div key={day} className="flex justify-between items-center text-sm bg-gray-50 rounded-xl px-4 py-2.5">
                    <span className="text-gray-600 font-medium">{day}</span>
                    <span className="text-primary font-bold">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="https://wa.me/919911739439" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-4 rounded-2xl hover:shadow-lg hover:shadow-green-500/30 transition-all hover:-translate-y-0.5 shadow-md">
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-soft border border-gray-100 h-[420px] lg:h-auto min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1068605.2353428244!2d75.9289368317488!3d28.690370754521396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce391cc37d66d%3A0x92269a154763d119!2sINTEGRITY%20DENTAL!5e0!3m2!1sen!2sin!4v1774676974289!5m2!1sen!2sin"
              width="100%" height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Integrity Dental Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
