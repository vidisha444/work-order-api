var express = require('express');
var router = express.Router();
const registerController = require('../controllers/register')
const loginController = require('../controllers/login')
const getUserController = require('../controllers/getAllUser')
const getOrdersController = require('../controllers/getOrders')
const placeOrderController = require('../controllers/placeOrders')
const assignOrdersController = require('../controllers/assignOrders')
const assignRoleController = require('../controllers/assignRole')
const myWorkListController = require('../controllers/myWorkList')
const finishOrderController = require('../controllers/finishOrder')
const getAllEmpController = require('../controllers/getAllEmployee')

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

router.post('/placeOrder', function (req, res) {
  placeOrderController.placeOrders(req, res)
})
router.post('/getOrders', function (req, res) {
  getOrdersController.getOrders(req, res)
})

router.post('/assignOrders', function (req, res) {
  assignOrdersController.assignOrders(req, res)
})
router.post('/assignRole', function (req, res) {
  assignRoleController.assignRole(req, res)
})

router.post('/myWorkList', function (req, res) {
  myWorkListController.myWorkList(req, res)
})

router.post('/finishOrder', function (req, res) {
  finishOrderController.finishOrder(req, res)
})

router.get('/getAllEmp', function (req, res) {
  getAllEmpController.getAllEmployee(req, res)
})
module.exports = router;