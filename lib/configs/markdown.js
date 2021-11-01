/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ['plugin:markdown/recommended'],
  overrides: [
    {
      files: ['**/*.md/*.js'],
      rules: {
        'no-console': 'off',
        'import/no-unresolved': 'off',
        'eol-last': 'off',
        'unicode-bom': 'off',
      },
    },
  ],
};

module.exports = config;
