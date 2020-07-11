const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { merge } = require('webpack-merge')
const base = require('./webpack.base')

module.exports = merge(base, {
  target: 'node', //打包的是服务器端node文件
  entry: './src/server/index.js',
  output: {
    path: path.resolve('build'),
    filename: 'server.js'
  },
  // 他负责检查所有的引入的核心模块，并且告诉 webpack 不要把核心模块打包到 server.js里面去
  externals:[nodeExternals()],
})
