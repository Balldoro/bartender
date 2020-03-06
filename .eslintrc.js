module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["eslint:recommended", "airbnb-base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    quotes: ["error", "double"],
    "linebreak-style": 0,
    "no-plusplus": [
      2,
      {
        allowForLoopAfterthoughts: true
      }
    ]
  }
};
