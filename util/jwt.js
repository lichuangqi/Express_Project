const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const { uuid } = require('../config/config.default')
const tojwt = promisify(jwt.sign)
const verify = promisify(jwt.verify)
//验证每个接口的token 写成中间件的形式
module.exports.verifyToken = async (req, res, next) => {
    //获取头信息里的Authorization信息
    var token = req.headers.authorization
    token = token ? token.split("Bearer ")[1] : null
    if (!token) {
        res.status(402).json({ error: "Please bring your token" })
    }
    try {
        let userinfo = await verify(token, uuid)
        next()
    } catch (error) {
        res.status('402').json({ error: "invalid token" })
    }
    next()
}
//生成token
module.exports.createToken = async userinfo => {
    const token = await tojwt({ userinfo }, uuid, { expiresIn: 60 * 60 * 24 })
    return token
}