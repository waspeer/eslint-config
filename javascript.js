// @ts-check

/** @type {import('eslint').Linter.Config} */
const javascriptConfig = {
  extends: [
    './base.js',
    // IMPORT
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  rules: {},
};

export default javascriptConfig;
