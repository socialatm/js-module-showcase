import nodePolyfills from 'rollup-plugin-polyfill-node';

export default {
  input: './index.mjs',
  plugins: [
    nodePolyfills()
  ],
  output: [
    {
      file: './dist/esm.js',
      format: 'es'
    },
    {
      file: './dist/cjs.js',
      format: 'cjs'
    },
    {
      file: './dist/amd.js',
      format: 'amd'
    },
    {
      file: './dist/umd.js',
      format: 'umd'
    }
  ]
}