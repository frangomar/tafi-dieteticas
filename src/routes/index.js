var express = require('express');
var router = express.Router();
const db =require('../database/models');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.Productos.findAll()
      .then(function(productos) {
        res.render('index', {productos:productos});

      })
  
});

module.exports = router;
