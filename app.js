const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./router')
const app = express()
// 解析客户端请求的中间件
app.use(express.json())
app.use(express.urlencoded())
//跨域的中间件
app.use(cors())
//日志记录中间件   dev代表在开发模式下记录日志
app.use(morgan('dev'))
// 使用路由  v1 代表版本
app.use('/api/v1')
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
