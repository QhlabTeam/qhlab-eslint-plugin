/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ['./base/index.js', 'plugin:vue/vue3-recommended', './prettier.js'],
};

module.exports = config;
