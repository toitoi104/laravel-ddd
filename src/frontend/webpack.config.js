const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = `${__dirname}/../public/bundles/`;
const dotenv = require('dotenv')
const env = dotenv.config().parsed;
const webpack = require("webpack");

module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "development",

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: "./src/route/index.tsx",
    // ファイルの出力設定
    output: {
        //  出力ファイルのディレクトリ名
        path: path,
        // 出力ファイル名
        filename: "main.js"
    },
    module: {
        rules: [
            {
                // 拡張子 .ts の場合
                test: /\.ts|.tsx$/,
                // TypeScript をコンパイルする
                use: [{ loader: "ts-loader" }],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader', //追加
                ],
            },
        ]
    },
    // import 文で .ts ファイルを解決するため
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    },
    // ES5(IE11等)向けの指定（webpack 5以上で必要）
    target: ["web", "es5"],

    plugins: [
        new MiniCssExtractPlugin({
            filename: './tailwind/index.css',
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(env),
        }),
    ],
};
