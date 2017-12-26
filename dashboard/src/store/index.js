import Vuex from 'vuex'
import Vue from 'vue'
import product from './product'
import authen from './authen'
import navigation from './navigation'
import category from './category'
import blog from './blog'
import image from './image'
import display from './display'
import methods from './methods'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    product,
    authen,
    navigation,
    category,
    blog,
    image,
    display,
    methods
  }
})
