const { body, validationResult } = require('express-validator')
const validate = require('./errorBack')
const { User } = require('../../model/index')
module.exports.register = validate([
  // 数据校验 
  body('username')
    .notEmpty().withMessage('username cannot be empty').bail()
    .isLength({ min: 3 }).withMessage('username length cannot smaller than 3').bail(),
  body('email')
    .notEmpty().withMessage('email cannot be empty').bail()
    .isEmail().withMessage('email context is incorrect').bail()
    .custom(async val => {
      const emailValidate = await User.findOne({ email: val })
      if (emailValidate) {
        return Promise.reject('email is already regirstered')
      }
    }),
  body('phone')
    .notEmpty().withMessage('phone number cannot be empty').bail()
    .custom(async val => {
      const phoneValidate = await User.findOne({ phone: val })
      if (phoneValidate) {
        return Promise.reject('phone number is already regirstered')
      }
    })
])

module.exports.login = validate([
  body('email')
    .notEmpty().withMessage('email cannot be empty').bail()
    .isEmail().withMessage('email context is incorrect').bail(),
  body('password')
    .notEmpty().withMessage('password cannot be empty').bail()
])