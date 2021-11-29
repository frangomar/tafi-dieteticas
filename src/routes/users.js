const express = require('express');
const router = express.Router();
const multer = require ('multer');
const path = require('path');
const {check} = require('express-validator');
const authMiddleware = require ("../middelwares/authMiddleware")
const guestMiddleware = require ("../middelwares/guestMiddleware")
const  usersControllers = require('../controllers/usersControllers');
const validations = require('../middelwares/validationUsers')


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

//vista para admin
router.get('/list', usersControllers.list);

//vista y creacion de usuario
router.get('/create', usersControllers.create);
router.post('/create',guestMiddleware, fileUpload.single('image'), validations.register, usersControllers.store);

//vista y proceso de login y logout
router.get ("/login", guestMiddleware, usersControllers.login);
router.post ("/login", validations.login, usersControllers.processLogin);
//router.get ("/profile", guestMiddleware, usersControllers.logout);

//vista perfil
router.get("/profile" , authMiddleware, usersControllers.profile);



module.exports = router;