const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin =  require('html-webpack-plugin')


module.exports = {
  entry: __dirname + '/src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    open: true,
    port: 3000,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html'),
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader']},
      { test: /\.(jpg|jpeg|png|gif|bmp)$/, use: 'file-loader'},
      { test: /\.(ttf|svg|woff|woff2|eot)$/, use: 'url-loader'},
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
          }
        }
      }
    ]
  }
}