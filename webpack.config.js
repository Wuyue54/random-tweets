const webpack = require('webpack');
const path = require('path');

module.export = {
	devtool:'inline-source-map',
	entry:"./src",
	output:{
		path: path.join(__dirname,'public'),
		filename: 'bundle.js'
	},
	resolve:{
		modulesDirectories:['node_modules','src'],
		extensions:[ '', '.js', '.jsx']
	},
	module:{
		loaders: [
			{
				test: /\.jsx?$/,
        		exclude: /(node_modules|bower_components)/,
        		loader: 'babel'
			},
			{
		        test: /\.css$/,
		        loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 versions'
		    },
		    {
		        test: /\.sass/,
		        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
		    },
		    {
		        test: /\.scss/,
		        loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 versions!sass-loader?outputStyle=expanded'
		    }
		]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.ProvidePlugin({
	      $: "jquery",
	      jQuery: "jquery"
	    })
	]
};