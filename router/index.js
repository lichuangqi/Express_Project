//路由级别的中间件
const express = require('express')
const router = express.Router()
//加载不同的路由模块
router.use('/user',require('./user'))
router.use('/video',require('./video'))
module.exports = router;
