module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "@vue/standard",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    
    // https://eslint.org/docs/rules/comma-dangle
    "comma-dangle": ["error", "only-multiline"],
    // https://eslint.org/docs/rules/space-before-function-paren
    "space-before-function-paren": [
      "error",
      { anonymous: "always", named: "never", asyncArrow: "always" },
    ],

    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
