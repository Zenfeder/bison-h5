<template>
  <div class="joke-item_box">
    <p>{{ item.content }}</p>
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
  height: 308/75rem;
  margin: auto;
  border-bottom: 1/75rem solid @gray-l;
  p {
    font-size: 14/37.5rem;
  }
}
</style>
