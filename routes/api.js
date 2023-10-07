const express = require('express')
const { listController, createController, removeController } = require('../controllers/api/products.controllers')
const router = express.Router()

router.get('/', function (req, res, next) {
  res.send('wellcome to the API')
})

router.get('/products', listController)
router.post('/products', createController)
router.delete('/products', removeController)

module.exports = router
