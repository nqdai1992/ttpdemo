import express from 'express'
import validate from 'express-validation'
import config from '../../config/config'
import paramValidation from '../../config/param-validation'
import productCtrl from '../controllers/product.controller'

const router = express.Router()

router.route('/')
  .get(productCtrl.list)

  .post(config.authenticate, config.multer, validate(paramValidation.createProduct), productCtrl.create)

router.route('/:productId')
  .get(productCtrl.get)

  .put(config.authenticate, config.multer, validate(paramValidation.updateProduct), productCtrl.update)

  .delete(config.authenticate, productCtrl.remove)

router.param('productId', productCtrl.load)

export default router
