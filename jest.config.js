const path = require('path');

module.exports = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
  // The directories that Jest should scan for tests and modules within
  rootDir: 'src',
  testPathIgnorePatterns: ['/node_modules/', '/test_helper/'],
  // Shared test setup
  setupFilesAfterEnv: ['<rootDir>/test_helper/index.ts'],
  // transpile via babel
  moduleNameMapper: { '~/': '<rootDir>/' },
  transform: {
    '\\.m?[jt]s$': [
      'babel-jest',
      { configFile: path.resolve(__dirname, '../../babel.config.json') },
    ],
  },
  transformIgnorePatterns: [],
};
