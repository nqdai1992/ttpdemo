import Promise from 'bluebird'
import mongoose from 'mongoose'
import httpStatus from 'http-status'
import APIError from '../helpers/APIError'

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['solution', 'news', 'introduction', 'contact'],
    required: true
  },
  content: {
    type: String,
    required: true
  },
  tags: [String]
},{
  versionKey: false,
  timestamps: true
})

BlogSchema.statics = {
  get(id) {
    return this.findById(id)
      .exec()
      .then(blog => {
        if (blog) {
          return blog
        }
        const err = new APIError('Blog not exists!', httpStatus.NOT_FOUND)
        return Promise.reject(err)
      })
  },

  list({skip, limit, cat}) {
    const query = cat ? {cat} : {}
    return this.find(query)
      .sort({ updatedAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean()
      .exec()
  }
}

export default mongoose.model('Blog', BlogSchema)
