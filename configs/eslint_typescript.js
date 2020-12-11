module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: '../tsconfig.json',
  },
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
    'react/require-default-props': 'off', // Disable default-types as we use TypeScript for type checking
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
  overrides: [
    // Override some TypeScript rules just for .js files
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
};
