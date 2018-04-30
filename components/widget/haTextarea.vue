<template>
  <textarea class="ha-textarea"
    :value="value" 
    :placeholder="placeholder" 
    @input="$emit('input', $event.target.value)"></textarea>
</template>

<script>
export default {
  name: 'haTextarea',
  props: {
    placeholder: {
      type: String,
      default: '请开始你的表演'
    },
    value: {
      type: String
    }
  }
}
</script>

<style lang="less" scoped>
@import '~assets/style/variable/color.less';

.ha-textarea {
    box-sizing: border-box;
    width: 100%;
    padding: 16/75rem 24/75rem;
    border: 2/75rem solid @gray-l;
    border-radius: 8/75rem;
    font-size: 32/75rem;
    color: @gray-d-e;
    &::placeholder {
      color: @gray-l;
      font-weight: 400;
    }
}
</style>

