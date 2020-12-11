module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    "prettier/prettier": ["error", { "endOfLine": "auto" }],
    "react/no-did-mount-set-state": ["disable"],
  }
};
