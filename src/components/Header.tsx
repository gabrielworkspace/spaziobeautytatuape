import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMobileOpen(!isMobileOpen);
    const closeMenu = () => setIsMobileOpen(false);

    return (
        <>
            <header 
                className={`header ${isScrolled ? 'scrolled' : ''} ${isMobileOpen ? 'mobile-open' : ''}`}
                style={{ 
                    position: 'fixed', 
                    width: '100%',
                    top: 0, 
                    zIndex: 50, 
                    backgroundColor: isScrolled ? 'rgba(235, 232, 225, 0.95)' : 'rgba(235, 232, 225, 0.85)', 
                    backdropFilter: 'blur(12px)', 
                    WebkitBackdropFilter: 'blur(12px)',
                    borderBottom: '1px solid rgba(68, 93, 72, 0.1)',
                    transition: 'all 0.3s ease'
                }}
            >
                <div className="container header-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: isScrolled ? '12px 24px' : '20px 24px', transition: 'padding 0.3s' }}>
                    
                    {/* LOGO */}
                    <a href="#" className="logo font-serif tracking-widest" style={{ textDecoration: 'none', color: '#3C3C34' }}>
                        <span className="logo-sub font-sans uppercase tracking-[0.3em] block" style={{ fontSize: '0.75rem', color: '#8E794D' }}>SPAZIO</span>
                        <span className="logo-main text-3xl" style={{ lineHeight: 1.1 }}>BEAUTY</span>
                        <span className="logo-tag font-sans font-light uppercase tracking-widest block" style={{ fontSize: '0.6rem', color: 'rgba(60, 60, 52, 0.8)', marginTop: '2px' }}>CONCEITO EM BELEZA</span>
                    </a>
                    
                    {/* NAVIGATION LINKS */}
                    <nav className={`nav-menu ${isMobileOpen ? 'active' : ''}`} id="navMenu">
                        <ul style={{ display: 'flex', gap: '32px', listStyle: 'none', margin: 0, padding: 0 }}>
                            <li>
                                <a href="#about" onClick={closeMenu} className="font-sans text-sm tracking-wide transition-colors" style={{ color: '#3C3C34', textDecoration: 'none' }} onMouseOver={(e) => e.currentTarget.style.color = '#8E794D'} onMouseOut={(e) => e.currentTarget.style.color = '#3C3C34'}>
                                    Sobre Nós
                                </a>
                            </li>
                            <li>
                                <a href="#services" onClick={closeMenu} className="font-sans text-sm tracking-wide transition-colors" style={{ color: '#3C3C34', textDecoration: 'none' }} onMouseOver={(e) => e.currentTarget.style.color = '#8E794D'} onMouseOut={(e) => e.currentTarget.style.color = '#3C3C34'}>
                                    Serviços
                                </a>
                            </li>
                            <li>
                                <a href="#lookbook" onClick={closeMenu} className="font-sans text-sm tracking-wide transition-colors" style={{ color: '#3C3C34', textDecoration: 'none' }} onMouseOver={(e) => e.currentTarget.style.color = '#8E794D'} onMouseOut={(e) => e.currentTarget.style.color = '#3C3C34'}>
                                    Lookbook
                                </a>
                            </li>
                            <li>
                                <a href="#feedbacks" onClick={closeMenu} className="font-sans text-sm tracking-wide transition-colors" style={{ color: '#3C3C34', textDecoration: 'none' }} onMouseOver={(e) => e.currentTarget.style.color = '#8E794D'} onMouseOut={(e) => e.currentTarget.style.color = '#3C3C34'}>
                                    Avaliações
                                </a>
                            </li>
                            <li>
                                <a href="#faq" onClick={closeMenu} className="font-sans text-sm tracking-wide transition-colors" style={{ color: '#3C3C34', textDecoration: 'none' }} onMouseOver={(e) => e.currentTarget.style.color = '#8E794D'} onMouseOut={(e) => e.currentTarget.style.color = '#3C3C34'}>
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </nav>
                    
                    {/* CTA E MENU MOBILE */}
                    <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <a 
                            href="#booking" 
                            className="d-none-mobile font-sans font-medium tracking-wide text-sm transition-all" 
                            style={{ 
                                backgroundColor: '#445D48', 
                                color: '#EBE8E1', 
                                padding: '12px 28px', 
                                borderRadius: '50px', 
                                textDecoration: 'none',
                                display: 'inline-block',
                                boxShadow: '0 4px 14px rgba(68, 93, 72, 0.2)'
                            }} 
                            onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor = '#3A4F3D';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 6px 20px rgba(68, 93, 72, 0.3)';
                            }} 
                            onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor = '#445D48';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 14px rgba(68, 93, 72, 0.2)';
                            }}
                        >
                            AGENDAR
                        </a>
                        <button 
                            className={`mobile-toggle ${isMobileOpen ? 'active' : ''}`} 
                            id="mobileToggle" 
                            aria-label="Abrir Menu"
                            onClick={toggleMenu}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>
            <div className={`nav-overlay ${isMobileOpen ? 'active' : ''}`} id="navOverlay" onClick={closeMenu}></div>
        </>
    );
};

export default Header;
