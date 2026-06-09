import React, { useState, useEffect } from 'react';

const BookingSection: React.FC = () => {
    const [step, setStep] = useState(1);
    const [service, setService] = useState('Cabelos');
    const [day, setDay] = useState('Terça ou Quarta');
    const [period, setPeriod] = useState('Manhã (09h - 12h)');
    const [name, setName] = useState('');
    const [notes, setNotes] = useState('');
    const [progress, setProgress] = useState(25);

    useEffect(() => {
        setProgress(step * 25);
    }, [step]);

    const nextStep = () => {
        if (step < 4) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const generateWhatsAppMessage = () => {
        const phone = "5511951441205"; 
        const message = `Olá, Spazio Beauty! Meu nome é ${name || 'Cliente'} e gostaria de solicitar um agendamento para ${service}.\n\n📅 Preferência: ${day}, no período da ${period.split(' ')[0]}.\n${notes ? `📝 Observação: ${notes}` : ''}\n\nPoderiam me informar os horários disponíveis?`;
        return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    };

    const handleWhatsAppRedirect = () => {
        window.open(generateWhatsAppMessage(), '_blank');
    };

    return (
        <section id="booking" className="booking-section px-6" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
            <div className="deco-star star-4">
                <svg viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50,0 C50,35 65,50 100,50 C65,50 50,65 50,100 C50,65 35,50 0,50 C35,50 50,35 50,0 Z"/>
                </svg>
            </div>

            <div className="container">
                <div className="booking-grid">
                    
                    <div className="booking-info-panel reveal-slide-left">
                        <span className="section-badge font-sans font-medium uppercase tracking-wider">— Agendamento Fácil</span>
                        <h2 className="section-title text-white font-serif text-5xl md:text-6xl font-semibold">Pronta para viver o seu momento Spazio Beauty?</h2>
                        <p className="booking-panel-text font-sans font-light leading-relaxed text-base opacity-90">
                            Utilize o nosso **Assistente Inteligente** ao lado para configurar o seu pré-agendamento. 
                            Com apenas 3 passos rápidos, estruturaremos a mensagem ideal para que você seja atendida com total prioridade direto no nosso WhatsApp!
                        </p>
                        
                        <div className="booking-steps-list">
                            <div className="step-card">
                                <span className="step-num font-serif italic text-accent-brass text-3xl">1</span>
                                <div>
                                    <h3 className="font-serif text-xl font-semibold">Escolha o Ritual</h3>
                                    <p className="font-sans font-light text-sm opacity-80">Selecione a especialidade que deseja realizar.</p>
                                </div>
                            </div>
                            <div className="step-card">
                                <span className="step-num font-serif italic text-accent-brass text-3xl">2</span>
                                <div>
                                    <h3 className="font-serif text-xl font-semibold">Defina o Melhor Período</h3>
                                    <p className="font-sans font-light text-sm opacity-80">Atendemos presencialmente de terça a sábado, das 09h às 21h.</p>
                                </div>
                            </div>
                            <div className="step-card">
                                <span className="step-num font-serif italic text-accent-brass text-3xl">3</span>
                                <div>
                                    <h3 className="font-serif text-xl font-semibold">Verifique a Mensagem</h3>
                                    <p className="font-sans font-light text-sm opacity-80">Confirme a prévia gerada no mock chat e clique para enviar via WhatsApp.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="booking-quiz-panel reveal-slide-right" id="bookingQuiz">
                        <div className="quiz-header">
                            <h3 className="font-sans font-medium uppercase tracking-wider text-sm ">
                                <svg className="quiz-star-icon" viewBox="0 0 100 100" fill="currentColor">
                                    <path d="M50,0 C50,35 65,50 100,50 C65,50 50,65 50,100 C50,65 35,50 0,50 C35,50 50,35 50,0 Z"/>
                                </svg>
                                Assistente de Agendamento
                            </h3>
                            <div className="quiz-progress-bar">
                                <div className="quiz-progress" style={{ width: `${progress}%` }}></div>
                            </div>
                        </div>
                        
                        <form onSubmit={(e) => e.preventDefault()}>
                            
                            {/* PASSO 1: Seleção de Serviço */}
                            {step === 1 && (
                                <div className="quiz-step active">
                                    <h3 className="quiz-step-title font-serif text-2xl font-semibold ">1. Qual serviço você deseja agendar?</h3>
                                    <div className="quiz-options-grid">
                                        {['Cabelos', 'Unhas e Nail Design', 'Make e Olhar'].map((opt) => (
                                            <label className="quiz-option-card" key={opt}>
                                                <input type="radio" name="quizService" value={opt} checked={service === opt} onChange={() => setService(opt)} />
                                                <div className="quiz-card-content">
                                                    <i className={`fa-solid ${opt === 'Cabelos' ? 'fa-scissors' : opt === 'Unhas e Nail Design' ? 'fa-hand-sparkles' : 'fa-wand-magic-sparkles'} option-icon`}></i>
                                                    <span>{opt}</span>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                    <div className="quiz-navigation">
                                        <button type="button" className="btn btn-brand btn-next-step w-100 font-sans font-medium uppercase tracking-wider hover:bg-accent-brass transition-colors" onClick={nextStep}>Avançar <i className="fa-solid fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            )}
                            
                            {/* PASSO 2: Seleção de Período */}
                            {step === 2 && (
                                <div className="quiz-step active">
                                    <h3 className="quiz-step-title font-serif text-2xl font-semibold ">2. Qual o seu dia da semana preferido?</h3>
                                    <div className="quiz-options-grid">
                                        {['Terça ou Quarta', 'Quinta ou Sexta', 'Sábado (Mais concorrido)'].map((opt) => (
                                            <label className="quiz-option-card" key={opt}>
                                                <input type="radio" name="quizDay" value={opt} checked={day === opt} onChange={() => setDay(opt)} />
                                                <div className="quiz-card-content">
                                                    <i className="fa-solid fa-calendar-day option-icon"></i>
                                                    <span>{opt.split(' (')[0]}</span>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                    
                                    <h3 className="quiz-step-title mt-4">Qual período do dia prefere?</h3>
                                    <div className="quiz-options-row">
                                        {['Manhã (09h - 12h)', 'Tarde (12h - 18h)', 'Noite (18h - 21h)'].map((opt) => (
                                            <label className="quiz-option-row-card" key={opt}>
                                                <input type="radio" name="quizPeriod" value={opt} checked={period === opt} onChange={() => setPeriod(opt)} />
                                                <span>{opt.split(' (')[0]}</span>
                                            </label>
                                        ))}
                                    </div>
                                    
                                    <div className="quiz-navigation mt-4">
                                        <button type="button" className="btn btn-outline btn-prev-step font-sans font-medium uppercase tracking-wider transition-colors" onClick={prevStep}><i className="fa-solid fa-arrow-left"></i> Voltar</button>
                                        <button type="button" className="btn btn-brand btn-next-step font-sans font-medium uppercase tracking-wider hover:bg-accent-brass transition-colors" onClick={nextStep}>Avançar <i className="fa-solid fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            )}
                            
                            {/* PASSO 3: Identificação */}
                            {step === 3 && (
                                <div className="quiz-step active">
                                    <h3 className="quiz-step-title font-serif text-2xl font-semibold ">3. Conte-nos quem é você</h3>
                                    
                                    <div className="quiz-form-group">
                                        <label htmlFor="quizName" className="quiz-form-label">Seu Nome Completo:</label>
                                        <input type="text" id="quizName" className="quiz-form-control" placeholder="Ex: Gabriela Amaral" value={name} onChange={(e) => setName(e.target.value)} required />
                                    </div>
                                    
                                    <div className="quiz-form-group">
                                        <label htmlFor="quizNotes" className="quiz-form-label">Observação ou detalhe (Opcional):</label>
                                        <textarea id="quizNotes" className="quiz-form-control" rows={3} placeholder="Ex: Preciso remover alongamento antigo..." value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
                                    </div>
                                    
                                    <div className="quiz-navigation">
                                        <button type="button" className="btn btn-outline btn-prev-step font-sans font-medium uppercase tracking-wider transition-colors" onClick={prevStep}><i className="fa-solid fa-arrow-left"></i> Voltar</button>
                                        <button type="button" className="btn btn-brand font-sans font-medium uppercase tracking-wider hover:bg-accent-brass transition-colors" onClick={() => { if(name) nextStep(); else alert('Por favor, informe seu nome.'); }}>Ver Prévia <i className="fa-solid fa-check"></i></button>
                                    </div>
                                </div>
                            )}
                            
                            {/* PASSO 4: Confirmação e Envio WhatsApp */}
                            {step === 4 && (
                                <div className="quiz-step active">
                                    <h3 className="quiz-step-title text-center font-serif text-2xl font-semibold "><i className="fa-solid fa-circle-check text-brand"></i> Tudo pronto, {name.split(' ')[0] || 'Linda'}!</h3>
                                    <p className="text-center text-muted mb-4 font-sans font-light">Veja abaixo a mensagem estruturada para sua solicitação:</p>
                                    
                                    <div className="whatsapp-preview-box">
                                        <div className="whatsapp-preview-header">
                                            <div className="whatsapp-avatar"><i className="fa-solid fa-spa"></i></div>
                                            <div className="whatsapp-header-text">
                                                <h5>Spazio Beauty</h5>
                                                <span>Online agora</span>
                                            </div>
                                        </div>
                                        <div className="whatsapp-preview-body">
                                            <div className="whatsapp-bubble">
                                                <p>Olá, Spazio Beauty! Meu nome é {name} e gostaria de solicitar um agendamento para {service} no período da {period.split(' ')[0]}...</p>
                                                <span className="bubble-time">Agora mesmo ✓✓</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="quiz-navigation">
                                        <button type="button" className="btn btn-outline btn-prev-step font-sans font-medium uppercase tracking-wider transition-colors" onClick={prevStep}><i className="fa-solid fa-arrow-left"></i> Ajustar</button>
                                        <button type="button" className="btn btn-brand font-sans font-medium uppercase tracking-wider hover:bg-accent-brass transition-colors" onClick={handleWhatsAppRedirect}><i className="fa-brands fa-whatsapp"></i> Enviar Mensagem no WhatsApp</button>
                                    </div>
                                </div>
                            )}
                            
                        </form>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default BookingSection;
