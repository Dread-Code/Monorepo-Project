const basic = require('../jest.config')

module.exports = {
  ...basic.projects[0],
  setupFilesAfterEnv: ['../setupTests.js'],
  testMatch: ['<rootDir>/src/**/*.test.{js,jsx}']
}
