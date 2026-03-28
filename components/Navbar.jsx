'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-soft py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-400 rounded-xl flex items-center justify-center shadow-blue">
            <span className="text-white font-bold text-sm tracking-wide">ID</span>
          </div>
          <div className="leading-tight">
            <p className="font-bold text-gray-900 text-base">Integrity Dental</p>
            <p className="text-primary text-xs font-medium">Ex-AIIMS Dentist</p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors relative group">
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary rounded-full group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+919911739439"
            className="flex items-center gap-2 text-sm font-semibold text-primary border-2 border-primary/20 bg-primary-light rounded-full px-4 py-2 hover:border-primary transition-all">
            <Phone size={14} /> +91 99117 39439
          </a>
          <a href="#appointment"
            className="text-sm font-semibold bg-gradient-to-r from-primary to-blue-500 text-white rounded-full px-5 py-2.5 hover:shadow-blue transition-all hover:-translate-y-0.5 shadow-md">
            Book Appointment
          </a>
        </div>

        <button className="lg:hidden text-gray-700 p-2" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-5 py-5 flex flex-col gap-4 shadow-card">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors py-1">
              {l.label}
            </a>
          ))}
          <a href="#appointment" onClick={() => setOpen(false)}
            className="text-sm font-semibold bg-gradient-to-r from-primary to-blue-500 text-white rounded-full px-5 py-3 text-center hover:shadow-blue transition-all mt-2">
            Book Appointment
          </a>
        </div>
      )}
    </header>
  );
}
