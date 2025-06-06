import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (sectionId: string) => {
    setIsOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 glass-effect shadow-lg' 
          : 'py-2 bg-transparent'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Logo />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {['inicio', 'quienes-somos', 'servicios', 'enfoque', 'contacto'].map((item) => (
            <button 
              key={item}
              onClick={() => handleNavLinkClick(item)}
              className="text-white hover:text-primary font-rajdhani font-medium transition-colors"
            >
              {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white hover:text-primary"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden absolute w-full top-full left-0 glass-effect border-t border-black transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="container-custom py-4 flex flex-col space-y-4">
          {['inicio', 'quienes-somos', 'servicios', 'enfoque', 'contacto'].map((item) => (
            <button 
              key={item}
              onClick={() => handleNavLinkClick(item)}
              className="text-white hover:text-primary font-rajdhani font-medium transition-colors py-2"
            >
              {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
