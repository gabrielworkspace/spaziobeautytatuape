import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CookieBannerProps {
    onOpenPrivacyPolicy?: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPrivacyPolicy }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show banner after a slight delay for better UX
        const timer = setTimeout(() => {
            const hasAccepted = localStorage.getItem('spazio_cookies_accepted');
            if (!hasAccepted) {
                setIsVisible(true);
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleAccept = () => {
        localStorage.setItem('spazio_cookies_accepted', 'true');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-4 left-0 right-0 z-[9999] pointer-events-none"
                    style={{ zIndex: 9999, display: 'flex', justifyContent: 'center', padding: '0 16px' }}
                >
                    <div style={{ backgroundColor: '#3C3C34', color: '#EBE8E1', borderRadius: '50px', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '24px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', pointerEvents: 'auto', maxWidth: '800px', border: '1px solid rgba(255,255,255,0.05)', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <p className="font-sans font-light text-sm" style={{ margin: 0, flex: '1 1 300px', color: '#EBE8E1' }}>
                            Utilizamos cookies e outros rastreadores para personalizar sua experiência. Ao continuar, você concorda com nossas{' '}
                            <button 
                                onClick={(e) => { e.preventDefault(); onOpenPrivacyPolicy && onOpenPrivacyPolicy(); }}
                                style={{ background: 'none', border: 'none', padding: 0, color: '#D4AF37', textDecoration: 'underline', cursor: 'pointer', fontFamily: 'inherit' }}
                            >
                                regras de uso de rastreadores
                            </button>.
                        </p>
                        <div style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
                            <button 
                                onClick={() => setIsVisible(false)}
                                className="font-sans text-sm font-medium transition-colors"
                                style={{ padding: '10px 20px', borderRadius: '50px', border: '1px solid rgba(235, 232, 225, 0.3)', background: 'transparent', color: '#EBE8E1', cursor: 'pointer' }}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                                Preferências
                            </button>
                            <button 
                                onClick={handleAccept}
                                className="font-sans text-sm font-medium shadow-lg transition-all"
                                style={{ padding: '10px 24px', borderRadius: '50px', border: 'none', backgroundColor: '#8E794D', color: '#FFFFFF', cursor: 'pointer' }}
                                onMouseOver={(e) => e.currentTarget.style.filter = 'brightness(1.1)'}
                                onMouseOut={(e) => e.currentTarget.style.filter = 'brightness(1)'}
                            >
                                Aceitar
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieBanner;
