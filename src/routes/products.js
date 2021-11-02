const express = require('express');
const router = express.Router();
const multer = require ('multer');
const path = require ('path');
const frutosSecosController = require('../controllers/frutosSecosController');

const storage = multer.diskStorage({ 
    destination: (req, file, cb) =>{ 
       cb(null, '../../public/img'); 
    }, 
    filename: (req, file, cb) => { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  
    } 
});

let fileUpload = multer ({storage});

//rutas
router.get('/list', frutosSecosController.list);
router.get('/create', frutosSecosController.create);
router.post('/create', fileUpload.single('image'), frutosSecosController.store)
router.get('/detail/:id', frutosSecosController.detail)
router.get('/detail/:id/edit',frutosSecosController.edit )
router.post('/detail/:id/edit', frutosSecosController.update)
router.delete('/detail/:id/delete', frutosSecosController.destroy)
module.exports = router;