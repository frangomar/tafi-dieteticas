const { check } = require('express-validator');
const db = require('../database/models');
const path = require('path');

const productValidator = {
    product: [
        check('title').notEmpty().withMessage('Debes escribir un nombre.').isLength({ min: 5 }).withMessage("El nombre debe contener al menos 5 caracteres"),
        check('description').notEmpty().withMessage('Debes completar la descripcion.'),
        check('image').custom(function (value, { req }) {
            let allowedImages = ['.JPG', '.jpg', '.png', '.PNG', '.jpeg', '.JPEG', '.gif', '.GIF'];
            let imageType = path.extname(req.file.originalname);
            // console.log(imageType)
            return allowedImages.includes(imageType);
        }).withMessage("Los siguientes formatos son admitidos: jpg, png, jpeg, gif"),
        check('categoria').notEmpty().withMessage("Debe seleccionar una opcion"),
        check('price').notEmpty().withMessage('Ingrese un monto en Pesos Argentinos - Revisar dolar blue'),
    ]
}

module.exports = productValidator;