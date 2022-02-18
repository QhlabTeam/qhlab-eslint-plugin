/** @type {import('eslint').Linter.Config} */
const config = {
  plugins: ['sort-keys-fix', 'unused-imports', 'import'],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
          'type',
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
  },
};

module.exports = config;
