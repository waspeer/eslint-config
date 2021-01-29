module.exports = {
  extends: [
    // BASE
    'eslint:recommended',
    'plugin:unicorn/recommended',
    // TYPESCRIPT
    'plugin:@typescript-eslint/recommended',
    // PRETTIER
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/unicorn',
    // IMPORT
    'plugin:import/typescript',
    // JEST
    // 'plugin:jest/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['import'],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
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
