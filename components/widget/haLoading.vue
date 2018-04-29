<template>
  <div class="ha-loading">
    <!-- <img src="~static/loading.gif"> -->
    <i class="iconfont icon-loading"></i>
  </div>
</template>

<script>
export default {
  name: 'haLoading'
}
</script>

<style lang="less">
@import '~assets/style/variable/color.less';

.ha-loading {
  display: inline-block;
  width: 30/37.5rem;
  height: 30/37.5rem;
  img {
    width: 100%;
  }
  -webkit-animation: circle 1.8s infinite linear;
  .icon-loading{
    font-size: .8rem;
    color: @yellow;
  }
}

@-webkit-keyframes circle{
  0% { 
    transform:rotate(0deg); 
  }
  100% { 
    transform:rotate(360deg); 
  }
}
</style>