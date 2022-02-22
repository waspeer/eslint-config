// @ts-check
import del from 'rollup-plugin-delete';
import replace from 'rollup-plugin-modify';

/** @type {import('rollup').RollupOptions} */
const rollupConfig = {
  input: [
    'base.js',
    'index.js',
    'javascript.js',
    'react-base.js',
    'react-javascript.js',
    'react.js',
    'typescript.js',
  ],
  output: {
    dir: 'dist',
    entryFileNames: '[name].cjs',
    exports: 'default',
    format: 'cjs',
  },
  plugins: [
    del({ targets: 'dist/*' }),
    replace({
      find: /([^.]+)\.js/,
      replace: (_match, name) => `${name}.cjs`,
    }),
  ],
};

export default rollupConfig;
