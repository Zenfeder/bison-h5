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
      SET_TOKEN: 'user/SET_TOKEN'
    })
  },
  mounted () {
    if (storage.get('token') !== null) {
      this.SET_TOKEN(storage.get('token'))
    }
  }
}
</script>

