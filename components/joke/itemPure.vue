<template>
  <div class="joke-item_box">
    <div class="_box_body fw-lgt cl-gray-d-e fz-14">
      {{ item.content }}
    </div>
    <div class="_box_footer flex-jus-rg flex-alg-ctr fz-12 cl-gray">
      <div class="joke-interaction">
        {{ item.like_num }}&nbsp;顶
      </div>
      <div class="joke-interaction">
        {{ item.dislike_num }}&nbsp;踩
      </div>
      <div class="joke-interaction">
        {{ item.comment_num }}&nbsp;评论
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jokeItemPure',
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
  padding: 24/75rem;
  margin-top: 24/75rem;
  background: @white;
  ._box_body {
    .text-overflow(28/75rem, 4, 1.25);
    margin-bottom: 24/75rem;
  }
  ._box_footer {
    box-sizing: border-box;
    .joke-interaction {
      display: flex;
      width: 110/75rem;
      justify-content: flex-end;
      align-items: center;
    }
  }
}
</style>
