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
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: {
                    
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            }
        ]
    }
}