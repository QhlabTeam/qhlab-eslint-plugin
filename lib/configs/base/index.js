/** @type {import('eslint').Linter.Config} */
const config = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  extends: [
    require.resolve('./possible-problems.js'),
    require.resolve('./suggestions.js'),
    require.resolve('./layout-formatting.js'),
    require.resolve('./typescript.js'),
  ],
};

module.exports = config;
