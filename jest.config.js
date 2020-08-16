module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  modulePaths: ['<rootDir>/src'],
  collectCoverage: true,
  collectCoverageFrom: [
    'components/**/**/*.{js,jsx}',
    '!components/**/**/index.js',
    '!components/**/index.js',
    'services/**/*.{js,jsx}',
    'services/*.{js,jsx}',
    'i18n/**/*.{js,jsx}',
    'pages/*.{js,jsx}',
    'pages/**/*.{js,jsx}',
    'util/**/*.{js,jsx}'
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: -10
    }
  }
}
