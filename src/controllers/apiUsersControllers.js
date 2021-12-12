const db = require('../database/models');
let apiUsersController = {
listUsers : async (req, res) =>{
   let users =await db.Users.findAll();
   let usersCount = await db.Users.count();
   
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
    let user = await db.Users.findByPk(req.params.id)
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

module.exports = apiUsersController;