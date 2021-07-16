const path = require('path');

module.exports = {
  extends: ['plugin:react/recommended', '@redventures/eslint-config-rv'],
  rules: {
    'no-duplicate-imports': ["error", { "includeExports": true }],
    'global-require': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'max-len': 0,
    'no-console': ['error', { allow: ['debug'] }],
    'no-param-reassign': ['error', { ignorePropertyModificationsFor: ['state'] }],
    'no-underscore-dangle': ['error', {
      allow: [
      ],
    }],
    'no-unused-expressions': ['error', { allowTernary: true }],
    'object-curly-newline': ['error', {
      ImportDeclaration: 'never',
      ExportDeclaration: 'never',
    }],
    'operator-linebreak': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  env: {
    browser: true,
  },
  plugins: ['react'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
};
