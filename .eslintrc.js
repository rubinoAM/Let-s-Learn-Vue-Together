module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['airbnb-base', 'plugin:vue/recommended'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 'off',
    'eol-last': 'off',
    'no-unused-vars': 'off',
    'import/no-unresolved': 'off',
    'max-len': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/require-default-prop': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
