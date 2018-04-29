import axios from 'axios'
import apiMap from '~api/api.map'

export default function ({ api, url, method, headers, body, params, query }) {
  let _method = method ? method :'get'
  let _url = api ? apiMap[api](params||'') : url
  let _headers = headers ? headers : {}
  let _query = query ? query : {}
  let _body = body ? body : {}

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
      reject(err.response.data)
    })
  })
}