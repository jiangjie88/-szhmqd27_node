/* 注册登录 */

const express = require('express')
const path =require("path")

//创建路由对象
const accountRouter =express.Router()

//导入控制器模块
const accountController= require(path.join(__dirname,"../controllers/accountController.js"))

//MVC ,获取注册页面请求
accountRouter.get("/register",accountController.getRegisterPage)

//注册
accountRouter.post("/register",accountController.register)
//登录
accountRouter.get("/login",accountController.getLoginPage)
//获取验证码
accountRouter.get('/vcode',accountController.getVcodeImage)

//导出路由对象
module.exports = accountRouter