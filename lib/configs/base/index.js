/** @type {import('eslint').Linter.Config} */
const config = {
  extends: [
    require.resolve('./possible-problems.js'),
    require.resolve('./suggestions.js'),
    require.resolve('./layout-formatting.js'),
  ],
};

module.exports = config;
