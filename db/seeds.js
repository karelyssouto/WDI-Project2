const User = require('../models/User')

User.deleteMany({})
    .then(()=>{
        return User.create({
            name: 'Karelys',
            email: 'karelyssouto@icloud',
            closetCollection: []
        })
    })