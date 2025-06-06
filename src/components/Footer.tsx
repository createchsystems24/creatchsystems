import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border 2 border-dark-light py-12 bg-dark-light relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-50"></div>
      
      <div className="container-custom relative z-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo className="mb-4" />
            <p className="text-white mb-4">
              Soluciones digitales para el presente y el futuro.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=6157704176855" className="text-white border-whit hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-rajdhani font-bold text-white mb-4 text-white">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {['inicio', 'quienes-somos', 'servicios', 'enfoque', 'contacto'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white hover:text-primary transition-colors"
                  >
                    {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-rajdhani font-bold text-white mb-4 text-white">Servicios</h3>
            <ul className="space-y-2">
              {['Desarrollo Web', 'Apps Móviles', 'Branding', 'Chatbots', 'Papelería Digital', 'Sistemas de Cámaras'].map((service) => (
                <li key={service}>
                  <button 
                    onClick={() => {
                      document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white hover:text-primary transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-rajdhani font-bold text-white mb-4 text-white">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-white mr-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </span>
                <span className="text-white">+52 </span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </span>
                <span className="text-white">contacto@createchsystems.com</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </span>
                <span className="text-white">Tlaxcala, México</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <a 
                href="https://wa.me/52" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary border 4 border-secondary btn btn-primary text-white py-2 px-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                Contáctanos por WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white text-center text-white text-sm">
          <p>&copy; {currentYear} CREATECH SYSTEMS SOLUCIONES DIGITALES. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;