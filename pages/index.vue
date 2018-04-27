<template>
  <section class="container">
    <logo size="sm"/>

    <div style="margin-bottom:1rem;">
      <p>{{ username }}</p>
      <p>{{ counter }}</p>
      <ha-input placeholder="输入点什么"/>
      <ha-input icon="search" placeholder="搜一搜"/>
      <ha-input icon="email" placeholder="邮箱"/>
      <ha-input icon="people_fill" placeholder="用户名"/>
      <ha-input icon="lock" type="password" placeholder="密码"/>
      <ha-input icon="search" :low="true" placeholder="搜一搜"/>
    </div>

    <joke-item
      v-for="(item, index) in jokes" 
      :item="item" 
      :key="index"/>

    <div>
      <ha-loading/>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import jokeItem from '~components/joke/jokeItem.vue'
import logo from '~components/widget/logo.vue'
import http from '~api/http.js'

export default {
  components: {
    jokeItem,
    logo,
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
  text-align: center;
}
</style>
