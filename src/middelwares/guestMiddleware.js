function guestMiddleware (req, res, next) {
if (req.session.usuarioLogueado == undefined){
    next()
} else {
res.redirect ("/users/perfil")

}
}
module.exports = guestMiddleware;