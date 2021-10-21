'use strict'

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 12
  },
  extends: [
    'eslint:recommended',
    'plugin:eslint-plugin/recommended',
    'plugin:node/recommended'
  ],
  env: {
    node: true
  },
  overrides: [
    {
      files: ['tests/**/*.js'],
      env: { mocha: true }
    }
  ]
}
