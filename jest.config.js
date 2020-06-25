module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  "snapshotSerializers": ["jest-serializer-vue"],
  "collectCoverage": true,
  "collectCoverageFrom": ["**/src/components/**/*.{js,vue}", "!**/node_modules/**", "!**/dist/**", "!**/coverage/**"],
  "coverageReporters": ["html", "text-summary"]
}
