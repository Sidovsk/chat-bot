module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@common/(.*)$': '<rootDir>/src/common/$1',
    '^@application/(.*)$': '<rootDir>/src/application/$1',
    '^@domain/(.*)$': '<rootDir>/src/domain/$1',
    '^@infra/(.*)$': '<rootDir>/src/infra/$1',
    '^@main/(.*)$': '<rootDir>/src/main/$1',
    '^@presentation/(.*)$': '<rootDir>/src/presentation/$1',
  },
};
