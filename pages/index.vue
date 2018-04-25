<template>
  <section class="container">
    <joke-item 
      v-for="(item, index) in jokes" 
      :item="item" 
      :key="index">
    </joke-item>
  
    <ha-loading></ha-loading>
  </section>
</template>

<script>
import jokeItem from '~components/home/jokeItem.vue'
import http from '~api/http.js'

export default {
  components: {
    jokeItem,
  },
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
    this.$toasted.show('功能即将上线')
  }
}
</script>

<style lang="less">
.container {
  text-align: center;
}
</style>
