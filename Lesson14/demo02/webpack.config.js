const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require('webpack')
module.exports = {
    mode:process.env.NODE_ENV,
    entry:'./src/main.js',
    resolve:{
        alias:{
            vue:'vue/dist/vue.esm.js',
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
        }),
        // webpack.DefinePlugin({
        //     "process."
        // })
    ],
}