function recordame(req, res, next)  {
  if (req.session.usuarioLogueado !="undefined" && req.session.userLogged.categoria_id == 2){
           return next()
       }
   return res.redirect("/")
}
module.exports = recordame