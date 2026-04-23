'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, Loader2 } from 'lucide-react';

const treatments = ['Teeth Cleaning','Root Canal Treatment','Braces','Teeth Whitening','Dental Implants','Smile Makeover','Fixed Prosthodontics','Tooth Extraction','Other'];

export default function Appointment() {
  const [form, setForm]         = useState({ name: '', phone: '', email: '', date: '', time: '', treatment: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setLoading(true); setTimeout(() => { setLoading(false); setSubmitted(true); }, 1000); };

  const inputCls = "border border-[#ccc] px-4 py-3 text-sm text-text-dark bg-white outline-none focus:border-gold focus:shadow-[0_0_0_2px_rgba(139,117,0,0.12)] transition w-full";
  const labelCls = "text-xs font-bold text-text-mid uppercase tracking-wide";

  return (
    <section id="appointment" className="py-20 px-5 md:px-8 lg:px-16 bg-off-white">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <span className="font-heading text-xs font-bold tracking-[2.5px] uppercase text-gold block mb-2">Appointments</span>
          <h2 className="font-heading font-bold text-3xl text-text-dark">Schedule an Appointment</h2>
          <p className="text-text-mid mt-2 text-sm">Fill in the form and we'll confirm your slot within 2 hours.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white border border-border-light border-t-4 border-t-gold p-8 md:p-10">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gold-bg flex items-center justify-center mx-auto mb-5">
                <span className="text-3xl">🎉</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-text-dark mb-2">Appointment Requested!</h3>
              <p className="text-text-mid text-sm">We'll call you within 2 hours to confirm your slot.</p>
              <button onClick={() => setSubmitted(false)} className="mt-6 text-gold font-semibold text-sm hover:underline">
                Book another appointment
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
              {[
                { name: 'name',  label: 'Full Name',       type: 'text',  placeholder: 'Your full name' },
                { name: 'phone', label: 'Phone Number',    type: 'tel',   placeholder: '+91 99117 39439' },
                { name: 'email', label: 'Email Address',   type: 'email', placeholder: 'you@example.com' },
                { name: 'date',  label: 'Preferred Date',  type: 'date',  placeholder: '' },
                { name: 'time',  label: 'Preferred Time',  type: 'time',  placeholder: '' },
              ].map(({ name, label, type, placeholder }) => (
                <div key={name} className="flex flex-col gap-1.5">
                  <label className={labelCls}>{label}</label>
                  <input type={type} name={name} value={form[name]} onChange={handleChange}
                    placeholder={placeholder} required className={inputCls} />
                </div>
              ))}

              <div className="flex flex-col gap-1.5">
                <label className={labelCls}>Treatment Type</label>
                <select name="treatment" value={form.treatment} onChange={handleChange} required className={inputCls}>
                  <option value="">Select treatment</option>
                  {treatments.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className={labelCls}>Message (Optional)</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                  placeholder="Any specific concerns or questions..."
                  className={`${inputCls} resize-none`} />
              </div>

              <div className="sm:col-span-2">
                <button type="submit" disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-gold text-white font-heading font-bold text-sm tracking-widest uppercase py-4 hover:bg-gold-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? <Loader2 size={16} className="animate-spin" /> : <CalendarCheck size={16} />}
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
