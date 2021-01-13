module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    // BASE
    'eslint:recommended',
    'plugin:unicorn/recommended',
    // TYPESCRIPT
    'plugin:@typescript-eslint/recommended',
    // PRETTIER
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'prettier/unicorn',
    // IMPORT
    'plugin:import/typescript',
    // JEST
    'plugin:jest/recommended',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
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
  },
};
