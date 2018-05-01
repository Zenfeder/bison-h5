import storage from '~utils/storage'

export default function ({ store, req }) {
  // nuxt generate 跳过该中间件
  if (process.server) return

  if (storage.get('token') !== null) {
    store.commit('user/SET_TOKEN', storage.get('token'))
  }
}