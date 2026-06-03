import React, { useState } from 'react';

const AboutSection: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

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
                        <span className="section-badge font-sans font-medium uppercase tracking-wider">— BEM-VINDO</span>
                        <h2 className="section-title font-serif text-4xl md:text-5xl font-semibold overlap-headline">Bem-vindo ao <span className="font-serif italic text-accent-brass">Spazio Beauty Tatuapé</span>.</h2>
                        
                        <blockquote className="curator-poem">
                            <p className="concept-quote-text font-serif italic text-accent-brass">Onde a sua beleza autêntica<br/>ganha destaque de forma natural.</p>
                        </blockquote>
                        
                        <p className="about-desc font-sans font-light leading-relaxed text-text-dark text-base">
                            Há mais de 7 anos, o Spazio Beauty nasceu no coração do Tatuapé com o propósito de ir muito além da estética tradicional. Nós não acreditamos em padrões moldados, mas sim na <strong>beleza autêntica</strong> — aquela que já existe em você e que merece ser evidenciada de maneira natural, leve e única.
                        </p>

                        {!isExpanded && (
                            <button 
                                onClick={() => setIsExpanded(true)}
                                className="font-sans font-semibold uppercase tracking-wider text-sm mt-2 cursor-pointer"
                                style={{ color: 'var(--color-brand-green)', textDecoration: 'underline', background: 'none', border: 'none', padding: 0 }}
                            >
                                Ler mais
                            </button>
                        )}

                        {isExpanded && (
                            <div className="expanded-content">
                                <p className="about-desc font-sans font-light leading-relaxed text-text-dark text-base mt-4">
                                    Ao chegar no Spazio, fica fácil entender por que tantas pessoas retornam e fazem daqui o seu lugar de cuidado: o carinho acolhe desde a recepção, a experiência é acompanhada por mimos com bebidas deliciosas e você desfruta da deliciosa sensação de estar em um salão de bairro, mas com o padrão de atendimento e o talento de profissionais de grandes salões.
                                </p>
                                <p className="about-desc font-sans font-light leading-relaxed text-text-dark text-base">
                                    Para nós, cada visita é uma oportunidade de entregar mais do que um serviço de excelência — é viver uma <strong>verdadeira experiência de bem-estar</strong>.
                                </p>

                                <div className="mt-12">
                                    <h3 className="font-serif text-2xl font-semibold mb-4" style={{ color: 'var(--color-brand-green)' }}>Nossa História: Um Sonho Feito de Pessoas para Pessoas</h3>
                                    <p className="about-desc font-sans font-light leading-relaxed text-text-dark text-base">
                                        A nossa trajetória começou com uma grande virada de chave. Após anos de dedicação ao universo corporativo, a administradora de empresas Renata Vezzetti decidiu transformar sua carreira. Apaixonada por entregar beleza e bem-estar, ela resolveu unir sua sólida experiência em gestão e sua sensibilidade no trato com as pessoas para dar vida a um grande sonho.
                                    </p>
                                    <p className="about-desc font-sans font-light leading-relaxed text-text-dark text-base">
                                        Foi assim que nasceu o Spazio Beauty: um conceito fundamentado na premissa de <strong>pessoas cuidando de pessoas</strong>. Renata trouxe o olhar humanizado do cuidado aliado à eficiência da administração, criando um refúgio acolhedor no bairro para quem busca um tempo de qualidade consigo mesma.
                                    </p>
                                </div>

                                <div className="mt-12">
                                    <h3 className="font-serif text-2xl font-semibold mb-6" style={{ color: 'var(--color-brand-green)' }}>Por que Escolher o Spazio Beauty?</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="feature-item-minimal">
                                            <span className="feature-roman font-serif italic text-accent-brass">I.</span>
                                            <div className="feature-text-block">
                                                <h4 className="feature-title font-serif text-lg font-semibold" style={{ textTransform: 'none', letterSpacing: 'normal' }}>Tradição e Carinho no Tatuapé</h4>
                                                <p className="font-sans font-light leading-relaxed text-text-dark text-sm">Mais de 7 anos de história, credibilidade e um ambiente familiar onde você é recebida com mimos exclusivos e bebidas deliciosas.</p>
                                            </div>
                                        </div>
                                        <div className="feature-item-minimal">
                                            <span className="feature-roman font-serif italic text-accent-brass">II.</span>
                                            <div className="feature-text-block">
                                                <h4 className="feature-title font-serif text-lg font-semibold" style={{ textTransform: 'none', letterSpacing: 'normal' }}>O Melhor de Dois Mundos</h4>
                                                <p className="font-sans font-light leading-relaxed text-text-dark text-sm">O aconchego e a proximidade de um salão de bairro somados ao nível técnico de profissionais de grandes salões.</p>
                                            </div>
                                        </div>
                                        <div className="feature-item-minimal">
                                            <span className="feature-roman font-serif italic text-accent-brass">III.</span>
                                            <div className="feature-text-block">
                                                <h4 className="feature-title font-serif text-lg font-semibold" style={{ textTransform: 'none', letterSpacing: 'normal' }}>Equipe de Especialistas</h4>
                                                <p className="font-sans font-light leading-relaxed text-text-dark text-sm">Nosso time é composto por profissionais altamente qualificados, que passam por constantes atualizações para trazer as melhores tendências e técnicas até você.</p>
                                            </div>
                                        </div>
                                        <div className="feature-item-minimal">
                                            <span className="feature-roman font-serif italic text-accent-brass">IV.</span>
                                            <div className="feature-text-block">
                                                <h4 className="feature-title font-serif text-lg font-semibold" style={{ textTransform: 'none', letterSpacing: 'normal' }}>Beleza Natural</h4>
                                                <p className="font-sans font-light leading-relaxed text-text-dark text-sm">Nosso foco é realçar os seus melhores traços, respeitando sua identidade e garantindo resultados harmônicos e elegantes.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <button 
                                    onClick={() => setIsExpanded(false)}
                                    className="font-sans font-semibold uppercase tracking-wider text-sm mt-8 cursor-pointer"
                                    style={{ color: 'var(--color-brand-green)', textDecoration: 'underline', background: 'none', border: 'none', padding: 0 }}
                                >
                                    Ler menos
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
