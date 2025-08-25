module.exports = {
  preset: 'jest-playwright-preset',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./test-utils/setup.ts'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
