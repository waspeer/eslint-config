module.exports = {
  extends: [
    './index.js',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier/react',
  ],
  rules: {
    'react/jsx-boolean-value': 'error',
  },
};
