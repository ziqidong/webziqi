import Vue from 'vue'
import Router from 'vue-router'
import Test from './test'
import Album from './Album'
import PicAlbum from './PicAlbum'
import Me from './Me'
import Artical from './Artical'
import Home from '../components/Home'
import def from '../components/default'
import ttt from '../components/ttt'

Vue.use(Router)

var routesMap = [
  Test,
  Album,
  PicAlbum,
  Me,
  Artical
]

var childrenRoute = []

for (var key in routesMap) {
  routesMap[key].forEach(function (item) {
    childrenRoute.push(item)
  })
}

export default new Router({
  routes: [
    // 下面都是固定的写法
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'childrenroute',
      component: def,
      children: childrenRoute
    },
    {
      path: '/ttt',
      name: 'nimabi',
      component: ttt
    }
  ]
})
