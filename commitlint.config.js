module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w*):\s(?:(PD-\d+)\s)?([^\[].+)$/,
      headerCorrespondence: ['prefix', 'issueId', 'subject'],
      referenceActions: null,
    },
  },
  plugins: [
    {
      rules: {
        'header-match-pattern': parsed => {
          const { prefix, issueId, subject } = parsed

          if (prefix === null && issueId === null && subject === null) {
            return [
              false,
              "Header must be in format 'Feat: PD-0000 Description' or 'Feat: Description'",
            ]
          }

          return [true, '']
        },
        'prefix-pattern': (parsed, _when, prefixes) => {
          const { prefix } = parsed

          if (prefix && !prefixes.includes(prefix)) {
            return [false, `Prefix must be one of: [${prefixes.join(', ')}]`]
          }

          return [true, '']
        },
        'issue-id-pattern': parsed => {
          const { subject } = parsed

          if (subject && subject.includes('PD-')) {
            return [
              false,
              `IssueId must come before description: Feat: PD-0000 Description`,
            ]
          }

          return [true, '']
        },
      },
    },
  ],
  rules: {
    'header-match-pattern': [2, 'always'],
    'prefix-pattern': [
      2,
      'always',
      [
        'Feat',
        'Fix',
        'Design',
        'Refactor',
        'Test',
        'Comment',
        'Delete',
        'Rename',
        'Chore',
      ],
    ],
    'issue-id-pattern': [2, 'always'],
  },
}
