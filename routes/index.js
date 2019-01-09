const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const closetController = require('../controllers/closetController')

router.get('/', userController.landingPage)
router.get('/users', userController.index)
router.post('/users', userController.create)
router.get('/users/newUser', userController.new)
router.get('/users/:userId', userController.show) 
router.get('/users/:userId/edit', userController.edit)
router.patch('/users/:userId', userController.update)
router.delete('/users/:userId', userController.delete)

router.get('/users/:userId/closets', closetController.index)
router.get('/users/:userId/newCategory', closetController.new)
router.post('/users/:userId/closets', closetController.create)


module.exports = router