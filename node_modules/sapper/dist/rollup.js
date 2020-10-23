'use strict';

var env = require('./env.js');

const sourcemap = env.dev ? 'inline' : false;
var rollup = {
    dev: env.dev,
    client: {
        input: () => {
            return `${env.src}/client.js`;
        },
        output: () => {
            let dir = `${env.dest}/client`;
            if (process.env.SAPPER_LEGACY_BUILD)
                dir += '/legacy';
            return {
                dir,
                entryFileNames: '[name].[hash].js',
                chunkFileNames: '[name].[hash].js',
                format: 'esm',
                sourcemap
            };
        }
    },
    server: {
        input: () => {
            return {
                server: `${env.src}/server.js`
            };
        },
        output: () => {
            return {
                dir: `${env.dest}/server`,
                format: 'cjs',
                sourcemap
            };
        }
    },
    serviceworker: {
        input: () => {
            return `${env.src}/service-worker.js`;
        },
        output: () => {
            return {
                file: `${env.dest}/service-worker.js`,
                format: 'iife',
                sourcemap
            };
        }
    }
};

module.exports = rollup;
//# sourceMappingURL=rollup.js.map
