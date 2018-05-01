<template>
  <div class="joke-item_box">
    <div class="_box_header flex-btw-ctr">
      <div class="joke-user flex-btw-ctr">
        <img v-if="item.avator" :src="item.avator"/>
        <img v-else src="~static/default-avator.png"/>
        &nbsp;
        <p class="fz-16 cl-gray-d-e fw-bold">{{ item.user_name }}</p>
      </div>
      <div class="joke-date fz-12 cl-gray-l">{{ item.created_at | formatDate }}</div>
    </div>
    <div class="_box_body fw-lgt cl-black fz-16"
      @click="$nuxt.$router.push({ name: 'joke-id', params: { id: item.id }})">
      {{ item.content }}
    </div>
    <div class="_box_footer flex-jus-rg flex-alg-ctr fz-14">
      <div class="joke-interaction">
        <i class="iconfont icon-praise"></i>&nbsp;
        <span class="number">{{ item.like_num }}</span>
      </div>
      <div class="joke-interaction">
        <i class="iconfont icon-thumb-down"></i>&nbsp;
        <span class="number">{{ item.dislike_num }}</span>
      </div>
      <div class="joke-interaction">
        <i class="iconfont icon-interactive"></i>&nbsp;
        <span class="number">{{ item.comment_num }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jokeItem',
  props: {
    item: Object
  }
}
</script>

<style lang="less" scoped>
@import '~assets/style/variable/color.less';
@import '~assets/style/mixin/text-overflow.less';

.joke-item_box {
  box-sizing: border-box;
  width: 702/75rem;
  margin: auto;
  border-bottom: 1/75rem solid @gray-l;
  ._box_header {
    box-sizing: border-box;
    height: 104/75rem;
    img {
      width: 60/75rem;
      height: 60/75rem;
      border-radius: 6/75rem;
    }
  }
  ._box_body {
    .text-overflow(32/75rem, 3, 1.25);
  }
  ._box_footer {
    box-sizing: border-box;
    height: 76/75rem;
    .joke-interaction {
      display: flex;
      width: 110/75rem;
      justify-content: flex-end;
      align-items: center;
      .iconfont {
        color: @yellow-d;
      }
      .number {
        color: @gray;
      }
    }
  }
}
</style>
