const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    name: String,
    email: String,
    img: String,
    closetCollection: [{
        type: Schema.Types.ObjectId,
        ref: 'Closet'
    }]

})

module.exports = mongoose.model('User', User)