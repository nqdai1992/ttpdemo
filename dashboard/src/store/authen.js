import API from '@/api'
import Cookies from '@/utilities/CookiesHelper'

const state = {
  login: !!Cookies.getCookie('token')
}

const actions = {
  signin ({commit}, credential) {
    return API.auth.login(credential)
      .then(({token}) => {
        Cookies.setCookies({token})
        commit('receive_login_state', true)
      })
      .catch(e => e)
  },
  signout ({commit}) {
    Cookies.setCookies({token: ''})
    commit('receive_login_state', false)
  }
}

const mutations = {
  receive_login_state (state, isLogin) {
    state.login = isLogin
  }
}

const getters = {
  login (state) {
    return state.login
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
