<template>
  <div>
    搜索关键字：
    {{ keyword }}
  </div>
</template>

<script>
export default {
  asyncData (context) {
    return { keyword: context.params.keyword }
  }
}
</script>