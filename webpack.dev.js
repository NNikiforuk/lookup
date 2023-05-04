const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
	mode: "development",
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "images/[name][ext]",
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./src/template.html",
			chunks: ["main"],
		}),
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"style-loader", //3. Injects styles into DOM
					"css-loader", //2. Turns css into common js
					"sass-loader", //1. Turns sass into css
				],
			},
		],
	},
});
