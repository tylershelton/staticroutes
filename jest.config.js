/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest/presets/js-with-ts-esm',
  // preset: 'ts-jest/presets/js-with-babel-esm',
  extensionsToTreatAsEsm: ['.ts', '.tsx', '.jsx'],
  testEnvironment: 'jsdom'
};
