<template>
  <section class="container">
    <home-header/>
    
    <joke-item
      v-for="(item, index) in jokes" 
      :item="item" 
      :key="index"/>

    <ha-loading/>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import http from '~api/http.js'
import homeHeader from '~components/home/header'
import jokeItem from '~components/joke/jokeItem.vue'

export default {
  components: {
    homeHeader,
    jokeItem,
  },
  async asyncData (context) {
    let jokes = await http({ api: 'joke' })
    return { jokes }
  },
  computed: {
    ...mapState({
      counter: (state) => state.counter,
      username: (state) => state.user.username,
    })
  },
  mounted () {
    this.$toasted.show('敬请期待')
  },
  methods: {
    ...mapMutations([
      'increment'
    ]),
    async fetchData () {
      let jokes = await http({ api: 'joke' })
      if (jokes.length === 0) {
        this.$toasted.show('没有更多数据了')
        return
      }
      this.jokes = this.jokes.concat(jokes)
    },
    btnClick () {
      this.increment()
      // this.$nuxt.$router.push({ name: 'login' })
      // this.fetchData()
    }
  }
}
</script>

<style lang="less">
.container {
  padding-top: 134/75rem;
}
</style>
