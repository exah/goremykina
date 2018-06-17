const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')
const app = express()
const router = require('./router')

app.use(compression({ threshold: 0 }))
app.use(bodyParser.json())
app.use(router)

module.exports = app
