const custom = require('../webpack.config.js')

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack5'
  },
  webpackFinal: config => {
    return {
      ...config,
      module: { ...config.module, rules: custom.module.rules },
      watchOptions: { ...config.watchOptions, poll: true }
    }
  }
}
