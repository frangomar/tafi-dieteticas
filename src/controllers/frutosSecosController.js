const fs = require("fs");
const path = require("path");
const { Association } = require("sequelize/types");
const db =require('../database/models');


function findAll(){
      let productsJson= fs.readFileSync(path.join(__dirname, "../data/products.json"))
      let data = JSON.parse(productsJson)
      return data
    };
function writeJson(array){
      let arrayJson = JSON.stringify(array);
      return fs.writeFileSync(path.join(__dirname, "../data/products.json"), arrayJson);
    };

const frutosSecosController = {
    list: (req, res) => {
      db.Productos.findAll({
        include: [{association: 'categorias'}]
      })
      .then(function(productos) {
        res.render('productos', {productos:productos});

      })
        
    },
    create: (req, res) => {
      let frutos = findAll();
      res.render('formProduct');
    },
    store: (req,res) => {
      db.Productos.create({
        title:req.body.title,
        description:req.body.description,
        price:req.body.price,
        image:"../../public/img/"+req.file.filename,
        category: req.body.category,

      });
      res.redirect('productos')
      /*let frutos = findAll();
      let ultimo = frutos.length - 1;
      if (req.file){
    
      let nuevoProducto = {
        id: Number(frutos[ultimo].id + 1),
        name:req.body.title ,
        description: req.body.description ,
        price: req.body.price,
        category: req.body.category,
        image: "../../public/img/"+req.file.filename
      }
      frutos.push(nuevoProducto);
      writeJson(frutos);
      res.redirect('/products/list')
    }
    else {
      

      let nuevoProducto = {
        id: Number(frutos[ultimo].id + 1),
        name:req.body.name ,
        description: req.body.description ,
        price: req.body.price,
        category: req.body.category,
        image: req.body.image,
        
      } 
      frutos.push(nuevoProducto);
      writeJson(frutos);
      res.redirect('/products/list')
    }*/
    
    },
    detail: (req,res) => {
      db.Productos.findByPk(rq.params.id)
      .then(function(producto) {
        res.render('detalleProducto', {producto:producto})
      })
      
    },
    edit: (req,res) => {
      db.Productos.findByPk(req.params.id)
      .then(function(producto) {
        res.render("detalleEditProducto", {producto:producto});
      })
      /*let frutos = findAll();
        
        let frutosEditar = frutos.find(function(fruto){
            return fruto.id == req.params.id
        })
        res.render("detalleEditProducto", {fruto: frutosEditar})*/
    },
    update: (req,res) => {
      db.Productos.update({
        title:req.body.title,
        description:req.body.description,
        price:req.body.price,
        image:"../../public/img/"+req.file.filename,
        category: req.body.category,

      }, {
        where: {
          id: req.params.id
        }
      })
      res.redirect('/products/detail/'+req.params.id)
        /*let frutos = findAll();
    
        let frutosSecosActualizado = frutos.map(fruto=>{
          if(fruto.id == req.params.id){
            fruto.name = req.body.name
            fruto.price = req.body.price,
            fruto.category = req.body.category,
            fruto.description = req.body.description
          }
          return fruto;
        })
        writeJson(frutos);
        res.redirect('/products/detail/'+req.params.id)*/
    },
    destroy: (req, res) => {
      db.Productos.destroy({
        where: {
          id: req.params.id
        }
      })
      res.redirect ('/products/list');
      /*let frutos = findAll ();

      let nuevoArray = frutos.filter (function (fruto){
        return fruto.id != req.params.id;
      });
      writeJson(nuevoArray);
      res.redirect ('/products/list')
    }*/
  }
};
module.exports = frutosSecosController;