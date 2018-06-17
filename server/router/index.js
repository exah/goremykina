const { isDev } = require('config')
const express = require('express')
const router = express.Router()

router.use(require('./static'))
router.use(require(isDev ? './dev' : './prod'))

module.exports = router
