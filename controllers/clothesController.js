
Clothes = require('../models/Clothes')
User = require('../models/User')
Closet = require('../models/Closet')

const clothesController = {
    new: (req, res) => {
        const userId = req.params.userId
        const closetid = req.params.closetid
        res.render('clothes/new', { userId, closetid })
    },
    create: (req,res) => {
        const userId = req.params.userId
        const closetid = req.params.closetid
        Closet.findById(closetid)
        .then((closet)=>{
            Clothes.create(req.body)
                .then((info)=>{
                    closet.clothesInfo.push(info)
                    closet.save()
                    res.redirect(`/users/${userId}/closets/${closetid}`)
                })
        })
    },
    delete: (req,res) =>{
        const userId = req.params.userId
        const clothesId = req.params.id
        console.log(clothesId)
        Clothes.findByIdAndDelete(clothesId).then(()=>{
            res.redirect(`/users/${userId}/closets`)
        })
    }
}

module.exports = clothesController