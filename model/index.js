const mongosse = require('mongoose');
const { mongopath } = require('../config/config.default')
async function main() {
    await mongosse.connect(mongopath)
}

main().then(res => {
    console.log('mongo connect successfully')
}).catch(err => {
    console.log(err);
    console.log('mongo connect failed')
})

module.exports = {
    User: mongosse.model('User', require('./userModel'))
}