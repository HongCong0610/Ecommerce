const express = require('express');

const router = express.Router();

const controller = require('../controllers/product');

router.get('/', controller.index);

router.post('/', controller.createProduct);

module.exports = router;