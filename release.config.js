/** @type {import('semantic-release').Options} */
const release = {
  branches: 'main',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
        },
        releaseRules: [
          { type: 'chore', release: 'patch' },
          {
            type: 'docs',
            release: 'patch',
          },
          {
            type: 'build',
            release: 'patch',
          },
          {
            type: 'ci',
            release: 'patch',
          },
          {
            type: 'style',
            release: 'patch',
          },
          {
            type: 'test',
            release: 'patch',
          },
        ],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
        },
        writerOpts: {
          commitsSort: ['subject', 'scope'],
        },
        presetConfig: {
          types: [
            { type: 'chore', section: 'Chores', hidden: false },
            {
              type: 'docs',
              section: 'Docs',
              hidden: false,
            },
            {
              type: 'build',
              section: 'Builds',
              hidden: false,
            },
            {
              type: 'ci',
              section: 'Continuous Integration',
              hidden: false,
            },
            {
              type: 'style',
              section: 'Code Style',
              hidden: false,
            },
            {
              type: 'test',
              section: 'Tests',
              hidden: false,
            },
          ],
        },
      },
    ],
    '@semantic-release/npm',
    '@semantic-release/github',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    [
      '@semantic-release/git',
      {
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
}

module.exports = release
