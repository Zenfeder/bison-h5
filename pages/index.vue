<template>
  <section class="container">
    <joke-item 
      v-for="(item, index) in jokes" 
      :item="item" 
      :key="index">
    </joke-item>

    <div>
      <ha-button @click="btnClick">记载更多数据</ha-button>
    </div>
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
  async asyncData (context) {
    let jokes = await http({ api: 'joke' })
    return { jokes }
  },
  data () {
    return {
      message: 'Hello world',
    }
  },
  mounted () {
    this.$toasted.show('敬请期待')
  },
  methods: {
    async fetchData () {
      let jokes = await http({ api: 'joke' })
      if (jokes.length === 0) {
        this.$toasted.show('没有更多数据了')
        return
      }
      this.jokes = this.jokes.concat(jokes)
    },
    btnClick () {
      // this.$nuxt.$router.push({ name: 'login' })
      this.fetchData()
    }
  }
}
</script>

<style lang="less">
.container {
  text-align: center;
}
</style>
