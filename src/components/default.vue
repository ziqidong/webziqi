<template>
  <div style="height: 100%">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<style>

</style>
<script>
export default{
  name: 'def',
  data () {
    return {
      msg: ''
    }
  },
  created () {
    console.log('def 创建')
  },
  destroyed () {
    console.log('def 销毁')
  },
  components: {
  }
}
</script>
