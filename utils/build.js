const path = require('path');
const es = require('esbuild');

es.buildSync({
  entryPoints: [path.resolve(__dirname, '../src/index.js')],
  bundle: true,
  outfile: path.resolve(__dirname, '../main.js')
});