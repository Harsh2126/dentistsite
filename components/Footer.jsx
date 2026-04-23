import Image from 'next/image';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const quickLinks = [
  { label: 'Home',             href: '#home' },
  { label: 'Services',         href: '#services' },
  { label: 'About Us',         href: '#about' },
  { label: 'Gallery',          href: '#gallery' },
  { label: 'Testimonials',     href: '#testimonials' },
  { label: 'Book Appointment', href: '#appointment' },
  { label: 'Contact',          href: '#contact' },
];

const socials = [
  { icon: Facebook,  href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter,   href: '#', label: 'Twitter' },
  { icon: Youtube,   href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-nav-black text-white/65 pt-14 pb-0 px-5 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-12">

        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 shrink-0">
              <Image src="/Screenshot_2026-04-23_002738-removebg-preview.png" alt="VS Smile Bloom Logo" width={48} height={48} className="object-contain w-full h-full" />
            </div>
            <div>
              <p className="font-heading font-bold text-white text-base">V.S. Smile Bloom Dental & Aesthetics</p>
              <p className="text-gold-light text-xs">Ex-AIIMS Dentist</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-white/50">
          Premium dental care clinic in Sikandra, Agra. Rated 5.0 ⭐ by 119+ patients.
          </p>
          <div className="flex gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} aria-label={label}
                className="w-8 h-8 bg-white/10 flex items-center justify-center hover:bg-gold transition-colors rounded-full">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-bold text-xs uppercase tracking-[2px] text-gold-light mb-5 pb-2.5 border-b border-gold/30">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="text-sm text-white/50 hover:text-gold-light transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-gold inline-block" />{label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-xs uppercase tracking-[2px] text-gold-light mb-5 pb-2.5 border-b border-gold/30">Contact Info</h4>
          <div className="flex flex-col gap-3 text-sm text-white/50">
            <p className="leading-relaxed">Near Anthela,<br />Sikandra,<br />Agra</p>
            <a href="tel:+917078858555" className="hover:text-gold-light transition-colors font-medium">+91 70788 58555</a>
            <a href="mailto:info@vssmilebloom.in" className="hover:text-gold-light transition-colors">info@vssmilebloom.in</a>
            <p className="text-xs text-white/30 mt-1">Mon–Sat: 10AM–8PM · Sun: 10AM–2PM</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/30">
        <p>© {new Date().getFullYear()} V.S. Smile Bloom Dental & Aesthetics. All rights reserved.</p>
        <p>Sikandra, Agra</p>
      </div>
    </footer>
  );
}
