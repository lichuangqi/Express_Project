//路由级别的中间件
const express = require('express')
const router = express.Router()
//引入用户业务逻辑模块
const userController = require('../controller/userController')
const { body, validationResult } = require('express-validator')
const validator = require('../middleware/validator/userValidator')
router
  .post('/registers',
    validator.register,
    userController.register)
  .post('/logins',
    validator.login,
    userController.login)
  .get('/lists', userController.list)
  .delete('/', userController.delete)
module.exports = router;