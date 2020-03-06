const Users = require('../model/Users')

exports.user_signup_post = async function(req, res) {
  const user = new Users(req.body)
  try {
    await user.save()
    const token = await user.generateAuthToken()
    res.status(201).send({ user, token })
  } catch (e) {
    res.status(500).send(e)
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

exports.user_remove_delete = async (req, res) => {
  try {
    await req.user.remove()
    res.send(req.user)
  } catch (e) {
    res.status(500).send()
  }
}

exports.user_profile_get = async (req, res) => {
  res.send(req.user)
}

exports.user_profile_patch = async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['userName', 'email', 'password', 'age', 'name']
  const isVaildOperation = updates.every((update) => allowedUpdates.includes(update))

  if (!isVaildOperation) {
    return res.status(400).send({ error: 'Invaild updates!' })
  }

  try {
    updates.forEach((update) => req.user[update] = req.body[update])
    await req.user.save()
    res.send(req.user)
  } catch (e) {
    res.status(400).send(e)
  }
}