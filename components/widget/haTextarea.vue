<template>
  <section class="ha-textarea">
    <textarea
      :value="value"
      :maxlength="maxLen"
      :placeholder="placeholder" 
      @input="$emit('input', $event.target.value)"></textarea>
    <p class="fz-12 char-limit flex-jus-btw">
      <span class="cl-yellow-d">{{charLen}}/{{maxLen}}</span>
      <span class="cl-red" v-show="showLimitNotic">字符数量不能超过{{maxLen}}</span>
    </p>
  </section>
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
    },
    maxLen: {
      type: Number,
      default: 200
    },
    showCharLen: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    charLen () {
      return this.value.length
    },
    showLimitNotic () {
      return this.charLen > this.maxLen
    }
  },
  watch: {
    charLen (newVal, oldVal) {
      if (newVal > this.maxLen) {

        console.log(this.charLen)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '~assets/style/variable/color.less';

.ha-textarea {
  margin-bottom: 80/75rem;
  textarea {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
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
  .char-limit {
    margin: 12/75rem auto;
  }
}
</style>

