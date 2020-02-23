const express = require('express')
const router = new express.Router()
const users_controller = require('../controllers/usersController')
const auth = require('../middleware/auth')

router.post('/registration', users_controller.user_signup_post)

router.post('/login', users_controller.user_login_post)

router.post('/logout', auth, users_controller.user_logout_post)

router.get('/profile', auth, users_controller.user_profile_get)

router.patch('/profile', auth, users_controller.user_profile_patch)

router.delete('/settings/remove_user', auth, users_controller.user_remove_delete)

module.exports = router