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
    let ultimo = frutos.length - 1;

    let nuevoUser = {
      id: Number(users[ultimo].id + 1),
      firstName:req.body.name,
      lastName: req.body.lastName,
      email: req.body.email ,
      password: req.body.password,
      category: req.body.category
    }
    users.push(nuevoUser);
    writeJson(users);
    res.redirect('/adminUsers')
    }
}
module.exports = usersControllers;