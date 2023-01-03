//路由级别的中间件
const express = require('express')
const router = express.Router()
const videoController = require('../controller/videoController')
router
  .get('/lists', videoController.list)
module.exports = router;