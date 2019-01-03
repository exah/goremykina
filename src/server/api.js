import express from 'express'
import { API_GET_PAGE, API_GET_PICTURES } from '../constants'
import * as aboutData from '../data/about'
import * as picturesData from '../data/pictures'

const router = express.Router()

router.get(API_GET_PAGE, (req, res) => {
  const { slug, lang } = req.params

  if (slug === aboutData.slug) {
    res.status(200).json({
      status: 200,
      message: 'ok',
      data: {
        photo: aboutData.photo,
        content: aboutData.content[lang]
      }
    })

    return
  }

  res.status(404).json({
    status: 404,
    message: 'Page Not Found',
    data: null
  })
})

router.get(API_GET_PICTURES, (req, res) => {
  const { lang } = req.params

  res.status(200).json({
    status: 200,
    message: 'ok',
    data: picturesData.pictures.map(({ locales, ...data }) => ({
      ...data,
      ...locales[lang]
    }))
  })
})

export default router
