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
            res.redirect('/home')
        })
    show: (req,res) => {
        const userId = req.params.index
        User.findById(userId).then(userId =>{
            res.render('userProfile', {userId})
        })
    }
        
    }



}

module.exports = userController