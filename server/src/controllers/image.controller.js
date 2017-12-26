import fs from 'fs'
import httpStatus from 'http-status'
import APIError from '../helpers/APIError'

function create(req, res, next) {
  if (req.files) {
    const filenames = req.files.map(file => file.filename)
    res.json(filenames)
  } else {
    const e = new APIError('Upload at least 1 image', httpStatus.BAD_REQUEST)
    return next(e)
  }
}

function list(req, res, next) {
  const filenames = fs.readdirSync('images/')
  res.json(filenames.filter(name => name.split('.')[1]))
}

function remove(req, res, next) {
  const filename = req.params.image
  const path = 'images/' + filename
  if (fs.existsSync(path)) {
    fs.unlinkSync(path)
    res.json({filename})
  } else {
    const e = new APIError('Image not found', httpStatus.NOT_FOUND)
    return next(e)
  }
}

export default { create, list, remove }
