const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const refreshPlugin = ['react-refresh/babel'];

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  devtool: 'eval',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].bundle.js',
    publicPath: "/",
  },
  stats: 'errors-only',
  devServer: {
    static: {
      directory: path.join(__dirname, 'docs'),
    },
    hot: true,
    compress: true,
    port: 3003,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: refreshPlugin,
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new RefreshWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
