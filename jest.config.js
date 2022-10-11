module.exports = {
  cacheDirectory: '.cache/jest',
  clearMocks: true,
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|mdx)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js"
  },
  transform: {
    '^.+\\.stories\\.[jt]sx?$': '@storybook/addon-storyshots/injectFileName',
    "^.+\\.mdx?$": "@storybook/addon-docs/jest-transform-mdx",
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest'
  },
  transformIgnorePatterns: ['/node_modules/(?!lit-html).+\\.js'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    "<rootDir>/src/designTokens/"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'stories/components/*.{js,jsx,ts,tsx}',
    'stories/form/*.{js,jsx,ts,tsx}',
    "stories/**/{!(ignore-me),}.js"
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__mocks__ /',
    '/__testfixtures__/',
    'typings.d.ts$',
  ],
  globals: {
    DOCS_MODE: false,
    PREVIEW_URL: undefined,
  },
  snapshotSerializers: [
    'jest-serializer-html',
  ],
  verbose: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov'],
  testEnvironment: 'jest-environment-jsdom-thirteen',
  testURL: 'http://localhost',
  modulePathIgnorePatterns: ['/dist/.*/__mocks__/'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  reporters: ['default'],
};