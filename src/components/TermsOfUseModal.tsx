import React, { useEffect } from 'react';

interface TermsOfUseModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const TermsOfUseModal: React.FC<TermsOfUseModalProps> = ({ isOpen, onClose }) => {
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
                    <div>
                        <h2 className="font-serif text-3xl font-semibold" style={{ color: '#445D48', margin: 0 }}>Termos de Uso</h2>
                        <p className="font-sans font-light uppercase" style={{ color: '#74603B', fontSize: '0.75rem', letterSpacing: '0.1em', margin: '4px 0 0 0' }}>
                            Última atualização: Junho de 2026
                        </p>
                    </div>
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
                <div style={{ padding: '32px', color: 'rgba(60, 60, 52, 0.9)' }} className="font-sans font-light leading-relaxed">
                    
                    <section style={{ marginBottom: '40px' }}>
                        <h3 className="font-serif font-medium mb-4" style={{ color: '#445D48', fontSize: '1.5rem' }}>1. Definições e Objeto</h3>
                        <p style={{ margin: '0 0 16px 0' }}>
                            Estes Termos de Uso regem a utilização do ambiente digital do Spazio Beauty (Razão Social: Centro de Beleza Tatuapé, inscrita no CNPJ sob o nº 27.201.652/0001-40). Nossa plataforma funciona exclusivamente como um portfólio interativo (Lookbook) e catálogo de serviços. Não somos um e-commerce e não realizamos vendas, checkouts ou agendamentos automatizados diretamente no site.
                        </p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h3 className="font-serif font-medium mb-4" style={{ color: '#445D48', fontSize: '1.5rem' }}>2. Cadastro e Acesso</h3>
                        <p style={{ margin: '0 0 16px 0' }}>
                            Não exigimos criação de conta, login ou senha para navegar em nossa plataforma. O recurso de "Assistente de Agendamento" presente no site atua apenas como um organizador de informações: ele formata os dados preenchidos (como seu Nome e serviço desejado) para gerar uma mensagem de texto pronta.
                        </p>
                        <p style={{ margin: '0 0 16px 0' }}>
                            Ao clicar no botão de envio, você é direcionado(a) com essa mensagem pré-formatada diretamente para o nosso aplicativo de WhatsApp, onde o atendimento e a marcação real ocorrerão de forma 100% humana com a nossa equipe.
                        </p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h3 className="font-serif font-medium mb-4" style={{ color: '#445D48', fontSize: '1.5rem' }}>3. Conduta do Usuário</h3>
                        <p style={{ margin: '0 0 16px 0' }}>
                            Para mantermos a excelência do nosso atendimento no Tatuapé, ao utilizar nosso formulário de direcionamento, é proibido:
                        </p>
                        <ul style={{ paddingLeft: '24px', listStyleType: 'disc', margin: '16px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <li>Inserir dados falsos, números de terceiros ou praticar qualquer tentativa de fraude ou trote.</li>
                            <li>Utilizar robôs ou scripts para disparar mensagens em massa (spam) para o nosso WhatsApp através do link do site.</li>
                            <li>Utilizar linguagem ofensiva ou discriminatória na mensagem gerada.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h3 className="font-serif font-medium mb-4" style={{ color: '#445D48', fontSize: '1.5rem' }}>4. Propriedade Intelectual</h3>
                        <p style={{ margin: '0 0 16px 0' }}>
                            A identidade do nosso oásis é exclusiva. Todos os elementos visuais deste site, incluindo logotipos, códigos-fonte, paleta de cores, design de interface e as fotografias do nosso portfólio são protegidos por leis de direitos autorais. É terminantemente proibida a cópia, reprodução, distribuição ou uso não autorizado de qualquer material da nossa marca.
                        </p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h3 className="font-serif font-medium mb-4" style={{ color: '#445D48', fontSize: '1.5rem' }}>5. Limitação de Responsabilidade</h3>
                        <p style={{ margin: '0 0 16px 0' }}>
                            Os valores exibidos na plataforma servem apenas como referência. O orçamento final e a viabilidade do serviço são confirmados exclusivamente durante o atendimento via WhatsApp ou na avaliação presencial. 
                        </p>
                        <p style={{ margin: '0 0 16px 0' }}>
                            O Spazio Beauty isenta-se de responsabilidade por falhas de conexão que impeçam o redirecionamento para o WhatsApp. Destacamos também que resultados estéticos e capilares são estritamente individuais, dependendo do histórico biológico de cada cliente, não configurando as imagens do site uma promessa de resultado idêntico.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-serif font-medium mb-4" style={{ color: '#445D48', fontSize: '1.5rem' }}>6. Resolução de Conflitos</h3>
                        <p style={{ margin: '0 0 16px 0' }}>
                            Estes Termos de Uso são regidos pela legislação da República Federativa do Brasil. Para a resolução de quaisquer controvérsias ou disputas judiciais relativas ao uso desta plataforma, fica eleito o Foro da Comarca de São Paulo - SP, com exclusão de qualquer outro, por mais privilegiado que seja.
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

export default TermsOfUseModal;
