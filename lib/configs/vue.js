/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ['./base/index.js', 'plugin:vue/recommended', './prettier.js'],
};

module.exports = config;
