import Category from '../models/category.model'
import Product from '../models/product.model'
import httpStatus from 'http-status'
import APIError from '../helpers/APIError'

async function load(req, res, next) {
  const path = req.params.categoryPath
  const category = await Category.findOne({path}).exec()
  if (category) {
    req.category = category
    return next()
  }
  const e = new APIError('Category not exists!', httpStatus.NOT_FOUND)
  next(e)
}

function getProducts(req, res, next) {
  const category = new RegExp('^' + req.params.categoryPath)
  Product.find({category})
    .then(products => res.json(products))
    .catch(e => next(e))
}

function get (req, res, next) {
  Category.find({})
    .select('-_id')
    .exec()
    .then(categories => res.json(categories))
    .catch(e => next(e))
}

function update (req, res, next) {
  const category = req.category
  Object.assign(category, req.body)
  category.save()
    .then(savedCategory => res.json(savedCategory))
    .catch(e => next(e))
}

async function create (req, res, next) {
  const parentPath = req.body.path.split('-').slice(0, -1).join('-')
  if (parentPath) {
    const parent = await Category.findOne({path: parentPath})
    if (!parent) {
      const e = new APIError('Parent of category is not existed!', httpStatus.BAD_REQUEST)
      return next(e)
    }
  }
  const category = new Category(req.body)
  category.save()
    .then(savedCategory => res.json(savedCategory))
    .catch(e => next(e))
}

async function remove (req, res, next) {
  const category = req.category
  const product = await Product.findOne({category: category.path}).exec()
  if (product) {
    const e = new APIError('Category is not empty!', httpStatus.BAD_REQUEST)
    return next(e)
  }
  const regex = new RegExp('^' + category.path)
  Category.find({path: regex}).remove()
    .then(n => res.json(n))
    .catch(e => next(e))
}

export default { load, get, update, remove, getProducts, create }
