'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Send, UserCircle2, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const treatments = [
  'Teeth Cleaning', 'Root Canal Treatment', 'Braces', 'Teeth Whitening',
  'Dental Implants', 'Smile Makeover', 'Other',
];

function StarRating({ value, onChange }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          className="transition-transform hover:scale-110"
        >
          <Star
            size={26}
            className={`transition-colors ${
              star <= (hovered || value)
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        </button>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: '', treatment: '', review: '', rating: 0 });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchReviews();
  }, []);

  async function fetchReviews() {
    setLoading(true);
    const { data } = await supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false });
    if (data) setReviews(data);
    setLoading(false);
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.rating === 0) { setError('Please select a star rating.'); return; }
    setError('');
    setSubmitting(true);
    const { error: insertError } = await supabase.from('reviews').insert([{
      name: form.name,
      treatment: form.treatment,
      review: form.review,
      rating: form.rating,
    }]);
    if (insertError) {
      setError('Something went wrong. Please try again.');
    } else {
      setForm({ name: '', treatment: '', review: '', rating: 0 });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      fetchReviews();
    }
    setSubmitting(false);
  };

  return (
    <section id="testimonials" className="py-20 px-4 md:px-8 lg:px-16 bg-blue-50/40">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            What Our Patients Say
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Real stories from real patients who trusted us with their smiles.
          </p>
        </motion.div>

        {/* Review Cards */}
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <Loader2 size={36} className="text-primary animate-spin" />
          </div>
        ) : reviews.length === 0 ? (
          <p className="text-center text-gray-400 py-10">No reviews yet. Be the first to share your experience!</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <AnimatePresence>
              {reviews.map(({ id, name, treatment, review, rating }, i) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i < 6 ? i * 0.08 : 0, duration: 0.4 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow flex flex-col gap-4"
                >
                  <div className="flex gap-1">
                    {Array.from({ length: rating }).map((_, j) => (
                      <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">"{review}"</p>
                  <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                    <div className="w-11 h-11 bg-primary-light rounded-full flex items-center justify-center shrink-0">
                      <UserCircle2 size={28} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{name}</p>
                      <p className="text-xs text-primary font-medium">{treatment}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Review Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-10"
        >
          <h3 className="text-xl font-extrabold text-gray-900 mb-1">Share Your Experience</h3>
          <p className="text-gray-500 text-sm mb-6">Had a visit? We'd love to hear from you!</p>

          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mb-5 flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 text-sm font-medium"
              >
                <span className="text-lg">🎉</span> Thank you! Your review has been posted.
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Verma"
                  required
                  className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">Treatment Taken</label>
                <select
                  name="treatment"
                  value={form.treatment}
                  onChange={handleChange}
                  required
                  className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition bg-white"
                >
                  <option value="">Select treatment</option>
                  {treatments.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Your Rating</label>
              <StarRating value={form.rating} onChange={(r) => { setForm({ ...form, rating: r }); setError(''); }} />
              {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Your Review</label>
              <textarea
                name="review"
                value={form.review}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your experience..."
                required
                className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3.5 rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              {submitting ? 'Submitting...' : 'Submit Review'}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
