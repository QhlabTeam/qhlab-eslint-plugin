const path = require('path');

/** @type {import('eslint').Linter.Config} */
const config = {
  extends: [
    path.join(__dirname, './possible-problems.js'),
    path.join(__dirname, './suggestions.js'),
    path.join(__dirname, './layout&Formatting.js'),
  ],
};

module.exports = config;
