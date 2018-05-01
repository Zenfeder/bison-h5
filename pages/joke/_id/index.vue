<template>
  <section class="page-joke_detail">
    <!-- 顶部 -->
    <section class="search-header flex-btw-ctr">
      <i class="iconfont icon-return cl-gray-d fz-26" @click="$nuxt.$router.back()"></i>

      <div class="searchbar">
        <ha-input icon="search" size="sm" placeholder="搜点好玩的..."
          @focus="$nuxt.$router.push({ name: 'search' })"/>
      </div>
    </section>

    <!-- 主内容 -->
    <section class="page_content fz-16">
      <div class="content_head flex-alg-ctr">
        <img class="avator" v-if="jokeDetail.user_avator !== null" :src="jokeDetail.user_avator"/>
        <img class="avator" v-else src="~static/default-avator.png"/>
        &nbsp;
        <span>{{ jokeDetail.user_name }}</span>
      </div>
      <div class="content_body cl-gray-d-e">
        {{ jokeDetail.content }}
      </div>
    </section>

    <!-- 底部操作区 -->
    <section class="page_footer flex-btw-ctr">
      <div class="page_footer_item">
        <div class="flex-ctr"><i class="iconfont icon-praise"></i></div>
        <p class="number">{{ jokeDetail.like_num }}</p>
      </div>
      <div class="page_footer_item">
        <div class="flex-ctr"><i class="iconfont icon-thumb-down"></i></div>
        <p class="number">{{ jokeDetail.dislike_num }}</p>
      </div>
      <div class="page_footer_item">
        <div class="flex-ctr"><i class="iconfont icon-interactive"></i></div>
        <p class="number">{{ jokeDetail.comment_num }}</p>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  validate ({ params }) {
    return /^\w+$/.test(params.id)
  },
  async asyncData ({ app, params }) {
    let jokeDetail = await app.$http({ 
      api: 'jokeById',
      params: {
        jokeId: params.id
      }
    })
    return { jokeDetail }
  }
}
</script>

<style lang="less" scoped>
@import '~assets/style/variable/color.less';

.page-joke_detail {
  .search-header .searchbar{
    width: 636/75rem;
  }

  .page_content {
    box-sizing: border-box;
    padding: 130/75rem 24/75rem 120/75rem;
    .content_head {
      height: 80/75rem;
      margin-bottom: 30/75rem;
      .avator {
        width: 80/75rem;
        height: 80/75rem;
        border-radius: 100%;
      }
    }
    .content_body {
      line-height: 1.5;
    }
  }

  .page_footer {
    position: fixed;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    height: 90/75rem;
    border-top: 1/75rem solid @gray-l;
    .page_footer_item {
      box-sizing: border-box;
      width: 33%;
      height: 90/75rem;
      padding-top: 12/75rem;
      text-align: center;
      .iconfont {
        font-size: 46/75rem;
        color: @yellow-d;
        line-height: 1;
      }
      .number {
        font-size: 24/75rem;
        color: @gray-l;
        line-height: 1;
      }
    }
  }
}
</style>
