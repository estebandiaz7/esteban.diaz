module.exports = {
  preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg)",
  ],
  setupFiles: ["<rootDir>/src/setupTestsBeforeEnv.tsx"],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 70,
      lines: 70,
      functions: 70,
    },
  },
};
