// const User = require('../models/User')
// const Closet = require('../models/Closet')
// const Clothes = require('../models/Clothes')

// const clothesController = {
//     index: (req,res) =>{
//         const userId = req.params.userId
//         // const closetId = req.params.cl
//         const clothesId = req.params.id
//         // console.log(clothesId)
//         Closet.findById(clothesId).populate('clothesInfo').then((clothes) => {
//             const clothesI = clothes.clothesInfo
//             res.render(`clothes/index`, { userId, clothesId, clothesI })

//             })
//     },
//     new: (req, res) => {
//         const userId = req.params.userId
//         const clothesId = req.params.id
//         res.render('clothes/new', { userId, clothesId })
//     },
//     create: (req,res) => {
//         const userId = req.params.userId
//         const clothesId = req.params.id
//         Closet.findById(clothesId)
//         .then((closet)=>{
//             Clothes.create(req.body)
//                 .then((clothesI)=>{
//                     closet.clothesInfo.push(clothesI)
//                     closet.save()
//                     res.redirect(`/users/${userId}/closets/${clothesId}`)
//                 })
//         })
//     },
//     delete: (req,res) =>{
//         const userId = req.params.userId
//         const clothesId = req.params.id
//         console.log(clothesId)
//         Clothes.findByIdAndDelete(clothesId).then(()=>{
//             res.redirect(`/users/${userId}/closets`)
//         })
//         // const userId = req.params.use
//         // const closetId = req.params.closetId
//         // const clothesId = req.params.id
//         // console.log(req.params)
//         // Closet.findById(closetId).then(() => {
//         //     Clothes.findByIdAndDelete(clothesId).then(()=>{
//         //         res.redirect(`/users/${userId}/closets/${clothesId}`)

//         //     })
//         // })
//     }
// }


// module.exports = clothesController