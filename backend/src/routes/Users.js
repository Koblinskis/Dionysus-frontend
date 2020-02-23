const express = require('express')
const router = new express.Router()
const users_controller = require('../controllers/usersController')
const auth = require('../middleware/auth')

router.post('/registration', users_controller.user_signup_post)

router.post('/login', users_controller.user_login_post)

router.post('/logout', auth, users_controller.user_logout_post)

module.exports = router