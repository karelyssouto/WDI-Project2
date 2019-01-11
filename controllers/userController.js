User = require('../models/User')

const userController = {
    landingPage: (req,res) => {
        res.render('user/landingPage')
    },
    index: (req,res) => {
        User.find({}).then(user =>{
            res.render('user/index', {user})
        })  
    },
    new: (req,res) =>{
        res.render('user/new')
    },
    create: (req,res)=>{
        User.create(req.body).then(newUser =>{
            newUser.save()
            res.redirect('/users')
        })
    },
    show: (req, res) => {
        const userId = req.params.userId
        User.findById(userId).then(userId => {
            res.render('user/userProfile', { userId })
        })
    },
    edit: (req,res) => {
        const userId = req.params.userId
        res.render('user/editInfo', {userId})
    },
    update: (req,res) =>{
        const userId= req.params.userId
        User.findByIdAndUpdate(userId, req.body,{new: true}).then(()=>{
            res.redirect(`/users/${userId}`)
        })
    },
    delete: (req,res) => {
        const userId = req.params.userId
        User.findByIdAndDelete(userId).then(()=>{
            res.redirect('/users')
        })
    },
    
}





module.exports = userController