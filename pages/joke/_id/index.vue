<template>
  <div>
    段子详情页：
    {{ jokeId }}
  </div>
</template>

<script>
export default {
  asyncData ({ params, redirect }) {
    if (params.id === undefined) {
      redirect(301, '/error')
    }

    return { jokeId: params.id }
  }
}
</script>