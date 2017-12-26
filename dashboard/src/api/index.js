import Axios from 'axios'
import Cookies from '@/utilities/CookiesHelper'
import Store from '@/store'

const LOGIN_URL = '/auth/login/'
const PRODUCT_URL = '/product/'
const CATEGORY_URL = '/category/'
const BLOG_URL = '/blog/'
const IMAGE_URL = '/image/'
const DISPLAY_URL = '/display'

const axios = Axios.create({
  baseURL: 'http://localhost:6969/api',
  timeout: 15000
})

axios.interceptors.response.use(
  response => response.data,
  err => {
    let msg
    if (err.response) {
      const {response: {data, status}} = err
      if (status === 401 && Store.getters.login) {
        Store.dispatch('signout')
        return null
      }
      msg = data.message
    } else {
      msg = 'Connection Failed'
    }
    return Promise.reject(msg)
  }
)

const getHeader = () => {
  const token = Cookies.getCookie('token')
  return {headers: {Authorization: 'Bearer ' + token}}
}

const generateAPI = url => {
  return {
    fetch: (id = '') => axios.get(url + id),
    create: (data) => axios.post(url, data, getHeader()),
    update: (id, data) => axios.put(url + id, data, getHeader()),
    remove: (id) => axios.delete(url + id, getHeader())
  }
}

const generateImageAPI = url => {
  return {
    fetch: () => axios.get(url, getHeader()),
    create: (formData, folder = '') => axios.post(url + folder, formData, getHeader()),
    remove: (filename, folder = '') => axios.delete(url + folder + filename, getHeader())
  }
}

export default {
  product: generateAPI(PRODUCT_URL),
  category: generateAPI(CATEGORY_URL),
  blog: generateAPI(BLOG_URL),
  image: generateImageAPI(IMAGE_URL),
  display: generateImageAPI(DISPLAY_URL),
  auth: {
    login: (credential) => axios.post(LOGIN_URL, credential)
  }
}
