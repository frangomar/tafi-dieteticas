const {check} = require('express-validator')

const validations = [    
    check('name').notEmpty().withMessage('Tienes que escribir tu Nombre'),
    check('lastName').notEmpty().withMessage('Tienes que escribir tu Apellido'),
    check('email').notEmpty().withMessage('Tienes que escribir un Correo Electronico').bail()
    .isEmail().withMessage('Debes escribir un formato de correo valido'),
    check('password').notEmpty().withMessage('Tienes que escribir una Contraseña'),
    check('image').custom((value, {req}) => {
       let file =req.file;
       let acceptedExtensions = ['.jpg', '.png', '.gif']
       let fileExtension = path.extname(file.originalname)
       if (!file) {
          throw new Error('Tienes que subir una imagen')
       } else {
          if (acceptedExtensions.includes()) {
             throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`)
          }
       }
       
       return true;
    })
 ]
module.exports = validations;