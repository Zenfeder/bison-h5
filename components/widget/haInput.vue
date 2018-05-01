<template>
  <div class="ha-input_box" :class="size">
    <label v-if="validateIcon">
      <i class="iconfont cl-gray-d" :class="'icon-' + icon"></i>
    </label>
    <input 
      :type="type" 
      :class="{ 'has_icon': validateIcon }" 
      :placeholder="placeholder"
      :value="value"
      :autofocus="autofocus"
      @focus="$emit('focus')"
      @input="$emit('input', $event.target.value)"
      @keyup.enter="$emit('submit')"/>
  </div>
</template>

<script>
export default {
  name: 'haInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    size: {
      type: String,
      default: 'md'
    },
    placeholder: {
      type: String,
      default: ''
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    value: {
      type: String | Number
    }
  },
  computed: {
    validateIcon () {
      const availableIcons = ['search', 'people_fill', 'lock', 'email']
      if (availableIcons.includes(this.icon)) {
        return true
      }
      return false
    }
  }
}
</script>

<style lang="less" scoped>
@import '~assets/style/variable/color.less';
@index: 1;

.ha-input_box {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 90/75rem;
  &.sm {
    height: 70/75rem;
    label .iconfont {
      font-size: 32/75rem;
    }
    input {
      font-size: 28/75rem;
    }
  }
  label {
    z-index: @index + 1;
    box-sizing: border-box;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    width: 1rem;
    height: 100%;
    text-align: center;
    .iconfont {
      font-size: 40/75rem;
    }
  }
  input {
    z-index: @index;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding-left: 24/75rem;
    padding-right: 24/75rem;
    &.has_icon {
      padding-left: 1rem;
    }
    border: 2/75rem solid @gray;
    border-radius: 8/75rem;
    font-size: 32/75rem;
    color: @gray-d-e;
    &::placeholder {
      color: @gray-l;
      font-weight: 400;
    }
  }
}
</style>

