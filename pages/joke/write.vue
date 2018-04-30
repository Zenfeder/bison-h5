<template>
  <div class="page-joke_write">
    <ha-textarea v-model="content" :style="{ height: 500/75 + 'rem' }"/>
    <ha-button>发&nbsp;&nbsp;&nbsp;&nbsp;布</ha-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: ''
    }
  },
  head () {
    return {
      title: '写段子',
    }
  }
}
</script>

<style lang="less" scoped>
.page-joke_write {
  box-sizing: border-box;
  padding: 100/75rem 24/75rem;
}
</style>
