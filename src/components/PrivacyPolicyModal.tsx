import React, { useEffect } from 'react';

interface PrivacyPolicyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
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
            backdropFilter: 'blur(4px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
        }} onClick={onClose}>
            
            <div style={{
                backgroundColor: '#F9F8F6',
                width: '100%',
                maxWidth: '800px',
                maxHeight: '85vh',
                borderRadius: '16px',
                overflowY: 'auto',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                display: 'flex',
                flexDirection: 'column'
            }} onClick={(e) => e.stopPropagation()}>
                
                {/* Header do Modal */}
                <div style={{
                    padding: '24px 32px',
                    borderBottom: '1px solid rgba(68, 93, 72, 0.1)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'sticky',
                    top: 0,
                    backgroundColor: '#F9F8F6',
                    zIndex: 10
                }}>
                    <h2 className="font-serif text-3xl font-semibold" style={{ color: '#445D48', margin: 0 }}>Política de Privacidade</h2>
                    <button 
                        onClick={onClose}
                        style={{
                            background: 'none',
                            border: 'none',
                            fontSize: '2rem',
                            color: '#74603B',
                            cursor: 'pointer',
                            lineHeight: 1
                        }}
                        aria-label="Fechar"
                    >
                        &times;
                    </button>
                </div>

                {/* Conteúdo da Política */}
                <div style={{ padding: '32px', color: 'rgba(60, 60, 52, 0.8)' }} className="font-sans font-light leading-relaxed">
                    <section style={{ marginBottom: '40px' }}>
                        <h3 className="font-serif font-medium mb-4" style={{ color: '#445D48', fontSize: '1.5rem' }}>1. Nosso Compromisso</h3>
                        <p style={{ margin: '0 0 16px 0' }}>
                            No Spazio Beauty (Razão Social: Centro de Beleza Tatuapé, inscrita no CNPJ sob o nº 27.201.652/0001-40, com sede no Tatuapé, SP), a proteção da sua identidade e dos seus dados é tratada com o mesmo cuidado e exclusividade que dedicamos ao seu atendimento físico. Esta política detalha como operamos nosso catálogo digital e protegemos suas informações.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-serif font-medium mb-4" style={{ color: '#445D48', fontSize: '1.5rem' }}>2. Coleta e Fluxo de Dados</h3>
                        <p style={{ margin: '0 0 16px 0' }}>
                            Nosso ambiente digital é um espaço de vitrine e conexão. Não realizamos transações financeiras (checkout) diretamente no site.
                        </p>
                        <p style={{ margin: '0 0 16px 0' }}>
                            Para proporcionar um atendimento ágil e processar sua solicitação de agendamento (ou presente de boas-vindas), coletamos de forma voluntária os dados preenchidos nos formulários.
                        </p>
                        <p style={{ margin: '0' }}>
                            <strong>Importante:</strong> Informamos que os dados inseridos (como Nome, CPF e Telefone) são trafegados via <em>webhook</em> e processados através da ferramenta de automação Make. Em seguida, essas informações são salvas de forma segura em uma planilha do Google Sheets e redirecionadas para o nosso e-mail oficial (<strong>spaziobeautytatuape@gmail.com</strong>). O objetivo deste fluxo é exclusivamente garantir que nossa equipe receba sua solicitação e dê continuidade ao seu atendimento da melhor forma possível.
                        </p>
                    </section>
                    
                    <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid rgba(68, 93, 72, 0.1)', textAlign: 'center' }}>
                        <button 
                            onClick={onClose}
                            className="btn btn-brand" 
                            style={{ display: 'inline-block', padding: '12px 32px' }}
                        >
                            Compreendido
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PrivacyPolicyModal;
