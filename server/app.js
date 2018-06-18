const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')
const router = require('./router')
const app = express()

app.use(compression({ threshold: 0 }))
app.use(bodyParser.json())
app.use(router)

module.exports = app
