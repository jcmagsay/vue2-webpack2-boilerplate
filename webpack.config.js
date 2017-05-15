const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  'template': './src/index.html',
  'filename': 'index.html',
  'inject': 'body'
})

module.exports = {
  'devtool': 'source-map',
  'entry': './src/main.js',
  'output': {
    'path': path.resolve(__dirname, 'public/assets'),
    'publicPath': process.env.NODE_ENV == 'production' ? '/assets/' : '/',
    'filename': 'bundle.js',
  },
  'module': {
    'rules': [
      {
        'test': /\.js$/,
        'exclude': /node_modules/,
        'use': [{
          'loader': 'babel',
          'options': {
            'presets': ['es2015']
          }
        }]
      },
      {
        'test': /\.vue$/,
        'use': [{
          'loader': 'vue'
        }],
        'exclude': /node_modules/
      },
      {
        'test': /\.(png|jpg|jpeg|gif)$/,
        'loader': 'url?limit=10000&name=images/[name].[ext]',
        'exclude': /node_modules/
      },
      {
        'test': /\.(sass|scss)$/,
        'use': ExtractTextPlugin.extract(
          ['css', 'postcss', 'sass']
        ),
        'exclude': /node_modules/
      }
    ]
  },
  'resolve': {
    'alias': {
      'components': path.resolve(__dirname, './src/client/components'),
      'layouts': path.resolve(__dirname, './src/client/layouts'),
      'router': path.resolve(__dirname, './src/client/router'),
      'views': path.resolve(__dirname, './src/client/views'),
      'vue': 'vue/dist/vue'
    },
    'extensions': ['.js', '.json', '.vue', '.scss'],
  },
  'resolveLoader': {
    'moduleExtensions': ['-loader']
  },
  'plugins': [
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin({ filename: '[name].css', allChunks: true }),
    new webpack.LoaderOptionsPlugin({
      'options': {
        'postcss': [
          autoprefixer({
            'browsers': ['last 3 versions', '> 1%', 'IE >= 11']
          })
        ]
      }
    })
   ],
   'devServer': {
     'historyApiFallback': true
   }
};
