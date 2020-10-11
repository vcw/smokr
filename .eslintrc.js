module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  settings: {
    'import/core-modules': ['vue', 'vuex'],
    'import/resolver': {
      alias: {
        map: [
          ['~', '.'],
        ],
      },
    },
  },
  // 'import/resolver': {
  //   alias: {
  //     map: [
  //       ['~', '.'],
  //     ],
  //     extensions: ['.vue', '.js'],
  //   },
  // },
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    semi: ['error', 'always'],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
  },
};
