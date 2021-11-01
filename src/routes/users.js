var express = require('express');
var router = express.Router();
const multer = require ('multer');
const path = require('path');
const  usersControllers = require('../controllers/usersControllers');

const storage = multer.diskStorage({ 
  destination: (req, file, cb) =>{ 
     cb(null, '../public/img'); 
  }, 
  filename: (req, file, cb) => { 
     cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
});

let fileUpload = multer ({storage});

router.get('/', usersControllers.list);
router.get('/create', usersControllers.create);
router.post('/create', fileUpload.single('image') , usersControllers.store);


module.exports = router;
