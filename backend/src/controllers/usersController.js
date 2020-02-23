const Users = require('../model/Users')
const auth = require('../middleware/auth')

exports.user_signup_post = async function(req, res) {
  const user = new Users(req.body)

  try {
    await user.save()
    const token = await user.generateAuthToken()
    res.status(201).send({ user, token })
  } catch (e) {
    res.status(500).send()
  }
}

exports.user_login_post = async (req, res) => {
  try {
    const user = await Users.findByCredentials(req.body.password, req.body.email, req.body.userName)
    const token = await user.generateAuthToken()
    res.send({ user, token })
  } catch (e) {
    res.status(400).send()
  }
}

exports.user_logout_post = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token
    })
    await req.user.save()

    res.send()
  } catch (e) {
    res.status(500).send()
  }
}