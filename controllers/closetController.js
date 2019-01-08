const User = require('../models/User')
const Closet = require('../models/Closet')


const closetController = {
    index: (req,res) => {
        const userId = req.params.userId
        res.render('user/userProfile', {userId})
    },
    new: (req, res) => {
        const userId = req.params.userId
        res.render('closet/new', { userId })
    },
    create: (req,res) =>{
        const userId = req.params.userId
        User.findById(userId).then((userCloset) => {
            Closet.create(req.body)
        })
    },

}
module.exports = closetController