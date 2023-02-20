module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname, 
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin','eslint-plugin-unicorn', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'prettier/prettier': ['error', { 'endOfLine': 'auto', 'printWidth': 120 }],
    '@typescript-eslint/interface-name-prefix': 'off',
    'unicorn/filename-case': ['error',{ 'case': 'kebabCase'}]
  },
};
