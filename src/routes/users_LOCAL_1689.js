var express = require('express');
var router = express.Router();
const multer = require ('multer');
const path = require('path');
const {check} = require('express-validator');




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
const  usersControllers = require('../controllers/usersControllers');
const validations = require('../middelwares/validationUsers')

router.get('/', usersControllers.list);
router.get('/create', usersControllers.create);
router.post('/create', validations, fileUpload.single('image'), usersControllers.store);
router.get ("/login", usersControllers.login)
router.post ("/login ", validations, usersControllers.processLogin)


module.exports = router;