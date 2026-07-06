const path = require("path");

module.exports = {
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
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../src/colt/dist")
    }
}