import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("http://localhost:3001/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error("Error al enviar el formulario");

      alert("Mensaje enviado correctamente. ¡Gracias por contactarnos!");
      reset();
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      alert("Ocurrió un error al enviar el mensaje. Intenta más tarde.");
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-accent" />,
      title: "Email",
      value: "createchsystems.sd@gmail.com",
      link: "mailto:createchsystems.sd@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-accent" />,
      title: "WhatsApp",
      value: "+52 ",
      link: "https://wa.me/52"
    },
    {
      icon: <MapPin className="w-6 h-6 text-accent" />,
      title: "Ubicación",
      value: "Tlaxcala, México",
      link: "https://maps.app.goo.gl/ffbV1fH4PrSsVXSy9"
    }
  ];

  return (
    <section id="contacto" className="section relative overflow-hidden ">
      <div className="absolute inset-0 bg-black"></div>
      
      <div className="container-custom relative z-18">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="section-title">Contacto</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-white">
            ¿Tienes un proyecto en mente? ¿Necesitas una cotización? ¡Contáctanos!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 ">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="card h-full p-8">
              <h3 className="text-2xl font-rajdhani font-bold mb-6 text-white">Información de contacto</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index}
                    href={item.link}
                    className="flex items-start hover:text-primary-light transition-colors text-white" //al pasar el mouse cambia el color del texto
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <div className="mr-1 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-rajdhani font-semibold">{item.title}</h4>
                      <p className="text-white">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-10">
                <h4 className="font-rajdhani font-semibold mb-4 text-white">Síguenos en redes sociales</h4>
                <div className="flex space-x-1">
                  <a href="https://www.facebook.com/profile.php?id=61577041768557" className="w-10 h-10 text-white rounded-full bg-secundary border border-white flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="card">
              <h3 className="text-2xl font-rajdhani font-bold mb-6 text-white">Envíanos un mensaje</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">Nombre</label>
                    <input
                      id="name"
                      type="text"
                      className={`w-full px-4 py-3 bg-secundary border ${errors.name ? 'border-red-500' : 'border-white'} rounded-lg focus:outline-none focus:ring-2 focus:ring-black`}
                      placeholder="Tu nombre"
                      {...register('name', { required: 'El nombre es requerido' })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-red-400 text-sm">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                    <input
                      id="email"
                      type="email"
                      className={`w-full px-4 py-3 bg-secundary border ${errors.email ? 'border-red-50' : 'border-white/20'} rounded-lg focus:outline-none focus:ring-2 focus:ring-black`}
                      placeholder="tu@email.com"
                      {...register('email', { 
                        required: 'El email es requerido',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Email inválido'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">Asunto</label>
                  <input
                    id="subject"
                    type="text"
                    className={`w-full px-4 py-3 bg-white border ${errors.subject ? 'border-red-500' : 'border-black'} rounded-lg focus:outline-none focus:ring-2 focus:ring-black`}
                    placeholder="Asunto del mensaje"
                    {...register('subject', { required: 'El asunto es requerido' })}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-red-400 text-sm">{errors.subject.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">Mensaje</label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-3 bg-secundary border ${errors.message ? 'border-red-500' : 'border-black'} rounded-lg focus:outline-none focus:ring-2 focus:ring-black`}
                    placeholder="Detalla tu proyecto o consulta"
                    {...register('message', { required: 'El mensaje es requerido' })}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-red-400 text-sm">{errors.message.message}</p>
                  )}
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn btn-primary w-full flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Enviar mensaje
                        <Send size={18} className="ml-3" />
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
