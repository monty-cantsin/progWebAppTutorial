const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const srcDir = resolve(__dirname, 'src')
const env = process.env.NODE_ENV

module.exports = {
	entry: `${srcDir}/index.js`,
	output: {
		filename: 'bundle.js',
		publicPath: '/'

	},
	devServer: {
		historyApiFallback: true
	},
	module: {
		rules: [/*{
			enforce: 'pre',
			test: /\.js$/,
			loader: 'standard-loader',
			exclude: /node_modules/
		},*/ {
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			use: env === 'production'
				? ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"'
			}) : [ {
					loader: 'style-loader'
				}, {
					loader: 'css-loader',
					options: {
						modules: true,
						localIdentName: '[hash:base64:6]-[name]-[local]',
						camelCase: true
					}
				} 
			]
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: `${srcDir}/index.html`
		}),
		new ExtractTextPlugin('[name].css'),
		new DashboardPlugin()
	]
} 

/*			use: [
				{
					loader: 'style-loader'
				}, {
					loader: 'css-loader',
					options: {
						modules: true,
						localIdentName: '[hash:base64:6]-[name]-[local]',
						camelCase: true
					}
				} 
			]*/