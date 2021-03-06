const path = require('path');

module.exports = {
  extends: [
    path.resolve('./node_modules/labforward-config-base/eslint/node.yml'),
  ],
  rules: {
    'import/no-unresolved': [
      'off',
      {
        commonjs: true,
        caseSensitive: true,
        ignore: [
          // ref: https://github.com/benmosher/eslint-plugin-import/issues/1810
          '^laboperator-middleware/(config|errors|helpers|laboperator|test_helper)$',
        ],
      },
    ],
    '@typescript-eslint/no-var-requires': 'off',
  },
  overrides: [
    {
      files: ['**/*.spec.js', '**/*.spec.ts'],
      env: {
        mocha: true,
      },
      globals: {
        chai: true,
        expect: true,
        request: true,
      },
      plugins: ['mocha'],
      extends: ['plugin:mocha/recommended'],
      rules: {
        'mocha/no-mocha-arrows': 'off',
        'max-nested-callbacks': 'off',
      },
    },
    {
      files: ['src/test_helper/**/*.js', 'src/test_helper/**/*.ts'],
      rules: {
        'mocha/no-hooks-for-single-case': 'off',
        'mocha/no-top-level-hooks': 'off',
      },
    },
    {
      files: [
        'src/test_helper/fixtures/**/*.js',
        'src/test_helper/fixtures/**/*.ts',
      ],
      rules: {
        camelcase: 'off',
      },
    },
  ],
};
