<template>
  <div id="app">
<!--    <keep-alive>-->
<!--      <router-view v-if="$route.meta.keepAlive"></router-view>-->
<!--    </keep-alive>-->
<!--    <router-view v-if="!$route.meta.keepAlive"></router-view>-->
    <router-view></router-view>
<!--    <keep-alive include="ttt" >-->
<!--      <router-view/>-->
<!--    </keep-alive>-->
  </div>

</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
  html,body,#app {
    /*!*设置内部填充为0，几个布局元素之间没有间距*!*/
    padding: 0px;
    /*!*外部间距也是如此设置*!*/
    margin: 0px;
    /*统一设置高度为100%*/
    height: 100%;
    overflow: visible!important;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #50504e;*/
}
</style>
