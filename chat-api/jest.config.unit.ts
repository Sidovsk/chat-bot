import baseConfig from './jest.config';

export default {
  ...baseConfig,
  testMatch: ['**/__tests__/unit/**/*.(test|spec).ts', '**/src/**/*.(test|spec).ts'],
};
