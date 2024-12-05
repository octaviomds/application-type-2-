module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'react-native', 'react', '@typescript-eslint'],
  rules: {
    'no-unused-vars': 0,
    'react-native/no-inline-styles': 'off',
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'react/prop-types': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'react-hooks/exhaustive-deps': 'off',
    'no-shadow': 'off',
    'no-alert': 'off',
    'no-restricted-properties': ['error', {object: 'Math', property: 'pow'}],
    'object-curly-newline': 'off',
    'react/no-unstable-nested-components': 'off',
    'typescript-eslint/no-unused-vars': 'off',
    'no-self-compare': 'off',
  },
  settings: {
    'import/ignore': ['react-native'],
  },
};
