module.exports = {
  extends: ['./index.js', 'plugin:node/recommended'],
  parser: 'babel-eslint',
  plugins: ['react-hooks'],
  rules: {
    'react/jsx-boolean-value': 'error',
  },
};
