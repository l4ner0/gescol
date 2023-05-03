module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': 'warn',
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'],
      },
    ],
  },
};
