import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Products from '@/views/Products'
import Product from '@/views/Product'
import Solution from '@/views/Solution'
import News from '@/views/News'
import Contact from '@/views/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/product',
      name: 'Products',
      component: Products
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: Product
    },
    {
      path: '/solution',
      name: 'Solution',
      component: Solution
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
