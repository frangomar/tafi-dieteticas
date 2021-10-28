const express = require('express');
const router = express.Router();
const frutosSecosController = require('../controllers/frutosSecosController');

//rutas
router.get('/list', frutosSecosController.list);
router.get('/create', frutosSecosController.create);
router.post('/create', frutosSecosController.store)
router.get('/detail/:id', frutosSecosController.detail)
router.get('/detail/:id/edit',frutosSecosController.edit )
router.post('/detail/:id', frutosSecosController.update)
module.exports = router;