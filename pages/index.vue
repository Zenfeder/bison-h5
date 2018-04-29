<template>
  <section class="container">
    <home-header/>
    <ha-scroll 
      :nodata="jokes.length === 0"
      btn-linkname="joke-write"
      btn-text="写段子去"
      :padding-top="110/75"
      background-color="#fff"
      :nomore="nomore"
      :loading="loading"
      @loadmore="loadmore">
      <template slot="content">
        <joke-item v-for="(item, index) in jokes" :item="item" :key="index"/>
      </template>
    </ha-scroll>
  </section>
</template>

<script>
import http from '~api/http.js'
import homeHeader from '~components/home/header'
import jokeItem from '~components/joke/jokeItem.vue'

export default {
  components: {
    homeHeader,
    jokeItem,
  },
  async asyncData (context) {
    let jokes = await http({ api: 'joke', query: { size: 10 } })
    return { jokes }
  },
  data () {
    return {
      loading: false,
      nomore: false
    }
  },
  methods: {
    async loadmore () {
      let jokes = []
      this.loading = true
      jokes = await http({ api: 'joke', query: { offset: this.jokes.length, size: 10 }})
      this.loading = false
      if (jokes.length === 0) {
        this.nomore = true
        return
      }
      this.jokes = this.jokes.concat(jokes)
    }
  }
}
</script>

<style lang="less">
.container {
  box-sizing: border-box;
}
</style>
