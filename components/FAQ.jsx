'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Does Integrity Dental provide emergency dental services?',
    a: 'Yes, Integrity Dental is known for providing timely care to patients in need. We open 7 days a week from 10:00 AM to 8:00 PM (Sunday 10:00 AM – 2:00 PM). For dental emergencies, please call us directly at +91 99117 39439 and we will do our best to accommodate you at the earliest.',
  },
  {
    q: 'How can I book an appointment at Integrity Dental?',
    a: 'You can book an appointment in multiple ways — fill out the appointment form on this website, call us at +91 99117 39439, or send us a message on WhatsApp. We confirm your slot within 2 hours. Walk-ins are also welcome during clinic hours.',
  },
  {
    q: 'Is the doctor at Integrity Dental trained from AIIMS?',
    a: 'Yes! Our dentist is an Ex-AIIMS trained dental professional — AIIMS (All India Institute of Medical Sciences) is India\'s most prestigious medical institution. This ensures you receive the highest standard of dental expertise right here in South Extension, Delhi.',
  },
  {
    q: 'Is Root Canal Treatment (RCT) painful?',
    a: 'Not at all. With modern rotary endodontic techniques and effective local anaesthesia, RCT at Integrity Dental is virtually painless. Most patients are surprised at how comfortable the procedure is. You can resume normal activities the same day.',
  },
  {
    q: 'What are the clinic\'s opening hours?',
    a: 'We are open Monday to Saturday from 10:00 AM to 8:00 PM, and on Sundays from 10:00 AM to 2:00 PM. We are open all 7 days of the week for your convenience.',
  },
  {
    q: 'Where is Integrity Dental located?',
    a: 'We are located at Shop No. 21 & 22, 2nd Floor, D-15 Building, Near Croma, South Extension Part-II, New Delhi – 110049. Easily accessible by metro (Lajpat Nagar station) and public transport.',
  },
  {
    q: 'Do you offer dental treatments for children?',
    a: 'Absolutely. Integrity Dental provides high-quality dental care for patients of all ages — from young children to senior citizens. Our friendly team ensures kids feel comfortable and at ease during their visit.',
  },
  {
    q: 'What is Fixed Prosthodontics?',
    a: 'Fixed Prosthodontics involves the placement of permanent dental restorations such as crowns, bridges and fixed dentures. These are cemented onto existing teeth or implants and cannot be removed by the patient — they look and function just like natural teeth.',
  },
];

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 text-sm md:text-base">{q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
        >
          <ChevronDown size={20} className="text-primary" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 px-4 md:px-8 lg:px-16 bg-blue-50/40">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Everything you need to know about Integrity Dental and our services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 bg-primary-light rounded-2xl p-6 text-center"
        >
          <p className="text-gray-700 font-medium mb-3">Still have questions? We're happy to help!</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:+919911739439"
              className="bg-primary text-white font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-primary-dark transition-all shadow-md"
            >
              📞 Call Us
            </a>
            <a
              href="https://wa.me/919911739439"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-green-600 transition-all shadow-md"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
