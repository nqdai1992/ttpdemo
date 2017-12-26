import API from '@/api'

const state = {
  displays: {
    carousel: [],
    logo: [],
    client: []
  }
}

const actions = {
  getDisplays ({commit, state}) {
    if (state.displays.length) return null
    return API.display.fetch()
      .then(displays => commit('receive_displays', displays))
      .catch(e => e)
  },
  createDisplay ({commit}, {type, formData}) {
    return API.display.create(formData, type)
      .then(newImg => commit('receive_display', {type, newImg}))
      .catch(e => e)
  },
  removeDisplay ({commit}, {filename, type}) {
    return API.display.remove(filename, type)
      .then(({filename}) => commit('remove_display', {filename, type}))
      .catch(e => e)
  }
}

const mutations = {
  receive_displays (state, displays) {
    state.displays = displays
  },
  receive_display (state, {type, newImg}) {
    state.displays[type].unshift(newImg)
  },
  remove_display (state, {type, filename}) {
    const i = state.displays[type].IndexOf(filename)
    if (i > -1) state.displays[type].splice(i, 1)
  }
}

const getters = {
  displays: state => state.displays,
  carousels: state => state.displays.carousel,
  logos: state => state.displays.logo,
  clients: state => state.displays.client
}

export default {
  state,
  actions,
  mutations,
  getters
}
