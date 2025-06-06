// Importa la configuración base de ESLint para JavaScript
import js from '@eslint/js';

// Importa definiciones globales comunes como 'window', 'document', etc.
import globals from 'globals';

// Importa el plugin de ESLint para reglas específicas de React Hooks
import reactHooks from 'eslint-plugin-react-hooks';

// Importa el plugin que habilita reglas para React Refresh (usado en desarrollo con Vite)
import reactRefresh from 'eslint-plugin-react-refresh';

// Importa el paquete principal para trabajar con TypeScript en ESLint
import tseslint from 'typescript-eslint';

// Exporta la configuración de ESLint usando el nuevo sistema de configuración de typescript-eslint
export default tseslint.config(
  // Primer objeto: configuración general (como exclusiones)
  {
    ignores: ['dist'], // Ignora la carpeta 'dist' del análisis de ESLint
  },

  // Segundo objeto: configuración específica del análisis
  {
    // Hereda reglas recomendadas tanto para JS como para TS
    extends: [js.configs.recommended, ...tseslint.configs.recommended],

    // Aplica esta configuración solo a archivos con extensión .ts o .tsx
    files: ['**/*.{ts,tsx}'],

    // Define opciones del lenguaje
    languageOptions: {
      ecmaVersion: 2020,           // Permite características modernas de JS como optional chaining
      globals: globals.browser,    // Define variables globales típicas del entorno navegador (como window, document)
    },

    // Carga los plugins que se usarán
    plugins: {
      'react-hooks': reactHooks,       // Plugin con reglas para asegurar el uso correcto de React Hooks
      'react-refresh': reactRefresh,   // Plugin que ayuda a asegurar buenas prácticas con React Refresh
    },

    // Reglas personalizadas que se aplican además de las recomendadas
    rules: {
      // Incluye las reglas recomendadas por el plugin react-hooks
      ...reactHooks.configs.recommended.rules,

      // Agrega una regla específica de react-refresh para advertir si los componentes no son exportados correctamente
      'react-refresh/only-export-components': [
        'warn',                        // Nivel de advertencia: muestra warning pero no bloquea el build
        { allowConstantExport: true }, // Permite exportaciones constantes como válidas
      ],
    },
  }
);
