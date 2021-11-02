/** @type {import('eslint').Linter.Config} */
const config = {
  extends: [
    'plugin:@qhlab/base',
    'plugin:vue/vue3-recommended',
    'plugin:@qhlab/prettier',
  ],
};

module.exports = config;
