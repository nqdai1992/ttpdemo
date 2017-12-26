import express from 'express'
import validate from 'express-validation'
import paramValidation from '../../config/param-validation'
import adminCtrl from '../controllers/admin.controller'
import config from '../../config/config'

const router = express.Router()

router.route('/')
  /** GET /api/admins - Get list of admins */
  .get(config.authenticate, adminCtrl.list)

  /** POST /api/admins - Create new admin */
  .post(validate(paramValidation.createAdmin), adminCtrl.create)

// router.route('/:adminId')
//   /** GET /api/admins/:adminId - Get admin */
//   .get(adminCtrl.get)

//   /** PUT /api/admins/:adminId - Update admin */
//   .put(validate(paramValidation.updateAdmin), adminCtrl.update)

//   /** DELETE /api/admins/:adminId - Delete admin */
//   .delete(adminCtrl.remove)

// /** Load admin when API with adminId route parameter is hit */
// router.param('adminId', expressJwt({ secret: config.jwt.secret }), adminCtrl.load)

export default router
