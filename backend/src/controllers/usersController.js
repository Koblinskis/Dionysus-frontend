const Users = require('../model/Users')
const auth = require('../middleware/auth')

exports.users_signup_post = async function(req, res) {
  const user = new Users(req.body)

  try {
    await user.save()
    const token = await user.generateAuthToken()
    res.status(201).send({ user, token })
  } catch (e) {
    res.status(500).send()
  }
}

exports.users_login_post = async (req, res) => {
  try {
    const user = await Users.findByCredentials(req.body.password, req.body.email, req.body.userName)
    const token = await user.generateAuthToken()
    res.send({ user, token })
  } catch (e) {
    res.status(400).send()
  }
}