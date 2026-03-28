import DentalBackground from '@/components/DentalBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import AboutDoctor from '@/components/AboutDoctor';
import WhyChooseUs from '@/components/WhyChooseUs';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Appointment from '@/components/Appointment';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main>
      <DentalBackground />
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <AboutDoctor />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Appointment />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
