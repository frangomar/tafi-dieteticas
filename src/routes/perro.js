const productController = require('../controllers/productsController')
const express = require('express');
const router = express.Router();


router.get('/', productController.lista);
//router.get()
//router.get()
//router.get()
//router.get()
//router.get()