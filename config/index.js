const NODE_ENV = process.env.NODE_ENV || 'dev'
const DEV_API_PATH = (NODE_ENV === 'dev' && process.env.DEV_API_PATH)?process.env.DEV_API_PATH:''

const API_PATH_CONFIG = {
    dev: 'http://localhost:8081', // 开发模式默认接口路径
    test: 'http://ha.kafer.top', // 线上测试环境接口路径
    master: 'http://ha.kafer.top' // 线上正式环境接口路径
}

module.exports = {
    apiBasePath: DEV_API_PATH || API_PATH_CONFIG[NODE_ENV]
}