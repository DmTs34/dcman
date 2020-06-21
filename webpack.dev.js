const path = require("path");
const common = require("./webpack.common")
const merge = require("webpack-merge")

module.exports = merge(common,{
    mode: "development",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "public"),
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 8080,
        historyApiFallback: true
    }

});
  