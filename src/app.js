//导包
const express = require('express')
const path =require("path")


//创建app
const app = express()


//处理请求
// app.get('/',(req,res)=>{
//     res.send('Hello World')
// })

//设置静态资源目录
app.use(express.static(path.join(__dirname,"public")))

//导入路由对象
const accoutnRouter =require(path.join(__dirname,"routers/accountRouter.js"))
app.use('/account',accoutnRouter)


//启动
app.listen(3000,'127.0.0.1',err=>{
    if(err){
        console.log(err)
    }


    console.log("start ok")
})