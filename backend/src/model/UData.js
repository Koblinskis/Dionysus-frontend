const mongoose = require('mongoose')

const uDataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  }
})

const UData = mongoose.model('Udata', uDataSchema)

module.exports = UData