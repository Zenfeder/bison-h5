<template>
  <div>
    段子评论页：{{ jokeId }}
  </div>
</template>

<script>
export default {
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  asyncData ({ params }) {
    return { jokeId: params.id }
  }
}
</script>