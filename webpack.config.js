const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const assetsDir = path.resolve(__dirname, 'src/assets/');
const srcDir = path.resolve(__dirname, 'src/');
const distDir = path.resolve(__dirname, 'dist');

module.exports = {
  context: srcDir,
  entry: {
    app: './index.jsx'
  },
  output: {
    path: distDir,
    filename: 'app.js',
    publicPath: '/'
  },
  devServer: {
		contentBase: srcDir,
		publicPath: "/",
		hot: true,
    historyApiFallback: true,
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, './')
    ],
    extensions: [
      '.js',
      '.jsx',
      '.mjs',
      '.html',
      '.jpg',
      '.jpeg',
      '.svg',
      '.png',
      '.woff2',
      '.woff'
    ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|jpeg|svg|png|woff2|woff)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              emitFile: false
            }
          }
        ],
        include: assetsDir,
        exclude: /node_modules/
      },
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'index.html'
  })],
};
