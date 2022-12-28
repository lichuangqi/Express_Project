const mongosse = require('mongoose');
async function main() {
    await mongosse.connect('mongodb://localhost:27017/express-video')
}

main().then(res => {
    console.log('mongo connect successfully')
}).catch(err => {
    console.log(err);
    console.log('mongo connect failed')
})

module.exports = {
    User:mongosse.model('User',require('./userModel'))
}