import express from 'express'
import bodyParser from 'body-parser'
import httpStatus from 'http-status'
import helmet from 'helmet'
import cors from 'cors'
import expressValidation from 'express-validation'
import routes from '../src/routes/index.route'
import config from './config'
import APIError from '../src/helpers/APIError'
import path from 'path'

const app = express()

// parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(helmet())

app.use(cors())

// mount all routes on /api path
app.use('/api', routes)

app.use('/images', express.static('images'))

// if error is not an instanceOf APIError, convert it.
app.use((err, req, res, next) => {
  if (err instanceof expressValidation.ValidationError) {
    // validation error contains errors which is an array of error each containing message[]
    const unifiedErrorMessage = err.errors.map(error => error.messages.join('. ')).join(' and ')
    const error = new APIError(unifiedErrorMessage, err.status, true)
    return next(error)
  } else if (!(err instanceof APIError)) {
    const apiError = new APIError(err.message, err.status, err.isPublic)
    return next(apiError)
  }
  return next(err)
})

app.use('/dashboard', express.static('dashboard'))

app.use(express.static('webapp'))

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new APIError('API not found', httpStatus.NOT_FOUND)
  return next(err)
})

// error handler, send stacktrace only during development
app.use((err, req, res, next) => {
    res.status(err.status).json({
      message: err.isPublic ? err.message : httpStatus[err.status],
      stack: config.env === 'development' ? err.stack : {}
    })
  }
)

export default app
