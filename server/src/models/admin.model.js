import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
import bcrypt from 'bcrypt'

const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  password: {
    type: String,
    required: true
  }
})

AdminSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10), null)
  }
  next()
})

AdminSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

AdminSchema.statics = {
  /**
   * Get admin
   * @param {ObjectId} id - The objectId of admin.
   * @returns {Promise<Admin, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((admin) => {
        if (admin) {
          return admin
        }
        const err = new APIError('Account not exists!', httpStatus.NOT_FOUND)
        return Promise.reject(err)
      })
  },

  /**
   * List admins in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of admins to be skipped.
   * @param {number} limit - Limit number of admins to be returned.
   * @returns {Promise<Admin[]>}
   */
  list() {
    return this.find()
      .sort({ createdAt: -1 })
      .exec()
  }
}

/**
 * @typedef Admin
 */
export default mongoose.model('Admin', AdminSchema)
