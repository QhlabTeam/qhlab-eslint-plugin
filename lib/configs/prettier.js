const { cosmiconfigSync } = require('cosmiconfig');

const explorer = cosmiconfigSync('prettier');
const prettierrc = explorer.search();

/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        jsxSingleQuote: true,
        arrowParens: 'always',
        bracketSameLine: true,
        bracketSpacing: true,
        endOfLine: 'lf',
        printWidth: 80,
        quoteProps: 'as-needed',
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'es5',
        ...prettierrc?.config,
      },
    ],
  },
};

module.exports = config;
