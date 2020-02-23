const express = require('express')
const router = new express.Router()
const users_controller = require('../controllers/usersController')

router.post('/registration', users_controller.users_signup_post)

router.post('/login', users_controller.users_login_post)

module.exports = router