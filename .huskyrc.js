const lintStagedConfig = require('./lint-staged.config.js')

module.exports = {
  hooks: {
    'pre-commit': `lint-staged --config ${JSON.stringify(lintStagedConfig)}`,
  },
}
