
import mongoose from 'mongoose'

// config should be imported before importing any other file
import config from './config/config'
import app from './config/express'

// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign

// plugin bluebird promise in mongoose
mongoose.Promise = Promise;

// connect to mongo db
const mongoUri = config.mongo.host;
mongoose.connect(mongoUri, {
  keepAlive: true,
  useMongoClient: true
})
mongoose.connection.on('error', () => {
  throw new Error(`Db connect failed: ${mongoUri}`);
})

app.listen(config.port, () => {
  console.info(`Listening on ${config.port} (${config.env})`)
})

export default app;
