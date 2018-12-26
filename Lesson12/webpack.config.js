const HtmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports = {
    mode:'development',
    entry:'./src/main.js',
    resolve:{
        alias:{
            vue:'vue/dist/vue.esm.js',
        }
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
        }),
        new VueLoaderPlugin()
    ]
}