import React from 'react';

const testimonials = [
    {
        id: 1,
        name: "Silvia M.",
        badge: "Local Guide",
        text: "Eu sou a Silvia Malanzuk do Casamento às Cegas 50+ e eu estou completamente apaixonada e sendo extremamente bem tratada pela equipe da Renata aqui no Spazio Beauty! Super indico!!! Selinho amooooorrrrrr",
        stars: 5,
        time: "7 meses atrás"
    },
    {
        id: 2,
        name: "Andreza Caiero",
        badge: "9 avaliações",
        text: "Ótimo atendimento. A manicure Sandra é maravilhosa, faz a unha com qualidade e rapidez. Me senti acolhida e muito bem atendida. Também houve rapidez para arrumar um horário.",
        stars: 5,
        time: "3 meses atrás"
    },
    {
        id: 3,
        name: "Tatiane Macedo Soares",
        badge: "2 avaliações",
        text: "Ambiente maravilhoso, profissionais qualificadas, super indico😍😍😍 ...",
        stars: 5,
        time: "7 meses atrás"
    }
];

const TestimonialSection: React.FC = () => {
    return (
        <section id="feedbacks" className="px-6" style={{ backgroundColor: '#445D48', paddingTop: '100px', paddingBottom: '100px' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span className="font-sans font-medium uppercase tracking-wider" style={{ color: '#D1C4B1', display: 'block', marginBottom: '16px' }}>
                        — Experiência Comprovada
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-semibold" style={{ color: '#EBE8E1' }}>
                        O que dizem nossas clientes
                    </h2>
                    <p className="font-sans font-light mt-4 mx-auto text-center" style={{ color: 'rgba(235, 232, 225, 0.95)', maxWidth: '600px', fontSize: '1.125rem', textAlign: 'center' }}>
                        A maior prova do nosso padrão de excelência são os sorrisos e as palavras de quem já viveu a experiência Spazio.
                    </p>
                </div>

                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                    gap: '32px',
                    alignItems: 'start'
                }}>
                    {testimonials.map((testimonial) => (
                        <div 
                            key={testimonial.id} 
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(142, 121, 77, 0.3)',
                                borderRadius: '16px',
                                padding: '32px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px',
                                height: '100%'
                            }}
                            className="hover:-translate-y-2 transition-transform duration-500"
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ 
                                        width: '48px', 
                                        height: '48px', 
                                        borderRadius: '50%', 
                                        backgroundColor: '#74603B', 
                                        color: '#FFFFFF',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontFamily: 'serif',
                                        fontSize: '1.5rem'
                                    }}>
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="font-sans font-medium" style={{ color: '#EBE8E1', margin: 0, fontSize: '1.125rem' }}>
                                            {testimonial.name}
                                        </h3>
                                        <span className="font-sans font-light" style={{ color: '#EBE8E1', fontSize: '0.875rem' }}>
                                            {testimonial.badge}
                                        </span>
                                    </div>
                                </div>
                                <i className="fa-brands fa-google text-2xl" style={{ color: 'rgba(235, 232, 225, 0.2)' }}></i>
                            </div>

                            <div style={{ display: 'flex', gap: '4px', color: '#D1C4B1', fontSize: '0.875rem' }}>
                                {[...Array(testimonial.stars)].map((_, i) => (
                                    <i key={i} className="fa-solid fa-star"></i>
                                ))}
                                <span className="font-sans font-light ml-2" style={{ color: '#EBE8E1' }}>
                                    {testimonial.time}
                                </span>
                            </div>

                            <p className="font-sans font-light leading-relaxed" style={{ color: '#EBE8E1', margin: 0, fontSize: '1rem', flexGrow: 1 }}>
                                "{testimonial.text}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
