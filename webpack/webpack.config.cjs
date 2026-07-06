const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, '../src/react/src/index.js'),
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                use: 'babel-loader',
                exclude: "/node_modules/"
            }
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "../src"),
        },
        port: 8080,
        hot: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../src/react/dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/react/public/index.html')
        }),
        new CleanWebpackPlugin()
    ]
}