<template>
  <section class="ha-scroll"
    :style="{ 
      paddingTop: paddingTop + 'rem',
      backgroundColor: backgroundColor
    }">
    <!-- 有数据 -->
    <section v-if="!nodata" class="content-wrap">
      <slot name="content"/>
    </section>
    <!-- 加载中 -->
    <section v-if="loading && !nodata" class="loading-wrap flex-ctr">
      <ha-loading/>
    </section>
    <!-- 底线 -->
    <div v-if="nomore && !nodata" class="nomore fz-14 cl-gray flex-ctr"
      :style="{ backgroundColor }">
      我也是有底线的
    </div>

    <!-- 无数据 -->
    <section v-if="nodata" class="no-data">
      <div style="text-align:center;width:100%;">
        <i class="iconfont icon-rocket"></i>
        <p class="message cl-gray fz-18">{{nodataMsg}}</p>
        <ha-button v-if="nodataShowBtn" @click="handleClick">{{btnText}}</ha-button>
      </div>
    </section>
  </section>
</template>

<script>
import { getScrollTop, getClientHeight, getScrollHeight } from '~utils/domHelper.js'

function listenSrcoll (doc, callback) {
  document.addEventListener('scroll', callback, false)
}

export default {
  name: 'haScroll',
  props: {
    // 顶部padding
    paddingTop: {
      type: Number,
      default: 0
    },
    backgroundColor: {
      type: String,
      default: '#eee'
    },
    // 当前视图是否无数据
    nodata: {
      type: Boolean,
      default: false
    },
    // 无数据时是否显示按钮
    nodataShowBtn: {
      type: Boolean,
      default: true
    },
    // 无数据时按钮跳转路由名称
    btnLinkname: {
      type: String,
      default: 'index'
    },
     // 无数据时按钮内容
    btnText: {
      type: String,
      default: '去首页逛逛'
    },
    // 无数据时提示信息
    nodataMsg: {
      type: String,
      default: '这里什么都没有'
    },
    // 正在加载
    loading: {
      type: Boolean,
      default: false
    },
    // 无更多数据
    nomore: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    const scrollContainer = document.querySelector('.ha-scroll')

    listenSrcoll(document, () => {
      if (getScrollHeight()-(getScrollTop() + getClientHeight()) < getScrollHeight()/5) {
        if (!this.loading && !this.nomore && !this.nodata) {
          this.$emit('loadmore')
        }
      }
    })
  },
  methods: {
    handleClick () {
      this.$nuxt.$router.push({ name: this.btnLinkname })
    }
  }
}
</script>

<style lang="less" scoped>
@import '~assets/style/variable/color.less';

.ha-scroll {
  box-sizing: border-box;
  min-height: 100vh;
}
.loading-wrap{
  text-align: center;
  margin: 24/75rem auto;
}
.nomore {
  height: 84/75rem;
}
.no-data {
  box-sizing: border-box;
  min-height: 100vh;
  padding: 0 24/75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: @gray-l-e;
  .iconfont{
    font-size: 120/75rem;
    color: @gray;
  }
  .message {
    margin: 100/75rem auto;
  }
}
</style>

