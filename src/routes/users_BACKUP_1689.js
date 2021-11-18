var express = require('express');
var router = express.Router();
const multer = require ('multer');
const path = require('path');
const {check} = require('express-validator');
const authMiddleware = require ("../middelwares/authMiddleware")
const guestMiddleware = require ("../middelwares/guestMiddleware")

<<<<<<< HEAD

=======
>>>>>>> d0247557f188117d7c37271e49cba30d61e4464e


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
<<<<<<< HEAD
router.get ("/login", usersControllers.login)
=======
router.get ("/login", guestMiddleware, usersControllers.login)
>>>>>>> d0247557f188117d7c37271e49cba30d61e4464e
router.post ("/login ", validations, usersControllers.processLogin)
router.get("/profile", authMiddleware , usersControllers.profile)


module.exports = router;