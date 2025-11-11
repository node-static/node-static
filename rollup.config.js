/**
 * @param {object} config
 * @param {string} config.input
 * @returns {RollupConfig}
 */
function getRollupObject ({input} = {}) {
    return {
        external: [
            'node:fs', 'node:events', 'node:http', 'node:path',
            'is-hidden-file', 'node:zlib', 'node:stream/promises',
            'mime', 'minimatch'
        ],
        input,
        output: {
            format: 'cjs',
            file: input.replace(/^.\/lib\//u, './dist/').replace(/\.js$/u, '.cjs')
        }
    };
}

export default [
    getRollupObject({
        input: './lib/node-static.js', minifying: true
    })
];
