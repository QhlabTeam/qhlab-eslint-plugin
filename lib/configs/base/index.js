/** @type {import('eslint').Linter.Config} */
const config = {
  extends: [
    './possible-problems.js',
    './suggestions.js',
    './layout&Formatting.js',
  ],
};

module.exports = config;
