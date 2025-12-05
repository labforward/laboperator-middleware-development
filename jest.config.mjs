import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
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
      { configFile: resolve(__dirname, '../../babel.config.json') },
    ],
  },
  transformIgnorePatterns: [],
};
