<template>
  <div style="height: 100%" v-title data-title="世界很大，有很多可爱的人儿">
    <!--    #2c2d31-->
    <div style="display:flex; height: 100%; background-color: #dadee1; color: #0e0e0e; position: relative">
      <div style=" position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);">
        <span style="display: block; font-family:  宋体, Serif; font-size: 30px;">生活不易，但依然有许多美好，让我们在想起他们的时候，</span>
        <span style="display: block; font-family:  宋体, Serif; font-size: 30px;">能够充满力量</span>
      </div>
    </div>
    <div style="height: 100%;">
          <div style="display:flex;background-color: #191b1c" ref="first" >
            <div>
              <div v-for="(item,index) in data" :key="index">
                <div style="display: flex"  v-on:click="detail(index, item)">
                <div style="width: 50%" v-if="index%2 === 0">
                  <div style=" color: #dadee1; text-align: center">
                    <span style="display: block; margin:70px 0px; font-family:  宋体, Serif; font-size: 25px;">{{titles[index]}}</span>
                  </div>
                </div>
                <div style="width: 50%; height: auto">
                <el-image
                  class = "a1"
                  :src="item.url">
                </el-image>
                </div>
                <div style="width: 50%" v-if="index%2 === 1">
                  <div style=" color: #dadee1; text-align: center">
                    <span style="display: block; margin:70px 0px; font-family:  宋体, Serif; font-size: 25px;">{{titles[index]}}</span>
                  </div>
                </div>
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
  name: 'picalbum',
  components: {Loading},
  data () {
    return {
      finish: false,
      urls: [],
      count: 0,
      busy: false,
      data: [],
      titles: ['西藏之行', '太白山森林公园', '在上海压马路'],
      content: [['去拉萨的路上，火车经过一片湖', '火车经过雪山脚下，已经九点了，天还没有黑', '还是在火车上，早上到达那曲车站，清晨第一缕阳光洒向高原', '到拉萨的第一站，布达拉宫', '羊卓雍措，蓝宝石', '从垭口上远眺珠峰', '最后一站，纳木错湖，遗憾的是天气不佳，没有看到蓝色的湖面'],
        ['太白山森林公园，最高海拔三千八百米，此处大概两千米左右', '沿着路边的栈道走，非常凉快。缘溪行，忘路之远近，忽逢桃花林...', '云海', '中间有一段需要乘坐拉车，温度开始明显降低', '飘飘乎如遗世独立，羽化而登仙...', '云海，下了缆车就下起了小雨，需要穿上夹克了'],
        ['上大还是很美的，虽然现在毕业了还是很怀念', 'J楼楼顶的“表白板”', 'mm豆超市，国庆节人巨多', 'people mountain people sea... ', '外白渡桥，情深深雨蒙蒙取景地', '忘记是哪里了，周围的墙上和楼上有好多涂鸦，有人过来打卡', '新天地周围的一处小公园里，旁边街道人很多，但这里很安静']]
    }
  },
  comments: {
    loading: Loading
  },
  // created () {
  //   for (var j = 1; j < 53; j++) {
  //     this.urls.push({url: require('../../assets/' + j + '.jpg')})
  //   }
  //   for (var i = 0; i < 15; i++) {
  //     this.firstcol.push({url: this.urls[i].url})
  //     this.thirdcol.push({url: this.urls[i].url})
  //   }
  // },
  created () {
    console.log('相簿' + this.$route.meta.keepAlive)
    console.log('创建相簿')
  },
  activated () {
    this.busy = false
  },
  methods: {
    loadMore: function () {
      this.busy = true
      if (this.count === 0) {
        for (var j = 1; j < 4; j++) {
          this.urls.push({url: require('../../assets/' + j + '-1.jpg')})
        }
        for (var i = 0; i < 2; i++) {
          this.data.push({url: this.urls[i].url})
        }
        this.count = 2
        this.busy = false
      } else {
        setTimeout(() => {
          if (this.count + 1 > 2) {
            this.finish = true
            this.data.push({url: this.urls[this.count].url})
          } else {
            for (var i = this.count; i < this.count + 2; i++) {
              this.data.push({url: this.urls[i].url})
            }
          }
          this.busy = false
          this.count += 2
        }, 1000)
      }
    },
    detail: function (it, item) {
      this.busy = true
      var uuu = []
      var txt = []
      var id = it + 1
      for (var j = 1; j <= this.content[it].length; j++) {
        uuu.push({url: require('../../assets/' + id + '-' + j + '.jpg')})
      }
      for (var k = 0; k < this.content[it].length; k++) {
        txt.push(this.content[it][k])
      }
      this.$router.push({path: '/home/palbumDetail'})
      this.$store.commit('SETCONTENT', {img: uuu, txtt: txt})
      // this.$router.push({name: 'picalbumdetail', params: {img: uuu, txtt: txt}})
      // this.$router.push({path: '/home/album/detail'})
    }
  },
  destroyed () {
    console.log('销毁相簿')
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
    transition: all 0.3s;
  }
  .a1:hover{
    transform: scale(1.1);
  }
</style>
