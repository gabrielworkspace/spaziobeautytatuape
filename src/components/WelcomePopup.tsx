import React, { useState, useEffect } from 'react';

const WelcomePopup: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [submitState, setSubmitState] = useState<'form' | 'success' | 'duplicate'>('form');
    const [isLoading, setIsLoading] = useState(false);
    const [statusMsg, setStatusMsg] = useState({ text: '', color: '' });
    const [formData, setFormData] = useState({ nome: '', cpf: '', telefone: '' });

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target;

        if (name === 'cpf') {
            value = value.replace(/\D/g, '');
            if (value.length > 11) value = value.slice(0, 11);
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        } else if (name === 'telefone') {
            value = value.replace(/\D/g, '');
            if (value.length > 11) value = value.slice(0, 11);
            value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
            value = value.replace(/(\d)(\d{4})$/, '$1-$2');
        }

        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setStatusMsg({ text: 'Enviando...', color: '#6B6B63' });
        
        try {
            const response = await fetch('https://hook.us2.make.com/yyc86gsqnrk23c1ayrs21fqv3wuk4ggl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            const textResponse = await response.text();
            let isDuplicate = false;
            let responseMsg = 'Cadastro realizado com sucesso!';

            try {
                const resultado = JSON.parse(textResponse);
                if (resultado.status && resultado.status !== 'novo') {
                    isDuplicate = true;
                    if (resultado.mensagem) responseMsg = resultado.mensagem;
                } else if (resultado.mensagem) {
                    responseMsg = resultado.mensagem;
                }
            } catch (e) {
                // Not JSON, assume default success message from Make text
            }

            if (response.ok) {
                if (isDuplicate) {
                    setStatusMsg({ text: responseMsg, color: 'orange' });
                    setTimeout(() => {
                        setSubmitState('duplicate');
                    }, 1500);
                } else {
                    setStatusMsg({ text: responseMsg, color: 'green' });
                    setTimeout(() => {
                        setSubmitState('success');
                    }, 1500);
                }
            } else {
                throw new Error(`Falha no envio: Código ${response.status}`);
            }
            
        } catch (error: any) {
            console.error('Erro ao enviar lead:', error);
            setStatusMsg({ 
                text: `Erro de conexão: O navegador bloqueou o envio (CSP, AdBlock ou CORS). Detalhe: ${error.message}`, 
                color: 'red' 
            });
        } finally {
            setIsLoading(false);
        }
    };

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
        }} onClick={handleClose}>
            
            <div style={{
                backgroundColor: '#F9F8F6',
                width: '100%',
                maxWidth: '500px',
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                animation: 'maskRevealAnim 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards'
            }} onClick={(e) => e.stopPropagation()}>
                
                {/* Close Button */}
                <button 
                    onClick={handleClose}
                    style={{
                        position: 'absolute',
                        top: '16px',
                        right: '24px',
                        background: 'none',
                        border: 'none',
                        fontSize: '2rem',
                        color: '#445D48',
                        cursor: 'pointer',
                        lineHeight: 1,
                        zIndex: 10
                    }}
                    aria-label="Fechar"
                >
                    &times;
                </button>

                {!isOpen ? null : submitState === 'form' ? (
                    <div style={{ padding: '40px 32px 32px 32px' }}>
                        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                            <h2 className="font-serif text-3xl font-semibold mb-3" style={{ color: '#445D48', lineHeight: 1.1 }}>
                                Presente de<br /> <span className="italic text-accent-brass">Boas-Vindas</span>
                            </h2>
                            <p className="font-sans font-light" style={{ color: 'rgba(60, 60, 52, 0.8)', fontSize: '0.95rem' }}>
                                Preencha seus dados para receber <strong>10% de desconto</strong> no seu primeiro agendamento conosco.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div>
                                <input 
                                    type="text" 
                                    id="nome"
                                    name="nome" 
                                    placeholder="Seu Nome Completo" 
                                    required 
                                    value={formData.nome}
                                    onChange={handleInputChange}
                                    style={{
                                        width: '100%',
                                        padding: '14px 20px',
                                        borderRadius: '8px',
                                        border: '1px solid rgba(68, 93, 72, 0.2)',
                                        backgroundColor: '#FFFFFF',
                                        fontFamily: 'var(--font-sans)',
                                        fontSize: '0.9rem',
                                        color: '#3C3C34',
                                        outline: 'none'
                                    }}
                                />
                            </div>
                            <div>
                                <input 
                                    type="text" 
                                    id="cpf"
                                    name="cpf" 
                                    placeholder="CPF" 
                                    required 
                                    value={formData.cpf}
                                    onChange={handleInputChange}
                                    style={{
                                        width: '100%',
                                        padding: '14px 20px',
                                        borderRadius: '8px',
                                        border: '1px solid rgba(68, 93, 72, 0.2)',
                                        backgroundColor: '#FFFFFF',
                                        fontFamily: 'var(--font-sans)',
                                        fontSize: '0.9rem',
                                        color: '#3C3C34',
                                        outline: 'none'
                                    }}
                                />
                            </div>
                            <div>
                                <input 
                                    type="tel" 
                                    id="telefone"
                                    name="telefone" 
                                    placeholder="Telefone (WhatsApp)" 
                                    required 
                                    value={formData.telefone}
                                    onChange={handleInputChange}
                                    style={{
                                        width: '100%',
                                        padding: '14px 20px',
                                        borderRadius: '8px',
                                        border: '1px solid rgba(68, 93, 72, 0.2)',
                                        backgroundColor: '#FFFFFF',
                                        fontFamily: 'var(--font-sans)',
                                        fontSize: '0.9rem',
                                        color: '#3C3C34',
                                        outline: 'none'
                                    }}
                                />
                            </div>

                            {statusMsg.text && submitState === 'form' && (
                                <div style={{ 
                                    color: statusMsg.color, 
                                    fontSize: '0.85rem', 
                                    textAlign: 'center',
                                    padding: '8px',
                                    borderRadius: '4px',
                                    backgroundColor: statusMsg.color === 'red' ? 'rgba(220, 53, 69, 0.1)' : 'transparent'
                                }}>
                                    {statusMsg.text}
                                </div>
                            )}

                            <button 
                                type="submit" 
                                id="enviar"
                                disabled={isLoading}
                                className="btn btn-brand" 
                                style={{ 
                                    width: '100%', 
                                    marginTop: '8px', 
                                    padding: '16px',
                                    borderRadius: '8px',
                                    fontSize: '0.9rem',
                                    letterSpacing: '1.5px',
                                    opacity: isLoading ? 0.7 : 1,
                                    cursor: isLoading ? 'wait' : 'pointer'
                                }}
                            >
                                {isLoading ? 'ENVIANDO...' : 'RESGATAR MEU PRESENTE'}
                            </button>
                            
                        </form>
                        <p className="font-sans text-center mt-4" style={{ fontSize: '0.75rem', color: '#6B6B63' }}>
                            Ao resgatar, você concorda em receber comunicações exclusivas do Spazio Beauty.
                        </p>
                    </div>
                ) : (
                    <div style={{ padding: '60px 32px', textAlign: 'center' }}>
                        <div style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            backgroundColor: submitState === 'success' ? 'rgba(142, 121, 77, 0.1)' : 'rgba(220, 53, 69, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 24px auto',
                            color: submitState === 'success' ? '#74603B' : '#DC3545'
                        }}>
                            {submitState === 'success' ? (
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            ) : (
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="15" y1="9" x2="9" y2="15"></line>
                                    <line x1="9" y1="9" x2="15" y2="15"></line>
                                </svg>
                            )}
                        </div>
                        <h2 className="font-serif text-3xl font-semibold mb-4" style={{ color: '#445D48' }}>
                            {submitState === 'success' ? 'Tudo Certo!' : 'Aviso'}
                        </h2>
                        <p id="mensagem" className="font-sans font-light mb-6" style={{ color: 'rgba(60, 60, 52, 0.8)', fontSize: '1rem', lineHeight: 1.6 }}>
                            {statusMsg.text}
                        </p>
                        <button 
                            onClick={handleClose}
                            className="btn btn-brand" 
                            style={{ 
                                width: '100%', 
                                padding: '16px',
                                borderRadius: '8px',
                                marginTop: '16px'
                            }}
                        >
                            FECHAR
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WelcomePopup;
