'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, Loader2 } from 'lucide-react';

const treatments = [
  'Teeth Cleaning', 'Root Canal Treatment', 'Braces', 'Teeth Whitening',
  'Dental Implants', 'Smile Makeover', 'Fixed Prosthodontics', 'Tooth Extraction', 'Other',
];

export default function Appointment() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', time: '', treatment: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1000);
  };

  return (
    <section id="appointment" className="py-24 px-5 md:px-8 lg:px-16 bg-blue-50/40">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="inline-block bg-primary-light text-primary text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">Book Now</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Schedule an Appointment</h2>
          <p className="text-gray-500 mt-3">Fill in the form and we'll confirm your slot within 2 hours.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-card p-8 md:p-10 border border-gray-100">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="text-4xl">🎉</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Appointment Requested!</h3>
              <p className="text-gray-500">We'll call you within 2 hours to confirm your slot.</p>
              <button onClick={() => setSubmitted(false)}
                className="mt-6 text-primary font-semibold text-sm hover:underline">
                Book another appointment
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
              {[
                { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 99117 39439' },
                { name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com' },
                { name: 'date', label: 'Preferred Date', type: 'date', placeholder: '' },
                { name: 'time', label: 'Preferred Time', type: 'time', placeholder: '' },
              ].map(({ name, label, type, placeholder }) => (
                <div key={name} className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-700">{label}</label>
                  <input type={type} name={name} value={form[name]} onChange={handleChange}
                    placeholder={placeholder} required
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition bg-gray-50 hover:bg-white" />
                </div>
              ))}

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">Treatment Type</label>
                <select name="treatment" value={form.treatment} onChange={handleChange} required
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition bg-gray-50 hover:bg-white">
                  <option value="">Select treatment</option>
                  {treatments.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-sm font-semibold text-gray-700">Message (Optional)</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                  placeholder="Any specific concerns or questions..."
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition resize-none bg-gray-50 hover:bg-white" />
              </div>

              <div className="sm:col-span-2">
                <button type="submit" disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-blue-500 text-white font-semibold py-4 rounded-xl hover:shadow-blue transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed shadow-md">
                  {loading ? <Loader2 size={18} className="animate-spin" /> : <CalendarCheck size={18} />}
                  {loading ? 'Booking...' : 'Confirm Appointment'}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
