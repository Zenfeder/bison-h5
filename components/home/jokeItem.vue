<template>
  <div class="joke-item-box">
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
.joke-item-box {
  p {
    font-size: 14/37.5rem;
  }
}
</style>
