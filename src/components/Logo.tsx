import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'small';
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'default' }) => {
  const isSmall = variant === 'small';
  
  return (
    <div className={`flex items-center ${className}`}>
      <div className={`relative ${isSmall ? 'w-8 h-8' : 'w-12 h-12'} mr-2`}>
        <div className={`absolute inset-0 rounded-md border-2 border-primary flex items-center justify-center bg-primary animate-glow overflow-hidden}`}>
<img
        src="Logo.png" // O la ruta a tu logo
        alt="Logo de CREATECH SYSTEMS"
        className="h-full w-full object-contain p-0.1" // Ajusta el padding si es necesario
      />
        </div>
      </div>
      
      {!isSmall && (
        <div className="flex flex-col">
          <span className="font-orbitron font-bold text-white text-lg leading-tight">CREATECH</span>
          <span className="font-orbitron text-primary text-xs tracking-wider">SYSTEMS</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
