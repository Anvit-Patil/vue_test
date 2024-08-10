module.exports = {
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential", // This ensures we're using rules designed for Vue 3
    "eslint:recommended",
    "@vue/prettier",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser", // using Babel's parser
    requireConfigFile: false,
  },
  rules: {
    // Customize your rules
  },
};
