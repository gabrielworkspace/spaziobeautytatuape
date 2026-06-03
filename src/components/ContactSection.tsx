import React from 'react';

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="contact-section px-6" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
            <div className="container">
                <div className="contact-grid">
                    
                    <div className="contact-info-block reveal-slide-left">
                        <span className="section-badge font-sans font-medium uppercase tracking-wider" style={{ color: '#8E794D' }}>— Localização</span>
                        <h2 className="section-title font-serif text-5xl md:text-6xl font-semibold mb-6">O Destino Físico</h2>
                        <p className="contact-desc font-sans font-light leading-relaxed text-text-dark text-base mb-8">
                            O Spazio Beauty está localizado no coração do Tatuapé. Uma estrutura pensada para ser o seu oásis particular, com fácil acesso e estacionamento conveniado.
                        </p>
                        
                        <div className="mb-10 rounded-xl overflow-hidden shadow-lg h-64 relative group" style={{ border: '1px solid rgba(68, 93, 72, 0.1)' }}>
                            <img 
                                src="/img/image.png" 
                                alt="Fachada Spazio Beauty" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                            <div className="absolute bottom-4 left-4 text-white font-sans font-light text-sm tracking-wide">
                                <i className="fa-solid fa-camera mr-2 opacity-70"></i> Conheça nossa estrutura
                            </div>
                        </div>
                        
                        <ul style={{ margin: '32px 0' }}>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
                                <div className="text-xl" style={{ color: '#8E794D', marginTop: '4px' }}><i className="fa-solid fa-location-dot"></i></div>
                                <div>
                                    <h4 className="font-serif text-lg font-semibold" style={{ color: '#445D48', margin: 0 }}>Endereço</h4>
                                    <p className="font-sans font-light mt-1" style={{ color: 'rgba(60, 60, 52, 0.8)', margin: 0 }}>Rua Azevedo Soares, 1604<br/>Tatuapé - São Paulo, SP</p>
                                </div>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                                <div className="text-xl" style={{ color: '#8E794D', marginTop: '4px' }}><i className="fa-solid fa-clock"></i></div>
                                <div>
                                    <h4 className="font-serif text-lg font-semibold" style={{ color: '#445D48', margin: 0 }}>Horário de Funcionamento</h4>
                                    <p className="font-sans font-light mt-1" style={{ color: 'rgba(60, 60, 52, 0.8)', margin: 0 }}>Terça a Sábado<br/>09:00 às 19:00</p>
                                </div>
                            </li>
                        </ul>
                        
                        <div style={{ marginTop: '32px' }}>
                            <a href="https://www.google.com/maps/place/Spazio+Beauty+-+Tatuap%C3%A9/@-23.548012,-46.561273,16z/data=!4m15!1m8!3m7!1s0x94ce5e8eedb337b9:0x83a90cd68f029664!2sR.+Azevedo+Soares,+1604+-+Vila+Gomes+Cardim,+S%C3%A3o+Paulo+-+SP,+03322-001!3b1!8m2!3d-23.5480121!4d-46.5612729!16s%2Fg%2F11c43vgh3p!3m5!1s0x94ce5fd2ce96cdbb:0x6e0b7af48371b7ef!8m2!3d-23.5479395!4d-46.5612602!16s%2Fg%2F11jmvv38kc?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="btn btn-brand" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                <i className="fa-solid fa-map-location-dot"></i> Como Chegar
                            </a>
                        </div>
                    </div>
                    
                    <div className="contact-map-block reveal-slide-right md:h-auto min-h-[400px] rounded-xl overflow-hidden shadow-xl relative" style={{ backgroundColor: '#EBE8E1', border: '1px solid rgba(68, 93, 72, 0.1)' }}>
                        <div className="absolute inset-0 pointer-events-none mix-blend-color z-10" style={{ backgroundColor: 'rgba(68, 93, 72, 0.2)' }}></div>
                        <iframe 
                            src="https://maps.google.com/maps?q=Spazio+Beauty+-+Tatuap%C3%A9,+R.+Azevedo+Soares,+1604&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                            width="100%" 
                            height="100%" 
                            style={{border:0, filter: 'grayscale(100%) contrast(1.1) opacity(0.9)'}} 
                            allowFullScreen={false} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa Spazio Beauty"
                            className="absolute inset-0 w-full h-full object-cover z-0"
                        ></iframe>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
