const express = require('express')
const { list, create, remove, show, uptade } = require('../controllers/api/products.controllers')
const router = express.Router()

router.get('/', function (req, res, next) {
  res.send('Welcome to the API')
})

router.get('/products', list)
router.get('/products/:id', show)
router.put('/products/:id', uptade)
router.post('/products', create)
router.delete('/products', remove)

module.exports = router
