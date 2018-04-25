const _config = require('./config/index.js')
const path = require('path')

module.exports = {
  head: {
    title: 'HA - 子不笑，我的锅',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: '一个刷多了能让自己变乐观和能让女朋友开心的神奇网站' },
      { name: 'keywords', content: '搞笑, 笑话, 段子, ha, haha, 笑, 开心' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' }
    ],
    script: [
      { src: 'https://ha-kafer.oss-cn-beijing.aliyuncs.com/lib/flexible.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=2' }
    ]
  },
  css: [
    '~assets/style/main.less'
  ],
  loading: { color: '#F8E71C' },
  build: {
    // publicPath: _config.assetPublicPath,
    loaders: [{
      test: /\.less$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "less-loader"
      }]
    }],
    extend (config, { isDev, isClient }) {
      config.resolve.alias['~api'] = path.join(__dirname, 'api')
      config.resolve.alias['~components'] = path.join(__dirname, 'components')

      for (let key in config.plugins) {
        if (config.plugins[key].constructor.name === 'UglifyJsPlugin') {
          config.plugins[key].options.uglifyOptions['mangle'] = { safari10: true }
        }
      }

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  env: {
    apiBasePath: _config.apiBasePath
  },
  vendor: ['axios', 'vue-toasted'],
  plugins: [
    { src: '~plugins/vue-toast.js', ssr: false },
    { src: '~plugins/components.js', ssr: true },
  ]
}
