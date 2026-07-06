const path = require("path");
module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, '../src/colt/src/consumer.ts'),
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
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
        path: path.resolve(__dirname, "../src/colt/dist"),
    }
}