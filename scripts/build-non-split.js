/**
 * This script is sourced from the following resource: 
 *  https://github.com/facebook/create-react-app/issues/5306
 * 
 * The purpose of this script is to force the bundle into a single main.js file so it will work
 * with the iGEM Website's way of doing things.
 * 
 * Last Modified
 * William Kwok
 * June 16, 2019
 */

const rewire = require('rewire');
const defaults = rewire('react-scripts/scripts/build.js');
const config = defaults.__get__('config');

// Consolidate chunk files instead
config.optimization.splitChunks = {
    cacheGroups: {
        default: false,
    },
};
// Move runtime into bundle instead of separate file
config.optimization.runtimeChunk = false;

// JS
config.output.filename = 'static/js/[name].js';
// CSS. "5" is MiniCssPlugin
config.plugins[5].options.filename = 'static/css/[name].css';