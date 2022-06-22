const { Router } = require('express')

const router = Router()

const { categorysController } = require('../controllers/Categorys.controller')


router.post('/category', categorysController.createCategorys)
router.delete('/category/:id', categorysController.deleteCategorys)
router.get('/category',categorysController.getCategorys)

module.exports = router

