import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Book Appointment', href: '#appointment' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-6 px-5 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-400 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-sm">ID</span>
            </div>
            <div>
              <p className="font-bold text-white text-base">Integrity Dental</p>
              <p className="text-primary text-xs font-medium">Ex-AIIMS Dentist</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-500">
            Premium dental care by an Ex-AIIMS trained dentist in South Extension, New Delhi. Rated 5.0 ⭐ by 173+ patients.
          </p>
          <div className="flex gap-2.5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} aria-label={label}
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="text-sm text-gray-500 hover:text-primary transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-primary rounded-full" />{label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Contact Info</h4>
          <div className="flex flex-col gap-3 text-sm text-gray-500">
            <p className="leading-relaxed">Shop No. 21 & 22, 2nd Floor, D-15 Building,<br />Near Croma, South Extension Part-II,<br />New Delhi – 110049</p>
            <a href="tel:+919911739439" className="hover:text-primary transition-colors font-medium">+91 99117 39439</a>
            <a href="mailto:info@integritydental.in" className="hover:text-primary transition-colors">info@integritydental.in</a>
            <p className="text-xs text-gray-600 mt-1">Mon–Sat: 10AM–8PM | Sun: 10AM–2PM</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
        <p>© {new Date().getFullYear()} Integrity Dental. All rights reserved.</p>
        <p>South Extension Part-II, New Delhi</p>
      </div>
    </footer>
  );
}
