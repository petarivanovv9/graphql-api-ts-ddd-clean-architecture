module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  testPathIgnorePatterns: ['/dist/', '/node_modules/'],

  setupFilesAfterEnv: ['<rootDir>/src/tests/jest.setup.ts'],
};
