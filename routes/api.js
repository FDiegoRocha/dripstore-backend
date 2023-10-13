const express = require('express')
const { list, create, remove, show, update } = require('../controllers/api/products.controllers')
const router = express.Router()

router.get('/', function (req, res, next) {
  res.send('Welcome to the API')
})

router.get('/products', list)
router.get('/products/:id', show)
router.put('/products/:id', update)
router.post('/products', create)
router.delete('/products/:id', remove)

module.exports = router
