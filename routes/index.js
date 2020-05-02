var express = require('express');
var router = express.Router();
const registerController = require('../controllers/register')
const loginController = require('../controllers/login')
const getUserController = require('../controllers/getAllUser')

/* GET home page. */
router.get('/ping', (req, res) => {
  res.status(200).send('checking......')
})

router.post('/register', function (req, res) {
  registerController.register(req, res)
})

router.get('/getAllUsers', function (req, res) {
  getUserController.getAllUser(req, res)
})

router.post('/login', function (req, res) {
  loginController.login(req, res)
})


module.exports = router;