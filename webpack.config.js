const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = function webpackConfig(env) {
  const plugins = [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]

  if (env.NODE_ENV === 'production') {
    plugins.push(new CleanWebpackPlugin())
  }

  return {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    mode: env.NODE_ENV,
    devServer: {
      compress: true,
      port: 3000,
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)?$/,
          exclude: '/node_modules',
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    plugins
  }
}
