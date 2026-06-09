import React from 'react';


const HeroSection: React.FC = () => {
    return (
        <section id="home" className="hero-section px-6">
            <div className="hero-bg-overlay"></div>
            <div className="hero-glow-1"></div>
            <div className="hero-glow-2"></div>
            
            <div className="deco-star star-1">
                <svg viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50,0 C50,35 65,50 100,50 C65,50 50,65 50,100 C50,65 35,50 0,50 C35,50 50,35 50,0 Z"/>
                </svg>
            </div>
            <div className="deco-star star-2">
                <svg viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50,0 C50,35 65,50 100,50 C65,50 50,65 50,100 C50,65 35,50 0,50 C35,50 50,35 50,0 Z"/>
                </svg>
            </div>

            <div className="hero-editorial-cutouts hidden md:block">
                <div className="cutout-shape cutout-1 mask-reveal delay-2" style={{backgroundImage: "url('/img/hero-2-opt.webp')"}}></div>
                <div className="cutout-shape cutout-2 mask-reveal delay-3" style={{backgroundImage: "url('/img/hero-3-opt.webp')"}}></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <span className="hero-badge mask-reveal delay-1">
                        <svg className="badge-star" viewBox="0 0 100 100" fill="currentColor">
                            <path d="M50,0 C50,35 65,50 100,50 C65,50 50,65 50,100 C50,65 35,50 0,50 C35,50 50,35 50,0 Z"/>
                        </svg>
                        ✦ O SEU REFÚGIO DE AUTOCUIDADO NO TATUAPÉ
                    </span>
                    <h1 className="hero-title font-serif text-5xl md:text-6xl font-semibold mask-reveal delay-2">A Arte de Revelar a Sua <span className="font-serif italic text-accent-brass">Identidade</span>.</h1>
                    <p className="hero-subtitle font-sans font-light leading-relaxed  text-base mask-reveal delay-3">Esqueça o óbvio. Unimos técnicas autorais de Visagismo, Hair Styling, Nail Design e Make Up em um ambiente aconchegante que te transforma na sua melhor versão.</p>
                    <div className="hero-btns mask-reveal delay-4">
                        <a href="#booking" className="btn btn-brand font-sans font-medium uppercase tracking-wider hover:bg-accent-brass transition-colors">RESERVAR MEU MOMENTO</a>
                        <div className="social-proof-cluster">
                            <div className="avatar-group">
                                <img src="/img/clientes/small_cliente1-opt.webp" alt="Cliente do Spazio Beauty exibindo cabelo finalizado" width="48" height="48" className="avatar-img" />
                                <img src="/img/clientes/small_cliente2-opt.webp" alt="Cliente do Spazio com unhas em gel e design de sobrancelha" width="48" height="48" className="avatar-img" />
                                <img src="/img/clientes/small_cliente3-opt.webp" alt="Cliente Spazio Beauty com maquiagem e penteado para evento" width="48" height="48" className="avatar-img" />
                            </div>
                            <span className="social-proof-text font-serif italic text-accent-brass">Mais de 3.8k mulheres transformadas</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="hero-scrolldown">
                <a href="#about" className="scroll-indicator">
                    <span>Deslize</span>
                    <div className="mouse-icon">
                        <div className="wheel"></div>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
