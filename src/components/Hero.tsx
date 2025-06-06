import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('quienes-somos');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-90"></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <motion.h1 
              className="font-orbitron mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="block text-white">Soluciones</span>
              <span className="tech-gradient-text text-primary">Digitales</span>
              <span className="block text-white">Para El Futuro</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Impulsamos tu presencia digital con soluciones creativas, automatizadas y diseñadas para el futuro.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button 
                className="btn btn-primary"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Solicita tu cotización
              </button>
              <button 
                className="btn btn-outline"
                onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Nuestros servicios
              </button>
            </motion.div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <motion.div
              className="relative w-94 h-84 md:w-80 md:h-80"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-dark to-primary opacity animate-pulse-slow"></div>
              <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-secondary to-primary backdrop-blur-sm border border-secondary flex items-center justify-center animate-float">
                <img src="/src/assets/logo.png" alt="Logo de CREATECH SYSTEMS" className="h-full w-auto max-h-full object-contain p-6" />
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          onClick={scrollToNextSection}
        >
          <ChevronDown className="text-white w-8 h-8 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;