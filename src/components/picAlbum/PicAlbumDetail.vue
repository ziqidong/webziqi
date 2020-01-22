<template>
  <div style="height: 100%;">
    <el-container><!--      组件主体-->
      <el-main>
        <div v-for="(item,index) in urls" :key="index">
          <img :src="item.url" width="50%" ref="one" v-on:click="detail(item.url)">
          <span style="display: block; margin:70px 0px; font-family:  宋体, Serif; font-size: 25px;">{{txt[index]}}</span>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'picalbumdetail',
  data () {
    return {
      // urls: [],
      // txt: []
    }
  },
  created () {
    // for (var j = 1; j <= this.$route.params.content.length; j++) {
    //   this.urls.push({url: require('../../assets/' + this.$route.params.id + '-' + j + '.jpg')})
    // }
    // for (var k = 0; k < this.$route.params.content.length; k++) {
    //   this.txt.push(this.$route.params.content[k])
    // }
    // this.urls = this.$route.params.img
    // this.txt = this.$route.params.txtt
    console.log('创建相簿详情')
  },
  methods: {
    detail: function (uu) {
      console.log(uu)
      this.$router.push({name: 'picdetail', params: {url: uu}})
    }
  },
  computed: {
    urls: {
      get: function () {
        return this.$store.state.picAlbum.uu
      }
    },
    txt: {
      get: function () {
        return this.$store.state.picAlbum.tt
      }
    }
  },
  destroyed () {
    console.log('销毁相簿详情')
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
