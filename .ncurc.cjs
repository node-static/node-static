'use strict';

module.exports = {
    reject: [
        // ESM-only; only switch when dropping dual CJS support
        'node-fetch',
        'mime',
        '@types/mime'
    ]
};
