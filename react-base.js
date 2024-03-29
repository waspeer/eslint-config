// @ts-check

/** @type {import('eslint').Linter.Config} */
const reactBaseConfig = {
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  rules: {
    'react/jsx-boolean-value': 'error',
  },
  settings: {
    version: 'detect',
  },
};

export default reactBaseConfig;
