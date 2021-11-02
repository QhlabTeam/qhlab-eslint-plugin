/** @type {import('eslint').Linter.Config} */
const config = {
  extends: [require.resolve('./base'), 'plugin:vue/recommended'],
  // Override rules
  rules: {},
  overrides: [
    {
      files: '*',
      extends: require.resolve('./prettier.js'),
    },
  ],
};

module.exports = config;
