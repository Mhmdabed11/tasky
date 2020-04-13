/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const WebpackMerge = require('webpack-merge');


const applyPresets = (env) => {

    const { presets } = env;

    const mergedPresets = [].concat(...[presets]);
    const mergedConfigs = mergedPresets.map(presetName => require(`./presets/webpack.${presetName}`)(env));

    return WebpackMerge({}, ...mergedConfigs);
};

module.exports = applyPresets;