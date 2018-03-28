const _config = require('./config/index.js')

module.exports = {
  head: {
    title: 'HA - 子不笑，吾之锅',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: '一个刷多了能让自己变乐观和能让女朋友开心的神奇网站' },
      { name: 'keywords', content: '搞笑, 笑话, 段子, ha, haha, 笑, 开心' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' }
    ],
    script: [
      { src: 'https://adam-test.oss-cn-hangzhou.aliyuncs.com/lib/flexible.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=2' }
    ]
  },
  css: ['~assets/style/main.less'],
  loading: { color: '#3B8070' },
  build: {
    // publicPath: _config.assetPublicPath,
    loaders: [{
      test: /\.less$/,
      use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader" // translates CSS into CommonJS
      }, {
        loader: "less-loader" // compiles Less to CSS
      }]
    }],
    extend (config, { isDev, isClient }) {
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
  vendor: ['axios', 'vant'],
  plugins: [
    // { src: '~plugins/flexible', ssr: false },
    '~plugins/vant'
  ]
}
