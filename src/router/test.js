import def from '../components/default'
import { HelloWorld, Login, AppIndex, TestVue } from '../components/test/index'

var routes = [
  {
    path: 'test',
    name: 'test',
    component: def,
    children: [
      {
        path: 'hw',
        name: 'HelloWorld',
        component: HelloWorld
      },
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
      {
        path: 'index',
        name: 'AppIndex',
        component: AppIndex
      },
      {
        path: 'vue',
        name: 'testvue',
        component: TestVue
      }
    ]}]

export default routes
// export default [
//   {
//     path: 'hw',
//     name: 'HelloWorld',
//     component: HelloWorld
//   },
//   {
//     path: 'login',
//     name: 'Login',
//     component: Login
//   },
//   {
//     path: 'index',
//     name: 'AppIndex',
//     component: AppIndex
//   }
// ]
