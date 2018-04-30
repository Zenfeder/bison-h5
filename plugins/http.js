import Vue from 'vue'
import axios from 'axios'
import apiMap from '~api/api.map'
import storage from '~utils/storage'

export default ({ app, isClient, redirect }, inject) => {
  inject('http', ({ api, url, method, headers, body, params, query }) => {
    let _method = method ? method :'get'
    let _url = api ? apiMap[api](params||'') : url
    let _headers = headers ? headers : {}
    let _query = query ? query : {}
    let _body = body ? body : {}
    
    // 服务端跳过
    if (isClient) {
      if (storage.get('token') !== null) {
        _headers['Authorization'] = storage.get('token')
      }
    }
  
    return new Promise((resolve, reject) => {
      axios({
        method: _method,
        headers: _headers,
        url: _url,
        data: _body,
        params: _query
      }).then(res => {
        // statusCode: res.status
        resolve(res.data)
      }).catch(err => {
        // statusCode: err.response.status
        // 服务端跳过
        if (isClient) {
          Vue.toasted.show(err.response.data.message, { type: 'error' })
        }
        reject(err.response.data)

        // 401错误码跳转到登录页
        if (err.response.status === 401) {
          redirect('/login')
        }
      })
    })
  })
}
