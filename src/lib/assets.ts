interface AssetHash {
    [key: string]: string;
}

let assetHash: AssetHash = {};
let assetHashLegacy: AssetHash = {};

try {
    // path is relative to the server bundle
    assetHash = require('./manifest.json');
    assetHashLegacy = require('./manifest.legacy.json');
} catch (e) {
    // do nothing
}

// GU_STAGE is set in cloudformation.yml, so will be undefined locally
const stage =
    typeof process.env.GU_STAGE === 'string'
        ? process.env.GU_STAGE.toUpperCase()
        : process.env.GU_STAGE;

const CDN = stage
    ? `//assets${stage === 'CODE' ? '-code' : ''}.guim.co.uk/`
    : '/';

export const getDist = ({
    path,
    legacy,
}: {
    path: string;
    legacy: boolean;
}): string => {
    const selectedAssetHash = legacy ? assetHashLegacy : assetHash;
    return `${CDN}assets/${selectedAssetHash[path] || path}`;
};

// Note we do not have any variation between in compliation for static files
export const getStatic = (path: string): string =>
    `${CDN}static/frontend/${assetHash[path] || path}`;
