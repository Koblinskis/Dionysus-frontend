const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    validate(value) {
        if (!validator.isEmail(value)) {
            throw new Error('Email is invalid')
        }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6
  },
  age: {
    type: Number,
    default: 0
  },
  name: {
    type: String,
    default: 'Anonymous'
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }],
})

userSchema.methods.generateAuthToken = async function () {
  const user = this
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET)
  user.tokens = user.tokens.concat({ token })
  await user.save()

  return token
}

userSchema.statics.findByCredentials = async (password, email, userName) => {
  let user = await Users.findOne({ email })
  
  if(!user) {
    user = await Users.findOne({ userName })
    if(!user) {
      throw new Error('Unable to login')
    }
  }
  const isMatch = await bcrypt.compare(password, user.password)

  if(!isMatch) {
    throw new Error('Unable to  login')
  }

  return user
}

userSchema.pre('save', async function (next) {
  const user = this

  if(user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
  }

  next()
})

const Users = mongoose.model('Users', userSchema)

module.exports = Users