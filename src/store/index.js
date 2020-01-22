import Vue from 'vue'
import Vuex from 'vuex'
import Test from './modules/test'
import picAlbum from './modules/picAlbum'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    test: Test,
    picAlbum: picAlbum
  }
})

export default store
