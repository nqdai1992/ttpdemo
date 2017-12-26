import API from '@/api'

const state = {
  categories: [],
  catTree: []
}

const actions = {
  getCategories ({commit, state}) {
    if (state.categories.length) return null
    return API.category.fetch()
      .then(cats => commit('receive_categories', cats))
      .catch(e => e)
  },
  createCategory ({commit, getters: {categories}}, {path: parentPath = '', ...cat}) {
    const path = catHelper.createNewPath(categories, parentPath)
    return API.category.create({path, ...cat})
      .then(newCat => commit('update_categories', newCat))
      .catch(e => e)
  },
  updateCategory ({commit}, {path, ...cat}) {
    return API.category.update(path, cat)
      .then(updatedCat => commit('update_categories', updatedCat))
      .catch(e => e)
  },
  removeCategories ({commit}, path) {
    return API.category.remove(path)
      .then(res => commit('remove_categories', path))
      .catch(e => e)
  }
}

const mutations = {
  receive_categories (state, cats) {
    state.categories = cats
    state.catTree = catHelper.createTree(cats)
  },
  update_categories (state, newCat) {
    const i = state.categories.findIndex(cat => cat.path === newCat.path)
    if (i > -1) {
      state.categories.splice(i, 1, newCat)
    } else {
      state.categories.push(newCat)
    }
    state.catTree = catHelper.createTree(state.categories)
  },
  remove_categories (state, path) {
    state.categories = state.categories.filter(cat => {
      const regex = new RegExp('^' + path)
      return !regex.test(cat.path)
    })
    state.catTree = catHelper.createTree(state.categories)
  }
}

const getters = {
  categories: state => state.categories,
  getCategory: state => path => state.categories.find(cat => cat.path === path),
  catTree: state => state.catTree
}

const catHelper = {
  createTree (cats) {
    const roots = this.getTreeRoots(cats)
    const getDescendant = (parent) => {
      const regex = new RegExp(`^${parent.path}-[0-9]+$`)
      const children = cats.filter(cat => regex.test(cat.path))
      if (children.length) {
        parent.children = children.map(this.parseCat)
        parent.children.forEach(child => getDescendant(child))
      }
    }
    roots.forEach(root => {
      getDescendant(root)
    })
    return roots
  },
  getTreeRoots (cats) {
    return cats.filter(cat => /^[0-9]+$/.test(cat.path))
      .map(this.parseCat)
  },
  parseCat (cat) {
    const {title, index: value, title: label, path} = cat
    return {
      title,
      label,
      value: value + '',
      path,
      expand: true
    }
  },
  getChilren (cats, parentPath) {
    const path = parentPath ? parentPath + '-' : ''
    const regex = new RegExp('^' + path + '[0-9]+$')
    return cats.filter(cat => regex.test(cat.path))
  },
  createNewPath (cats, parentPath) {
    const indexs = this.getChilren(cats, parentPath)
      .map(cat => cat.index)
      .sort((a, b) => a - b)
    let index
    for (let i = 0; i <= indexs.length; i++) {
      if (indexs[i] !== i) {
        index = i
        break
      }
    }
    const path = parentPath ? parentPath + '-' + index : '' + index
    return path
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
