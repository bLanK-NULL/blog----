const htmlwebpackplugin = require('html-webpack-plugin');
module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    devServer: { 
        port: 8080,
        host: 'localhost',
        open: true,
        hot: true
},
    module: {
        rules: [ ]
    },
    plugins: [
        new htmlwebpackplugin({
            template: './index.html',
            filename: 'index.html'
        })
    ],
    mode: 'development'
}