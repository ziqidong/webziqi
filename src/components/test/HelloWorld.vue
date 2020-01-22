<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <h1>{{firstName}}</h1>
    <h1>{{lastName}}</h1>
    <h2>Essential Links</h2>
    <button v-on:click="login">登录</button>
    <button v-on:click="testcompute">测试compute</button>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
      firstName: 'wang',
      lastName: 'leilei'
    }
  },
  methods: {
    login () { // 点击登录，提交事件，事件执行的结果由compute函数监听
      this.$router.push({path: '/home/test/login'}) // 页面跳转
      this.$store.dispatch('TESTGET', {wtf: 'nihao',
        cb: (msg) => {
          if (msg === '保存成功！') {
            // this.msg = this.$store.state.test.ok
            this.$router.replace({path: '/login'}) // 页面跳转
            // this.$router.push({path: '/login'}) // 页面跳转
          }
        }})
    },
    testcompute () {
      // this.$store.dispatch()
      this.$store.state.test.ok = '?????????????????????'
    }
  },
  computed: {
    msg: {
      get: function () {
        return this.$store.state.test.ok // http请求发送完毕，监听结果,msg由是被决定的数据
      },
      set: function (newValue) { // 某个数据依赖msg，msg是决定别人的数据
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
