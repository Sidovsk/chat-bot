export default {
  clearMocks: true,
  bail: 0,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  roots: ['src', '__tests__'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageProvider: 'v8',
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(test).[tj]s?(x)'],
  transform: {
    '^.+.(t|j)sx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^@common/(.*)$': '<rootDir>/src/common/$1',
    '^@application/(.*)$': '<rootDir>/src/application/$1',
    '^@domain/(.*)$': '<rootDir>/src/domain/$1',
    '^@infra/(.*)$': '<rootDir>/src/infra/$1',
    '^@presentation/(.*)$': '<rootDir>/src/presentation/$1',
  },
};
