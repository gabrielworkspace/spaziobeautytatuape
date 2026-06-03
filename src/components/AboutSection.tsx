import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="about-section px-6" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
            <div className="container">
                <div className="about-grid">
                    <div className="about-visual reveal-slide-left">
                        <div className="about-image-wrapper">
                            <img src="/img/spazio_brass_logo_1780437007672.png" alt="Spazio Beauty Logo Brass" className="about-img" />
                            <img src="/img/spazio_diptych_arch_1780438447261.png" alt="Arquitetura Minimalista" className="about-img-diptych" />
                        </div>
                    </div>
                    
                    <div className="about-text-content reveal-slide-right">
                        <span className="section-badge font-sans font-medium uppercase tracking-wider">— SOBRE NÓS</span>
                        <h2 className="section-title font-serif text-5xl md:text-6xl font-semibold overlap-headline">A <span className="font-serif italic text-accent-brass">Essência</span> do Spazio Beauty.</h2>
                        
                        <blockquote className="curator-poem">
                            <p className="concept-quote-text font-serif italic text-accent-brass">Cada traço é cuidado.<br/>Cada toque, intenção,<br/>beleza que se revela com leveza.</p>
                        </blockquote>
                        
                        <p className="about-desc font-sans font-light leading-relaxed text-text-dark text-base">
                            Nascemos no coração do Tatuapé com o propósito de criar <strong>rituais de cuidado</strong> que vão muito além da estética simples. No Spazio Beauty, cada atendimento é personalizado para harmonizar com a sua <span className="font-serif italic text-accent-brass">identidade singular</span>, aliando técnica refinada a um ambiente de acolhimento.
                        </p>
                        <p className="about-desc font-sans font-light leading-relaxed text-text-dark text-base">
                            Nossa equipe altamente qualificada utiliza apenas produtos de nível internacional, em um espaço moderno e confortável, projetado minuciosamente para ser o seu <strong>refúgio particular</strong> de beleza e bem-estar.
                        </p>
                        
                        <div className="about-features-minimal">
                            <div className="feature-item-minimal">
                                <span className="feature-roman font-serif italic text-accent-brass">I.</span>
                                <div className="feature-text-block">
                                    <h3 className="feature-title font-serif text-xl font-semibold">Atendimento Exclusivo</h3>
                                    <p className="font-sans font-light leading-relaxed text-text-dark text-sm">Consultoria visagista individual antes de qualquer procedimento técnico.</p>
                                </div>
                            </div>
                            <div className="feature-item-minimal">
                                <span className="feature-roman font-serif italic text-accent-brass">II.</span>
                                <div className="feature-text-block">
                                    <h3 className="feature-title font-serif text-xl font-semibold">Produtos Premium</h3>
                                    <p className="font-sans font-light leading-relaxed text-text-dark text-sm">Cuidado integral utilizando as marcas mais conceituadas e seguras do mercado.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
