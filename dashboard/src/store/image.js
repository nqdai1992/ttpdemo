import API from '@/api'

const state = {
  images: []
}

const actions = {
  getImages ({commit, state}) {
    if (state.images.length) return null
    return API.image.fetch()
      .then(images => commit('receive_images', images))
      .catch(e => e)
  },
  createImage ({commit}, imageInfo) {
    return API.image.create(imageInfo)
      .then(image => commit('receive_image', image))
      .catch(e => e)
  },
  removeImage ({commit}, id) {
    return API.image.remove(id)
      .then(({filename}) => commit('remove_image', filename))
      .catch(e => e)
  }
}

const mutations = {
  receive_images (state, images) {
    state.images = images
  },
  receive_image (state, newImage) {
    state.images.unshift(newImage)
  },
  remove_image (state, filename) {
    const i = state.images.findIndex(image => image === filename)
    if (i > -1) state.images.splice(i, 1)
  }
}

export default {
  state,
  actions,
  mutations
}
