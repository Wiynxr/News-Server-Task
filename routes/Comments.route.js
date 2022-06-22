const { Router } = require('express')

const router = Router()


const { controllerComments } = require('../controllers/Comments.controller')

router.post('/comment', controllerComments.getCommById)
router.delete('/comment/:id', controllerComments.deleteComment)
router.get('/comment/:id', controllerComments.getAllComment)

module.exports = router