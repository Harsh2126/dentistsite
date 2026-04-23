'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const links = [
  { label: 'Home',         href: '#home' },
  { label: 'Services',     href: '#services' },
  { label: 'About',        href: '#about' },
  { label: 'Why Us',       href: '#why-us' },
  { label: 'Gallery',      href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ',          href: '#faq' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      const sections = links.map(l => document.querySelector(l.href)).filter(Boolean);
      const scrollY = window.scrollY + 80;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollY) {
          setActive(links[i].href);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-white border-b border-border-light px-5 py-2.5 flex items-center justify-between">
        <div className="flex gap-3">
          <a href="#appointment"
            className="bg-gold text-white font-heading text-xs font-bold tracking-widest uppercase px-5 py-2.5 border-2 border-gold-border hover:bg-gold-hover transition-colors">
            Book Appointment
          </a>
          <a href="tel:+919911739439"
            className="border-2 border-gold-border text-gold font-heading text-xs font-bold tracking-widest uppercase px-5 py-2.5 hover:bg-gold hover:text-white transition-colors flex items-center gap-2">
            <Phone size={13} /> Call Us
          </a>
        </div>

        {/* Logo center */}
        <a href="#home" className="flex items-center gap-3 absolute left-1/2 -translate-x-1/2">
          <div className="w-14 h-14 shrink-0">
            <Image src="/Screenshot_2026-04-23_002738-removebg-preview.png" alt="VS Smile Bloom Logo" width={56} height={56} className="object-contain w-full h-full" />
          </div>
          <div className="leading-tight hidden sm:block">
            <span className="font-heading font-extrabold text-xl text-text-dark block">V.S. Smile Bloom Dental & Aesthetics</span>
            <span className="text-gold text-sm font-sans">Sikandra, Agra</span>
          </div>
        </a>

        {/* Social icons */}
        <div className="flex gap-2 items-center">
          {['f', 'in'].map((s) => (
            <a key={s} href="#"
              className="w-8 h-8 bg-gold text-white flex items-center justify-center text-xs font-bold hover:bg-gold-hover transition-colors rounded-full">
              {s}
            </a>
          ))}
        </div>
      </div>

      {/* Main nav — black bar */}
      <nav className="bg-nav-black hidden lg:block">
        <ul className="flex max-w-7xl mx-auto">
          {links.map((l) => (
            <li key={l.href} className="flex-1 border-r border-white/10 last:border-r-0">
              <a href={l.href}
                onClick={() => setActive(l.href)}
                className={`flex items-center justify-center font-heading text-xs font-semibold tracking-widest uppercase px-2 py-4 w-full transition-colors
                  ${active === l.href
                    ? 'bg-gold/30 text-gold-light border-b-2 border-gold'
                    : 'text-white hover:bg-gold/20 hover:text-gold-light'}`}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Info strip */}
      <div className="bg-gray-strip text-white/85 text-center text-xs py-2 tracking-wide hidden lg:block">
        Mon–Sat 10AM–8PM · Sun 10AM–2PM · <MapPin size={11} className="inline" /> Near Anthela, Sikandra, Agra
      </div>

      {/* Mobile toggle */}
      <div className="lg:hidden bg-nav-black px-5 py-3 flex items-center justify-between">
        <span className="text-white font-heading font-bold text-sm">V.S. Smile Bloom Dental & Aesthetics</span>
        <button onClick={() => setOpen(!open)} className="text-white">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-nav-black border-t border-white/10">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block font-heading text-xs font-semibold tracking-widest uppercase px-6 py-3.5 text-white border-b border-white/10 hover:bg-gold/20 hover:text-gold-light transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
