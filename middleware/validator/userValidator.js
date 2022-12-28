const {body, validationResult} = require('express-validator')
const validate = require('./errorBack')
module.exports.register = validate([
    // 数据校验 
  body('username')
  .notEmpty().withMessage('username cannot be empty').bail()
  .isLength({min:3}).withMessage('username length cannot smaller than 3'), 
  body('email')
    .notEmpty()
    .isEmail()
])