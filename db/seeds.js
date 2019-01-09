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
    })