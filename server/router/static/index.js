const { paths, isDev } = require('config')
const express = require('express')
const ms = require('ms')
const router = express.Router()

router.use(express.static(paths.public, { maxAge: isDev ? 0 : ms('7 days') }))

module.exports = router
