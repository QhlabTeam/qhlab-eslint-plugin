/** @type {import('eslint').Linter.Config} */
const config = {
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      files: ['**/*.ts?(x)'],
      rules: {
        // Handled by Typescript itself
        'no-undef': 'off', // ts(2304)
        'consistent-return': 'off', // in TS this is much less an issue
        'getter-return': 'off', // ts(2378)
        'no-dupe-args': 'off', // ts(2300)
        'no-dupe-keys': 'off', // ts(1117)
        'no-func-assign': 'off', // ts(2539)
        'no-import-assign': 'off', // ts(2539) & ts(2540)
        'no-obj-calls': 'off', // ts(2349)
        'no-setter-return': 'off', // ts(2408)
        'no-unreachable': 'off', // ts(7027)
        'no-unsafe-negation': 'off', // ts(2365) & ts(2360) & ts(2358)
        'valid-typeof': 'off', // ts(2367)
      },
    },
  ],
};

module.exports = config;
