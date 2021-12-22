const fs = require("fs");
const path = require("path");

const tsConfig = fs.existsSync("tsconfig.json")
  ? path.resolve("tsconfig.json")
  : fs.existsSync("types/tsconfig.json")
  ? path.resolve("types/tsconfig.json")
  : undefined;

/** @type {import('eslint').Linter.Config} */
const config = {
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: tsConfig,
      },
      files: ["**/*.ts?(x)"],
      rules: {
        // Handled by Typescript itself
        "no-undef": "off", // ts(2304)
        "consistent-return": "off", // in TS this is much less an issue
        "getter-return": "off", // ts(2378)
        "no-dupe-args": "off", // ts(2300)
        "no-dupe-keys": "off", // ts(1117)
        "no-func-assign": "off", // ts(2539)
        "no-import-assign": "off", // ts(2539) & ts(2540)
        "no-obj-calls": "off", // ts(2349)
        "no-setter-return": "off", // ts(2408)
        "no-unreachable": "off", // ts(7027)
        "no-unsafe-negation": "off", // ts(2365) & ts(2360) & ts(2358)
        "valid-typeof": "off", // ts(2367)

        // Extension Rules https://typescript-eslint.io/rules/#extension-rules
        // In some cases, ESLint provides a rule itself, but it doesn't support TypeScript syntax; either it crashes, or it ignores the syntax, or it falsely reports against it. In these cases, we create what we call an extension rule; a rule within our plugin that has the same functionality, but also supports TypeScript.
        "brace-style": "off",
        "@typescript-eslint/brace-style": [
          "error",
          "1tbs",
          { allowSingleLine: true },
        ],

        "comma-dangle": "off",
        "@typescript-eslint/comma-dangle": "off",

        "comma-spacing": "off",
        "@typescript-eslint/comma-spacing": ["error"],

        "default-param-last": "off",
        "@typescript-eslint/default-param-last": "off",

        "dot-notation": "off",
        "@typescript-eslint/dot-notation": ["error"],

        "func-call-spacing": "off",
        "@typescript-eslint/func-call-spacing": ["error"],

        indent: "off",
        "@typescript-eslint/indent": ["error", 2],

        "init-declarations": "off",
        "@typescript-eslint/init-declarations": "off",

        "keyword-spacing": "off",
        "@typescript-eslint/keyword-spacing": ["error"],

        "lines-between-class-members": "off",
        "@typescript-eslint/lines-between-class-members": ["error"],

        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": ["error"],

        "no-duplicate-imports": "off",
        "@typescript-eslint/no-duplicate-imports": "error",

        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": "off",

        "no-extra-parens": "off",
        "@typescript-eslint/no-extra-parens": ["error"],

        "no-extra-semi": "off",
        "@typescript-eslint/no-extra-semi": ["error"],

        "no-implied-eval": "off",
        "@typescript-eslint/no-implied-eval": ["error"],

        "no-invalid-this": "off",
        "@typescript-eslint/no-invalid-this": ["error"],

        "no-loop-func": "off",
        "@typescript-eslint/no-loop-func": ["error"],

        "no-loss-of-precision": "off",
        "@typescript-eslint/no-loss-of-precision": ["error"],

        "no-magic-numbers": "off",
        "@typescript-eslint/no-magic-numbers": "off",

        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": ["error"],

        "no-restricted-imports": "off",
        "@typescript-eslint/no-restricted-imports": "off",

        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],

        "no-throw-literal": "off",
        "@typescript-eslint/no-throw-literal": ["error"],

        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": ["error"],

        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            ignoreRestSiblings: true,
            args: "none",
            varsIgnorePattern: "^(__|[iI]gnored)", // const __a = '' is ok, const ignoredA = '' is ok either
          },
        ],

        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error", "nofunc"],

        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": ["error"],

        "object-curly-spacing": "off",
        "@typescript-eslint/object-curly-spacing": ["error"],

        "padding-line-between-statements": "off",
        "@typescript-eslint/padding-line-between-statements": "off",

        quotes: "off",
        "@typescript-eslint/quotes": "off",

        "require-await": "off",
        "@typescript-eslint/require-await": "error",

        "no-return-await": "off",
        "@typescript-eslint/return-await": "error",

        semi: "off",
        "@typescript-eslint/semi": "off",

        "space-before-function-paren": "off",
        "@typescript-eslint/space-before-function-paren": [
          "error",
          {
            anonymous: "never",
            named: "never",
            asyncArrow: "always",
          },
        ],

        "space-infix-ops": "off",
        "@typescript-eslint/space-infix-ops": "error",

        // Supported Rules https://typescript-eslint.io/rules/#supported-rules
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": "off",
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/ban-ts-comment": "error",
        "@typescript-eslint/ban-tslint-comment": "error",
        "@typescript-eslint/ban-types": "error",
        "@typescript-eslint/class-literal-property-style": "off",
        "@typescript-eslint/consistent-indexed-object-style": "off",
        "@typescript-eslint/consistent-type-assertions": "off",
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/consistent-type-exports": "off", // not compatible
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/member-delimiter-style": "off", // let prettier handle it
        "@typescript-eslint/member-ordering": "off",
        "@typescript-eslint/method-signature-style": "off", // too hard
        "@typescript-eslint/no-base-to-string": "warn",
        "@typescript-eslint/no-confusing-non-null-assertion": "error",
        "@typescript-eslint/no-confusing-void-expression": "error",
        "@typescript-eslint/no-dynamic-delete": "error",
        "@typescript-eslint/no-empty-interface": [
          "error",
          {
            allowSingleExtends: false,
          },
        ],
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        "@typescript-eslint/no-extraneous-class": "error",
        "@typescript-eslint/no-floating-promises": "warn",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-invalid-void-type": "error",
        "@typescript-eslint/no-meaningless-void-operator": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-misused-promises": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "off",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-parameter-properties": "error",
        "@typescript-eslint/no-require-imports": "off",
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-type-alias": "off",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unnecessary-condition": "error",
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "@typescript-eslint/no-unnecessary-type-arguments": "off",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unnecessary-type-constraint": "error",
        "@typescript-eslint/no-unsafe-argument": "error",
        "@typescript-eslint/no-unsafe-assignment": "error",
        "@typescript-eslint/no-unsafe-call": "error",
        "@typescript-eslint/no-unsafe-member-access": "error",
        "@typescript-eslint/no-unsafe-return": "error",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/non-nullable-type-assertion-style": "off", // not sure
        "@typescript-eslint/prefer-as-const": "error",
        "@typescript-eslint/prefer-enum-initializers": "error",
        "@typescript-eslint/prefer-for-of": "off", // I prefer for of, but I don't want to lint for it
        "@typescript-eslint/prefer-function-type": "off",
        "@typescript-eslint/prefer-includes": "error",
        "@typescript-eslint/prefer-literal-enum-member": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/prefer-readonly": "off", // not sure
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "@typescript-eslint/prefer-reduce-type-parameter": "error",
        "@typescript-eslint/prefer-regexp-exec": "error",
        "@typescript-eslint/prefer-return-this-type": "off",
        "@typescript-eslint/prefer-string-starts-ends-with": "error",
        "@typescript-eslint/prefer-ts-expect-error": "error",
        "@typescript-eslint/promise-function-async": "off",
        "@typescript-eslint/require-array-sort-compare": "off",
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/sort-type-union-intersection-members": "off", // think later...
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/type-annotation-spacing": "off",
        "@typescript-eslint/typedef": "off",
        "@typescript-eslint/unbound-method": "error",
        "@typescript-eslint/unified-signatures": "warn",
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "typeParameter",
            format: ["PascalCase"],
            prefix: ["T"],
          },
          {
            selector: "interface",
            format: ["PascalCase"],
            prefix: ["I"],
          },
        ],
      },
    },
  ],
};

module.exports = config;
