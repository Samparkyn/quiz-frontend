'use strict';

const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const npmPackage        = require('./package.json');
const DashboardPlugin   = require('webpack-dashboard/plugin');
const host              = '0.0.0.0';
const port              = 5000;


const config = {
  entry: {
    app: './src/app'
  },

  output: {
    path:       './dist',
    publicPath: `http://${host}:${port}/`,
    filename:   '[name].js',
    pathinfo:   true
  },
  
  resolve: {
    root: './src',
    extensions: ['', '.js', '.jsx']
  },
  
  devtool: 'eval-source-map',
  
  module: {
    loaders: [
      {
        test:    /\.jsx?$/,
        loaders: ['react-hot', 'babel?sourceMap'],
        exclude: /node_modules/
      },
      {
        test:    /\.css$/,
        loaders:  ['style', 'css?sourceMap', 'postcss'],
        exclude: /node_modules/
      },
      {
        test:    /\.(png|jpg|gif|svg)$/,
        loader:  'url?limit=8192&name=images/[name].[ext]',
        exclude: /node_modules/
      },
      {
        test:    /\.(eot|ttf|woff|woff2)$/,
        loader:  'url?limit=8192&name=fonts/[name].[ext]',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  
  postcss: function (webpack) {
    return [
      require('postcss-import')({addDependencyTo: webpack, map: true}),
      require('postcss-url')(),
      require('postcss-cssnext')({map: true}),
      require('postcss-reporter')()
    ];
  },

  plugins: [
    new DashboardPlugin({port: 3100}),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('development')}
    }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(npmPackage.version)
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: 'Cash Quiz',
      inject: 'body'
    })
  ],

  devServer: {
    contentBase: './src',
    cached:      false,
    colors:      true,
    port:        port,
    host:        host,
    quiet:       true,
    historyApiFallback: true,

    stats: {
      hash:    false,
      colors:  true,
      cached:  false,
      version: false
    }
  }
};


module.exports = config;
