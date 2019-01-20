
const path = require("path")
/* 导出注册页面 */
//导出的是对象
exports.getRegisterPage = (req,res)=>{
    // 内部是对read.file的封装
    res.sendFile(path.join(__dirname,"../public/views/register.html"))
}