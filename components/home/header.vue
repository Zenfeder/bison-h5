<template>
  <div class="home-header">
    <div class="home-header_content flex-btw-ctr">
      <div class="_content_lf flex-btw-ctr">
        <logo size="sm"/>
        <ha-input class="custom-input" size="sm" icon="search" placeholder="搜点好玩的..."/>
      </div>

      <div class="_content_rg flex-btw-ctr cl-yellow-d">
        <span v-if="false" class="fz-14">登录/注册</span>

        <i class="fz-29 iconfont icon-brush"></i>
        <img class="avator" src="https://ha-kafer.oss-cn-beijing.aliyuncs.com/img/default-avatar.png" alt="avator"/>
      </div>
    </div>

    <div class="home-header_line"></div>    
  </div>
</template>

<script>
export default {
  name: 'homeHeader'
}
</script>

<style lang="less" scoped>
@import '~assets/style/variable/color.less';

.home-header {
  height: 112/75rem;
  background: @white;
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
      }
    }
  }
  .home-header_line {
    height: 2/75rem;
    background-image: linear-gradient(to right, #9F041B , #D0FF03);
  }
}
</style>

