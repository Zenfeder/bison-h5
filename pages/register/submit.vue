<template>
  <section class="page-sign">
    <div class="close-btn flex-jus-rg">
      <i class="iconfont icon-close fz-20" @click="onclose"></i>
    </div>
    <div class="logo-wrap flex-jus-ctr">
      <logo/>
    </div>
    <div class="form-wrap">
      <ha-input v-model="form.name" class="form_input" icon="people_fill" placeholder="请输入昵称"/>
      <ha-input v-model="form.password" class="form_input" type="password" icon="lock" placeholder="请输入密码"/>
      <ha-input v-model="form.pwdConfirm" class="form_input" type="password" icon="lock" placeholder="请再次输入密码"/>
      <ha-button @click="submit">注册</ha-button>
    </div>

    <div class="flex-jus-btw fz-12 cl-gray">
      <span @click="$nuxt.$router.push({ name: 'login' })">已有账号？立即登录</span>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import session from '~utils/session'
import storage from '~utils/storage'
import { validateUsername, validatePassword } from '~utils/validate'

export default {
  data () {
    return {
      form: {
        name: '',
        password: '',
        pwdConfirm: ''
      }
    }
  },
  methods: {
    ...mapMutations({
      SET_TOKEN: 'user/SET_TOKEN'
    }),
    onclose () {
      this.$nuxt.$router.push({ name: 'index' })
    },
    submit () {
      if (!validateUsername(this.form.name)) {
        this.$toasted.show('用户名格式智障', { type: 'error' })
        return
      }
      if (!validatePassword(this.form.password)) {
        this.$toasted.show('密码格式智障', { type: 'error' })
        return
      }
      if (this.form.password !== this.form.pwdConfirm) {
        this.$toasted.show('两次密码输入不一致', { type: 'error' })
        return
      }

      this.$http({
        api: 'userRegister',
        method: 'post',
        body: {
          "name": this.form.name,
	        "email": session.get('email'),
	        "password": this.form.password
        }
      }).then(data => {
        session.remove('email')
        storage.set('token', data)
        this.SET_TOKEN(data)
        this.$nuxt.$router.push({ name: 'index' })
      })
    }
  }
}
</script>

