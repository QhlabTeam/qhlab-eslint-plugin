/** @type {import('eslint').Linter.Config} */
const config = {
  rules: {
    'accessor-pairs': 'error',
    'arrow-body-style': 'off',
    'block-scoped-var': 'error',
    camelcase: 'off',
    'capitalized-comments': 'off',
    'class-methods-use-this': 'off',
    complexity: 'off',
    'consistent-return': 'error',
    'consistent-this': ['error', 'that'],
    curly: 'off',
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'off',
    'dot-notation': ['error', {allowKeywords: true}],
    eqeqeq: 'error',
    'func-name-matching': 'error',
    'func-names': ['error', 'as-needed'],
    'func-style': ['error', 'declaration', {allowArrowFunctions: true}],
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'id-denylist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'init-declarations': 'off',
    'max-classes-per-file': 'off',
    'max-depth': 'off',
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'multiline-comment-style': 'off',
    'new-cap': 'error',
    'no-alert': 'warn',
    'no-array-constructor': 'error',
    'no-bitwise': 'off',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-confusing-arrow': ['error', {allowParens: true}],
    'no-console': 'warn',
    'no-continue': 'off',
    'no-delete-var': 'error',
    'no-div-regex': 'off',
    'no-else-return': 'warn',
    'no-empty': 'warn',
    'no-empty-function': 'warn',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-extra-semi': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'off',
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-mixed-operators': 'error',
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'off',
    'no-new': 'off',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-exports': 'off',
    'no-restricted-globals': 'off',
    'no-restricted-imports': 'off',
    'no-restricted-properties': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'off',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-ternary': 'off',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'no-with': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'initializations'],
    'operator-assignment': ['error', 'always'],
    'prefer-arrow-callback': 'off',
    'prefer-const': 'error',
    'prefer-destructuring': 'off',
    'prefer-exponentiation-operator': 'error',
    'prefer-named-capture-group': 'off',
    'prefer-numeric-literals': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': ['error', {allowEmptyReject: true}],
    'prefer-regex-literals': 'off',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': 'off',
    radix: 'error',
    'require-await': 'error',
    'require-unicode-regexp': 'off',
    'require-yield': 'error',
    'sort-imports': 'error',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'spaced-comment': 'error',
    strict: 'off',
    'symbol-description': 'error',
    'vars-on-top': 'off',
    yoda: 'off',
  },
};

module.exports = config;