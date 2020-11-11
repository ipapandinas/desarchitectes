module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },

  plugins: ['@typescript-eslint', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'react-app',
    './configs/eslint_typescript.js',
  ],
  rules: {
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    'implicit-arrow-linebreak': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'function-paren-newline': 'off',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: 'always',
        ObjectPattern: {
          multiline: true,
        },
      },
    ],
    'no-console': 'error',
    'no-eval': 'error',
    'no-shadow': 'off',
    'no-import-assign': 'off',
    'no-setter-return': 'off',
    'no-dupe-else-if': 'off',
    'operator-linebreak': [
      2,
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
        },
      },
    ],
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/prefer-stateless-function': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/state-in-constructor': ['error', 'never'],
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '.'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  globals: {
    globalThis: false,
  },
};
