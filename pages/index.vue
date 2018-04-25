<template>
  <section class="container">
    
  </section>
</template>

<script>
import http from '~/api/http.js'

export default {
  async asyncData ({ params }) {
    let jokes = await http({ api: 'joke' })

    return { jokes }
  },
  data () {
    return {
      message: 'Hello world'
    }
  },
  mounted () {
    this.$toasted.show('一大波功能即将上线')
  }
}
</script>

<style lang="less">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
 
.hairlines .container {
  border-width: .5px;
}

</style>
