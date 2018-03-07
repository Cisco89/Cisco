var Webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var config = {
    entry: {
        app:    './src/index.jsx',
        vendor: ['react', 'react-dom'],
    },
    output: {
        filename: '[name].[chunkhash].js',
        path:       './public',
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_compnents)/,
            use: {
                loader: 'babel-loader',
                options: { presets: ['es2015', 'react']}
            }
        }]
    },
    plugins: [
        new Webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin({

        })
    ],
};

module.exports = config;
