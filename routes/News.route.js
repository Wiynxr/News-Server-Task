const { Router } = require('express')

const router = Router();

const { controllerNew } = require('../controllers/News.controller')


router.post('/new', controllerNew.postNews)
router.delete('/new/:id', controllerNew.deleteNews)
router.patch('/new/:id', controllerNew.patchNews)
router.get('/new/:id', controllerNew.getNewsId)
router.get('/new', controllerNew.getNews)
router.get('/new/category/:id', controllerNew.getNewsByCategories);

module.exports = router;