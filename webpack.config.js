var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './app/main.jsx'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  }
};