import express from 'express'
import { API_GET_PAGE } from '../constants'
import * as aboutData from '../data/about'

const router = express.Router()

router.use(API_GET_PAGE, (req, res, next) => {
  if (req.params.slug === aboutData.slug) {
    res.json(aboutData)

    return
  }

  next()
})

export default router
