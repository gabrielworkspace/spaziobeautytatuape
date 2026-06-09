import React, { useState } from 'react';

const faqs = [
    {
        question: "Tem estacionamento?",
        answer: "Possuímos convênio com valet por apenas R$ 10,00 o período de 12 horas. Esse serviço está disponível de terça a sábado a partir das 11h45."
    },
    {
        question: "Como funciona a avaliação com o hair stylist?",
        answer: "A avaliação feita pelos nossos profissionais é muito importante se você quer realizar um trabalho de química como botox ou luzes. Indicamos um agendamento para avaliação e orçamento personalizado."
    },
    {
        question: "Minhas unhas estão fracas, o que eu faço?",
        answer: "O Spazio Beauty possui técnicas para proteção, fortalecimento e alongamento natural das unhas. Utilizamos desde blindagem das unhas com gel até alongamentos em fibra de vidro. A avaliação pelas nossas nails designers é essencial. Agende um horário conosco e descubra a solução perfeita."
    },
    {
        question: "Posso agendar mais de um serviço no mesmo dia?",
        answer: "Prezamos pela agilidade nos serviços, pois entendemos que o tempo de nossas clientes é o bem mais precioso. Aqui no Spazio realizamos a maioria dos serviços capilares em conjunto com as unhas. Entre em contato e nos informe sobre sua necessidade para que possamos realizar as reservas em conjunto."
    },
    {
        question: "Quais as formas de pagamento aceitas?",
        answer: "Aceitamos Pix, débito e crédito parcelado sem juros. Consulte as condições na recepção."
    }
];

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" style={{ padding: '80px 0', backgroundColor: '#F9F8F6' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span className="font-sans font-medium uppercase text-sm" style={{ color: '#74603B', letterSpacing: '0.15em' }}>— Dúvidas Frequentes</span>
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
                                <span style={{ color: '#74603B', fontSize: '1.8rem', fontWeight: 300, transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>
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
