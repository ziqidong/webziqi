// import Vue from 'vue'
import fetch from './../../utils/fetch.js'

// get
const state = {
  ok: {},
  ok1: ''
}

const actions = {
  TESTPOST ({ dispatch, commit, state, rootState }, params) {
    let cb = params.cb
    fetch({
      url: 'loginn', // 完整的请求路径为fetch.js配置的baseURL+/home/data?pageIndex=1
      method: 'POST',
      data: {username: params.username, password: params.password}
    }).then((res) => {
      state.ok1 = res.data
      if (cb) {
        // eslint-disable-next-line standard/no-callback-literal
        cb('保存成功！')
      }
    }, (err) => {
      console.log(err)
      if (cb) {
        // eslint-disable-next-line standard/no-callback-literal
        cb('保存失败！')
      }
    })
  },
  TESTGET ({ dispatch, commit, state, rootState }, params) {
    let cb = params.cb
    fetch({
      url: 'getMap',
      method: 'GET',
      params: {wtf: params.wtf}
    }).then((res) => {
      state.ok = res.data
      if (cb) {
        // eslint-disable-next-line standard/no-callback-literal
        cb('保存成功！')
      }
    }, (err) => {
      console.log(err)
      if (cb) {
        // eslint-disable-next-line standard/no-callback-literal
        cb('保存失败！')
      }
    })
  }
}
const mutations = {}

export default {
  state,
  actions,
  mutations
}
