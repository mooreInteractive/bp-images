/* webpack.config.js */

module.exports = {
	entry: './index.js',
	output: {
		filename: 'public/bundle.js',
		publicPath: 'http://localhost:8090/'
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style-loader!css-loader" },
			{ test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
		]
	},
	resolve: {
		extensions: ['', '.js', '.css', '.styl']
	}

}