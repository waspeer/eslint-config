module.exports = {
  extends: [
    './index.js',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/typescript',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  plugins: ['react-hooks'],
  rules: {
    'react/jsx-boolean-value': 'error',
  },
};
