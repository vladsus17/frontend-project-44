import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        Math: 'readonly',
        parseFloat: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
    // Agregar la configuración recomendada de ESLint
    plugins: {
      js: pluginJs,
    },
    rules: {
      'arrow-body-style': ['error', 'as-needed'], // Requiere que las funciones flecha tengan un estilo de cuerpo más simple
      'no-console': 'off', // Permite el uso de console
      'import/prefer-default-export': 'off', // Permite exportaciones sin valor predeterminado
    },
  },
  // Configuración recomendada de ESLint
  pluginJs.configs.recommended,
];
