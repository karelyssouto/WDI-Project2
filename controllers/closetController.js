const User = require('../models/User')
const Closet = require('../models/Closet')


const closetController = {
    index: (req,res) => {
        const userId = req.params.userId
        User.findById(userId).populate('closetCollection').then((userCloset) => {
            const category = userCloset.closetCollection
            console.log(category)
            res.render(`closet/index`, { category, userId })
        })
       
    },
    new: (req, res) => {
        const userId = req.params.userId
        console.log(req.params.userId)
        res.render('closet/new', { userId })
    },
    create: (req,res) =>{
        const userId = req.params.userId
        User.findById(userId)
        .then((user) => {
            Closet.create(req.body)
            .then((category)=>{
                console.log(category)
                user.closetCollection.push(category)
                user.save()
                res.redirect(`/users/${userId}/closets`)
            }) 
        })
    },
    

}
module.exports = closetController