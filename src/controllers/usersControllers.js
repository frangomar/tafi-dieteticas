const fs = require("fs");
const path = require("path");

function findAll(){
      let usersJson= fs.readFileSync(path.join(__dirname, "../data/users.json"))
      let data = JSON.parse(usersJson)
      return data
    };
function writeJson(array){
      let arrayJson = JSON.stringify(array);
      return fs.writeFileSync(path.join(__dirname, "../data/users.json"), arrayJson);
    };

const usersControllers = {
    list: (req, res) => {
        let users = findAll ();
        res.render('adminUsers', {users});
    },
    create: (req, res) => {
        res.render('register')
    },
    store: (req, res) => {
    let users = findAll();
    let ultimo = users.length - 1;

    let nuevoUser = {
      id: Number(users[ultimo].id + 1),
      firstName:req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      category: req.body.category
    }

    users.push(nuevoUser);
    writeJson(users);
    res.redirect('/products/list')
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