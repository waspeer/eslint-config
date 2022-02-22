// @ts-check

/** @type {import('rollup').RollupOptions} */
const rollupConfig = {
  input: ['index.js', 'javascript.js', 'react-javascript.js', 'react.js', 'typescript.js'],
  output: {
    dir: 'dist',
    exports: 'default',
    format: 'cjs',
  },
};

export default rollupConfig;
