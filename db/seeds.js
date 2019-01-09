const User = require('../models/User')
const Closet = require('../models/Closet')

User.deleteMany({})
    .then(()=>{
        return User.create({
            name: 'Karelys',
            email: 'karelyssouto@icloud',
            img: 'https://www.tc.columbia.edu/media/media-library-2018/images/placeholder.png',
            closetCollection: []
        })
        .then((user) => {
            const closet = Closet.create({
                name: 'Shirts',
                img: 'https://bananarepublic.gap.com/webcontent/0014/450/543/cn14450543.jpg',
                clothes:[]
            })
            .then((closet) => {
                user.closetCollection.push(closet)
            })

            Promise.all([closet])
                .then(() => {
                    user.save()
                })
        })
    })