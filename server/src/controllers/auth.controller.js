import jwt from 'jsonwebtoken'
import httpStatus from 'http-status'
import APIError from '../helpers/APIError'
import config from '../../config/config'
import Admin from '../models/admin.model'

/**
 * Returns jwt token if valid username and password is provided
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
async function login(req, res, next) {
  const {username, password} = req.body
  const admin = await Admin.findOne({username}).exec()
  if (!admin || !admin.validPassword(password)) {
    const err = new APIError('Authentication error', httpStatus.UNAUTHORIZED, true)
    return next(err)
  }
  const token = jwt.sign(
    {username},
    config.jwt.secret,
    {
      expiresIn: '3d',
      noTimestamp: true
    }
  )
  res.json({token})
}

export default { login }
