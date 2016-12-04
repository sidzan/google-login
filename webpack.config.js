var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    APP_DIR + '/index.jsx'
    ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath:'http://localhost:82/src/client/public/',
  },
	plugins: [
	  new webpack.HotModuleReplacementPlugin()
	],
  module : {
    loaders : [

		{ test: /\.jsx?$/, loaders: ['react-hot', 'jsx?harmony'], include: path.join(__dirname, 'src') },
		{
        test : /\.jsx?/,
		loader: 'babel-loader',
		query: {
		  presets: ['es2015', 'react']
		}

      }
    ]
  },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },

};

module.exports = config;
