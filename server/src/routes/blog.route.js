import express from 'express'
import validate from 'express-validation'
import paramValidation from '../../config/param-validation'
import blogCtrl from '../controllers/blog.controller'
import config from '../../config/config'

const router = express.Router()

router.route('/')
  .get(blogCtrl.list)

  .post(config.authenticate, validate(paramValidation.createBlog), blogCtrl.create)

router.route('/:blogId')
  .get(blogCtrl.get)

  .put(config.authenticate, validate(paramValidation.updateBlog), blogCtrl.update)

  .delete(config.authenticate, blogCtrl.remove)

router.param('blogId', blogCtrl.load)

export default router
