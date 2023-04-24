module.exports = {
	entry: "./src/index.js",
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
