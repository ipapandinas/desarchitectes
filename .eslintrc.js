module.exports = {
  extends: [
    'react-app',
    'plugin:jsx-a11y/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],

  plugins: ['jsx-a11y'],

  rules: {
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    'no-console': 'error',
    'no-eval': 'error',
    'no-shadow': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
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
  },

  globals: {
    globalThis: false,
  },
};
