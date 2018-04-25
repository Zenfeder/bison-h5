<template>
  <section class="layout-error">
    <div>
      <i class="icon iconfont icon-rocket"></i>
      <p>404 页面跑路了</p>
    </div>
  </section>
</template>

<style lang="less">
@import '~assets/style/variable/color.less';

.layout-error {
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: @gray-l-e;
  text-align: center;
  color: @gray;
  .iconfont {
    font-size: 1.2rem;
  }
  p {
    margin-top: 1rem;
  }
}
</style>