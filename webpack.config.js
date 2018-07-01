const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/client/index.jsx',
  mode: 'production',
  watch: false,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/')
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js($|\?)/i,
        uglifyOptions: {
          parallel: true,
          warnings: false,
          compress: {
            warnings: false
          }
        }
      })
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
    ]
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  }
};
