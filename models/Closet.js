const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Closet = new Schema({
    name: String,
    image: String,
    clothes: []
})

module.exports = mongoose.model('Closet', Closet)