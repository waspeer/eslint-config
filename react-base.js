module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier/react',
  ],
  rules: {
    'react/jsx-boolean-value': 'error',
    'unicorn/no-null': 'off',
    'unicorn/prevent-abbreviations': ['error', { ignore: ['props', 'Props'] }],
  },
};
