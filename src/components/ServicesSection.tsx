import React, { useState } from 'react';

const ServicesSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState('cabelo');

    return (
        <section id="services" className="services-section px-6" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
            <div className="deco-star star-3">
                <svg viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50,0 C50,35 65,50 100,50 C65,50 50,65 50,100 C50,65 35,50 0,50 C35,50 50,35 50,0 Z"/>
                </svg>
            </div>

            <div className="container">
                <div className="text-center-heading">
                    <span className="section-badge font-sans font-medium uppercase tracking-wider">Especialidades</span>
                    <h2 className="section-title text-brand font-serif text-5xl md:text-6xl font-semibold">Nossos Serviços de Elite</h2>
                    <p className="section-subtitle font-sans font-light leading-relaxed text-text-dark text-base">Escolha uma categoria para explorar os cuidados e assinaturas exclusivas do nosso salão.</p>
                </div>
                
                <div className="services-tabs-container">
                    <div className="services-tabs" role="tablist">
                        <button className={`tab-btn ${activeTab === 'cabelo' ? 'active' : ''}`} role="tab" onClick={() => setActiveTab('cabelo')}>
                            <i className="fa-solid fa-scissors"></i>
                            <span>Cabelos</span>
                        </button>
                        <button className={`tab-btn ${activeTab === 'unhas' ? 'active' : ''}`} role="tab" onClick={() => setActiveTab('unhas')}>
                            <i className="fa-solid fa-hand-sparkles"></i>
                            <span>Unhas e Nail Design</span>
                        </button>
                        <button className={`tab-btn ${activeTab === 'make' ? 'active' : ''}`} role="tab" onClick={() => setActiveTab('make')}>
                            <i className="fa-solid fa-wand-magic-sparkles"></i>
                            <span>Make & Olhar</span>
                        </button>
                    </div>
                    
                    <div className="tab-content-wrapper">
                        
                        <div className={`tab-panel ${activeTab === 'cabelo' ? 'active' : ''}`} role="tabpanel">
                            <div className="panel-grid">
                                <div className="panel-text">
                                    <h3 className="panel-title font-serif text-3xl font-semibold">Cabelos com Conceito & Técnica</h3>
                                    <p className="panel-desc font-sans font-light leading-relaxed text-text-dark text-base">Oferecemos cortes de alta precisão baseados em visagismo, além de colorações íntegras e mechas artísticas criadas sob medida para o seu estilo.</p>
                                    
                                    <ul className="service-menu-list">
                                        <li className="flex items-center gap-4">
                                            <img src="/img/penteado-express/image.png" alt="Penteado Express" className="w-16 h-16 rounded-md object-cover shadow-sm border border-[#445D48]/10" />
                                            <div className="flex-1">
                                                <div className="service-menu-item flex-1">
                                                    <span className="service-name font-sans font-medium text-lg">Penteado Express</span>
                                                    <span className="service-price font-sans font-medium text-text-dark">R$ 138,00</span>
                                                </div>
                                                <p className="service-details font-sans font-light leading-relaxed text-text-dark text-sm mt-1">Trança Semi Preso.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <img src="/img/penteado-festa/image.png" alt="Penteado Festa" className="w-16 h-16 rounded-md object-cover shadow-sm border border-[#445D48]/10" />
                                            <div className="flex-1">
                                                <div className="service-menu-item flex-1">
                                                    <span className="service-name font-sans font-medium text-lg">Penteado Festa</span>
                                                    <span className="service-price font-sans font-medium text-text-dark">R$ 189,00</span>
                                                </div>
                                                <p className="service-details font-sans font-light leading-relaxed text-text-dark text-sm mt-1">Rabo de cavalo e coques estruturados.</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="#booking" className="btn btn-brand btn-sm font-sans font-medium uppercase tracking-wider hover:bg-accent-brass transition-colors"><i className="fa-brands fa-whatsapp"></i> Agendar Cabelo</a>
                                </div>
                                <div className="panel-visual">
                                    <img src="/img/penteado-festa/image.png" alt="Corte e Penteado Spazio Beauty" className="panel-img" />
                                </div>
                            </div>
                        </div>
                        
                        <div className={`tab-panel ${activeTab === 'unhas' ? 'active' : ''}`} role="tabpanel">
                            <div className="panel-grid">
                                <div className="panel-text">
                                    <h3 className="panel-title font-serif text-3xl font-semibold">Unhas em Gel & Nail Art Autoral</h3>
                                    <p className="panel-desc font-sans font-light leading-relaxed text-text-dark text-base">Especialistas em alongamento em gel de altíssima durabilidade, com técnicas modernas que cuidam e respeitam a estrutura natural das unhas.</p>
                                    
                                    <ul className="service-menu-list">
                                        <li className="flex items-center gap-4">
                                            <img src="/img/manicure-esmaltacao-gel/image.png" alt="Manicure e Esmaltação em Gel" className="w-16 h-16 rounded-md object-cover shadow-sm border border-[#445D48]/10" />
                                            <div className="flex-1">
                                                <div className="service-menu-item flex-1">
                                                    <span className="service-name font-sans font-medium text-lg">Manicure + Esmaltação em Gel</span>
                                                    <span className="service-price font-sans font-medium text-text-dark">R$ 95,00</span>
                                                </div>
                                                <p className="service-details font-sans font-light leading-relaxed text-text-dark text-sm mt-1">Acabamento impecável e alta durabilidade.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <img src="/img/alongamento-fibra-vidro/image.png" alt="Alongamento Fibra de Vidro" className="w-16 h-16 rounded-md object-cover shadow-sm border border-[#445D48]/10" />
                                            <div className="flex-1">
                                                <div className="service-menu-item flex-1">
                                                    <span className="service-name font-sans font-medium text-lg">Alongamento Fibra de Vidro</span>
                                                    <span className="service-price font-sans font-medium text-text-dark">R$ 250,00</span>
                                                </div>
                                                <p className="service-details font-sans font-light leading-relaxed text-text-dark text-sm mt-1">Resistência extrema com aspecto fino e natural.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <img src="/img/pedicure-tradicional/image.png" alt="Pedicure Tradicional" className="w-16 h-16 rounded-md object-cover shadow-sm border border-[#445D48]/10" />
                                            <div className="flex-1">
                                                <div className="service-menu-item flex-1">
                                                    <span className="service-name font-sans font-medium text-lg">Pedicure Tradicional</span>
                                                    <span className="service-price font-sans font-medium text-text-dark">R$ 45,00</span>
                                                </div>
                                                <p className="service-details font-sans font-light leading-relaxed text-text-dark text-sm mt-1">Cuidados clássicos com hidratação para os pés.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <img src="/img/manicure-tradicional/image.png" alt="Manicure Tradicional" className="w-16 h-16 rounded-md object-cover shadow-sm border border-[#445D48]/10" />
                                            <div className="flex-1">
                                                <div className="service-menu-item flex-1">
                                                    <span className="service-name font-sans font-medium text-lg">Manicure Tradicional</span>
                                                    <span className="service-price font-sans font-medium text-text-dark">R$ 42,00</span>
                                                </div>
                                                <p className="service-details font-sans font-light leading-relaxed text-text-dark text-sm mt-1">Cutilagem perfeita e esmaltação premium.</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="#booking" className="btn btn-brand btn-sm font-sans font-medium uppercase tracking-wider hover:bg-accent-brass transition-colors"><i className="fa-brands fa-whatsapp"></i> Agendar Unhas</a>
                                </div>
                                <div className="panel-visual">
                                    <img src="/img/alongamento-fibra-vidro/image.png" alt="Unhas em Gel Spazio Beauty" className="panel-img" />
                                </div>
                            </div>
                        </div>
                        
                        <div className={`tab-panel ${activeTab === 'make' ? 'active' : ''}`} role="tabpanel">
                            <div className="panel-grid">
                                <div className="panel-text">
                                    <h3 className="panel-title font-serif text-3xl font-semibold">Maquiagem Social & Design do Olhar</h3>
                                    <p className="panel-desc font-sans font-light leading-relaxed text-text-dark text-base">Oferecemos maquiagens sofisticadas de altíssima fixação e tratamentos delicados para harmonização e curvatura dos seus cílios e sobrancelhas.</p>
                                    
                                    <ul className="service-menu-list">
                                        <li className="flex items-center gap-4">
                                            <img src="/img/make-festa/image.png" alt="Make Festa" className="w-16 h-16 rounded-md object-cover shadow-sm border border-[#445D48]/10" />
                                            <div className="flex-1">
                                                <div className="service-menu-item flex-1">
                                                    <span className="service-name font-sans font-medium text-lg">Make Festa</span>
                                                    <span className="service-price font-sans font-medium text-text-dark">R$ 189,00</span>
                                                </div>
                                                <p className="service-details font-sans font-light leading-relaxed text-text-dark text-sm mt-1">Inclui contorno, iluminação e delineado.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <img src="/img/design-sobrancelha/image.png" alt="Design de Sobrancelha" className="w-16 h-16 rounded-md object-cover shadow-sm border border-[#445D48]/10" />
                                            <div className="flex-1">
                                                <div className="service-menu-item flex-1">
                                                    <span className="service-name font-sans font-medium text-lg">Design de Sobrancelha</span>
                                                    <span className="service-price font-sans font-medium text-text-dark">R$ 60,00</span>
                                                </div>
                                                <p className="service-details font-sans font-light leading-relaxed text-text-dark text-sm mt-1">Alinhamento e desenho harmônico dos fios.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <img src="/img/design-sobrancelha-henna/image.png" alt="Design de Sobrancelha com Henna" className="w-16 h-16 rounded-md object-cover shadow-sm border border-[#445D48]/10" />
                                            <div className="flex-1">
                                                <div className="service-menu-item flex-1">
                                                    <span className="service-name font-sans font-medium text-lg">Design com Henna</span>
                                                    <span className="service-price font-sans font-medium text-text-dark">R$ 70,00</span>
                                                </div>
                                                <p className="service-details font-sans font-light leading-relaxed text-text-dark text-sm mt-1">Preenchimento temporário para maior volume e definição.</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="#booking" className="btn btn-brand btn-sm font-sans font-medium uppercase tracking-wider hover:bg-accent-brass transition-colors"><i className="fa-brands fa-whatsapp"></i> Agendar Make Up</a>
                                </div>
                                <div className="panel-visual">
                                    <img src="/img/make-festa/image.png" alt="Maquiagem Spazio Beauty" className="panel-img" />
                                </div>
                            </div>
                        </div>
                        

                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
