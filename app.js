const express = require('express')
const router = require('./router/index')
const app = express()
// 路由前缀
app.use('/user',router)
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
