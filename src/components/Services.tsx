import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Globe, 
  Smartphone, 
  Palette,  
  FileText, 
  Camera, 
  Lightbulb 
} from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      icon: <Globe className="w-10 h-10 text-white" />,
      title: "Desarrollo Web",
      description: "Diseñamos y construimos sitios web potentes que no solo lucen increíbles, sino que también están optimizados para atraer y convertir a tus visitantes en clientes."
    },
    {
      icon: <Smartphone className="w-10 h-10 text-white" />,
      title: "Apps Móviles",
      description: "Transformamos tus ideas en aplicaciones móviles intuitivas para multiplataformas, ofreciendo una experiencia de usuario excepcional que mantendrá a tus clientes conectados."
    },
    {
      icon: <Palette className="w-10 h-10 text-white" />,
      title: "Branding",
      description: "Creamos una identidad de marca memorable que va más allá de un logo. Capturamos la esencia de tu negocio para que destaques y conectes genuinamente con tu audiencia.."
    },
    
    {
      icon: <FileText className="w-10 h-10 text-white" />,
      title: "Papelería Digital",
      description: "Diseñamos toda la papelería digital esencial para tu negocio: desde elegantes hojas membretadas y tarjetas de presentación hasta firmas electrónicas profesionales que refuerzan tu imagen de marca."
    },
    {
      icon: <Camera className="w-10 h-10 text-white" />,
      title: "Sistemas de Cámaras",
      description: "Instalamos y configuramos sistemas de vigilancia avanzados para tu hogar o negocio, brindándote la tranquilidad y el control total que necesitas para proteger lo que más te importa."
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-white" />,
      title: "Diseño Gráfico",
      description: "Creamos diseños gráficos impactantes para tus redes sociales, campañas publicitarias y cualquier material visual, asegurando que tu mensaje capte la atención y resuene con tu público objetivo."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="servicios" className="section relative">
      <div className="absolute inset-0 bg-black"></div>
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="max-w-2xl mx-auto mt-4 text-white">
            Ofrecemos soluciones tecnológicas integrales diseñadas para transformar tu presencia digital y optimizar cada uno de tus procesos.</p>
          <p className="max-w-2xl mx-auto mt-4 text-white"> Nuestro enfoque combina creatividad, tecnología y estrategia para brindarte resultados funcionales, innovadores y alineados con los objetivos reales de tu marca.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : ""}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="card group hover:translate-y-[-5px]"
              variants={item}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4 p-3 rounded-full bg-primary inline-flex border border-white group-hover:border- transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="font-rajdhani font-bold mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-white flex-grow">
                  {service.description}
                </p>
                <div className="mt-4 pt-4 border-t border-primary">
                  <button 
                    onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white font-rajdhani font-medium hover:underline flex items-center"
                  >
                    Solicitar información 
                    <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;