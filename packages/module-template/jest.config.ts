module.exports = {
  setupFilesAfterEnv: ["<rootDir>/test/setupTests.ts"],
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  globals: { __DEV__: true },
};
