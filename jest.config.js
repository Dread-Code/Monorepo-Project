module.exports = {
  projects: [
    {
      displayName: 'core',
      testMatch: ['<rootDir>/core/src/**/*.test.{js,jsx}']
    },
    {
      displayName: '@usp/components',
      testMatch: ['<rootDir>/packages/usp-components/stories/**/*.test.{js,jsx}'],
      moduleNameMapper: {
        '^.+\\.(css|less|scss)$': 'identity-obj-proxy'
      },
      setupFilesAfterEnv: ['<rootDir>/setupTests.js']
    }
  ],
  collectCoverage: true
}
