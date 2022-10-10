module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    'src/(.*).pact.ts'
  ],
  verbose: true,
  // Coverage options
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.test.ts',
    '!src/**/*.pact.ts',
  ],
  coverageDirectory: 'build/coverage',
  // setupFiles: ['<rootDir>jest-setup.js']
};
