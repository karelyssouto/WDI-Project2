const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    name: String,
    email: String,
    closetCollection: []

})

module.exports = mongoose.model('User', User)