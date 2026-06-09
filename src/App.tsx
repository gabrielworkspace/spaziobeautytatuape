import React, { useEffect, useState, Suspense } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import './index.css';

// Lazy load sections that are below the fold
const LookbookSection = React.lazy(() => import('./components/LookbookSection'));
const TestimonialSection = React.lazy(() => import('./components/TestimonialSection'));
const BookingSection = React.lazy(() => import('./components/BookingSection'));
const FAQSection = React.lazy(() => import('./components/FAQSection'));
const ContactSection = React.lazy(() => import('./components/ContactSection'));

// Lazy load Modals and Popups
const CookieBanner = React.lazy(() => import('./components/CookieBanner'));
const PrivacyPolicyModal = React.lazy(() => import('./components/PrivacyPolicyModal'));
const TermsOfUseModal = React.lazy(() => import('./components/TermsOfUseModal'));
const WelcomePopup = React.lazy(() => import('./components/WelcomePopup'));

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
      
      <Suspense fallback={<div className="py-20 text-center"><i className="fa-solid fa-spinner fa-spin text-2xl text-[#8E794D]"></i></div>}>
        <LookbookSection />
        <TestimonialSection />
        <BookingSection />
        <FAQSection />
        <ContactSection />
      </Suspense>

      <Footer 
        onOpenPrivacyPolicy={() => setIsPrivacyModalOpen(true)} 
        onOpenTermsOfUse={() => setIsTermsModalOpen(true)}
      />
      
      <Suspense fallback={null}>
        <CookieBanner onOpenPrivacyPolicy={() => setIsPrivacyModalOpen(true)} />
        <PrivacyPolicyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
        <TermsOfUseModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
        <WelcomePopup />
      </Suspense>
    </div>
  );
}

export default App;
