/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ['./base', 'plugin:vue/recommended', './prettier.js'],
};

module.exports = config;
