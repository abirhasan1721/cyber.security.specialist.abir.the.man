import CyberBackground from './components/CyberBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Platforms from './components/Platforms';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-cyber-blue selection:text-cyber-black">
      <CyberBackground />
      <Navbar />
      
      <main>
        <Hero />
        <Platforms />
        <About />
        <Services />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
