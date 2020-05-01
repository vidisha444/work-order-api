var express = require('express');
var router = express.Router();
const registerController = require('../controllers/register')
const loginController = require('../controllers/login')

/* GET home page. */

router.get('/ping', function(req, res, next) {
  res.send({'Message': test})
})

router.post('/register', function (req, res) {
  registerController.register(req, res)
})

router.post('/login', function (req, res) {
  loginController.login(req, res)
})
module.exports = router;
