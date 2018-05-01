<template>
  <section class="page-search_entry">
    <!-- 顶部搜索栏 -->
    <no-ssr>
      <section class="search-header flex-btw-ctr">
        <div class="searchbar">
          <ha-input 
            v-model="keyword" 
            type="search"
            icon="search" 
            size="sm" 
            :autofocus="true" 
            placeholder="搜点好玩的..."
            @submit="search(keyword)"/>
        </div>
        <span class="cl-yellow-d fz-14" @click="cancel">取消</span>
      </section>
    </no-ssr>

    <!-- 热搜关键字 -->
    <section>
      <p class="title fz-16">热搜关键字</p>
      <div class="clearfix">
        <div class="hot-keyword-item fl flex-ctr fz-14 cl-gray-d-e" 
          v-for="(keyword, index) in hotKeywords" 
          :key="index"
          @click="search(keyword)">
        {{ keyword }}
        </div>
      </div>
    </section>

    <!-- 历史关键字 -->
    <section v-if="historyKeywords.length > 0">
      <p class="title fz-16">搜索历史</p>
      <div class="history-keyword-item flex-btw-ctr fz-14"
        v-for="(keyword, index) in historyKeywords" 
        :key="index">
        <div @click="search(keyword)">
          <i class="iconfont icon-time cl-gray-l"></i>&nbsp;&nbsp;
          <span class="cl-gray-d-e">{{keyword}}</span>
        </div>
        <i class="iconfont icon-close cl-gray-l" @click="removeHistoryKeyword(index)"></i>
      </div>
    </section>
  </section>
</template>

<script>
import session from '~utils/session'
import storage from '~utils/storage'

// 设置搜索历史缓存
function setHistoryKeywords (keyword) {
  let arr = storage.get('historyKeywords') === null ? [] : storage.get('historyKeywords')
  if (!arr.includes(keyword)) {
    arr.push(keyword)
    storage.set('historyKeywords', arr)
  }
}

export default {
  async asyncData ({ app }) {
    let hotKeywords = await app.$http({ api: 'searchHot' })
    return { hotKeywords }
  },
  data () {
    return {
      keyword: '',
      historyKeywords: []
    }
  },
  mounted () {
    if (session.get('searchKeyword') !== null) {
      this.keyword = session.get('searchKeyword')
    }

    if (storage.get('historyKeywords') !== null) {
      this.historyKeywords = storage.get('historyKeywords')
    }
  },
  methods: {
    cancel () {
      session.remove('searchKeyword')
      this.$nuxt.$router.back()
    },
    search (keyword) {
      if (session.get('searchKeyword') !== keyword) {
        session.set('searchKeyword', keyword)
      }
      if (keyword.trim() === '') {
        this.$toasted.show('请输入关键字', { type: 'error', duration: 1000 })
        return
      }
      setHistoryKeywords(keyword)
      this.$nuxt.$router.push({
        name: 'search-keyword',
        params: {
          'keyword': keyword
        }
      })
    },
    removeHistoryKeyword (index) {
      let arr = storage.get('historyKeywords')
      arr.splice(index, 1)
      storage.set('historyKeywords', arr)
      this.historyKeywords = storage.get('historyKeywords')
    }
  }
}
</script>

<style lang="less" scoped>
@import '~assets/style/variable/color.less';

.page-search_entry {
  padding: 100/75rem 24/75rem 0;
  .title {
    padding: 30/75rem 0;
  }
  .hot-keyword-item {
    height: 50/75rem;
    margin: 0 24/75rem 24/75rem 0;
    padding: 0 24/75rem;
    background: @gray-l-e;
    border-radius: 25/75rem;
  }
  .history-keyword-item {
    box-sizing: border-box;
    height: 80/75rem;
    border-bottom: 1/75rem solid @gray-l;
  }
}
</style>

