import {Articals, ArticalDetail} from '../components/Artical/index'

var routes = [
  {
    path: 'artical',
    name: 'artical',
    component: Articals,
    meta: {
      keepAlive: true
    }
  },
  {
    path: 'articalDetail',
    name: 'articalDetail',
    component: ArticalDetail
  }
]

export default routes
