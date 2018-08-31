import express from 'express'
import { API_GET_PAGE } from '../constants'
import * as aboutData from '../data/about'

const router = express.Router()

router.use(API_GET_PAGE, (req, res, next) => {
  if (req.params.slug === aboutData.slug) {
    res.status(200).json({
      status: 200,
      message: 'ok',
      data: aboutData
    })

    return
  }

  res.status(404).json({
    status: 404,
    message: 'Page Not Found',
    data: null
  })
})

export default router
