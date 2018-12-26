const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode:'development',
    entry:"./src/index.js",
    resolve:{
        alias:{
            "vue":"vue/dist/vue.esm.js"
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
        })
    ]
}