// @ts-check

/** @type {import('eslint').Linter.Config} */
const astroConfig = {
  extends: ['./typescript.js', 'plugin:jsx-a11y/recommended', 'plugin:astro/recommended'],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
  ],
};

export default astroConfig;
