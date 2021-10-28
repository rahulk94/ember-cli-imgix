/* global require */
const packageJson = JSON.parse(require('../../package.json'));
const APP_VERSION = packageJson.version;

export default {
  APP_VERSION,
};
