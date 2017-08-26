var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = {
    entry: {
        client: "./src/index.js",
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js"
    },
    resolve: {
        extensions: [".jsx", ".js", ".ts",".tsx", ".css"]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        host: "0.0.0.0",
        port: 8000,
        inline: true,
        disableHostCheck: true,
    },
    module: {
        loaders: [
            {
                test: /(\.ts|\.tsx)$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: { /* Loader options go here */ }
            },
            {
                test: /(\.ts|\.tsx)$/, loader: "ts-loader",
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    externals: {},
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
            hash: true,
            chunks: ["client"],
            filename: "index.html",
            inject: "body"
        }),
        new CopyWebpackPlugin([
            { from: "public/js", to: "js" },
            { from: "public/css", to: "css" },
            { from: "public/fonts", to: "fonts"},
            { from: "public/images", to: "images" },
        ]),
    ]
};
