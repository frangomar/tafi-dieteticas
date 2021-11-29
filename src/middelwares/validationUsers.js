const {
   check
} = require('express-validator')
const db = require('../database/models');
const validations = {
   register: [
      check('firstName').notEmpty().withMessage('Tienes que escribir tu Nombre'),
      check('lastName').notEmpty().withMessage('Tienes que escribir tu Apellido'),
      check('email').notEmpty().withMessage('Tienes que escribir un Correo Electronico').bail()
      .isEmail().withMessage('Debes escribir un formato de correo valido').custom(function (value) {
         return db.Usuarios.findOne({
            where: {
               email: value
            }
         }).then(user => {
            if (user) {
               return Promise.reject("Este e-mail se encuentra en uso")
            }
         })
      }),
      check('password').isLength({
         min: 8,
         max: 12
      }).withMessage('Ingresa una contraseña de minimo 8 caracteres y maximo 12 caracteres').notEmpty(),
      check('gender').notEmpty().withMessage('Tienes que escribir el genero con el que te identificas'),
      check('image').custom((value, {
         req
      }) => {
         let file = req.file;
         let acceptedExtensions = ['.jpg', '.png', '.gif']
         let fileExtension = path.extname(file.originalname)
         if (!file) {
            throw new Error('Tienes que subir una imagen')
         } else {
            if (!acceptedExtensions.includes(fileExtension)) {
               throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`)
            }
         }
         return true;
      })
   ],
   login: [
      check('email').notEmpty().withMessage('Tienes que escribir un Correo Electronico').bail()
      .isEmail().withMessage('Debes escribir un formato de correo valido'),
      check('password').notEmpty().withMessage('Tienes que escribir una Contraseña')
   ]
}
module.exports = validations;