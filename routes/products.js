const getProducts = require("../controllers/products/index")

const express = require('express')
// const auth = require('../middlewares/auth')
var router = express.Router();

router.get('/', getProducts)

module.exports = router