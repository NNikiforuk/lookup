module.exports = {
	entry: {
		main: "./src/index.js",
		second: "./src/second.js"
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ["html-loader"],
			},
			{
				test: /\.(svg|png|jpg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
};



