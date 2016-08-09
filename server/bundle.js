const Webpack = require('webpack');
const WebpackDevServer =  require('webpack-dev-server');
const webpackConfig = require('../webpack.config.js');
const fs = require('fs');

module.exports = function(){
	var bundleStart = null;
	var compiler = Webpack(webpackConfig);

	compiler.plugin('compiler', function(){
		console.log('Bundling...');
		bundleStart = Date.now();
	});

	compiler.plugin('done', function(){
		console.log(' Bundled in' + (Date.now() - bundleStart) + 'ms!');
	});

	var bundler = new WebpackDevServer(compiler, {
		publicPath: '/public',
		hot: true,
		quiet: false,
		noInfo: true,
		stats:{
			colors: true
		}
	});

	bundler.listen(8080, 'localhost', function () {
	    console.log('Bundling project, please wait...');
	 });
}