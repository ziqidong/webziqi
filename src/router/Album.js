import {AlbumFlex, PhotoDetail} from '../components/album/index'

var routes = [
  {
    path: 'album',
    name: 'album',
    component: AlbumFlex,
    meta: {
      keepAlive: true
    }
  },
  {
    path: 'albumDetail',
    name: 'detail',
    component: PhotoDetail
  }
]

export default routes
