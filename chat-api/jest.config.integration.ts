import baseConfig from '../chat-api/jest.config';

export default {
  ...baseConfig,
  testMatch: ['**/__tests__/*.e2e.test.ts'],
};
