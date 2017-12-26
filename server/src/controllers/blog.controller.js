import Blog from '../models/blog.model'
import httpStatus from 'http-status'
import APIError from '../helpers/APIError'

function load(req, res, next, id) {
  Blog.get(id)
    .then((blog) => {
      req.blog = blog
      return next()
    })
    .catch(e => next(e))
}

function get(req, res) {
  return res.json(req.blog)
}

function create(req, res, next) {
  const blog = new Blog(req.body)

  blog.save()
    .then(savedBlog => res.json(savedBlog))
    .catch(e => next(e))
}

function update(req, res, next) {
  const blog = req.blog
  Object.assign(blog, req.body)

  blog.save()
    .then(savedBlog => res.json(savedBlog))
    .catch(e => next(e))
}

function list(req, res, next) {
  const { limit = 15, skip = 0, cat = '' } = req.query
  Blog.list({ limit, skip, cat })
    .then(blogs => res.json(blogs))
    .catch(e => next(e))
}

function remove(req, res, next) {
  const blog = req.blog
  blog.remove()
    .then(deletedBlog => res.json(deletedBlog))
    .catch(e => next(e))
}

export default { load, get, create, update, list, remove }
