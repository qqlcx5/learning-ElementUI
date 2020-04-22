module.exports = {
  devServer: {
    compress: true,
    port: 9000
  },
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
  }
}