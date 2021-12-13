var express = require('express');
var router = express.Router();
const db = require('../database/models');
const apiController = require("../controllers/apiController.js");

router.get('/products', apiController.listProducts);
router.get('/products/:id', apiController.showProducts);

router.get('/users', apiController.listUsers);
router.get('/users/:id', apiController.showUsers);

module.exports=router
