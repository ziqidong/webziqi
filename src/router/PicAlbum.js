import {PicAlbum, PicAlbumDetail} from '../components/picAlbum/index'
import PhotoDetail from '../components/album/PhotoDetail'

var routes = [
  {
    path: 'palbum',
    name: 'picalbum',
    component: PicAlbum,
    meta: {
      keepAlive: true
    }
  },
  {
    path: 'palbumDetail',
    name: 'picalbumdetail',
    component: PicAlbumDetail,
    meta: {
      keepAlive: true
    }
  },
  {
    path: 'picDetail',
    name: 'picdetail',
    component: PhotoDetail
  }
]

export default routes
