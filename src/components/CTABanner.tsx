import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const CTABanner: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 tech-gradient opacity-90"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-4xl font-orbitron font-bold mb-6">
            ¿Listo para transformar tu presencia digital?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Desde el diseño hasta la implementación, te acompañamos en cada paso del camino hacia la innovación.
          </p>
          <a 
            href="#contacto" 
            className="btn btn-primary inline-flex items-center text-lg px-8 py-4 font-orbitron"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Comencemos hoy
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;