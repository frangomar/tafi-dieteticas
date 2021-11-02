var express = require('express');
var router = express.Router();
const multer = require ('multer');
const path = require('path');
const  usersControllers = require('../controllers/usersControllers');

let storage = multer.diskStorage({
   destination: (req, res, cb) =>{
      let folder = path.join (__dirname, '../../public/img');
      cb(null, folder);
   },
   filename: (req, res, cb) => {
      let imageName = Date.now() + path.extname(file.originalname);
      cb(null, imageName);
   }
})
let fileUpload = multer ({storage:storage});
//let fileUpload = multer ({storage});

router.get('/', usersControllers.list);
router.get('/create', usersControllers.create);
router.post('/create', fileUpload.single('image') , usersControllers.store);


module.exports = router;
