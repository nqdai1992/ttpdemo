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
  const folders = ['carousel', 'logo', 'client']
  const filenames = folders.reduce((display, folder) => {
    display[folder] = fs.readdirSync(`images/${folder}/`)
    return display
  }, {})
  res.json(filenames)
}

function remove(req, res, next) {
  const folder = req.params.folder + '/'
  const filename = req.params.image
  const path = 'images/' + folder + filename
  if (fs.existsSync(path)) {
    fs.unlinkSync(path)
    res.json({filename})
  } else {
    const e = new APIError('Image not found', httpStatus.NOT_FOUND)
    return next(e)
  }
}

export default { create, list, remove }
