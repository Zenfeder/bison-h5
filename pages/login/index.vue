<template>
  <section class="page-sign">
    <div class="close-btn flex-jus-rg">
      <i class="iconfont icon-close fz-20" @click="onclose"></i>
    </div>
    <div class="logo-wrap flex-jus-ctr">
      <logo/>
    </div>
    <div class="form-wrap">
      <ha-input v-model="form.nameOrEmail" class="form_input" icon="people_fill" placeholder="请输入昵称或邮箱"/>
      <ha-input v-model="form.password" class="form_input" type="password" icon="lock" placeholder="请输入密码"/>
      <ha-button>登录</ha-button>
    </div>

    <div class="flex-jus-btw fz-12 cl-gray">
      <span>忘记密码？</span>
      <span>新用户？立即注册</span>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      form: {
        nameOrEmail: 'Adam',
	      password: ''
      }
    }
  },
  methods: {
    onclose () {
      this.$nuxt.$router.push({ name: 'index' })
    }
  }
}
</script>

