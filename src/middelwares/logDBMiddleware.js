const fs = require('fs');

const logDBMiddleware = (req, res, next) => {
    fs.appendFileSync('logDB.txt', 'Se creo un registro al ingreso en la pagina ' + req.url);

    next();
};
module.exports = logDBMiddleware;