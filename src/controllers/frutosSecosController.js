const fs = require("fs");
const path = require("path");
//const { Association } = require("sequelize/types");
const db = require('../database/models');
const {
  validationResult
} = require('express-validator');
const { Op } = require("sequelize");
const frutosSecosController = {
  //metodo para mostrar todos los productos
  list: (req, res) => {
    db.Productos.findAll()
      .then(function (productos) {
        res.render('productos', {
          productos: productos
        });
      })
  },
  //metodo para renderizar vista formulario de registro de producto
  create:(req, res) => {
    db.Categorias.findAll()
    .then( function (categorias){
      res.render('formProduct', {
      categorias: categorias
    })})
    
  },
  //metodo de procesamiento y almacenado de nuevo producto
  store: async function (req, res) {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("register", {
        errors: errors.errors,
        oldData: req.body,
      })
    } else {
      await db.Productos.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req.file ? req.file.filename : "productDefault.png",
        category_id: req.body.categoria,
      });
      res.redirect("/products/list")
    }
  },
  //metodo para renderizar un producto en particular de forma detallada
  detail: (req, res) => {
    db.Productos.findByPk(req.params.id)
      .then(function (producto) {
        res.render('detalleProducto', {
          producto: producto
        })
      })
  },
  //metodo para renderizar vista editar producto
  edit: (req, res) => {
    db.Productos.findByPk(req.params.id)
      .then(function (producto) {
        res.render("detalleEditProducto", {
          producto: producto
        });
      })
  },
  //metodo para procesar edicion de producto
  update: (req, res) => {
    db.Productos.update({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      image: req.file.filename,
      category: req.body.category,
    }, {
      where: {
        id: req.params.id
      }
    })
    res.redirect('/products/detail/' + req.params.id)
  },
  //metodo para eliminar producto
  destroy: (req, res) => {
    db.Productos.destroy({
      where: {
        id: req.params.id
      }
    })
    res.redirect('/products/list');
  },
  //metodo para buscar producto por la barra de busqueda
  search : async (req, res) => {
       
    db.Productos.findAll({

        where: {
            title: { [Op.like]: '%' + req.query.search + '%' }
            
        }
    })
 
    .then(products=>{
        res.render("producto",{products})
    })
    .catch(err=>{res.send(err)})
}
};

module.exports = frutosSecosController;