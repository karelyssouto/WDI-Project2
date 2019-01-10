const mongoose = require('../db/connection')
const Schema = mongoose.Schema


const Clothes = new Schema ({
    store: String,
    storeLink: String
})

module.exports = mongoose.model('Clothes', Clothes)