const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/app.js",
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/template.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ,{
        test: /\.css$/,
        use:['style-loader','css-loader']
        }]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
};
  