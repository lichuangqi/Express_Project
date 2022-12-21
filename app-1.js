const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

// function logs(req){
//   console.log(`${req.method},${req.url},${Date.now()}`)
// }
//中间件 next是中间件要执行下一步的方式，注意位置，要执行的内容一定要在next下面，否则会执行不成功
app.use((req,res,next)=>{
  console.log(`${req.method},${req.url},${Date.now()}`)
  next();
})
app.get('/',(req,res)=>{
  res.send('/index')
})
app.get('/register',(req,res)=>{
  res.send('/register')
})
app.get('/login',(req,res)=>{
  res.send('/login')
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})