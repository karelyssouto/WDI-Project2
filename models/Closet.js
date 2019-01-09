const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Closet = new Schema({
    name: String,
    img: String,
    clothes: []
})

module.exports = mongoose.model('Closet', Closet)