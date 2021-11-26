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
  processLogin : async (req, res) => {

    let errores = validationResult(req);
    if(errores.isEmpty()){
      let userToLogin = await db.Usuarios.findOne({
        where: { email: req.body.email }
      });
        if(userToLogin) {
          if(userToLogin.password == req.body.password){
              req.session.userLogged = userToLogin;
              if(req.body.recordame) {
                res.cookie('usuarioId', userToLogin.id,{maxAge: 60000})
              }
            return res.redirect('/')
          }
          
        }
    } else {
      return res.render('login', {
        errors:errores.errors, 
        old: req.body
    });
    }

    
  },      
  profile: (req, res) => {
     res.render ("profile",{
      user:req.session.userLogged   
     })
  },
  logout: (req,res)=>{
    req.session.destory();
    return res.redirect('/')

  },
    
}

module.exports = usersControllers;