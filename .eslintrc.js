'use strict'

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 12,
  },
  extends: [
    'eslint:recommended',
    'plugin:eslint-plugin/recommended',
    'plugin:node/recommended',
    'plugin:markdown/recommended',
    './lib/configs/prettier.js',
  ],
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['tests/**/*.js'],
      env: { mocha: true },
    },
  ],
}
