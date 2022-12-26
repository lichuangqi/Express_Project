const express = require('express')
const router = require('./router/index')
const routerVideo = require('./router/video')
const app = express()
// 路由前缀
app.use('/user',router)
app.use('/video',routerVideo)
// 当路由都匹配不到，中间件处理404错误
app.use((req,res,next)=>{
  res.status(404).send('404 Not Found.')
})
// 四个参数的中间件叫错误处理中间件
app.use((err,req,res,next)=>{
  console.log(err)
  res.status(500).send('service error.')
})
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
