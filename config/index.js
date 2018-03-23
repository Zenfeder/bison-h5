const NODE_ENV = process.env.NODE_ENV || 'dev'
const DEV_API_PATH = (NODE_ENV === 'dev' && process.env.DEV_API_PATH)?process.env.DEV_API_PATH:''

const ASSETS_PATH_CONFIG = {
    test: 'http://adam-test.oss-cn-hangzhou.aliyuncs.com/bison-h5/test/', // 线上测试环境静态资源路径
    master:'http://adam-test.oss-cn-hangzhou.aliyuncs.com/bison-h5/master/' // 线上正式环境静态资源路径
}

const API_PATH_CONFIG = {
    dev: 'http://localhost:3001', // 开发模式默认接口路径
    test: 'http://cg.linxiaobao.top', // 线上测试环境接口路径
    master: 'http://cg.linxiaobao.top' // 线上正式环境接口路径
}

module.exports = {
    apiBasePath: DEV_API_PATH || API_PATH_CONFIG[NODE_ENV],
    assetPublicPath: ASSETS_PATH_CONFIG[NODE_ENV]
}