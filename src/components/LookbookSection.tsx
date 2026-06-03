import React from 'react';
import { motion } from 'framer-motion';

const LookbookSection: React.FC = () => {
    const lookbookItems = [
        { src: '/img/carrossel/Screenshot%202026-06-03%20at%2011-38-44%20Instagram.png', alt: 'Cliente Spazio Beauty 1' },
        { src: '/img/carrossel/Screenshot%202026-06-03%20at%2011-38-48%20Instagram.png', alt: 'Cliente Spazio Beauty 2' },
        { src: '/img/carrossel/Screenshot%202026-06-03%20at%2011-41-00%20Instagram.png', alt: 'Cliente Spazio Beauty 3' },
        { src: '/img/carrossel/Screenshot%202026-06-03%20at%2011-42-04%20Instagram.png', alt: 'Cliente Spazio Beauty 4' },
        { src: '/img/carrossel/Screenshot%202026-06-03%20at%2011-42-15%20Instagram.png', alt: 'Cliente Spazio Beauty 5' },
        { src: '/img/carrossel/Screenshot%202026-06-03%20at%2011-42-29%20Instagram.png', alt: 'Cliente Spazio Beauty 6' },
    ];

    return (
        <section id="lookbook" className="px-6 bg-[#EBE8E1] overflow-hidden border-y border-[#445D48]/5" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
            {/* Using explicit inline styles to guarantee spacing */}
            <div className="container mx-auto px-6 md:px-0 flex flex-col items-center justify-center text-center" style={{ marginBottom: '100px' }}>
                <span className="font-sans font-medium uppercase tracking-widest text-xs text-[#8E794D]">— Galeria Editorial</span>
                <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#445D48] mt-6">Nossas Clientes</h2>
                <p className="font-sans font-light text-[#3C3C34]/80 mt-6 max-w-2xl leading-relaxed text-lg text-center">
                    Resultados reais construídos em nosso espaço. Deslize para conferir as transformações de quem já viveu a experiência Spazio.
                </p>
            </div>
            
            {/* Infinite Marquee Wrapper with inline top margin */}
            <div className="relative w-full flex overflow-hidden py-8" style={{ marginTop: '40px' }}>
                {/* Gradient Masks for smooth fading edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#EBE8E1] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#EBE8E1] to-transparent z-10 pointer-events-none"></div>

                <motion.div 
                    className="flex w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
                >
                    {/* Duplicate the list twice for seamless loop */}
                    {[...lookbookItems, ...lookbookItems].map((item, index) => (
                        <div 
                            key={index} 
                            className="w-[280px] h-[360px] md:w-[320px] md:h-[420px] flex-shrink-0 rounded-xl overflow-hidden shadow-xl shadow-[#445D48]/5 border border-[#445D48]/10 group relative cursor-pointer"
                            style={{ margin: '0 12px' }}
                        >
                            <img 
                                src={item.src} 
                                alt={item.alt} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            />
                            
                            {/* Instagram Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#445D48]/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-end pb-8">
                                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <i className="fa-brands fa-instagram text-white text-2xl"></i>
                                </div>
                                <span className="font-sans font-medium text-white tracking-wider text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                    Ver no Instagram
                                </span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="text-center" style={{ marginTop: '120px' }}>
                <a 
                    href="https://www.instagram.com/spaziobeautytatuape" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-4 bg-transparent border border-[#445D48]/30 text-[#445D48] rounded-full font-sans font-medium uppercase tracking-widest text-sm hover:border-[#445D48] hover:bg-[#445D48] hover:text-[#EBE8E1] transition-all duration-300"
                    style={{ padding: '20px 40px' }}
                >
                    <i className="fa-brands fa-instagram text-xl"></i> Siga @spaziobeautytatuape
                </a>
            </div>
        </section>
    );
};

export default LookbookSection;
