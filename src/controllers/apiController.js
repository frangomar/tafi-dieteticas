const db = require('../database/models');
let apiController = {
listProducts : async (req, res) =>{
   let products =await db.Productos.findAll();
   let productsCount = await db.Productos.count();
   
   let productsJson = {
    meta:{
        status: 200,
        productsCount: productsCount,
        url: "/api/products",
        products: products,
    },
        }
       
       return res.json(productsJson);
     
},
showProducts : async (req, res) =>{
    let product = await db.Productos.findByPk(req.params.id)
    let showProductsJson = {
     meta:{
         status: 200,
         url: "/api/products/:id",
         product: product,
     },
         }
        
        return res.json(showProductsJson);
      
 },
 listUsers : async (req, res) =>{
    let users =await db.Usuarios.findAll();
    let usersCount = await db.Usuarios.count();
    
    let usersJson = {
     meta:{
         status: 200,
         usersCount: usersCount,
         url: "/api/users",
         users: users,
     },
         }
        
        return res.json(usersJson);
      
 },
 showUsers : async (req, res) =>{
     let user = await db.Usuarios.findByPk(req.params.id)
     let showUsersJson = {
      meta:{
          status: 200,
          url: "/api/users/:id",
         user: user,
      },
          }
         
         return res.json(showUsersJson);
       
  }
 
}

module.exports = apiController;