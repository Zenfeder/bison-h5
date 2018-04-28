<template>
  <div class="joke-item_box">
    <div class="_box_header flex-btw-ctr">
      <div class="joke-user flex-btw-ctr">
        <img :src="item.user_avator"/>&nbsp;
        <p class="fz-16 cl-gray-d-e fw-bold">{{ item.user_name }}</p>
      </div>
      <div class="joke-date fz-12 cl-gray-l">{{ getTime }}</div>
    </div>
    <div class="_box_body fw-lgt cl-black">
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
  },
  computed: {
    getTime () {
      const date_created = new Date(this.item.created_at - 0)
      const date_now = new Date()

      let year_diff = date_now.getFullYear() - date_created.getFullYear(),
          month_diff = date_now.getMonth() - date_created.getMonth(),
          day_diff = date_now.getDate() - date_created.getDate(),
          hour_diff = date_now.getHours() - date_created.getHours(),
          minute_diff = date_now.getMinutes() - date_created.getMinutes(),
          second_diff = date_now.getSeconds() - date_created.getSeconds()

      if (year_diff > 0) {
        return year_diff + '年前'
      }
      if (month_diff > 0) {
        return month_diff + '个月前'
      }
      if (day_diff > 0) {
        return day_diff + '天前'
      }
      if (hour_diff > 0) {
        return hour_diff + '小时前'
      }
      if (minute_diff > 0) {
        return minute_diff + '分钟前'
      }
      if (second_diff > 0) {
        return '刚刚'
      }
    }
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
    .text-overflow(28/75rem, 3, 1.25);
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
