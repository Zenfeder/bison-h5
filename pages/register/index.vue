<template>
  <section class="page-sign">
    <div class="close-btn flex-jus-rg">
      <i class="iconfont icon-close fz-20" @click="onclose"></i>
    </div>
    <div class="logo-wrap flex-jus-ctr">
      <logo/>
    </div>
    <div class="form-wrap">
      <ha-input v-model="form.email" class="form_input" icon="email" placeholder="请输入邮箱"/>
      <div class="form_input flex-jus-btw">
        <ha-input v-model="form.vcode" placeholder="请输入验证码"/>
        <ha-button :style="{
            width: 420/75 + 'rem',
            height: 90/75 + 'rem',
            marginLeft: 10/75 + 'rem',
            fontSize: 30/75 + 'rem'
          }" 
          :disabled="sendVcodeConf.btnDisabled"
          :plain="true"
          @click="getVcode">{{ sendVcodeConf.text }}</ha-button>
      </div>
      <ha-button @click="validateVcode">下一步</ha-button>
    </div>

    <div class="flex-jus-btw fz-12 cl-gray">
      <span @click="$nuxt.$router.push({ name: 'login' })">已有账号？立即登录</span>
    </div>
  </section>
</template>

<script>
import session from '~utils/session'
import { validateEmail } from '~utils/validate'

function timer () {
  let conf = this.sendVcodeConf
  let proto_conf = Object.assign({}, conf)
  let _timer = setInterval(() => {
    conf.timeout --
    conf.text = '重新发送(' + conf.timeout + ')'
    conf.btnDisabled = conf.timeout > 0 ? true : false
    if (!conf.btnDisabled) {
      conf.timeout = proto_conf.timeout
      conf.text = proto_conf.text
      clearInterval(_timer)
    }
  }, 1000)
}

export default {
  data () {
    return {
      form: {
        email: '',
	      vcode: ''
      },
      sendVcodeConf: {
        timeout: 30,
        btnDisabled: false,
        text: '获取验证码'
      }
    }
  },
  methods: {    
    onclose () {
      this.$nuxt.$router.push({ name: 'index' })
    },
    getVcode () {
      if (!validateEmail(this.form.email)) {
        this.$toasted.show('邮箱格式不正确', { type: 'error' })
        return
      }
      this.$http({
        api: 'userRegisterVcode',
        query: { email: this.form.email }
      }).then(data => {
        timer.call(this)
      })
    },
    validateVcode () {
      this.$http({
        api: 'userRegisterVcode',
        method: 'post',
        body: this.form
      }).then(data => {
        session.set('email', this.form.email)
        this.$nuxt.$router.push({ name: 'register-submit' })
      })
    }
  }
}
</script>
