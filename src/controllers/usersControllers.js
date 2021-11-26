const fs = require("fs");
const path = require("path");

const {validationResult} = require('express-validator');
const db =require('../database/models');
const users = require ("../database/models/Usuario")

const usersControllers = {
  list: (req, res) => {
    db.Usuarios.findAll()
    .then(function(usuarios) {
      res.render('adminUsers', {usuarios:usuarios});

    })
      
  },
    create: async (req, res) => {
     res.render ("register")
      
    },
    
    store: async function(req, res){
      
      const errores = validationResult(req);
        /*
        if(!errores.isEmpty()){
              return res.render("register", {
                  errores: errores.errors,
                  oldData: req.body,
                 
              })
      
          }*/
          
      await db.Usuarios.create({
        firstName:req.body.firstName,
        lastname:req.body.lastName,
        email:req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        image: req.file.filename,
        access_id: "1",
      })

    res.redirect("/users/login")
  },
    
   login: (req, res) =>{
     return res.render("login")
   },
   processLogin : (req, res) => {
    
    const resultValidation = validationResult(req);
   
    for (let  i = 0; i < users.length ; i++){
      if (users[i].email== req.body.email){
        
          var usuarioALoguearse = users[i]
          break;
       
      }
    }

    if (usuarioALoguearse== undefined){
      return res.render ("login", {errors: [
        {msg: "Credenciales invalidas"}]
       }
       )
    }
    req.session.usuarioALoguearse =  usuarioLogueado
    if (req.body.recordame != undefined){
      res.cookie ("recordame", usuarioLogueado.email, {maxAge: 600000})
    }
   },
   profile : (req, res) => {
      db.Usuarios.findByPk(req.params.id)
      .then(function(usuario) {
        res.render('adminUsers', {usuario:usuario})
   })
  },
    /*edit: (req,res) => {
        let users = findAll();
          
          let usersEditar = users.find(function(user){
              return user.id == req.params.id
          })
          res.render("detalleEditProducto", {user: frutosEditar})
      },
      update: (req,res) => {
          let users = findAll();
      
          let usersSecosActualizado = users.map(user=>{
            if(user.id == req.params.id){
              user.name = req.body.name
              user.price = req.body.price,
              user.category = req.body.category,
              user.description = req.body.description
            }
            return user;
          })
          writeJson(users);
          res.redirect('/products/detail/'+req.params.id)
      },
      destroy: (req, res) => {
        let users = findAll ();
  
        let nuevoArray = users.filter (function (user){
          return user.id != req.params.id;
        });
        writeJson(nuevoArray);
        res.redirect ('/products/list')
      }*/
}
module.exports = usersControllers;