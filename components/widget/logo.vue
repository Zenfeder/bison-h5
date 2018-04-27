<template>
  <img class="logo" :class="'logo_' + size" src="~static/logo.png"/>
</template>

<script>
export default {
  name: 'logo',
  props: {
    size: {
      type: String,
      default: 'md'
    }
  }
}
</script>


<style lang="less" scoped>
.logo {
  box-sizing: border-box;
  border-radius: 100%;
  &.logo_sm {
    width: 80/75rem;
    height: 80/75rem;
  }
  &.logo_md {
    width: 120/75rem;
    height: 120/75rem;
  }
}
</style>

