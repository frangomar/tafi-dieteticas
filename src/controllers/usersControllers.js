const fs = require("fs");
const path = require("path");
const bcryptjs = require ("bcryptjs")
const {validationResult} = require('express-validator');
const db =require('../database/models');
/*function findAll(){
      let usersJson= fs.readFileSync(path.join(__dirname, "../data/users.json"))
      let data = JSON.parse(usersJson)
      return data
    };*/
/*function writeJson(array){
      let arrayJson = JSON.stringify(array);
      return fs.writeFileSync(path.join(__dirname, "../data/users.json"), arrayJson);
    };*/

const usersControllers = {
    list: (req, res) => {
      db.Usuarios.findAll()
      .then(res.render('adminUsers', {users}))
       /* let users = findAll ();
        res.render('adminUsers', {users});*/
    },
    create: (req, res) => {
        res.render('register')
    },
    store: (req, res) => {
      const resultValidation = validationResult(req);
      if (resultValidation.errors.length > 0) {
        return res.render('register', {errors: resultValidation.mapped()});
        
      }else {
      db.Usuarios.create({
        firstName:req.body.firstname,
        lastName:req.body.lastName,
        email:req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        image:"../../public/img/"+req.file.filename,
        access_id: req.body.access,

      });
      res.redirect('productos')
    } 
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