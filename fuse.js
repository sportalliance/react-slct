const { fusebox } = require('fuse-box');

const fuse = fusebox({
    entry: 'src/index.tsx',
    target: 'browser',
    sourceMap: true
});

async function bundle() {
    await fuse.runProd({
        bundles: {
            app: 'react-slct.js',
            distRoot: 'dist'
        },
        manifest: false
    });

    await fuse.runProd({
        bundles: {
            app: 'react-slct.min.js',
            distRoot: 'dist'
        },
        manifest: false,
        uglify: true
    });
}

bundle().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
