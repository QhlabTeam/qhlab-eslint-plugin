const {cosmiconfigSync} = require('cosmiconfig');

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
        bracketSameLine: false,
        bracketSpacing: false,
        endOfLine: 'lf',
        printWidth: 80,
        quoteProps: 'as-needed',
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'es5',
        htmlWhitespaceSensitivity: 'css',
        insertPragma: false,
        ...prettierrc?.config,
      },
    ],
  },
};

module.exports = config;
