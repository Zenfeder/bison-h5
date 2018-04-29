<template>
  <div class="home-header">
    <div class="home-header_content flex-btw-ctr">
      <div class="_content_lf flex-btw-ctr">
        <logo size="sm"/>
        <ha-input class="custom-input" size="sm" icon="search" placeholder="搜点好玩的..."/>
      </div>

      <div class="_content_rg cl-yellow-d">
        <div v-if="isLogin" class="flex-btw-ctr">
          <i class="fz-29 fw-lgt iconfont icon-brush"></i>
          <img class="avator" src="~static/default-avator.png" alt="avator"/>
        </div>

        <div v-else class="flex-alg-ctr flex-jus-rg">
          <span class="fz-14" @click="sign">登录/注册</span>
        </div>
      </div>
    </div>

    <div class="home-header_line"></div>    
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'homeHeader',
  computed: {
    ...mapState({
      userInfo: (state) => state.user.userInfo
    }),
    ...mapGetters({
      isLogin: 'user/isLogin'
    })
  },
  methods: {
    sign () {
      this.$nuxt.$router.push({ name: 'login' })
    }
  }
}
</script>

<style lang="less" scoped>
@import '~assets/style/variable/color.less';

.home-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 112/75rem;
  background: @white;
  z-index: 10;
  .home-header_content {
    box-sizing: border-box;
    height: 110/75rem;
    padding: 0 24/75rem;
    ._content_lf {
      width: 446/75rem;
      .custom-input {
        width: 340/75rem;
      }
    }
    ._content_rg {
      width: 160/75rem;
      .avator{
        box-sizing: border-box;
        width: 70/75rem;
        height: 70/75rem;
        border-radius: 6/75rem;
      }
    }
  }
  .home-header_line {
    height: 2/75rem;
    background-image: linear-gradient(to right, #9F041B , #D0FF03);
  }
}
</style>

