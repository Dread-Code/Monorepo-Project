const basic = require('../../jest.config')

module.exports = {
  ...basic.projects[1],
  setupFilesAfterEnv: ['../../setupTests.js'],
  testMatch: ['<rootDir>/stories/**/*.test.{js,jsx}']
}
