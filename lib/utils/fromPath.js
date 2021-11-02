const {resolve} = require('path');

function fromPath(...paths) {
  return resolve(__dirname, ...paths);
}

module.exports = fromPath;
