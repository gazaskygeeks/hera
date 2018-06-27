const path = require('path');

module.exports = {
  entry: './src/client/index.jsx',
  mode: 'development',
  watch: false,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/')
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
      {
        test: /\.(png|jpg|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: path.resolve(__dirname, 'src/client/')
            }
          }
        ]
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  },
  watch: false
};
