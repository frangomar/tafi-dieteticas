const {
   check
} = require('express-validator')
const db = require('../database/models');
const validations = {
   register: [
      check('firstName').notEmpty().withMessage('Tienes que escribir tu Nombre'),//valida nombre
      check('lastName').notEmpty().withMessage('Tienes que escribir tu Apellido'), //valida apellido
      check('email').isEmail().withMessage('Debes escribir un formato de correo valido'), //valida email
      check("password").notEmpty().withMessage("Tienes que completar tu Password").bail() //valida contraseña
      .isLength({min:3}).withMessage("El Password debe tener al menos 8 caracteres"),
      check('gender').notEmpty().withMessage('Tienes que escribir el genero con el que te identificas'), //valida genero
      /*check('image').custom((value, { req }) => { //valida foto de perfil
         return req.file;
      }).withMessage('Debes subir una imagen de perfil').bail()
      .custom(function(value, {req}){ //valida formato de imagen perfil 
         const acceptedExtensions = ['.jpg', '.png', '.gif','.JPG', '.PNG', '.GIF']
         const fileExtension = path.extname(req.file.originalname);
         return acceptedExtensions.includes(fileExtension);
      }).withMessage('Debe subir una imagen valida')*/
   ],
   login: [
      check('email').notEmpty().withMessage('Tienes que escribir un Correo Electronico').bail()
      .isEmail().withMessage('Debes escribir un formato de correo valido'),
      check('password').notEmpty().withMessage('Tienes que escribir una Contraseña')
   ]
}
module.exports = validations;