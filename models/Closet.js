const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Closet = new Schema({
    img: String,
    clothesInfo: [{
        type: Schema.Types.ObjectId,
        ref: 'Clothes'
    }]
})

module.exports = mongoose.model('Closet', Closet)