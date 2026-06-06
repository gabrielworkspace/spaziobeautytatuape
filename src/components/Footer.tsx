import React from 'react';

interface FooterProps {
    onOpenPrivacyPolicy?: () => void;
    onOpenTermsOfUse?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenPrivacyPolicy, onOpenTermsOfUse }) => {
    return (
        <footer className="footer px-6">
            <div className="container footer-container">
                
                {/* Coluna 1 (Marca & Essência) */}
                <div className="footer-brand">
                    <a href="#" className="logo">
                        <img src="/img/spazio-logo.png" alt="Spazio Beauty Logo" style={{ height: '80px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                    </a>
                    <p className="footer-tagline" style={{ marginTop: '16px' }}>
                        Seu refúgio de autocuidado no Tatuapé.
                    </p>
                    <div className="footer-socials" style={{ marginTop: '24px' }}>
                        <a href="https://www.instagram.com/spaziobeautytatuape" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com/esmalterianacionalazevedosoares?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="https://wa.me/5511951441205" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                    </div>
                </div>

                {/* Coluna 2 (Atendimento & Localização) */}
                <div className="footer-services">
                    <h3>Contato</h3>
                    <ul style={{ fontSize: '0.85rem', color: 'var(--color-brand-green-pale)', opacity: 0.85, lineHeight: '1.8' }}>
                        <li>Rua Azevedo Soares, 1604 - Tatuapé</li>
                        <li>São Paulo - SP, 03322-001</li>
                        <li style={{ marginTop: '12px' }}><strong>WhatsApp:</strong> (11) 95144-1205</li>
                        <li><strong>E-mail:</strong> contato@spaziobeauty.com.br</li>
                    </ul>
                </div>

                {/* Coluna 3 (Legal & Transparência) */}
                <div className="footer-links">
                    <h3>Políticas</h3>
                    <ul>
                        <li>
                            <button 
                                onClick={(e) => { e.preventDefault(); onOpenPrivacyPolicy && onOpenPrivacyPolicy(); }}
                                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'inherit' }}
                                className="hover:text-accent-gold transition-colors"
                            >
                                Política de Privacidade
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={(e) => { e.preventDefault(); onOpenTermsOfUse && onOpenTermsOfUse(); }}
                                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'inherit' }}
                                className="hover:text-accent-gold transition-colors"
                            >
                                Termos de Uso
                            </button>
                        </li>
                        <li><a href="#">Aviso de Cookies</a></li>
                    </ul>
                </div>

            </div>

            {/* Barra Inferior (Copyright e CNPJ) */}
            <div className="footer-bottom">
                <div className="container footer-bottom-container">
                    <p>&copy; 2026 Spazio Beauty. Todos os direitos reservados. CNPJ: 27.201.652/0001-40</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
