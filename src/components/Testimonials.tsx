import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Mendoza",
    position: "Director de Marketing, TechFirm",
    content: "CREATECH SYSTEMS transformó por completo nuestra presencia digital. Su enfoque creativo y su atención al detalle resultaron en un sitio web que no solo se ve increíble sino que ha aumentado significativamente nuestras conversiones.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "María Fernández",
    position: "CEO, Innovate Solutions",
    content: "Trabajar con el equipo de CREATECH fue una experiencia extraordinaria. Entendieron perfectamente nuestra visión y la transformaron en una identidad digital que realmente nos representa. Su servicio de desarrollo de aplicaciones superó todas nuestras expectativas.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Javier Rodriguez",
    position: "Fundador, StartUp Digital",
    content: "La automatización implementada por CREATECH SYSTEMS mejoró drásticamente nuestra eficiencia operativa. Sus chatbots han revolucionado nuestra atención al cliente, permitiéndonos atender consultas 24/7 sin incrementar nuestro equipo.",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const next = useCallback(() => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  return (
    <section id="testimonios" className="section bg-dark-light relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="section-title">Testimonios</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-light-dark/80">
            Lo que nuestros clientes dicen sobre nosotros
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div 
              className="flex transition-all duration-500 ease-in-out"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                x: `${-current * 100}%` 
              }}
              transition={{ duration: 0.5 }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="min-w-full px-4"
                >
                  <div className="card p-8 flex flex-col items-center text-center">
                    <Quote className="w-12 h-12 text-secondary/40 mb-6" />
                    
                    <p className="text-lg mb-8 italic text-light-dark/90">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="font-rajdhani font-bold text-secondary">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-light-dark/70">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current ? 'bg-secondary w-6' : 'bg-light-dark/30'
                }`}
              ></button>
            ))}
          </div>

          <button 
            className="absolute top-1/2 -translate-y-1/2 left-0 lg:-left-12 w-10 h-10 rounded-full bg-primary border border-secondary/30 flex items-center justify-center text-secondary transition-all hover:bg-secondary hover:text-primary"
            onClick={prev}
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            className="absolute top-1/2 -translate-y-1/2 right-0 lg:-right-12 w-10 h-10 rounded-full bg-primary border border-secondary/30 flex items-center justify-center text-secondary transition-all hover:bg-secondary hover:text-primary"
            onClick={next}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;