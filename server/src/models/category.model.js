import mongoose from 'mongoose'
import Promise from 'bluebird'
import httpStatus from 'http-status'
import APIError from '../helpers/APIError'

const CategorySchema = new mongoose.Schema({
  path: {type: String, required: true, index: { unique: true }},
  index: {type: Number},
  title: {type: String, required: true},
  description: {type: String}
}, {
  versionKey: false
})

CategorySchema.pre('save', function(next) {
  if (this.isModified('path')) {
    this.index = this.path.split('-').slice(-1)[0]
  }
  next()
})

export default mongoose.model('Category', CategorySchema)
