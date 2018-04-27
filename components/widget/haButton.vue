<template>
  <button class="ha-btn" :class="classObj" @click="handleClick">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'haButton',
  props: {
    radius: {
      type: Boolean,
      default: true
    },
    full: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classObj () {
      return {
        'btn_radius': this.radius,
        'btn_full': this.full
      }
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="less" scoped>
@import '~assets/style/variable/color.less';

.ha-btn {
  box-sizing: border-box;
  font-size: 36/75rem;
  height: 80/75rem;
  padding: 0 30/75rem;
  text-align: center;
  background: @yellow;
  color: @black;
  border: 1/75rem solid @yellow-d;
  &:active {
    background: @yellow * 0.95;
  }
  &.btn_radius {
    border-radius: 8/75rem;
  }
  &.btn_full {
    width: 100%;
  }
}
</style>

