import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
         // Variables and constants
         'no-unused-vars': 'warn',
         'prefer-const': 'warn',
         'no-var': 'error',
         'no-duplicate-imports': 'error',
   
         // Equality and comparisons
         eqeqeq: ['error', 'always'],
   
         // Console and debugging
         'no-console': ['warn', { allow: ['warn', 'error'] }],
   
         // Code structure and readability
         curly: ['error', 'all'],
         'dot-notation': 'warn',
         'no-multi-spaces': 'warn',
         'array-callback-return': 'warn',
   
         // Prevent mistakes
         'no-self-assign': 'error',
         'no-unreachable': 'error',
   
         'react/react-in-jsx-scope': 'off', // JSX doesn't require React in scope since React 17
         'semi': ['error', 'always'], // Enforce semicolons
         'no-debugger': 'warn', // Warn when debugger is used
         // 'prefer-const': 'error', // Enforce the use of `const` for variables that are never reassigned
         'consistent-return': 'error', // Enforce consistent return statements in functions
         'react/jsx-no-bind': [
           'warn',
           {
             allowArrowFunctions: false, // Disallow inline arrow functions.
             allowBind: false, // Disallow .bind() inline.
             allowFunctions: false, // Disallow inline function declarations.
             ignoreRefs: true, // Ignore refs since they may require inline callbacks.
           },
         ],
         'quotes': ['error', 'single', { 'avoidEscape': true }],
         'jsx-quotes': ['error', 'prefer-double']
    },
  },
])
