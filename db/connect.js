const mongoose = require('mongoose')

const connectDB = (url) => {
  console.log('connected to the database successfully!')
  return mongoose.connect(url)
}

module.exports = connectDB
