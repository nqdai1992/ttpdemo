import express from 'express'
import multer from 'multer'
import config from '../../config/config'
import displayCtrl from '../controllers/display.controller'

const storage = multer.diskStorage({
  destination (req, file, cb) {
    cb(null, 'images/' + req.params.folder)
  },
  filename (req, file, cb) {
    const name = file.originalname || ''
    cb(null, Date.now() + '.' + name.split('.').slice(-1)[0])
  }
})

const upload = multer({storage}).array('photo', 10)

const router = express.Router()

router.use(config.authenticate)

router.get('/', displayCtrl.list)

router.post('/:folder', upload, displayCtrl.create)

router.delete('/:folder/:image', displayCtrl.remove)

export default router
