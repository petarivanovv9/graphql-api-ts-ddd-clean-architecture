module.exports = {
  transform: {
    '^.+\\.tsx?$': ['<rootDir>/jest-fix-istanbul-decorators.js'],
  },

  testPathIgnorePatterns: ['/dist/', '/node_modules/'],

  setupFilesAfterEnv: ['<rootDir>/src/tests/jest.setup.ts'],
};
