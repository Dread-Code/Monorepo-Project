const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: { import: './index.js' },
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'componentes.bundle.min.js',
    path: path.resolve(__dirname, 'build'),
    library: 'usp-componentes',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  watchOptions: { poll: true }
}
