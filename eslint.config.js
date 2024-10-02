import globals from 'globals';
import pluginJs from '@eslint/js';
import airbnb from 'eslint-config-airbnb-base/rules/style';

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
  },
  pluginJs.configs.recommended,
  airbnb,
  {
    files: ['*.js'],
    rules: {
      'no-console': 'off',
      'import/prefer-default-export': 'off',
    },
  },
];
