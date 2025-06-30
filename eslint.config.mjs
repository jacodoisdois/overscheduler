import antfu from '@antfu/eslint-config';
import tseslint from 'typescript-eslint';

export default antfu(
  {
    formatters: true,
    type: 'app',
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: true,
    },
    typescript: true,
    rules: {
      'consistent-return': 'off',
      'ts/strict-boolean-expressions': 'off',
      'node/prefer-global/process': 'off',
      'ts/consistent-type-assertions': 'error',
      'ts/explicit-function-return-type': ['error', {
        allowExpressions: false,
        allowConciseArrowFunctionExpressionsStartingWithVoid: false,
        allowTypedFunctionExpressions: true,
      }],
      'ts/explicit-module-boundary-types': 'error',
      'antfu/top-level-function': 'off',
    },
    imports: true,
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: new URL('.', import.meta.url),
        sourceType: 'module',
      },
    },
  },
);
