const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist'),
        assetModuleFilename: "static/[name][ext][query]",//
        clean:true
    },
    devServer: { 
        host: "localhost",
        port: 8081,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [{
            test: /\.(png|jpe?g|gig|svg)$/,
            type: "asset/resource",
            parser: {
                dataUrlCondition: {
                    maxSize: 10 * 1024
                }
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html"),
            filename: 'index.html'
        }),
    ],
    mode: 'development'
}