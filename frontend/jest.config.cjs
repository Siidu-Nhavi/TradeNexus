module.exports = {
  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },

  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },

  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },

  moduleFileExtensions: ['js', 'jsx'],


  testMatch: [
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],

   setupFiles: ['./jest.setup.js'],
};