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
                        <img loading="lazy" src="/img/spazio-logo-opt.webp" alt="Spazio Beauty Logo" width="80" height="80" style={{ height: '80px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                    </a>
                    <p className="footer-tagline" style={{ marginTop: '16px' }}>
                        Seu refúgio de autocuidado no Tatuapé.
                    </p>
                    <div className="footer-socials" style={{ marginTop: '24px', display: 'flex', gap: '16px' }}>
                        <a href="https://www.instagram.com/spaziobeautytatuape" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        </a>
                        <a href="https://www.facebook.com/esmalterianacionalazevedosoares?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                        </a>
                        <a href="https://wa.me/5511951441205" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.888-4.439 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                        </a>
                    </div>
                </div>

                {/* Coluna 2 (Atendimento & Localização) */}
                <div className="footer-services">
                    <h3>Contato</h3>
                    <ul style={{ fontSize: '0.85rem', color: 'var(--color-bg-primary)', lineHeight: '1.8' }}>
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
