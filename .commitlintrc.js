module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 100],
    'subject-case': [2, 'never', ['pascal-case', 'upper-case']],
    'type-case': [2, 'always', 'upper-case'],
    'type-enum': [
      2,
      'always',
      ['DOCS', 'FEAT', 'FIX', 'PERF', 'REFACTOR', 'TASK', 'TEST'],
    ],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^\\\[(\\w*)\\\]\\s(.*)$/,
      headerCorrespondence: ['type', 'subject'],
      issuePrefixes: ['#'],
    },
  },
};
