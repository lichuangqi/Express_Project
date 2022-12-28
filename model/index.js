const mongosse = require('mongoose');
async function main() {
    await mongosse.connect('mongodb://localhost:27017/mytest')
}

main().then(res => {
    console.log('mongo connect successfully')
}).catch(err => {
    console.log(err);
    console.log('mongo connect failed')
})

//利用mongoose创建数据库集合
const user = new mongosse.Schema({
    username: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
})

// 操作模型   第一个参数是集合名字
const userModel = mongosse.model('User',user)
const u = new userModel({username:'lisi',age:18})
u.save()