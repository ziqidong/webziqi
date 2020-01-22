<template>
  <div style="height: 100%;">
      <el-container><!--      组件主体-->
<!--        <el-header></el-header>-->
        <el-main>
          <img :src="this.$route.params.url" width="70%" ref="one">
        </el-main>
        <el-footer>
          <i class="el-icon-zoom-in"  @click="big"></i>
          <i class="el-icon-zoom-out"  @click="sm"></i>
        </el-footer>
      </el-container>
  </div>
<!--      <div style="height: 40%">{{this.$route.params.id}}啊啊啊啊啊啊啊啊啊啊啊{{this.$route.params.url}}</div>-->
</template>

<script>
export default {
  name: 'PhotoDetail',
  data () {
    return {
      url: this.$route.params.url
    }
  },
  methods: {
    sm: function () {
      console.log(this.$refs.one.offsetWidth)
      this.$refs.one.style.width = this.$refs.one.offsetWidth * 0.9 + 'px'
    },
    big: function () {
      console.log(this.$refs.one.offsetWidth)
      this.$refs.one.style.width = this.$refs.one.offsetWidth * 1.1 + 'px'
    }
  }
}
</script>

<style scoped>
  .el-container{
    width: 100%;
    height: 100%;
    background-color: #dadee1
  }
  .el-main {
    padding: 0;
    background-color: #dadee1
  }
  .el-header, .el-footer {
    height: 30px;
    background-color: #dadee1
  }
</style>
