/*
 * Copyright By ZATI
 * Copyright By 3a3c88295d37870dfd3b25056092d1a9209824b256c341f2cdc296437f671617
 * All rights reserved.
 *
 * If you are not the intended user, you are hereby notified that any use, disclosure, copying, printing, forwarding or
 * dissemination of this property is strictly prohibited. If you have got this file in error, delete it from your system.
 */
const path = require('path');

module.exports = {
  root: true,
  parserOptions: { "project": ["./tsconfig.json"] },
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
      plugins: ['@typescript-eslint', 'react-hooks'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript/base',
        'prettier',
        'prettier/@typescript-eslint',
      ],
      rules: {
        'linebreak-style': ['error', 'unix'],
        'import/prefer-default-export': 'off',
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
