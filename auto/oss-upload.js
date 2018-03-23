const colors = require('colors')
const co = require('co')
const OSS = require('ali-oss')
const scan = require('scandir-sync')
const log = require('single-line-log').stdout
const config = require('../local/config.js')

const client = new OSS({
  endpoint: config.oss.endpoint,
  region: config.oss.region,
  accessKeyId: config.oss.accessKeyId,
  accessKeySecret: config.oss.accessKeySecret,
  bucket: config.oss.bucket
})

const rootDir = "./dist"

const buildType = process.env.ENV_BUILD_TYPE || 'test'

const uploadDirMap = {
  test: config.oss.bucket + '/test',
  master: config.oss.bucket + '/master'
}

const filesQueue = scan({
    rootDir: rootDir, 
    ignoreFile: /\.DS_Store$/,
    log: false
}).filesPath

const filesUploaded = []

console.time('> Upload successful')

filesQueue.forEach((filepath, index) => {
  co(function* () {
    var result = yield client.put(uploadDirMap[buildType] + filepath.split(rootDir)[1], filepath)
    filesUploaded.push(filepath)
    log(`> [${filesUploaded.length} / ${filesQueue.length}] Uploading: ${filepath}\n`.green)
    if (filesUploaded.length === filesQueue.length) {
      console.timeEnd('> Upload successful')
    }
  }).catch(function (err) {
    console.log('> Upload fail:'.red + filepath)
    console.log(err)
  })
})
