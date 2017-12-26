import express from 'express'
import config from '../../config/config'
import imageCtrl from '../controllers/image.controller'

const router = express.Router()

router.use(config.authenticate)

router.route('/')

  .get(imageCtrl.list)

  .post(config.multer, imageCtrl.create)

router.route('/:image')

  .delete(imageCtrl.remove)

export default router
