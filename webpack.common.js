const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    plugins: [new HtmlWebpackPlugin({
        template: './src/assets/index.html'
    })],
    module:{
        rules:[
            {
                test: /\.(gif|png|jpe?g)$/,
                use: [
                {
                    loader: 'file-loader',
                    options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/images/'
                    }
                }
            ]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options:{
                    presets: [
                        ['@babel/preset-env', { targets: "defaults" }]
                      ]
                  }
             }
        ]
    }
}