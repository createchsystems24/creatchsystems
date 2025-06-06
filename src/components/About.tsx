import React from 'react';
// Importa componente motion para animaciones
import { motion } from 'framer-motion';
// Hook para detectar si un elemento está visible en pantalla
import { useInView } from 'react-intersection-observer';
// Íconos SVG modernos desde Lucide
import { Cpu, Users, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  // Hook que retorna una referencia y un booleano si el elemento está visible
  const [ref, inView] = useInView({
    triggerOnce: true, // Solo activa una vez al entrar en el viewport
    threshold: 0.1     // Se activa cuando el 10% del elemento es visible
  });

  // Variantes para animación del contenedor de tarjetas
  const container = {
    hidden: { opacity: 0 }, // Estado inicial: invisible
    show: {
      opacity: 1,           // Al mostrarse: completamente visible
      transition: {
        staggerChildren: 0.1 // Los hijos aparecerán de forma secuencial
      }
    }
  };

  // Variantes para cada tarjeta individual
  const item = {
    hidden: { y: 20, opacity: 0 }, // Comienza desplazado y oculto
    show: { y: 0, opacity: 1 }     // Se posiciona correctamente y aparece
  };

  // Lista de características destacadas de la empresa
  const features = [
    {
      icon: <Cpu className="w-10 h-10 text-black" />,
      title: "Tecnología",
      description: "Utilizamos herramientas avanzadas para ofrecer rendimiento y calidad en cada proyecto."
    },
    {
      icon: <Users className="w-10 h-10 text-black" />,
      title: "Personalización",
      description: "Cada proyecto se adapta específicamente a las necesidades únicas de cada cliente."
    },
    {
      icon: <Sparkles className="w-10 h-10 text-black" />,
      title: "Creatividad",
      description: "Combinamos diseño y funcionalidad para resultados que impactan y destacan."
    }
  ];

  return (
    <section id="quienes-somos" className="bg-black darker relative overflow-hidden py-16">
      {/* Fondo decorativo con patrón de cuadrícula */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-primary blur-3xl rounded-full opacity-0"></div>

      {/* Contenedor principal con posicionamiento relativo y z-index para que esté sobre el fondo */}
      <div className="container-custom relative z-10">
        
        {/* Texto introductorio con animación al entrar en pantalla */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-26"
          initial={{ opacity: 0, y: 20 }} // Estado inicial
          animate={inView ? { opacity: 1, y: 1 } : {}} // Animación si es visible
          transition={{ duration: 0.6 }} // Duración de la animación
          ref={ref} // Referencia para observar si está en pantalla
        >
          <h2 className="section-title mb-10">Quiénes Somos</h2>
          <p className="text-white">
            <span className="font-rajdhani text-primary font-semibold">CREATECH SYSTEMS SOLUCIONES DIGITALES</span> es una consultoría integral enfocada en brindar soluciones digitales modernas y personalizadas. Combinamos tecnología, diseño y automatización para ayudar a negocios a destacar en el mundo digital.
          </p>
          <p className="mt-4 text-white">
            Nuestra misión es transformar ideas en soluciones funcionales, eficientes y con una identidad visual fuerte.
          </p>
          <p className="mt-8 text-white">
            </p>
        </motion.div>

        {/* Tarjetas animadas con características destacadas */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container} // Usa las variantes del contenedor para controlar la animación grupal
          initial="hidden"
          animate={inView ? "show" : ""}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="card hover:translate-y-[-10px]" // Animación sutil al hacer hover
              variants={item} // Aplica animación individual a cada tarjeta
            >
              <div className="flex flex-col items-center text-center">
                {/* Ícono decorativo dentro de un círculo */}
                <div className="mb-4 p-3 rounded-full bg-primary border border-secondary/30">
                  {feature.icon}
                </div>
                {/* Título de la característica */}
                <h3 className="text-xl font-rajdhani font-bold mb-2 text-white">
                  {feature.title}
                </h3>
                {/* Descripción de la característica */}
                <p className="text-white">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About; // Exporta el componente para ser usado en otras partes del sitio
