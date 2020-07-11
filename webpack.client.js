const path = require('path')
const { merge } = require('webpack-merge')
const base = require('./webpack.base')

module.exports = merge(base, {
  entry: './src/client/index.js',
  output: {
    path: path.resolve('public'),
    filename: 'client.js'
  },
})
