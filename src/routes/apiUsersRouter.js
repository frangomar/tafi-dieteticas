var express = require('express');
var router = express.Router();
const db = require('../database/models');
const apiUsersController = require('../controllers/apiUsersControllers');

router.get('/users', apiUsersController.listUsers);
router.get('/users/:id', apiUsersController.showUsers);
module.exports=router;