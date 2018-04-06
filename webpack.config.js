const path = require('path');

module.exports = {
  entry: __dirname + '/src' + '/js' + '/main.jsx',
  output: {
    path: __dirname + '/public/',
    filename: 'index.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
