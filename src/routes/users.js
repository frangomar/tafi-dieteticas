var express = require('express');
var router = express.Router();
const  usersControllers = require('../controllers/usersControllers');


router.get('/', usersControllers.list);
router.get('/create', usersControllers.create);
router.post('/create', usersControllers.store);


module.exports = router;
