const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  entry: './src/index.js',
  target: 'node',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.graphqls$/,
        use: 'raw-loader'
      }
    ]
  },
  plugins: [
      new webpack.IgnorePlugin(/vertx/),
  ],
};
