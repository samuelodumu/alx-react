const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { SplitChunksPlugin } = require('webpack');

module.exports = {
  mode: 'development', // set mode option, 'development' or 'production'
  entry: {
    header: './modules/header/header.js', // entry point for header.js
    body: './modules/body/body.js', // entry point for body.js
    footer: './modules/footer/footer.js' // entry point for footer.js
  },
  output: {
    path: path.resolve(__dirname, 'public'), // output path
    filename: '[name].bundle.js' // output filename
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // split all chunks
    },
  },
  'devtool': 'inline-source-map', // enable source mapping
  devServer: {
    static: path.resolve(__dirname, 'public'), // static files
    port: 8564, // port number
    open: true, // open browser
    hot: true, // hot module replacement
    compress: true, // enable gzip compression
  },

  module: {
    rules: [
      // loaders
      {
        test: /\.css$/, // files with .css extension
        use: ['style-loader', 'css-loader'] // use style-loader and css-loader
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i, // files with .ico, .gif, .png, .jpg, .jpeg extension
        type: 'asset/resource' // use asset/resource
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Holberton Dashboard' // title of the html page
    }),
    new CleanWebpackPlugin() // clean up the output.path directory
  ]
};
