import Admin from '../models/admin.model'
import httpStatus from 'http-status'
import APIError from '../helpers/APIError'

/**
 * Load admin and append to req.
 */
function load(req, res, next, id) {
  Admin.get(id)
    .then((admin) => {
      req.admin = admin; // eslint-disable-line no-param-reassign
      return next()
    })
    .catch(e => next(e))
}

/**
 * Get admin
 * @returns {Admin}
 */
function get(req, res) {
  return res.json(req.admin)
}

/**
 * Create new admin
 * @property {string} req.body.username - The username of admin.
 * @property {string} req.body.password - The password of admin.
 * @returns {Admin}
 */
async function create(req, res, next) {
  const ad = await Admin.findOne({}).exec()
  if (ad) {
    const e = new APIError('Unauthorized', httpStatus.UNAUTHORIZED)
    return next(e)
  }
  const admin = new Admin({
    username: req.body.username,
    password: req.body.password
  })

  admin.save()
    .then(savedAdmin => res.json(savedAdmin))
    .catch(e => next(e))
}

/**
 * Update existing admin
 * @property {string} req.body.username - The username of admin.
 * @property {string} req.body.mobileNumber - The mobileNumber of admin.
 * @returns {Admin}
 */
function update(req, res, next) {
  const admin = req.admin
  admin.username = req.body.username
  admin.password = req.body.password

  admin.save()
    .then(savedAdmin => res.json(savedAdmin))
    .catch(e => next(e))
}

/**
 * Get admin list.
 * @property {number} req.query.skip - Number of admins to be skipped.
 * @property {number} req.query.limit - Limit number of admins to be returned.
 * @returns {Admin[]}
 */
function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query
  Admin.list({ limit, skip })
    .then(admins => res.json(admins))
    .catch(e => next(e))
}

/**
 * Delete admin.
 * @returns {Admin}
 */
function remove(req, res, next) {
  const admin = req.admin
  admin.remove()
    .then(deletedAdmin => res.json(deletedAdmin))
    .catch(e => next(e))
}

export default { load, get, create, update, list, remove }
