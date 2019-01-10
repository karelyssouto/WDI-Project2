const User = require('../models/User')
const Closet = require('../models/Closet')
const Clothes = require('../models/Clothes')

const clothesController = {
    index: (req,res) =>{
        const userId = req.params.userId
        const clothes = req.params.id
        Clothes.find({}).then((userCloset) => {
            const category = userCloset.closetCollection
            res.render(`clothes/index`, { category, userId, clothes })

            })
        
    
    },
}


module.exports = clothesController