const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.ts",
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        port: 3000,
        compress: true,
    },
    module: {
        rules: [{ test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ }],
    },
    resolve: {
        extensions: [".js", ".ts"],
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
    mode: "development",
};