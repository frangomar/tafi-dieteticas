function recordameMiddleware (req, res, next) {
    if (req.session.usuarioLogueado == undefined && req.cookies.recordame != undefined){
        next()
        db.Usuario.findAll()
      .then()
    const resultValidation = validationResult(req);
   
    for (let  i = 0; i < users.length ; i++){
      if (users[i].email== req.cookies.recordame){
          usuarioALoguearse = users [i];

      
      }
    }
    req.session.usuarioLogueado =  usuarioALoguearse
    
    } 
    }
    module.exports = recordameMiddleware;