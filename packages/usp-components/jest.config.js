const basic = require('../../jest.config.base')

module.exports = {
  ...basic,
  setupFilesAfterEnv: ['../../setupTests.js']
}
