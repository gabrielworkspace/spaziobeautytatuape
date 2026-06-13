import React, { useState } from 'react';
import { Scissors, WandSparkles, MessageCircle, Droplet, Gem, Footprints } from 'lucide-react';

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
                    <p className="section-subtitle font-sans font-light leading-relaxed  text-base">Escolha uma categoria para explorar os cuidados e expertise do nosso salão.</p>
                </div>
                
                <div className="services-tabs-container">
                    <div className="services-tabs" role="tablist">
                        <button className={`tab-btn ${activeTab === 'cabelo' ? 'active' : ''}`} role="tab" onClick={() => setActiveTab('cabelo')}>
                            <Scissors size={28} />
                            <span>Cabelos</span>
                        </button>
                        <button className={`tab-btn ${activeTab === 'unhas' ? 'active' : ''}`} role="tab" onClick={() => setActiveTab('unhas')}>
                            <Droplet size={28} />
                            <span>Unhas</span>
                        </button>
                        <button className={`tab-btn ${activeTab === 'nail_design' ? 'active' : ''}`} role="tab" onClick={() => setActiveTab('nail_design')}>
                            <Gem size={28} />
                            <span>Nail Design</span>
                        </button>
                        <button className={`tab-btn ${activeTab === 'podologia' ? 'active' : ''}`} role="tab" onClick={() => setActiveTab('podologia')}>
                            <Footprints size={28} />
                            <span>Podologia</span>
                        </button>
                        <button className={`tab-btn ${activeTab === 'make' ? 'active' : ''}`} role="tab" onClick={() => setActiveTab('make')}>
                            <WandSparkles size={28} />
                            <span>Make & Olhar</span>
                        </button>
                    </div>
                    
                    <div className="tab-content-wrapper">
                        
                        <div className={`tab-panel ${activeTab === 'cabelo' ? 'active' : ''}`} role="tabpanel">
                            <div className="panel-grid">
                                <div className="panel-text">
                                    <h3 className="panel-title font-serif text-3xl font-semibold">Cabelos com Conceito & Técnica</h3>
                                    <p className="panel-desc font-sans font-light leading-relaxed  text-base">Oferecemos cortes de alta precisão baseados em visagismo, além de colorações íntegras e mechas artísticas criadas sob medida para o seu estilo.</p>
                                    
                                    <ul className="service-menu-list">
                                        <li className="flex items-center gap-4">
                                            <img loading="lazy" src="/img/servicos/penteado-opt.webp" alt="Penteado" width="64" height="64"  className="w-16 h-16 rounded-md object-cover shadow-sm border border-[#445D48]/10" />
                                            <div className="flex-1">
                                                <div className="service-menu-item flex-1">
                                                    <span className="service-name font-sans font-medium text-lg">Penteado</span>
                                                    <span className="service-price font-sans font-medium ">a partir de R$ 189,00</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <img loading="lazy" src="/img/servicos/corte-feminino-opt.webp" alt="Corte Feminino" width="64" height="64"  className="w-16 h-16 rounded-md object-cover shadow-sm border border-[#445D48]/10" />
                                            <div className="flex-1">
                                                <div className="service-menu-item flex-1">
                                                    <span className="service-name font-sans font-medium text-lg">Corte Feminino</span>
                                                    <span className="service-price font-sans font-medium ">R$ 100,00</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <img loading="lazy" src="/img/servicos/escova-lisa-opt.webp" alt="Escova" width="64" height="64"  className="w-16 h-16 rounded-md object-cover shadow-sm border border-[#445D48]/10" />
                                            <div className="flex-1">
                                                <div className="service-menu-item flex-1">
                                                    <span className="service-name font-sans font-medium text-lg">Escova Lisa ou Modelada</span>
                                                    <span className="service-price font-sans font-medium ">a partir de R$ 88,00</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <img loading="lazy" src="/img/servicos/coloracao-opt.webp" alt="Coloração" width="64" height="64"  className="w-16 h-16 rounded-md object-cover shadow-sm border border-[#445D48]/10" />
                                            <div className="flex-1">
                                                <div className="service-menu-item flex-1">
                                                    <span className="service-name font-sans font-medium text-lg">Coloração</span>
                                                    <span className="service-price font-sans font-medium ">a partir de R$ 120,00</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <img loading="lazy" src="/img/servicos/luzes-opt.webp" alt="Luzes" width="64" height="64"  className="w-16 h-16 rounded-md object-cover shadow-sm border border-[#445D48]/10" />
                                            <div className="flex-1">
                                                <div className="service-menu-item flex-1">
                                                    <span className="service-name font-sans font-medium text-lg">Luzes</span>
                                                    <span className="service-price font-sans font-medium ">a partir de R$ 490,00</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <img loading="lazy" src="/img/servicos/botox-progressiva-opt.webp" alt="Botox e Progressiva" width="64" height="64"  className="w-16 h-16 rounded-md object-cover shadow-sm border border-[#445D48]/10" />
                                            <div className="flex-1">
                                                <div className="service-menu-item flex-1">
                                                    <span className="service-name font-sans font-medium text-lg">Botox e Progressivas</span>
                                                    <span className="service-price font-sans font-medium ">a partir de R$ 250,00</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="#booking" className="btn btn-brand btn-sm font-sans font-medium uppercase tracking-wider hover:bg-accent-brass transition-colors"><MessageCircle size={18} className="inline mr-2" /> Agendar Cabelo</a>
                                </div>
                                <div className="panel-visual">
                                    <img loading="lazy" src="/img/penteado-festa/image-opt.webp" alt="Corte e Penteado Spazio Beauty" className="panel-img" />
                                </div>
                            </div>
                        </div>
                        
                        <div className={`tab-panel ${activeTab === 'unhas' ? 'active' : ''}`} role="tabpanel">
                            <div className="panel-grid">
                                <div className="panel-text">
                                    <h3 className="panel-title font-serif text-3xl font-semibold">Unhas Tradicionais</h3>
                                    <p className="panel-desc font-sans font-light leading-relaxed  text-base">Cuidados clássicos para as suas unhas com cutilagem perfeita e esmaltação premium.</p>
                                    
                                    <ul className="service-menu-list">
                                        <li className="flex items-center gap-4">
                                            <img loading="lazy" src="/img/pedicure-tradicional/image-opt-thumb.webp" alt="Pedicure Tradicional" width="64" height="64"  className="w-16 h-16 rounded-md object-cover shadow-sm border border-[#445D48]/10" />
                                            <div className="flex-1">
                                                <div className="service-menu-item flex-1">
                                                    <span className="service-name font-sans font-medium text-lg">Pedicure Tradicional</span>
                                                    <span className="service-price font-sans font-medium ">R$ 48,00</span>
                                                </div>
                                                <p className="service-details font-sans font-light leading-relaxed  text-sm mt-1">Cuidados clássicos para os pés.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <img loading="lazy" src="/img/servicos/manicure-tradicional-opt.webp" alt="Manicure Tradicional" width="64" height="64"  className="w-16 h-16 rounded-md object-cover shadow-sm border border-[#445D48]/10" />
                                            <div className="flex-1">
                                                <div className="service-menu-item flex-1">
                                                    <span className="service-name font-sans font-medium text-lg">Manicure Tradicional</span>
                                                    <span className="service-price font-sans font-medium ">R$ 45,00</span>
                                                </div>
                                                <p className="service-details font-sans font-light leading-relaxed  text-sm mt-1">Cutilagem perfeita e esmaltação premium.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <img loading="lazy" src="/img/servicos/pe-e-mao-opt.webp" alt="Pé e Mão" width="64" height="64"  className="w-16 h-16 rounded-md object-cover shadow-sm border border-[#445D48]/10" />
                                            <div className="flex-1">
                                                <div className="service-menu-item flex-1">
                                                    <span className="service-name font-sans font-medium text-lg">Pé e Mão</span>
                                                    <span className="service-price font-sans font-medium ">R$ 83,00</span>
                                                </div>
                                                <p className="service-details font-sans font-light leading-relaxed  text-sm mt-1">Unindo dois serviços com valor especial.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <img loading="lazy" src="/img/servicos/spa-dos-pes-opt.webp" alt="Spa dos Pés com Bota Térmica" width="64" height="64"  className="w-16 h-16 rounded-md object-cover shadow-sm border border-[#445D48]/10" />
                                            <div className="flex-1">
                                                <div className="service-menu-item flex-1">
                                                    <span className="service-name font-sans font-medium text-lg">Spa dos Pés com Bota Térmica</span>
                                                    <span className="service-price font-sans font-medium ">R$ 30,00</span>
                                                </div>
                                                <p className="service-details font-sans font-light leading-relaxed  text-sm mt-1">Hidratação profunda e esfoliação.</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="#booking" className="btn btn-brand btn-sm font-sans font-medium uppercase tracking-wider hover:bg-accent-brass transition-colors mt-6"><MessageCircle size={18} className="inline mr-2" /> Agendar Unhas</a>
                                </div>
                                <div className="panel-visual">
                                    <img loading="lazy" src="/img/servicos/pe-e-mao-opt.webp" alt="Unhas Tradicionais Spazio Beauty" className="panel-img" />
                                </div>
                            </div>
                        </div>

                        <div className={`tab-panel ${activeTab === 'nail_design' ? 'active' : ''}`} role="tabpanel">
                            <div className="panel-grid">
                                <div className="panel-text">
                                    <h3 className="panel-title font-serif text-3xl font-semibold">Nail Design & Alongamentos</h3>
                                    <p className="panel-desc font-sans font-light leading-relaxed  text-base">Especialistas em alongamento em gel de altíssima durabilidade, com técnicas modernas que cuidam e respeitam a estrutura natural das unhas.</p>
                                    
                                    <ul className="service-menu-list">
                                        <li className="flex items-center gap-4">
                                            <img loading="lazy" src="/img/manicure-esmaltacao-gel/image-opt-thumb.webp" alt="Manicure e Esmaltação em Gel" width="64" height="64"  className="w-16 h-16 rounded-md object-cover shadow-sm border border-[#445D48]/10" />
                                            <div className="flex-1">
                                                <div className="service-menu-item flex-1">
                                                    <span className="service-name font-sans font-medium text-lg">Manicure + Esmaltação em Gel</span>
                                                    <span className="service-price font-sans font-medium ">R$ 100,00</span>
                                                </div>
                                                <p className="service-details font-sans font-light leading-relaxed  text-sm mt-1">Acabamento impecável e alta durabilidade.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <img loading="lazy" src="/img/alongamento-fibra-vidro/image-opt-thumb.webp" alt="Alongamentos Naturais" width="64" height="64"  className="w-16 h-16 rounded-md object-cover shadow-sm border border-[#445D48]/10" />
                                            <div className="flex-1">
                                                <div className="service-menu-item flex-1">
                                                    <span className="service-name font-sans font-medium text-lg">Alongamentos Naturais</span>
                                                    <span className="service-price font-sans font-medium ">a partir de R$ 180,00</span>
                                                </div>
                                                <p className="service-details font-sans font-light leading-relaxed  text-sm mt-1">Resistência extrema com aspecto fino e natural.</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="#booking" className="btn btn-brand btn-sm font-sans font-medium uppercase tracking-wider hover:bg-accent-brass transition-colors mt-6"><MessageCircle size={18} className="inline mr-2" /> Agendar Nail Design</a>
                                </div>
                                <div className="panel-visual">
                                    <img loading="lazy" src="/img/alongamento-fibra-vidro/image-opt.webp" alt="Unhas em Gel Spazio Beauty" className="panel-img" />
                                </div>
                            </div>
                        </div>

                        <div className={`tab-panel ${activeTab === 'podologia' ? 'active' : ''}`} role="tabpanel">
                            <div className="panel-grid">
                                <div className="panel-text">
                                    <h3 className="panel-title font-serif text-3xl font-semibold">Podologia</h3>
                                    <p className="panel-desc font-sans font-light leading-relaxed  text-base">Tratamentos especializados para a saúde e bem-estar dos seus pés, garantindo conforto e hidratação profunda.</p>
                                    
                                    <ul className="service-menu-list">

                                        <li className="flex items-center gap-4">
                                            <img loading="lazy" src="/img/servicos/podologia-opt.webp" alt="Podologia Simples" width="64" height="64"  className="w-16 h-16 rounded-md object-cover shadow-sm border border-[#445D48]/10" />
                                            <div className="flex-1">
                                                <div className="service-menu-item flex-1">
                                                    <span className="service-name font-sans font-medium text-lg">Podologia Simples</span>
                                                    <span className="service-price font-sans font-medium ">R$ 130,00</span>
                                                </div>
                                                <p className="service-details font-sans font-light leading-relaxed  text-sm mt-1">Remoção de calosidades, rachaduras e hidratação especial.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <img loading="lazy" src="/img/servicos/calo-remocao.png" alt="Calo e Calosidade - Remoção" width="64" height="64"  className="w-16 h-16 rounded-md object-cover shadow-sm border border-[#445D48]/10" />
                                            <div className="flex-1">
                                                <div className="service-menu-item flex-1">
                                                    <span className="service-name font-sans font-medium text-lg">Calo e Calosidade - Remoção</span>
                                                    <span className="service-price font-sans font-medium ">R$ 70,00</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <img loading="lazy" src="/img/servicos/corte-unhas.png" alt="Corte correto das unhas e limpeza" width="64" height="64"  className="w-16 h-16 rounded-md object-cover shadow-sm border border-[#445D48]/10" />
                                            <div className="flex-1">
                                                <div className="service-menu-item flex-1">
                                                    <span className="service-name font-sans font-medium text-lg">Corte correto das unhas e limpeza</span>
                                                    <span className="service-price font-sans font-medium ">R$ 50,00</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <img loading="lazy" src="/img/servicos/curativo-infeccao.png" alt="Curativo Infecção" width="64" height="64"  className="w-16 h-16 rounded-md object-cover shadow-sm border border-[#445D48]/10" />
                                            <div className="flex-1">
                                                <div className="service-menu-item flex-1">
                                                    <span className="service-name font-sans font-medium text-lg">Curativo Infecção</span>
                                                    <span className="service-price font-sans font-medium ">a partir de R$ 150,00</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <img loading="lazy" src="/img/servicos/ortese-fibra.png" alt="Órtese de fibra" width="64" height="64"  className="w-16 h-16 rounded-md object-cover shadow-sm border border-[#445D48]/10" />
                                            <div className="flex-1">
                                                <div className="service-menu-item flex-1">
                                                    <span className="service-name font-sans font-medium text-lg">Órtese de fibra</span>
                                                    <span className="service-price font-sans font-medium ">R$ 100,00</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <img loading="lazy" src="/img/servicos/spa-reflexologia.png" alt="Spa dos pés + reflexologia" width="64" height="64"  className="w-16 h-16 rounded-md object-cover shadow-sm border border-[#445D48]/10" />
                                            <div className="flex-1">
                                                <div className="service-menu-item flex-1">
                                                    <span className="service-name font-sans font-medium text-lg">Spa dos pés + reflexologia</span>
                                                    <span className="service-price font-sans font-medium ">R$ 85,00</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="#booking" className="btn btn-brand btn-sm font-sans font-medium uppercase tracking-wider hover:bg-accent-brass transition-colors mt-6"><MessageCircle size={18} className="inline mr-2" /> Agendar Podologia</a>
                                </div>
                                <div className="panel-visual">
                                    <img loading="lazy" src="/img/servicos/podologia-opt.webp" alt="Podologia Spazio Beauty" className="panel-img" />
                                </div>
                            </div>
                        </div>
                        
                        <div className={`tab-panel ${activeTab === 'make' ? 'active' : ''}`} role="tabpanel">
                            <div className="panel-grid">
                                <div className="panel-text">
                                    <h3 className="panel-title font-serif text-3xl font-semibold">Maquiagem Social & Design do Olhar</h3>
                                    <p className="panel-desc font-sans font-light leading-relaxed  text-base">Oferecemos maquiagens sofisticadas de altíssima fixação e tratamentos delicados para harmonização e curvatura dos seus cílios e sobrancelhas.</p>
                                    
                                    <ul className="service-menu-list">
                                        <li className="flex items-center gap-4">
                                            <img loading="lazy" src="/img/servicos/make-up-opt.webp" alt="Make Up" width="64" height="64"  className="w-16 h-16 rounded-md object-cover shadow-sm border border-[#445D48]/10" />
                                            <div className="flex-1">
                                                <div className="service-menu-item flex-1">
                                                    <span className="service-name font-sans font-medium text-lg">Make Up</span>
                                                    <span className="service-price font-sans font-medium ">a partir de R$ 189,00</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <img loading="lazy" src="/img/servicos/extensao-cilios-opt.webp" alt="Extensão de Cílios e Brow Lamination" width="64" height="64"  className="w-16 h-16 rounded-md object-cover shadow-sm border border-[#445D48]/10" />
                                            <div className="flex-1">
                                                <div className="service-menu-item flex-1">
                                                    <span className="service-name font-sans font-medium text-lg">Extensão de Cílios e Brow Lamination</span>
                                                    <span className="service-price font-sans font-medium ">a partir de R$ 150,00</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <img loading="lazy" src="/img/servicos/design-sobrancelha-opt.webp" alt="Limpeza e Design de Sobrancelha" width="64" height="64"  className="w-16 h-16 rounded-md object-cover shadow-sm border border-[#445D48]/10" />
                                            <div className="flex-1">
                                                <div className="service-menu-item flex-1">
                                                    <span className="service-name font-sans font-medium text-lg">Limpeza e Design de Sobrancelha</span>
                                                    <span className="service-price font-sans font-medium ">a partir de R$ 45,00</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <a href="#booking" className="btn btn-brand btn-sm font-sans font-medium uppercase tracking-wider hover:bg-accent-brass transition-colors"><MessageCircle size={18} className="inline mr-2" /> Agendar Make Up</a>
                                </div>
                                <div className="panel-visual">
                                    <img loading="lazy" src="/img/servicos/capa-make-opt.webp" alt="Maquiagem Spazio Beauty" className="panel-img" />
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
