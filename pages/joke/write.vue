<template>
  <div class="page-joke_write">
    <ha-textarea v-model="content" :style="{ height: 500/75 + 'rem' }"/>
    <ha-button @click="submit">发&nbsp;&nbsp;&nbsp;&nbsp;布</ha-button>
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
  },
  methods: {
    submit () {
      if (this.content.trim() === '') {
        this.$toasted.show('内容智障了哈', { type: 'error', duration: 1000 })
        return
      }
      this.$http({
        api: 'joke',
        method: 'post',
        body: { content: this.content }
      }).then(data => {
        this.$toasted.show('发布成功', { duration: 1500 })
        this.$nuxt.$router.push({ name: 'index' })
      })
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
