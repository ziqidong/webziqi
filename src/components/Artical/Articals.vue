<template>
    <div>还没想好怎么做。。</div>
</template>

<script>
export default {
  name: 'Articals',
  created () {
    console.log('artical' + this.$route.meta.keepAlive)
    console.log('创建artical')
  },
  destroyed () {
    console.log('销毁artical')
  }
}
</script>

<style scoped>

</style>
