const { resolve } = require('path');

module.exports = (env) => ({
  mode: env.development ? 'development' : 'production',
  entry: './public/index.js',
  optimization: {
    minimize: false,
  },
  output: {
    filename: 'bundle.js',
    path: resolve('./public'),
  },
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
});
