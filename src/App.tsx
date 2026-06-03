import { useEffect, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import LookbookSection from './components/LookbookSection';
import TestimonialSection from './components/TestimonialSection';
import BookingSection from './components/BookingSection';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import TermsOfUseModal from './components/TermsOfUseModal';
import './index.css';

function App() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  useEffect(() => {
    // Simple intersection observer for reveal animations originally in script.js
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                entry.target.classList.add('active'); // Just in case
            }
        });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.mask-reveal, .reveal-fade, .reveal-slide-left, .reveal-slide-right, .reveal-fade-in');
    revealElements.forEach(el => observer.observe(el));

    return () => {
        revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="App" style={{ overflowX: 'hidden', maxWidth: '100vw', width: '100%' }}>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <LookbookSection />
      <TestimonialSection />
      <BookingSection />
      <FAQSection />
      <ContactSection />
      <Footer 
        onOpenPrivacyPolicy={() => setIsPrivacyModalOpen(true)} 
        onOpenTermsOfUse={() => setIsTermsModalOpen(true)}
      />
      <CookieBanner onOpenPrivacyPolicy={() => setIsPrivacyModalOpen(true)} />
      <PrivacyPolicyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
      <TermsOfUseModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
    </div>
  );
}

export default App;
