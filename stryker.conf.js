/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */

const { getMutationCandidates } = require('@mutationapp/mutate')

const { files, mutate, page } = getMutationCandidates({
  MUTATE_STRATEGY: 'all',
})

module.exports = {
  files: files.length ? ['jest/**/*.js', '**/shared/*.ts', ...files] : [],
  mutate,
  testRunner: 'jest',
  reporters: ['progress', 'clear-text', 'html'],
  maxConcurrentTestRunners: 6,
  coverageAnalysis: 'off',
  jest: {
    config: require('./jest.config.js'),
    enableFindRelatedTests: true,
  },
  mutator: 'typescript',
  tempDirName: `.stryker-tmp-${page}`,
}
