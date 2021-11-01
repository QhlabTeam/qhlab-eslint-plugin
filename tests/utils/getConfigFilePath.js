const path = require('path');

module.exports = (fileName) =>
  path.resolve(__dirname, '../../lib/configs', `${fileName}.js`);
