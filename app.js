const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const mongoose = require('mongoose')
const dbConfig = require('./db/config')

const index = require('./routes/index')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())

// routes
app.use(index.routes(), index.allowedMethods())

mongoose.connect(dbConfig.db, {
  useNewUrlParser: true
})

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
