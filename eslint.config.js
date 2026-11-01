import eslint from '@eslint/js';
import angular from 'angular-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist/**', 'out-tsc/**', '.angular/**', 'coverage/**']),
  {
    files: ['tools/**/*.mjs'],
    extends: [eslint.configs.recommended],
    languageOptions: {
      globals: { Buffer: 'readonly', console: 'readonly', process: 'readonly', URL: 'readonly' },
    },
  },
  {
    files: ['src/**/*.ts'],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
  },
  {
    files: ['src/**/*.html'],
    extends: [angular.configs.templateRecommended, angular.configs.templateAccessibility],
  },
]);
