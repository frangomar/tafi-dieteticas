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
      
 }
 
}

module.exports = apiController;