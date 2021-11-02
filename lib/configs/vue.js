/** @type {import('eslint').Linter.Config} */
const config = {
  extends: [
    'plugin:@qhlab/base',
    'plugin:vue/recommended',
    'plugin:@qhlab/prettier',
  ],
};

module.exports = config;
