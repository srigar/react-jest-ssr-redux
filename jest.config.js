module.exports = {
  clearMocks: true,
  collectCoverageFrom: ["src/modules/**/*.{js}"],
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js"],
  setupFiles: ["<rootDir>/enzyme.config.js"],
  testEnvironment: "jsdom",
  testMatch: ["**/?(*.)+(spec|test).js"],
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  testURL: "http://localhost",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  verbose: false,
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/CSSStub.js"
  }
};
