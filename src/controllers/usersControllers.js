const fs = require("fs");
const path = require("path");
const bcrypt = require ("bcrypt")
const {validationResult} = require('express-validator');

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
      /*let users = findAll();
      let ultimo = users.length - 1;

      const resultValidation = validationResult(req);
      if (resultValidation.errors.length > 0) {
        return res.render('register', {errors: resultValidation.mapped()});
        
      } else {
          let nuevoUser = {
            id: Number(users[ultimo].id + 1),
            firstName:req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            category: req.body.category,
            image: "../../public/img/"+req.file.filename
          }
        users.push(nuevoUser);
        writeJson(users);
        res.redirect('/products/list')
   }
   */
   },
   login: (req, res) =>{
     return res.render("login")
   },
   processLogin : (req, res) => {
    let users = findAll();
    const resultValidation = validationResult(req);
   
    for (let  i = 0; i < users.length ; i++){
      if (users[i].email== req.body.email){
        if (bcrypt.compareSync(req.body.password, users[i].password)){
          var usuarioALoguearse = users[i]
          break;
        }
      }
    }

    if (usuarioALoguearse== undefined){
      return res.render ("login", {errors: [
        {msg: "Credenciales invalidas"}]
       }
       )
    }
    req.session.usuarioLogueado =  usuarioALoguearse
   },
   profile : (req, res) => {
     let users = findAll
     res.render ("profile", {users:users})
   }
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