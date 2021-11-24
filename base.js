module.exports = {
  extends: [
    // BASE
    'eslint:recommended',
    'plugin:unicorn/recommended',
    // PRETTIER
    'plugin:prettier/recommended',
  ],
  plugins: ['import'],
  rules: {
    'import/exports-last': 'error',
    'import/first': 'error',
    'import/group-exports': 'error',
    'import/newline-after-import': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-useless-path-segments': 'error',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [{ pattern: '{#,~}**', group: 'internal' }],
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        'trailingComma': 'all',
        'singleQuote': true,
        'arrowParens': 'always',
        'printWidth': 100,
        'endOfLine': 'auto'
      }
    ]
  },
};
