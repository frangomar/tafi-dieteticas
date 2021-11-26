const db = require('../database/models/')
let userLoggedMiddleware = async (req, res, next) => {
    res.locals.isLogged = false;
    
    
    if(req.session && req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }
    next()
}
module.exports = userLoggedMiddleware;