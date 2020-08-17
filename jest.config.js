module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  modulePaths: ['<rootDir>/src'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/**/*.{js,jsx}',
    '!src/components/**/**/index.js',
    '!src/components/**/index.js',
    'src/pages/**/*.{js,jsx}',
    '!src/pages/index.js',
    '!src/pages/**/index.js',
    'src/services/**/*.{js,jsx}',
    'src/services/*.{js,jsx}',
    'src/utils/**/*.{js,jsx}',
    'src/utils/*.{js,jsx}',
    '!src/utils/**/index.js',
    '!src/utils/index.js'
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
