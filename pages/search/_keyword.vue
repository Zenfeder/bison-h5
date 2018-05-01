<template>
  <section class="page-search_result">
    <!-- 顶部搜索栏 -->
    <section class="search-header flex-btw-ctr">
      <div class="searchbar">
        <ha-input 
          v-model="keyword" 
          icon="search" 
          size="sm" 
          placeholder="搜点好玩的..."
          @focus="$nuxt.$router.back()"/>
      </div>
      <span class="cl-yellow-d fz-14" @click="$nuxt.$router.back()">取消</span>
    </section>

    <!-- 搜索结果 -->
    <ha-scroll class="search-result"
      :nodata="results.length === 0"
      :nodata-show-btn="false"
      nodata-msg="没找到与你搜索相关的内容"
      :padding-top="100/75"
      :nomore="nomore"
      :loading="loading"
      @loadmore="loadmore">
      <template slot="content">
        <joke-item-pure 
          v-for="(item, index) in results" 
          :item="item" 
          :key="index"
          :highlight="true"
          :highlightKeys="highlightKeys"/>
      </template>
    </ha-scroll>
  </section>
</template>

<script>
import jokeItemPure from '~components/joke/itemPure.vue'

export default {
  components: {
    jokeItemPure
  },
  async asyncData ({ app, params }) {
    let keyword = params.keyword
    let { list, keywords } = await app.$http({
      api: 'search',
      query: {
        keyword,
        offset: 0, 
        size: 10 
      }
    })
    return { keyword, results: list, highlightKeys: keywords }
  },
  data () {
    return {
      nomore: false,
      loading: false
    }
  },
  methods: {
    async loadmore () {
      let results = []
      this.loading = true

      results = (await this.$http({ 
        api: 'search',
        query: { 
          keyword: this.keyword,
          offset: this.results.length, 
          size: 10 
        }
      })).list

      this.loading = false
      if (results.length === 0) {
        this.nomore = true
        return
      }
      this.results = this.results.concat(results)
    }
  }
}
</script>

<style lang="less" scoped>
.page-search_result {
  min-height: 100vh;
}
</style>
