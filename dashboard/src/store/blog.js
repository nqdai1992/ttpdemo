import API from '@/api'

const state = {
  blogs: []
}

const actions = {
  getBlogs ({commit, state}) {
    if (state.blogs.length) return null
    return API.blog.fetch()
      .then(blogs => commit('receive_blogs', blogs))
      .catch(e => e)
  },
  createBlog ({commit}, blogInfo) {
    return API.blog.create(blogInfo)
      .then(blog => commit('receive_blog', blog))
      .catch(e => e)
  },
  updateBlog ({commit}, {id, blogInfo}) {
    return API.blog.update(id, blogInfo)
      .then(updatedBlog => commit('update_blog', updatedBlog))
      .catch(e => e)
  },
  removeBlog ({commit}, id) {
    return API.blog.remove(id)
      .then(deletedBlog => commit('remove_blog', deletedBlog._id))
      .catch(e => e)
  }
}

const mutations = {
  receive_blogs (state, blogs) {
    state.blogs = blogs
  },
  receive_blog (state, newBlog) {
    state.blogs.unshift(newBlog)
  },
  update_blog (state, updatedBlog) {
    const i = state.blogs.findIndex(blog => blog._id === updatedBlog._id)
    if (i > -1) state.blogs.splice(i, 1, updatedBlog)
  },
  remove_blog (state, id) {
    const i = state.blogs.findIndex(blog => blog._id === id)
    if (i > -1) state.blogs.splice(i, 1)
  }
}

export default {
  state,
  actions,
  mutations
}
