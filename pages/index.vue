<template>
  <section class="container">
    <div>
      <p>{{ message }}</p>
      <img src="~/static/logo.png">
      
      <p v-for="(item, index) in jokes" :key="index">
        {{ item.content }}
      </p>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import http from '~/api/http.js'

export default {
  components: {
    AppLogo,
  },
  async asyncData ({ params }) {
    let jokes = await http({ api: 'joke' })

    return { jokes }
  },
  data() {
    return {
      message: 'Hello world'
    }
  }
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
}
 
.hairlines .container {
  border-width: .5px;
}

</style>
