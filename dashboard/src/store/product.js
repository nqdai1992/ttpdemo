import API from '@/api'

const state = {
  products: []
}

const actions = {
  getProducts ({commit, state}) {
    if (state.products.length) return null
    return API.product.fetch()
      .then(products => commit('receive_products', products))
      .catch(e => e)
  },
  createProduct ({commit}, prodInfo) {
    return API.product.create(prodInfo)
      .then(newProd => commit('receive_product', newProd))
      .catch(e => e)
  },
  updateProduct ({commit}, {id: prodId, prodInfo}) {
    return API.product.update(prodId, prodInfo)
      .then(updatedProd => commit('update_product', updatedProd))
      .catch(e => e)
  },
  removeProduct ({commit}, prodId) {
    return API.product.remove(prodId)
      .then(deletedProd => commit('remove_product', deletedProd._id))
      .catch(e => e)
  }
}

const mutations = {
  receive_products (state, products) {
    state.products = products
  },
  receive_product (state, product) {
    state.products.unshift(product)
  },
  update_product (state, newProd) {
    const i = state.products.findIndex(prod => prod._id === newProd._id)
    state.products.splice(i, 1, newProd)
  },
  remove_product (state, prodId) {
    const i = state.products.findIndex(prod => prod._id === prodId)
    state.products.splice(i, 1)
  }
}

export default {
  state,
  actions,
  mutations
}
