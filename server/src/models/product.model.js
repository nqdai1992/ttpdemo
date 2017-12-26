import Promise from 'bluebird'
import mongoose from 'mongoose'
import httpStatus from 'http-status'
import APIError from '../helpers/APIError'

const ProductSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    index: true
  },
  brand: String,
  price: Number,
  availability: String,
  condition: String,
  specification: String,
  photos: [String]
},{
  versionKey: false,
  timestamps: true
})

ProductSchema.statics = {
  get(id) {
    return this.findById(id)
      .exec()
      .then(product => {
        if (product) {
          return product
        }
        const err = new APIError('Product not exists!', httpStatus.NOT_FOUND)
        return Promise.reject(err)
      })
  },

  list() {
    return this.find()
      .sort({ updatedAt: -1 })
      .lean()
      .exec()
  }
}

export default mongoose.model('Product', ProductSchema)
