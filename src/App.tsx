import { useEffect, useState, Suspense, lazy } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import LazyScroll from './components/LazyScroll';
import './index.css';

// Lazy loading the rest of the application
const ServicesSection = lazy(() => import('./components/ServicesSection'));
const LookbookSection = lazy(() => import('./components/LookbookSection'));
const TestimonialSection = lazy(() => import('./components/TestimonialSection'));
const BookingSection = lazy(() => import('./components/BookingSection'));
const FAQSection = lazy(() => import('./components/FAQSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const Footer = lazy(() => import('./components/Footer'));
const CookieBanner = lazy(() => import('./components/CookieBanner'));
const PrivacyPolicyModal = lazy(() => import('./components/PrivacyPolicyModal'));
const TermsOfUseModal = lazy(() => import('./components/TermsOfUseModal'));

function App() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  useEffect(() => {
    // Simple intersection observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                entry.target.classList.add('active'); // Just in case
            }
        });
    }, { threshold: 0.1 });

    // Function to observe elements
    const observeElements = () => {
        const revealElements = document.querySelectorAll('.mask-reveal:not(.revealed), .reveal-fade:not(.revealed), .reveal-slide-left:not(.revealed), .reveal-slide-right:not(.revealed), .reveal-fade-in:not(.revealed)');
        revealElements.forEach(el => observer.observe(el));
    };

    // Initial observation
    observeElements();

    // Observe DOM mutations to catch elements loaded via LazyScroll/Suspense
    const mutationObserver = new MutationObserver((mutations) => {
        let shouldObserve = false;
        mutations.forEach(mutation => {
            if (mutation.addedNodes.length > 0) {
                shouldObserve = true;
            }
        });
        if (shouldObserve) observeElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
        observer.disconnect();
        mutationObserver.disconnect();
    };
  }, []);

  return (
    <div className="App" style={{ overflowX: 'hidden', maxWidth: '100vw', width: '100%' }}>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        
        <LazyScroll minHeight="100vh">
          <Suspense fallback={<div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div className="spinner"></div></div>}>
            <ServicesSection />
            <LookbookSection />
            <TestimonialSection />
            <BookingSection />
            <FAQSection />
            <ContactSection />
          </Suspense>
        </LazyScroll>
      </main>
      
      <LazyScroll minHeight="200px">
        <Suspense fallback={null}>
          <Footer 
            onOpenPrivacyPolicy={() => setIsPrivacyModalOpen(true)} 
            onOpenTermsOfUse={() => setIsTermsModalOpen(true)}
          />
          <CookieBanner onOpenPrivacyPolicy={() => setIsPrivacyModalOpen(true)} />
          <PrivacyPolicyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
          <TermsOfUseModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
        </Suspense>
      </LazyScroll>
    </div>
  );
}

export default App;
