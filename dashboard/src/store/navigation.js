import routes from '@/router/routes'

const state = {
  navState: true,
  navItems: routes
}

const actions = {
  toggleNavbar ({commit, state}) {
    commit('receive_nav_state', !state.navState)
  },
  setNavState ({commit}, newState) {
    commit('receive_nav_state', newState)
  }
}

const mutations = {
  receive_nav_state (state, newState) {
    state.navState = newState
  }
}

const getters = {
  navState: state => state.navState,
  navItems: state => state.navItems.filter(item => item.children)
}

export default {
  state,
  actions,
  mutations,
  getters
}
