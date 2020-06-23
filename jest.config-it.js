module.exports = {
  roots: ['test-it'],
  testRegex: '(.+)\\.spec.ts$',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js'],
};
