<template>
  <div style="height: 100%; animation: fadein 0.5s;" v-title data-title="咸鱼奇的个人网站">
    <div class="homeBox"><!--      上5%白色顶栏-->
      <div style="background: rgba(0,0,0,0.5); height: 100%; ">
      </div>
    </div>
    <div class="pic"><!--      下95%过渡背景图片-->
    <el-container><!--      组件主体-->
      <el-header></el-header>
      <el-main>
<!--          <button @click="show = !show" >Click Me</button>-->
          <div style="display: flex; margin-right: 20px; height: 100%;" @click="show = !show">
            <div style="width: 50%; height: 100%; ">
              <div class="intro">
                <span class="hello">I hope my work can link you and me</span>
                <div style="width:80%;">
                  <el-divider></el-divider>
                </div>
              </div>
              <div class="intro">
                <span class="h1">你好，我是董子奇，</span>
              </div>
                <div class="intro">
                    <span class="passion">爱好摄影，音乐，和编程</span>
                  <span class="passion">探索新的事物，认识新的朋友</span>
              </div>
            </div>
            <div style="display: flex; width: 50%; height: 100%">
              <div style=" width: 50%; height: 100%">
                <div style="height: 40%; position:relative">
                  <transition name="el-zoom-in-top">
                    <div v-show="show" class="b1" @click="PicAlbum">
                      <span class="fontstlye">相簿</span>
                    </div>
                  </transition>
                </div>
                <div style="height: 60%; position: relative">
                  <transition name="el-zoom-in-top">
                    <div v-show="show" class="b2" ref="one" @click="Album">
                      <span class="fontstlye">摄影</span>
                    </div>
                  </transition>
                </div>
              </div>
              <div style=" width: 50%; height: 100%">
                <div style="height: 40%; position:relative">
                  <transition name="el-zoom-in-top">
                    <div v-show="show" class="b3" @click="Artical">
                      <span class="fontstlye">文章</span>
                    </div>
                  </transition>
                </div>
                <div style="height: 60%">
                  <transition name="el-zoom-in-top">
                    <div v-show="show" class="transition-box" @click="AboutMe">
                      <span class="fontstlye">关于我</span>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </div>
      </el-main>
        <div style="padding:0px 100px; animation: fadein 3s;"><!--          通过这种方式限制分割线的长度-->
          <el-divider></el-divider>
        </div>
      <el-footer>
        <div>
          <span style="color: #f8f8f8; font-size: 10px;">备案：申请中</span>
          <span style="color: #f8f8f8; font-size: 10px;">源码地址：https://github.com/ziqidong/webziqi</span>
        </div>
      </el-footer>
    </el-container>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      a: '',
      show: true
      // imgUrl: require('https://api.dujin.org/bing/1366.php')
    }
  },
  created () {
  },
  methods: {
    lol () {
      this.$refs.one.style.backgroundColor = 'rgba(83,129,45,0.3)'
    },
    Album () {
      this.$router.push({path: '/home/album'})
    },
    PicAlbum () {
      this.$router.push({path: '/home/palbum'}) // 使用replace不会在路由历史中留下记录，因此页面想回退的话可能会出现一些问题
    },
    Artical () {
      this.$router.push({path: '/home/artical'})
      // this.$router.replace({path: '/home/album'})
    },
    AboutMe () {
      this.$router.push({path: '/home/aboutMe'})
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .homeBox{
    /*background-image: url("http://cn.bing.com/HPImageArchive.aspx?idx=0&n=1");*/
  /*, url("https://api.dujin.org/bing/1366.php")*/
    height: 5%;
  }
  .pic{
    /*https://api.dujin.org/bing/1366.php*/
    /*background-image: linear-gradient(to top, transparent,transparent,transparent,transparent,transparent, rgb(255,255,255)), url('http://blog.mrabit.com/bing/today ');*/
    background-image: linear-gradient(to top, transparent,transparent,transparent,transparent,transparent, rgb(255,255,255)), url('../assets/main.jpg');
    height: 95%;
  }
  .el-container{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }
  .el-header, .el-footer {
    /*color: #53812d;*/
    /*text-align: center;*/
    /*line-height: 60px;*/
  }

  .el-main {
    /*text-align: center;*/
    /*line-height: 160px;*/
  }
  .transition-box, .b1, .b2, .b3 {
    width: 130px;
    height: 130px;
    /*border-radius: 10px;*/
    background: rgba(255,255,255,0.5);
    /*padding: 40px 20px;*/
    box-sizing: border-box;
    /*opacity: 0.4;*/
    position:absolute;
    cursor: pointer;
    transition: all 0.3s;
    animation: fadein 0.6s;
  }
  .transition-box:hover { /*鼠标悬停放大效果*/
    transform: scale(1.3);
    background: rgba(255,255,255,0.2);
  }
  .b1 {
    bottom:20px;
    right: 20px;
    text-align: center;
  }
  .b1:hover {
    transform: scale(1.3);
    background: rgba(255,255,255,0.2);
  }
  .b2 {
    /*float: right;*/
    /*margin-right: 20px;*/
    right: 20px;
  }
  .b2:hover {
    transform: scale(1.3);
    background: rgba(255,255,255,0.2);
  }
  .b3{
    bottom:20px;
  }
  .b3:hover {
    transform: scale(1.3);
    background: rgba(255,255,255,0.2);
  }
  .fontstlye{
    /*font-family: 微软雅黑;*/
    display: block;
    color: #f8f8f8;
    font-size: 21px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /*top:30px;*/
  }
  .hello, .h1{
    color: rgb(255,255,255);
    font-size: 30px;
    /*font-weight: bold;*/
  }
  .h1{
    font-family: 宋体, Serif;
    font-size: 50px;
    transition: all 0.4s;
    display: block;
  }
  .h1:hover{
    transform: rotate(5deg) scale(1.2);
  }
  .passion{
    display:block;
    height:50px;
    color: rgb(255,255,255);
    font-size: 22px;
    font-family: 宋体, Serif;
    transition: 0.4s;
    display: block;
  }
  .passion:hover{
    transform: rotate(3deg) scale(1.2);
  }
  .intro{
    width: 75%;
    height: 25%;
    text-align: left;
    margin-left: 100px;
    font-weight: bold;
    color: rgb(255,255,255);
    animation: fadein 4s;
  }
  @keyframes fadein {
     from {
       opacity: 0;
       transform: translate3d(0, 0, 0);
       /*transform: scale(0.1);*/
     }
     to   {
       opacity: 1;
       transform: none;
     }
   }
</style>
