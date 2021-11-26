var express = require('express');
var router = express.Router();
const multer = require ('multer');
const path = require('path');
const {check} = require('express-validator');
const authMiddleware = require ("../middelwares/authMiddleware")
const guestMiddleware = require ("../middelwares/guestMiddleware")



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
router.post('/create', fileUpload.single('image'), validations, usersControllers.store);
router.post ("/login",validations, usersControllers.processLogin);
router.get ("/login", guestMiddleware, usersControllers.login);
router.get("/profile", authMiddleware , usersControllers.profile);
router.get ("/list", usersControllers.list);


module.exports = router;