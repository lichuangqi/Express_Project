const { User } = require('../model/index')
// user registration
exports.register = async (req, res) => {
    const userModel = new User(req.body)
    const dbBack = await userModel.save()
    user = dbBack.toJSON()
    delete user.password
    res.status(201).json({ user })
}

// user login
exports.login = async (req, res) => {
    // client data 验证
    // 链接数据库查询
    var dbback = await User.findOne(req.body)
    res.status(200).json(dbback)
}
exports.list = async (req, res) => {
    console.log(req.method)
    // JSON.parse('(')
    res.send('/user-list')
}

exports.delete = async (req, res) => {

}
