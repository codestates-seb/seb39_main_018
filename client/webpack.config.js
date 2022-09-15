const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode : 'development',
    entry: './src/index.jsx',
    devtool: "eval",
    output: {
        path : path.resolve(__dirname,'docs'),
        filename : '[name].bundle.js'
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'docs'),
        },
        compress: true,
        port: 3003,

      },
    module : {
        rules : [
        { 
          test: /\.(js|jsx)$/, 
          exclude:/node_modules/, 
          loader:'babel-loader' 
		},
        { 
          test: /\.css$/, 
          use: ['style-loader' , 'css-loader'] 
        },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
}