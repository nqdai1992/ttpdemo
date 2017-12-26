import Joi from 'joi'
import multer from 'multer'
import expressJwt from 'express-jwt'

// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config()

// define validation for all the env vars
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow(['development', 'production', 'test', 'provision'])
    .default('development'),
  PORT: Joi.number()
    .default(6969),
  JWT_SECRET: Joi.string().required()
    .description('JWT Secret required to sign'),
  MONGO_HOST: Joi.string().required()
    .description('Mongo DB host url'),
  MONGO_PORT: Joi.number()
    .default(27017),
  MULTER_DEST: Joi.string()
    .default('photos/')
}).unknown()
  .required()

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema)
if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

const storage = multer.diskStorage({
  destination (req, file, cb) {
    cb(null, 'images')
  },
  filename (req, file, cb) {
    const name = file.originalname || ''
    cb(null, Date.now() + '.' + name.split('.').slice(-1)[0])
  }
})
const upload = multer({storage}).array('photo', 10)

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  jwt: {secret: envVars.JWT_SECRET},
  mongo: {
    host: envVars.MONGO_HOST,
    port: envVars.MONGO_PORT
  },
  multer: {
    dest: envVars.MULTER_DEST
  },
  multer: upload,
  authenticate: expressJwt({secret: envVars.JWT_SECRET})
}

export default config
