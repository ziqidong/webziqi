<template>
  <div>
    用户名:<input type="text" v-model="loginForm.username" placeholder="请输入用户名"/>
    <br><br>
    密码： <input type="password" v-model="loginForm.password" placeholder="请输入密码"/>
    <br><br>
    <button v-on:click="login">登录</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      responseResult: []
    }
  },
  methods: {
    login () {
      this.$store.dispatch('TESTPOST', {username: this.loginForm.username,
        password: this.loginForm.password,
        cb: (msg) => {
          if (msg === '保存成功！') {
            console.log(this.$store.state.test.ok1)
            this.$router.replace({path: '/home/test/index'})
            //   this.$router.push('/index')
          }
        }})
    }
  }
}
// this.$axios
//   .post('/loginn', {
//     username: this.loginForm.username,
//     password: this.loginForm.password
//   })
//   .then(successResponse => {
//     // if (successResponse.data.code === 200) {
//     //   // this.$router.replace({path: '/index'})
//     //   this.$router.push('/index')
//     // }
//     this.$router.replace({path: '/index'})
//   })
//   .catch(failResponse => {
//   })
</script>
