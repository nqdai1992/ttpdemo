import express from 'express'
import validate from 'express-validation'
import paramValidation from '../../config/param-validation'
import categoryCtrl from '../controllers/category.controller'
import config from '../../config/config'

const router = express.Router()

router.route('/')
  .get(categoryCtrl.get)

  .post(config.authenticate, validate(paramValidation.createCategory), categoryCtrl.create)

router.route('/:categoryPath')
  .get(categoryCtrl.getProducts)

  .put(config.authenticate, validate(paramValidation.updateCategory), categoryCtrl.load, categoryCtrl.update)

  .delete(config.authenticate, categoryCtrl.load, categoryCtrl.remove)

export default router
