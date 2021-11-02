/** @type {import('eslint').Linter.Config} */
const config = {
  extends: [
    require.resolve('./possible-problems.js'),
    require.resolve('./suggestions.js'),
    require.resolve('./layout&Formatting.js'),
  ],
};

module.exports = config;
