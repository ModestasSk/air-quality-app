const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'frontend', 'src', 'index.jsx'),
  output: {
    path: path.join(__dirname, 'frontend', 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        resolve: { extensions: ['.js', '.jsx'] },
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
      
    ],
  },
  
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.join('.', 'frontend', 'src', 'index.html'),
  })],
};