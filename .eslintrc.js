module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:react-hooks/recommended', // Uses the recommended rules from @eslint-plugin-react-hooks
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g., "@typescript-eslint/explicit-function-return-type": "off",
    'react/react-in-jsx-scope': 'off', // No need for React import with React 17+ JSX Transform
    'react-native/no-unused-styles': 'warn',
    'react-native/split-platform-components': 'warn',
    'react-native/no-inline-styles': 'off',
    'react-native/no-color-literals': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'indent': ['error', 2], // Enforce two-space indentation
    'object-curly-spacing': ['error', 'always'], // Enforce spacing inside of curly braces
    'array-bracket-spacing': ['error', 'never'], // Enforce spacing inside of array brackets
    'block-spacing': ['error', 'always'], // Enforce spacing inside of single-line blocks
    'space-in-parens': ['error', 'never'], // Enforce spacing inside of parentheses
    'key-spacing': ['error', { beforeColon: false, afterColon: true }], // Enforce spacing around object keys
    'keyword-spacing': ['error', { before: true, after: true }], // Enforce spacing before and after keywords
    'comma-spacing': ['error', { before: false, after: true }], // Enforce spacing before and after commas
    'space-before-blocks': 'error', // Enforce spacing before blocks
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always'
    }], // Enforce spacing before function parenthesis
    'arrow-spacing': ['error', { before: true, after: true }], // Enforce spacing before and after arrow functions
    'semi': ['error', 'never'],
    // any other rules you want to change/add
  },
  overrides: [
    {
      // Enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['warn', {
          allowExpressions: true, // allows concise arrow functions with inferred return types
          allowTypedFunctionExpressions: true,
        }],
      },
    },
  ],
};