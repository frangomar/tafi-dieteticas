var express = require('express');
var router = express.Router();
const multer = require ('multer');
const path = require('path');
const  usersControllers = require('../controllers/usersControllers');

const storage = multer.diskStorage({
   destination: (req, file, cb) =>{
      let folder = path.join (__dirname, '../../public/img');
      cb(null, folder);
   },
   filename: (req, file, cb) => {
      console.log(file)
      let imageName = 'user-' + Date.now() + path.extname(file.originalname);
      cb(null, imageName);
   }
})
const fileUpload = multer ({storage:storage});
//let fileUpload = multer ({storage});

router.get('/', usersControllers.list);
router.get('/create', usersControllers.create);
router.post('/create', fileUpload.single('image') , usersControllers.store);


module.exports = router;
