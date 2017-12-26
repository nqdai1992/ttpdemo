import API from '@/api'

const state = {
  blog: [],
  category: [],
  product: [],
  image: []
}

const actions = {
  API ({commit, state}, [method, key, ...data]) {
    if (!state[key]) return 'State not found'
    return API[key][method](...data)
      .then(val => commit(`receive_${method}_state`, {key, val}))
      .catch(e => e)
  }
}

const mutations = {
  receive_fetch_state (state, {key, val}) {
    state[key] = val
  },
  receive_create_state (state, {key, val}) {
    state[key].unshift(val)
  },
  receive_update_state (state, {key, val}) {
    const i = state[key].findIndex(item => item._id === val._id)
    if (i > -1) state[key].splice(i, 1, val)
  },
  receive_remove_state (state, {key, val}) {
    const i = state[key].findIndex(item => item._id === val._id)
    if (i > -1) state.blogs.splice(i, 1)
  }
}

let getters = {}

for (let key in state) {
  getters[key + 's'] = state => state[key]
  getters[key] = (state, id) => state[key].find(s => s._id === id)
}

export default {
  state,
  actions,
  mutations,
  getters
}
