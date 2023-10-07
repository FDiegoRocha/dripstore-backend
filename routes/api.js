const express = require('express');
const { listController } = require('../controllers/api/products.controllers');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('wellcome to the API');
});

router.get('/products', listController);

module.exports = router;
