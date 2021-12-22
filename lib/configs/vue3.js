/** @type {import('eslint').Linter.Config} */
const config = {
  parserOptions: {
    ecmaVersion: "2021",
  },
  extends: [require.resolve("./base"), "plugin:vue/vue3-recommended"],
  // Override rules
  rules: {
    eqeqeq: "off",
    "no-negated-condition": "off",
    "guard-for-in": "off",
    "vue/max-attributes-per-line": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/html-indent": "off",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "any",
          normal: "always",
          component: "always",
        },
      },
    ],
    "vue/multiline-html-element-content-newline": "off",
    "vue/require-explicit-emits": "off",
    "vue/no-v-html": "off",
    "vue/require-explicit-emits": "off",
  },
  overrides: [
    {
      files: "*",
      extends: require.resolve("./prettier.js"),
    },
  ],
};

module.exports = config;
