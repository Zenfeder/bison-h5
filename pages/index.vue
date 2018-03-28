<template>
  <section class="container">
    <div>
      <h1>Hello Bison App</h1>
      <p>{{message}}</p>
      <!-- <van-button type="primary">主要按钮</van-button> -->
      <i class="icon iconfont icon-camera"></i>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import http from '../api/http.js'

export default {
  components: {
    AppLogo,
  },
  // asyncData ({ params }) {
  //   return axios.get(`http://127.0.0.1:9999/user`)
  //   .then((res) => {
  //     return { message: res.data.message }
  //   })
  // },
  // async asyncData ({ params }) {
  //   let userData = (await axios.get(`${process.env.apiBasePath}/api/test`)).data
  //   console.log(userData)

  //   let { data } = await axios.get(`${process.env.apiBasePath}/api/user/${userData.data.userId}`)

  //   return { message: data.data }
  // },
  data() {
    return {
      message: 'Hello Bison App'
    }
  },
  created() {
    this.fetchMsg().then(res => {
      console.log(res)
      // alert(res.message)
      this.message = res.message
    })
    // this.testPromiseAll()
  },
  mounted() {
    // alert(window.devicePixelRatio)
    // alert(document.documentElement.clientWidth)
  },
  methods: {
    testPromiseA() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('PromiseA resolved')
        }, 2000)
      })
    },
    testPromiseB() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('PromiseB resolved')
        }, 2000)
      })
    },
    testPromiseAll() {
      Promise.all([this.testPromiseA(), this.testPromiseB()]).then(([valA, valB]) => {
        console.log(valA)
        console.log(valB)
      })
    },
    async fetchMsg() {
      let a = await this.testPromiseA()
      console.log(a)

      let apiUser = await http({
        api: 'apiUser',
        params: {
          userId: '123321'
        }
      }).then(res => {
        // alert(res.data.data)
        this.message =  res.data.data
      })

      let b = await this.testPromiseB()
      console.log(b)

      return { message: 'Finished!' }
    }
  },
}
</script>

<style lang="less">
.container {
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  p {
    color: red;
  }
}
 
.hairlines .container {
  border-width: .5px;
}

</style>
