<template>
  <button @click="handleClick">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'haButton',
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="less" scoped>

</style>

