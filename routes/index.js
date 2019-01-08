const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const closetController = require('../controllers/closetController')

router.get('/', userController.landingPage)
router.get('/home', userController.index)
router.post('/home', userController.create)
router.get('/newUser', userController.new)
router.get('/:userId', userController.show) 
router.get('/:userId/edit', userController.edit)
router.patch('/:userId', userController.update)
router.delete('/:userId', userController.delete)

router.get('/:userId', closetController.index)
router.post('/:userId', closetController.create)
router.get('/:userId', closetController.new)

module.exports = router