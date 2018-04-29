<template>
  <section class="layout-default">
    <nuxt/>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import storage from '~utils/storage'

export default {  
  methods: {
    ...mapMutations({
      SET_TOKEN: 'user/SET_TOKEN',
      SET_USER_INFO: 'user/SET_USER_INFO',
    }),
    fetchUserInfo () {
      this.$http({ 
        api: 'user'
      }).then(data => {
        this.SET_USER_INFO(data)
      })
    }
  },
  mounted () {
    if (storage.get('token') !== null) {
      this.SET_TOKEN(storage.get('token'))
      this.fetchUserInfo()
    }
  }
}
</script>

