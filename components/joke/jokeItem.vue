<template>
  <div class="joke-item_box">
    <div class="_box_header"></div>
    <div class="_box_body fz-16">
      <p>{{ item.content }}</p>
    </div>
    <div class="_box_footer"></div>
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

.joke-item_box {
  box-sizing: border-box;
  width: 702/75rem;
  margin: 0 auto 24/75rem;
  border-bottom: 1/75rem solid @gray-l;
  p {
    font-size: 14/37.5rem;
  }
}
</style>
