const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

//应用程序级中间件
// app.use((req,res,next)=>{

// })

//限定请求方法的中间件
// app.get('/user',(req,res,next)=>{

// })

app.get('/user',(req,res,next)=>{
  console.log(req.method)
  next()
},function(req,res,next){
  console.log('66666')
  next()
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
