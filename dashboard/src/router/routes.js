import Container from '@/views/Container'
import ListProduct from '@/views/product/List'
import ListBlog from '@/views/blog/List'
import NewBlog from '@/views/blog/New'
import Signin from '@/views/Signin'
import Display from '@/views/Display'

export default [
  {
    path: '/',
    name: 'home',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Signin
  },
  {
    path: '/product',
    component: Container,
    icon: 'ios-list-outline',
    name: 'Quản lý sản phẩm',
    redirect: '/product/list',
    children: [
      {
        path: 'list',
        name: 'Danh sách sản phẩm',
        component: ListProduct
      }
    ]
  },
  {
    path: '/blog',
    component: Container,
    icon: 'compose',
    name: 'Quản lý bài viết',
    redirect: '/blog/list',
    children: [
      {
        path: 'list',
        name: 'Danh sách bài viết',
        component: ListBlog
      },
      {
        path: 'new',
        name: 'Thêm bài viết',
        component: NewBlog
      },
      {
        path: 'edit',
        name: 'Chỉnh sửa bài viết',
        component: NewBlog,
        hidden: true
      }
    ]
  },
  {
    path: '/display',
    component: Container,
    icon: 'eye-outline',
    name: 'Quản lý giao diện',
    redirect: '/dipslay/image',
    children: [
      {
        path: 'image',
        name: 'Quản lý hình ảnh',
        component: Display
      }
    ]
  }
]