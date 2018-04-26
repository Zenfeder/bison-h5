export default function ({ isServer, store, req }) {
   // nuxt generate 跳过该中间件
  if (isServer && !req) return
}