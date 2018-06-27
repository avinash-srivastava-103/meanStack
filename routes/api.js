
// Dependencies
var express = require('express');
var router = express.Router();
var app = express();

//Product
var Product = require('../models/product');
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');

// Return router
module.exports = router;
