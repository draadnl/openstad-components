const build = require('esbuild').build;
const lessLoader = require('esbuild-plugin-less').lessLoader;

build({
    entryPoints: ['src/choices-guide/index.jsx'],
    bundle: true,
    sourcemap: true,
    target: ["chrome95"],
    plugins: [lessLoader()],
    outfile: 'dist/choices-guide.js',
    platform: "browser",
    format: "iife",
    globalName: "OpenStadComponents",
    watch: true
}).then(result => result.stop()).catch(() => process.exit(1));
