<template>
  <div v-title data-title="照片，记录的是我们的人生">
<!--    #2c2d31-->
    <div style="display:flex; height: 30%; background-color: #dadee1">
      <div style="width: 20%">
      </div>
      <div style=" color: #0e0e0e; text-align: left">
        <span style="display: block; margin:70px 0px; font-family:  宋体, Serif; font-size: 30px;">这些风景曾治愈我，愿它也能为你带来温暖</span>
      </div>
    </div>
    <div style="height: 70%;">
    <div style="display:flex;background-color: #dadee1">
      <div style=" height: 100%; width: 37%" ref="first">
        <div style="display:flex" >
          <div style="width: 50%">
          </div>
          <div style="width: 50%">
            <div v-for="(item,index) in firstcol" :key="index" style="padding:20px; height: auto">
              <el-image
                class = "a1"
                :src="item.url" v-on:click="detail(index, item)">
              </el-image>
            </div>

          </div>
        </div>
      </div>
      <div style=" height: 100%; width: 26%" ref="second">
        <div v-for="(item,index) in secondcol" :key="index" style="padding:20px; height: auto">
          <el-image
            class = "a2"
            :src="item.url" v-on:click="detail(index, item)">
          </el-image>
        </div>
      </div>
      <div style=" height: 100%; width: 37%;" ref="third">
        <div style="display:flex" >
          <div style="width: 50%">
            <div v-for="(item,index) in thirdcol" :key="index" style="padding:20px; height: auto">
              <el-image
                class = "a4"
                :src="item.url" v-on:click="detail(index, item)">
              </el-image>
            </div>
          </div>
          <div style="width: 50%">
          </div>
        </div>
      </div>
    </div>
      <div  v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100">
        <div class="loading-wrapper" v-show="!finish">
          <loading></loading>
        </div>
        <div style="text-align: center; height: 30px; color: #1b1b1b; background-color: #dadee1" v-show="!finish">加载中...</div>
        <div style="text-align: center; height: 130px; color: #1b1b1b; background-color: #dadee1" v-show="finish">都在这里啦</div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '../Loading'

export default {
  name: 'AlbumFlex',
  components: {Loading},
  data () {
    return {
      finish: false,
      urls: [],
      count: 0,
      busy: false,
      firstcol: [],
      secondcol: [],
      thirdcol: []
    }
  },
  comments: {
    loading: Loading
  },
  created () {
    console.log('摄影' + this.$route.meta.keepAlive)
    console.log('创建摄影')
  },
  activated () {
    this.busy = false // 页面被隐藏时无限滚动不检查，当页面被激活时无限滚动才检查
  },
  // beforeRouteLeave (to, from, next) {
  //   if (to.path === '/home') {
  //     this.finish = false
  //     this.urls = []
  //     this.count = 0
  //     this.busy = true
  //     this.firstcol = []
  //     this.secondcol = []
  //     this.thirdcol = []
  //   }
  //   next()
  // },
  methods: {
    loadMore: function () {
      this.busy = true
      if (this.count === 0) {
        for (var j = 1; j < 53; j++) {
          this.urls.push({url: require('../../assets/' + j + '.jpg')})
        }
        for (var i = 0; i < 3; i++) {
          this.firstcol.push({url: this.urls[i].url})
          this.thirdcol.push({url: this.urls[i + 5].url})
        }
        for (var k = 3; k < 5; k++) {
          this.secondcol.push({url: this.urls[k].url})
        }
        this.count = 8
        this.busy = false
      } else {
        setTimeout(() => {
          if (this.count + 8 > 51) {
            this.finish = true
            for (var m = this.count; m < this.count + 3; m++) {
              // eslint-disable-next-line standard/object-curly-even-spacing
              this.firstcol.push({url: this.urls[m].url})
              this.thirdcol.push({url: this.urls[m + 5].url})
            }
            for (var n = this.count + 3; n < this.count + 5; n++) {
              this.secondcol.push({url: this.urls[n].url})
            }
          } else {
            for (var i = this.count; i < this.count + 3; i++) {
              // eslint-disable-next-line standard/object-curly-even-spacing
              this.firstcol.push({url: this.urls[i].url})
              this.thirdcol.push({url: this.urls[i + 5].url})
            }
            for (var j = this.count + 3; j < this.count + 5; j++) {
              this.secondcol.push({url: this.urls[j].url})
            }
            if (this.$refs.first.offsetHeight < this.$refs.second.offsetHeight && this.$refs.first.offsetHeight < this.$refs.third.offsetHeight) {
              this.firstcol.push({url: this.urls[this.count + 8].url})
            } else if (this.$refs.second.offsetHeight < this.$refs.third.offsetHeight) {
              this.secondcol.push({url: this.urls[this.count + 8].url})
            } else {
              this.thirdcol.push({url: this.urls[this.count + 8].url})
            }
          }
          this.busy = false
          this.count += 9
        }, 1000)
      }
    },
    detail: function (it, item) {
      this.busy = true
      this.$router.push({name: 'detail', params: {id: it, url: item.url}})
      // this.$router.push({path: '/home/album/detail'})
    },
    destroyed () {
      console.log('销毁摄影')
    }
  }
}
</script>

<style scoped>
  .loading-wrapper {
    height: 100px;
    background: #dadee1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .a1{
    animation: load 0.2s;
    transition: all 0.4s;
  }
  .a1:hover{
    transform: scale(1.2);
  }
  .a2{
    animation: load 0.4s;
    transition: all 0.4s;
  }
  .a2:hover{
    transform: scale(1.2);
  }
  .a3{
    animation: load 0.6s;
    transition: all 0.4s;
  }
  .a3:hover{
    transform: scale(1.2);
  }
  .a4{
    animation: load 0.9s;
    transition: all 0.4s;
  }
  .a4:hover{
    transform: scale(1.2);
  }
  @keyframes load {
    from {
      /*opacity: 0;*/
      transform: translate3d(150px, 150px, 0);
      /*transform: scale(0.1);*/
    }
    to   {
      /*opacity: 1;*/
      transform: none;
    }
  }
</style>
