const vuePlugin = require('eslint-plugin-vue');
const prettierPlugin = require('eslint-plugin-prettier');

module.exports = [
  // Use Vue plugin's flat config for recommended rules
  ...vuePlugin.configs['flat/recommended'],
  {
    files: ['**/*.{js,vue}'],
    ignores: ['node_modules/**', 'dist/**'],
    languageOptions: {
      parser: require('vue-eslint-parser'),
      parserOptions: {
        parser: require('@babel/eslint-parser'),
        requireConfigFile: false,
        ecmaVersion: 2024,
        sourceType: 'module',
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      // Environment-based rules
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      
      // Vue-specific overrides
      'vue/multi-word-component-names': 'off',
      
      // Disable Vue template formatting rules that conflict with Prettier
      'vue/html-indent': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/html-closing-bracket-newline': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/first-attribute-linebreak': 'off',
      'vue/v-bind-style': 'off',
      'vue/html-self-closing': 'off',

      // Prettier integration
      'prettier/prettier': 'error',
    },
  },
];
