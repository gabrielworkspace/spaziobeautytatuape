import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="about-section px-6" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
            <div className="container">
                <div className="text-center mb-16 flex flex-col items-center reveal-slide-up">
                    <span className="section-badge font-sans font-medium uppercase tracking-wider block mx-auto">— BEM-VINDO</span>
                    <h2 className="section-title font-serif text-4xl md:text-5xl font-semibold mx-auto" style={{ marginLeft: 0 }}>Bem-vindo ao <span className="font-serif italic text-accent-brass">Spazio Beauty Tatuapé</span>.</h2>
                    
                    <blockquote className="curator-poem mx-auto" style={{ margin: '40px auto' }}>
                        <p className="concept-quote-text font-serif italic text-accent-brass">"Onde a sua beleza autêntica<br/>ganha destaque de forma natural."</p>
                    </blockquote>
                </div>

                <div className="about-grid">
                    <div className="about-visual reveal-slide-left">
                        <div className="about-image-wrapper">
                            <img loading="lazy" src="/img/about-main-opt.webp" alt="Spazio Beauty" className="about-img" />
                            <img loading="lazy" src="/img/image-opt.webp" alt="Arquitetura Minimalista" className="about-img-diptych" />
                        </div>
                    </div>
                    
                    <div className="about-text-content reveal-slide-right text-left">
                        <p className="about-desc font-sans font-light leading-relaxed text-neutral-800 text-base">
                            Há mais de 7 anos, criamos um refúgio no coração do Tatuapé para quem busca ir além da estética tradicional. Nós não acreditamos em padrões engessados. Acreditamos na beleza que já existe em você — leve, única e que merece ser evidenciada com naturalidade.
                        </p>
                        
                        <p className="about-desc font-sans font-light leading-relaxed text-neutral-800 text-base">
                            O Spazio nasceu de uma grande virada de chave da fundadora Renata Vezzetti, que deixou o mundo corporativo para unir gestão de excelência e extrema sensibilidade humana. O resultado? O acolhimento intimista de um salão de bairro elevado ao rigor técnico dos maiores estúdios de beleza. Para nós, cada visita não é apenas um serviço, é um ritual de bem-estar.
                        </p>

                        <div className="mt-12 w-full">
                            <h3 className="font-serif text-2xl font-semibold mb-6" style={{ color: 'var(--color-brand-green)' }}>Por que Escolher o Spazio Beauty?</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full text-left">
                                <div className="feature-item-minimal">
                                    <span className="feature-roman font-serif italic text-accent-brass">I.</span>
                                    <div className="feature-text-block">
                                        <h3 className="feature-title font-serif text-lg font-semibold" style={{ textTransform: 'none', letterSpacing: 'normal' }}>O Melhor de Dois Mundos</h3>
                                        <p className="font-sans font-light leading-relaxed text-neutral-800 text-sm">O aconchego e o carinho de um espaço intimista, somados ao nível técnico de profissionais de grandes salões.</p>
                                    </div>
                                </div>
                                <div className="feature-item-minimal">
                                    <span className="feature-roman font-serif italic text-accent-brass">II.</span>
                                    <div className="feature-text-block">
                                        <h3 className="feature-title font-serif text-lg font-semibold" style={{ textTransform: 'none', letterSpacing: 'normal' }}>Cuidado Humanizado</h3>
                                        <p className="font-sans font-light leading-relaxed text-neutral-800 text-sm">Uma experiência que abraça. Desde a recepção com mimos exclusivos e bebidas selecionadas, até o toque final do seu atendimento.</p>
                                    </div>
                                </div>
                                <div className="feature-item-minimal">
                                    <span className="feature-roman font-serif italic text-accent-brass">III.</span>
                                    <div className="feature-text-block">
                                        <h3 className="feature-title font-serif text-lg font-semibold" style={{ textTransform: 'none', letterSpacing: 'normal' }}>Especialistas de Elite</h3>
                                        <p className="font-sans font-light leading-relaxed text-neutral-800 text-sm">Um time de alto calibre em constante atualização para trazer as técnicas e tendências globais diretamente para você.</p>
                                    </div>
                                </div>
                                <div className="feature-item-minimal">
                                    <span className="feature-roman font-serif italic text-accent-brass">IV.</span>
                                    <div className="feature-text-block">
                                        <h3 className="feature-title font-serif text-lg font-semibold" style={{ textTransform: 'none', letterSpacing: 'normal' }}>Foco na Autenticidade</h3>
                                        <p className="font-sans font-light leading-relaxed text-neutral-800 text-sm">Nosso objetivo não é transformar quem você é, mas realçar os seus melhores traços com resultados harmônicos e elegantes.</p>
                                    </div>
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
