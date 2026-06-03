import React, { useState } from 'react';

const faqs = [
    {
        question: "Como funciona a avaliação visagista?",
        answer: "Antes de qualquer procedimento capilar ou de design de sobrancelhas, realizamos uma rápida consultoria para entender seu formato de rosto, subtom de pele e estilo de vida, garantindo um resultado que harmonize perfeitamente com você."
    },
    {
        question: "Qual a durabilidade do alongamento em Fibra de Vidro?",
        answer: "Com a manutenção correta realizada a cada 20 ou 30 dias, o alongamento em fibra de vidro pode durar meses mantendo o aspecto natural e a resistência."
    },
    {
        question: "Posso agendar mais de um serviço no mesmo dia?",
        answer: "Sim! Pensando no seu conforto e otimização de tempo, possuímos pacotes onde você pode realizar cabelo, unhas e maquiagem de forma simultânea ou sequencial com nossa equipe."
    },
    {
        question: "Quais as formas de pagamento aceitas?",
        answer: "Para sua comodidade, aceitamos pagamentos via PIX, cartões de débito e crédito (com parcelamento em até 3x sem juros para procedimentos acima de R$ 300)."
    }
];

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" style={{ paddingTop: '100px', paddingBottom: '100px', backgroundColor: '#F9F8F6' }}>
            <div className="px-6" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span className="font-sans font-medium uppercase text-sm" style={{ color: '#8E794D', letterSpacing: '0.15em' }}>— Dúvidas Frequentes</span>
                    <h2 className="font-serif font-semibold" style={{ color: '#445D48', fontSize: '2.5rem', marginTop: '16px' }}>Sua Experiência Spazio</h2>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {faqs.map((faq, index) => (
                        <div key={index} style={{ borderBottom: '1px solid rgba(68, 93, 72, 0.1)', paddingBottom: '16px' }}>
                            <button 
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', padding: '16px 0', background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}
                            >
                                <h3 className="font-serif font-medium" style={{ color: '#445D48', fontSize: '1.25rem', margin: 0, paddingRight: '16px' }}>{faq.question}</h3>
                                <span style={{ color: '#8E794D', fontSize: '1.8rem', fontWeight: 300, transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>
                                    +
                                </span>
                            </button>
                            
                            <div 
                                style={{ 
                                    maxHeight: openIndex === index ? '200px' : '0', 
                                    overflow: 'hidden', 
                                    transition: 'max-height 0.4s ease-in-out' 
                                }}
                            >
                                <p className="font-sans font-light leading-relaxed" style={{ color: 'rgba(60, 60, 52, 0.8)', fontSize: '1rem', margin: 0, paddingTop: '8px', paddingBottom: '16px' }}>
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
