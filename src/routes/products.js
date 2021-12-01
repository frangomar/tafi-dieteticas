const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const frutosSecosController = require('../controllers/frutosSecosController');
//const authMiddleware = require ("../middelwares/authMiddleware")
const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      let folder = path.join(__dirname, '../../public/img');
      cb(null, folder);
   },
   filename: (req, file, cb) => {
      console.log(file)
      let imageName = Date.now() + path.extname(file.originalname);
      cb(null, imageName);
   }
})

let fileUpload = multer({
   storage
});

//listado de productos
router.get('/list', frutosSecosController.list);

//vista de formulario y procesamiento de creacion de nuevo producto
router.get('/create', frutosSecosController.create);
router.post('/create', fileUpload.single('image'), frutosSecosController.store)

//detalle de producto
router.get('/detail/:id', frutosSecosController.detail)

//vista y procesamiento de edicion de producto
router.get('/detail/:id/edit', frutosSecosController.edit)
router.post('/detail/:id/edit', fileUpload.single('image'), frutosSecosController.update)

//procesamiento de borrado de producto
router.delete('/detail/:id/delete', frutosSecosController.destroy)

//busqueda de producto por barra
router.get('/search', frutosSecosController.search)
module.exports = router;