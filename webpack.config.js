//configuracion de webpack

var webpack = require('webpack');
var path = require('path');
var libraryName = 'library';
var outputFile = libraryName + '.js';

var config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  },
    devServer: {
    contentBase: path.resolve(__dirname, "public"),
    host: "0.0.0.0",
    port: 8000,
    inline: true,
    disableHostCheck: true,
    proxy: [{
        path: `/api`,
        // target: 'http://10.36.96.219:9090',
        target: 'https://integration.innovacionpacifico.com',
        secure: false
    }],
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  }
};

module.exports = config;