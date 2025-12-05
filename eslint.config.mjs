import { defineConfig } from 'eslint/config';
import nodeConfig from '@laboperator-gmbh/eslint-config-node';

export default defineConfig(
  nodeConfig,
  { ignores: ['src/templates'] },
  {
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      'import/no-unresolved': [
        'off',
        {
          caseSensitive: true,
          commonjs: true,
          ignore: [
            '^middleware/(config|errors|helpers|laboperator|test_helper)$',
          ],
        },
      ],
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
);
