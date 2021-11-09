/** @type {import('eslint').Linter.Config} */
const config = {
  extends: [require.resolve('./base'), 'plugin:vue/vue3-recommended'],
  // Override rules
  rules: {
    eqeqeq: 'off',
    'no-negated-condition': 'off',
    'guard-for-in': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-indent': 'off',
  },
  overrides: [
    {
      files: '*',
      extends: require.resolve('./prettier.js'),
    },
  ],
};

module.exports = config;
