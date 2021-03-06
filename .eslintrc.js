module.exports = {
  'env': {
    'es6': true,
    'node': true,
    'mocha': true
  },
  'plugins': [
    'mocha',
    'prettier'
  ],
  'extends': [
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'rules': {
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single',
      { 'allowTemplateLiterals': true }
    ],
    'mocha/no-exclusive-tests': 'error'
  }
};
