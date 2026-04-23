'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'Does V.S. Smile Bloom Dental & Aesthetics provide emergency dental services?', a: 'Yes, we are open Monday to Saturday 10:00 AM – 8:00 PM and Sunday 10:00 AM – 2:00 PM. For dental emergencies, please call us directly and we will accommodate you at the earliest.' },
  { q: 'How can I book an appointment?', a: 'You can book via the appointment form on this website, call us directly, or send us a WhatsApp message. We confirm your slot within 2 hours. Walk-ins are also welcome.' },
  { q: 'Is Root Canal Treatment (RCT) painful?', a: 'Not at all. With modern rotary endodontic techniques and effective local anaesthesia, RCT at our clinic is virtually painless. Most patients are surprised at how comfortable the procedure is.' },
  { q: 'Do you offer Sedation Dentistry?', a: 'Yes! We offer sedation dentistry for patients who experience dental anxiety or require pain-free and anxiety-free procedures. Our team ensures a comfortable and stress-free experience.' },
  { q: "What are the clinic's opening hours?", a: 'Monday to Saturday: 10:00 AM – 8:00 PM. Sunday: 10:00 AM – 2:00 PM.' },
  { q: 'Where is V.S. Smile Bloom Dental & Aesthetics located?', a: 'We are located near Anthela, Sikandra, Agra. The clinic is easily accessible by public transportation and has ample parking space for patients traveling by private vehicles.' },
  { q: 'Do you offer dental treatments for children?', a: 'Absolutely. We provide dental care for patients of all ages — from young children to senior citizens. Our friendly team ensures kids feel comfortable during their visit.' },
  { q: 'What cosmetic dental services do you offer?', a: 'We offer a wide range of aesthetic treatments including teeth whitening, dental laminates, composite bonding, smile makeovers, tooth reshaping and laser dentistry for a complete smile transformation.' },
];

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div className="border border-border-light bg-white">
      <button onClick={onClick}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-off-white transition-colors">
        <span className="font-heading font-semibold text-text-dark text-sm md:text-base">{q}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.22 }} className="shrink-0">
          <ChevronDown size={18} className="text-gold" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
            <p className="px-6 pb-5 text-text-mid text-sm leading-relaxed border-t border-border-light pt-4">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 px-5 md:px-8 lg:px-16 bg-off-white">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <span className="font-heading text-xs font-bold tracking-[2.5px] uppercase text-gold block mb-2">FAQ</span>
          <h2 className="font-heading font-bold text-3xl text-text-dark">Frequently Asked Questions</h2>
          <p className="text-text-mid mt-2 max-w-xl text-sm">Everything you need to know about V.S. Smile Bloom Dental & Aesthetics and our services.</p>
        </motion.div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)} />
          ))}
        </div>

        <div className="mt-10 bg-nav-black p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/80 font-heading font-semibold text-sm">Still have questions? We're happy to help!</p>
          <div className="flex gap-3">
            <a href="tel:+919911739439"
              className="bg-gold text-white font-heading font-bold text-xs tracking-widest uppercase px-5 py-2.5 hover:bg-gold-hover transition-colors">
              📞 Call Us
            </a>
            <a href="https://wa.me/919911739439" target="_blank" rel="noopener noreferrer"
              className="bg-green-600 text-white font-heading font-bold text-xs tracking-widest uppercase px-5 py-2.5 hover:bg-green-700 transition-colors">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
