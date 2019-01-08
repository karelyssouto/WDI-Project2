const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/', userController.landingPage)
router.get('/home', userController.index)
router.post('/home', userController.create)
router.get('/newUser', userController.new)
router.get('/:userId', userController.show)  


module.exports = router