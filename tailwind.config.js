/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '##025CD6',
          light: '#3583E0',
          dark: '#012E6B',
        },
        secondary: {
          DEFAULT: '#0056E8',
          light: '#337EEA',
          dark: '#002C77'
        },
        accent: {
          green: '#00D26A',
          yellow: '#FFD600',
          red: '#FF4C4C',
          white: '#FFFFFF'
        },
        dark: {
          DEFAULT: '#060B17',
          light: '#0B2436',
          darker: '#050F18'
        },
        light: {
          DEFAULT: '#FFFFFF',
          soft: '#C0EFFF',
          subtle: '#E6FBFF'
        },
        'light-dark': '#C0EFFF' // para texto claro sobre fondo oscuro
      },

      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },

      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate'
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 194, 193, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 255, 255, 1)' }
        }
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right,rgba(17, 184, 221, 0.06) 1px, transparent 1px), linear-gradient(to bottom,rgba(0, 216, 245, 0.06) 1px, transparent 1px)'
      }
    },
  },
  plugins: [],
};
