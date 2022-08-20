// @ts-check

/** @type {import('eslint').Linter.Config} */
const baseConfig = {
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['import'],
  rules: {
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-useless-path-segments': 'error',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [{ pattern: '{#,~}**', group: 'internal' }],
        groups: [['builtin', 'external'], 'type', 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
      },
    ],
  },
};

export default baseConfig;
