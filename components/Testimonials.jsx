'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Send, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const treatments = ['Teeth Cleaning','Root Canal Treatment','Braces','Teeth Whitening','Dental Implants','Smile Makeover','Other'];

function StarRating({ value, onChange }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1,2,3,4,5].map((star) => (
        <button key={star} type="button" onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)} onMouseLeave={() => setHovered(0)}
          className="transition-transform hover:scale-110">
          <Star size={24} className={`transition-colors ${star <= (hovered || value) ? 'fill-gold text-gold' : 'text-border-light'}`} />
        </button>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [reviews, setReviews]     = useState([]);
  const [loading, setLoading]     = useState(true);
  const [form, setForm]           = useState({ name: '', treatment: '', review: '', rating: 0 });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError]         = useState('');

  useEffect(() => { fetchReviews(); }, []);

  async function fetchReviews() {
    setLoading(true);
    const { data } = await supabase.from('reviews').select('*').order('created_at', { ascending: false });
    if (data) setReviews(data);
    setLoading(false);
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.rating === 0) { setError('Please select a star rating.'); return; }
    setError(''); setSubmitting(true);
    const { error: insertError } = await supabase.from('reviews').insert([{ name: form.name, treatment: form.treatment, review: form.review, rating: form.rating }]);
    if (insertError) { setError('Something went wrong. Please try again.'); }
    else { setForm({ name: '', treatment: '', review: '', rating: 0 }); setSubmitted(true); setTimeout(() => setSubmitted(false), 3000); fetchReviews(); }
    setSubmitting(false);
  };

  return (
    <section id="testimonials" className="py-20 px-5 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <span className="font-heading text-xs font-bold tracking-[2.5px] uppercase text-gold block mb-2">Patient Reviews</span>
          <h2 className="font-heading font-bold text-3xl text-text-dark">What Our Patients Say</h2>
          <p className="text-text-mid mt-2 max-w-xl text-sm">Real stories from real patients who trusted us with their smiles.</p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-16"><Loader2 size={32} className="text-gold animate-spin" /></div>
        ) : reviews.length === 0 ? (
          <p className="text-text-light py-10 text-sm">No reviews yet. Be the first to share your experience!</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-5 mb-14">
            <AnimatePresence>
              {reviews.map(({ id, name, treatment, review, rating }, i) => (
                <motion.div key={id}
                  initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i < 6 ? i * 0.07 : 0, duration: 0.4 }}
                  className="bg-white border border-border-light border-l-4 border-l-gold p-6 flex flex-col gap-3 hover:shadow-gold-sm transition-shadow"
                >
                  <div className="flex gap-0.5">
                    {Array.from({ length: rating }).map((_, j) => (
                      <Star key={j} size={14} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-text-mid text-sm leading-relaxed italic flex-1">"{review}"</p>
                  <div className="pt-3 border-t border-border-light">
                    <p className="font-heading font-bold text-text-dark text-sm">{name}</p>
                    <p className="text-xs text-gold font-semibold mt-0.5">{treatment}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Review Form */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="max-w-2xl bg-white border border-border-light border-t-4 border-t-gold p-8 md:p-10">
          <h3 className="font-heading font-bold text-xl text-gold uppercase tracking-wide mb-1">Share Your Experience</h3>
          <p className="text-text-mid text-sm mb-6">Had a visit? We'd love to hear from you!</p>

          <AnimatePresence>
            {submitted && (
              <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="mb-5 bg-green-50 border border-green-200 text-green-700 px-4 py-3 text-sm font-medium">
                🎉 Thank you! Your review has been posted.
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-text-mid uppercase tracking-wide">Your Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="e.g. Rahul Verma" required
                  className="border border-[#ccc] px-4 py-2.5 text-sm text-text-dark bg-white outline-none focus:border-gold focus:shadow-[0_0_0_2px_rgba(139,117,0,0.12)] transition" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-text-mid uppercase tracking-wide">Treatment Taken</label>
                <select name="treatment" value={form.treatment} onChange={handleChange} required
                  className="border border-[#ccc] px-4 py-2.5 text-sm text-text-dark bg-white outline-none focus:border-gold focus:shadow-[0_0_0_2px_rgba(139,117,0,0.12)] transition">
                  <option value="">Select treatment</option>
                  {treatments.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-mid uppercase tracking-wide">Your Rating</label>
              <StarRating value={form.rating} onChange={(r) => { setForm({ ...form, rating: r }); setError(''); }} />
              {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-text-mid uppercase tracking-wide">Your Review</label>
              <textarea name="review" value={form.review} onChange={handleChange} rows={4}
                placeholder="Tell us about your experience..." required
                className="border border-[#ccc] px-4 py-2.5 text-sm text-text-dark bg-white outline-none focus:border-gold focus:shadow-[0_0_0_2px_rgba(139,117,0,0.12)] transition resize-none" />
            </div>

            <button type="submit" disabled={submitting}
              className="flex items-center justify-center gap-2 bg-gold text-white font-heading font-bold text-sm tracking-widest uppercase py-3.5 hover:bg-gold-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-1">
              {submitting ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} />}
              {submitting ? 'Submitting...' : 'Submit Review'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
