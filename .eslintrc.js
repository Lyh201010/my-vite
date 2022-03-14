const path = require('path');

module.exports = {
  root: true,
  parserOptions: { project: ['./tsconfig.json'] },
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        project: path.resolve(__dirname, './tsconfig.json'),
      },
      env: {
        browser: true,
      },
      plugins: ['@typescript-eslint', 'react-hooks', 'import'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript/base',
        'prettier',
      ],
      rules: {
        'linebreak-style': ['error', 'unix'],
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
        'import/order': [
          'warn',
          {
            groups: [
              ['internal', 'external', 'builtin'],
              ['index', 'sibling', 'parent'],
            ],
            'newlines-between': 'always-and-inside-groups',
          },
        ],
        'react-hooks/exhaustive-deps': [1],
        '@typescript-eslint/no-shadow': 'off',
      },
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        },
      },
    },
  ],
};
