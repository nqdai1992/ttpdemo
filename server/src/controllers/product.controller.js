import Product from '../models/product.model'
import Category from '../models/category.model'
import httpStatus from 'http-status'
import APIError from '../helpers/APIError'
import fs from 'fs'

function load(req, res, next, id) {
  Product.get(id)
    .then(product => {
      req.product = product
      return next()
    })
    .catch(e => next(e))
}

function get(req, res) {
  return res.json(req.product)
}

async function create(req, res, next) {
  const path = req.body.category
  const category = await Category.findOne({path}).exec()
  if (!category) {
    const e = new APIError('Category not exists!', httpStatus.NOT_FOUND)
    return next(e)
  }
  let newProd = req.body
  if (req.files) {
    newProd.photos = req.files.map(file => file.filename)
  }
  const product = new Product(req.body)
  product.save()
    .then(savedProduct => res.json(savedProduct))
    .catch(e => next(e))
}

function update(req, res, next) {
  const data = req.body
  const product = req.product
  const photos = getNewPhotos(product.photos, data.photos, req.files)
  Object.assign(product, data, {photos})
  product.save()
    .then(savedProduct => res.json(savedProduct))
    .catch(e => next(e))
}

function getNewPhotos (current = [], target, files) {
  let newPhotos
  if (target) {
    newPhotos = target.split(',')
    removeImages(
      current.filter(photo => !newPhotos.includes(photo))
    )
  } else {
    newPhotos = current
  }
  if (files) {
    files.forEach(file => {
      const i = newPhotos.findIndex(f => !f)
      if (i > -1) newPhotos[i] = file.filename
      else newPhotos.push(file.filename)
    })
  }
  return newPhotos
}

function list(req, res, next) {
  Product.list()
    .then(products => res.json(products))
    .catch(e => next(e))
}

function remove(req, res, next) {
  const product = req.product
  removeImages(product.photos)
  product.remove()
    .then(deletedProduct => res.json(deletedProduct))
    .catch(e => next(e))
}

function removeImages (filenames = []) {
  filenames.forEach(name => {
    const path = 'images/' + name
    if (fs.existsSync(path)) fs.unlinkSync(path)
  })
}

export default { load, get, create, update, list, remove };
