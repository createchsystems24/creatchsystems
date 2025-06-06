import React from 'react';
// Importa Framer Motion para animaciones
import { motion } from 'framer-motion';
// Hook para saber si el elemento está visible en pantalla
import { useInView } from 'react-intersection-observer';
// Íconos decorativos desde lucide-react
import { Target, Award, Clock } from 'lucide-react';

const Approach: React.FC = () => {
  // Hook para observar visibilidad en el viewport
  const [ref, inView] = useInView({
    triggerOnce: true, // Solo activa una vez
    threshold: 0.1     // Se activa cuando el 10% del componente es visible
  });

  // Lista de enfoques clave de la empresa
  const approaches = [
    {
      icon: <Target className="w-16 h-16 text-white" />, // Ícono de objetivo
      title: "Soluciones a medida",
      description: "Diseñamos cada proyecto enfocado en tus objetivos, necesidades específicas y el público al que te diriges.."
    },
    
    {
      icon: <Award className="w-16 h-16 text-white" />, // Ícono de premio (calidad)
      title: "Calidad premium",
      description: "Cuidamos cada detalle, ofreciendo resultados de alto nivel desde el diseño hasta la entrega final."
    },
    {
      icon: <Clock className="w-16 h-16 text-white" />, // Ícono de reloj (soporte)
      title: "Soporte continuo",
      description: "Te acompañamos más allá de la entrega, asegurando que tu solución evolucione con tu negocio."
    }
  ];

  // Variantes para animación grupal (contenedor de tarjetas)
  const container = {
    hidden: { opacity: 0 }, // Estado inicial: invisible
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Anima cada hijo con retraso
      }
    }
  };

  // Variantes para animación de cada ítem individual
  const item = {
    hidden: { y: 20, opacity: 1 }, // Inicia abajo y transparente
    show: { y: 0, opacity: 1 }     // Aparece con desplazamiento suave
  };

  return (
    <section id="enfoque" className="section bg-black relative overflow-hidden">
      {/* Fondo decorativo tipo cuadrícula con opacidad suave */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-5"></div>
      
      {/* Contenedor principal con contenido por encima del fondo */}
      <div className="container-custom relative z-10">

        {/* Encabezado animado: título + descripción */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }} // Estado inicial
          animate={inView ? { opacity: 1, y: 0 } : {}} // Animar si está en pantalla
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="section-title">Nuestro Enfoque</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-white">
            Creamos soluciones digitales a medida con un enfoque humano y profesional. Nos destacamos por nuestra atención al detalle, estética futurista, soporte integral y compromiso con la innovación.
          </p>
        </motion.div>

        {/* Grid de tarjetas animadas: enfoque por enfoque */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container} // Variante del grupo
          initial="hidden"
          animate={inView ? "show" : ""} // Solo se muestra si es visible
        >
          {approaches.map((approach, index) => (
            <motion.div 
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6"
              variants={item} // Variante de animación individual
            >
              {/* Ícono dentro de un círculo con fondo claro */}
              <div className="flex-shrink-0 p-4 rounded-full bg-primary border border-black">
                {approach.icon}
              </div>

              {/* Contenido textual: título y descripción */}
              <div>
                <h3 className="text-2xl font-rajdhani font-bold mb-3 text-white">
                  {approach.title}
                </h3>
                <p className="text-white">
                  {approach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Approach; // Exporta el componente para su uso en otras partes del sitio
