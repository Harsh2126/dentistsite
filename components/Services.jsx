'use client';
import { motion } from 'framer-motion';
import { Activity, Layers, Sun, Crown, Scissors, Smile, Shield, Sparkles, Zap, AlignCenter } from 'lucide-react';

const categories = [
  {
    label: 'Treatments',
    items: [
      { icon: Activity,    title: 'RCT (Root Canal)',         desc: 'Advanced pain-free root canal treatment using laser and rotary endodontics to save your infected tooth.' },
      { icon: Smile,       title: 'Tooth Reshaping',          desc: 'Aesthetic improvements to the shape, size and contour of your teeth for a more balanced smile.' },
      { icon: Zap,         title: 'Laser RCT',                desc: 'Laser-assisted root canal treatment for greater precision, faster healing and minimal discomfort.' },
    ],
  },
  {
    label: 'Surgery',
    items: [
      { icon: Scissors,    title: 'Surgical Tooth Extraction', desc: 'Painless simple and surgical extractions including wisdom tooth removal with quick healing.' },
      { icon: Shield,      title: 'Oral & Maxillofacial',      desc: 'Complex oral and maxillofacial surgeries performed with precision and care.' },
    ],
  },
  {
    label: 'Procedures',
    items: [
      { icon: Crown,       title: 'Ceramic Crowns & Bridges',  desc: 'Custom ceramic and zirconia crowns and bridges precision-fitted for a seamless natural look.' },
      { icon: Crown,       title: 'Fixed Prosthodontics',      desc: 'Permanent dental restorations including crowns, bridges and fixed dentures.' },
      { icon: Layers,      title: 'Dental Braces',             desc: 'Metal, ceramic and invisible aligners to straighten teeth. Customised plans for all ages.' },
      { icon: AlignCenter, title: 'Orthodontic Alignment',     desc: 'Comprehensive orthodontic treatment to correct misaligned teeth and bite issues.' },
      { icon: Sparkles,    title: 'Dental Laminates',          desc: 'Ultra-thin porcelain laminates bonded to the front of teeth for an instant smile transformation.' },
      { icon: Sun,         title: 'Composite Bonding',         desc: 'Tooth-coloured resin applied to repair chips, cracks and gaps for a natural-looking finish.' },
      { icon: Zap,         title: 'Laser Dentistry',           desc: 'Advanced laser treatments for gum care, cavity detection and pain-free dental procedures.' },
      { icon: Smile,       title: 'Braces Adjustment',         desc: 'Regular and precise braces adjustments to ensure your treatment progresses on track.' },
    ],
  },
  {
    label: 'Tests & Therapy',
    items: [
      { icon: Shield,      title: 'Oral Lesions Screening',    desc: 'Early detection screening tests for oral lesions to ensure timely diagnosis and treatment.' },
      { icon: Activity,    title: 'Oral Rehabilitation',       desc: 'Comprehensive oral rehabilitation therapy to restore full dental function and aesthetics.' },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-5 md:px-8 lg:px-16 bg-off-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-12">
          <span className="font-heading text-xs font-bold tracking-[2.5px] uppercase text-gold block mb-2">What We Offer</span>
          <h2 className="font-heading font-bold text-3xl text-text-dark">Comprehensive Dental Care</h2>
          <p className="text-text-mid mt-2 max-w-xl text-sm">From routine checkups to advanced surgical and aesthetic procedures — all under one roof.</p>
        </motion.div>

        {categories.map(({ label, items }, ci) => (
          <div key={label} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-heading font-bold text-xs uppercase tracking-[2px] text-gold border-l-4 border-gold pl-3">{label}</span>
              <div className="flex-1 h-px bg-border-light" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {items.map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="bg-white border border-border-light border-t-[3px] border-t-transparent hover:border-t-gold p-5 transition-all hover:shadow-gold-sm hover:-translate-y-1 group cursor-default"
                >
                  <div className="w-9 h-9 bg-gold-bg flex items-center justify-center mb-3 group-hover:bg-gold transition-colors">
                    <Icon size={16} className="text-gold group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-xs text-gold uppercase tracking-wide mb-1.5">{title}</h3>
                  <p className="text-text-mid text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
