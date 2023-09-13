const express = require('express')
const router = express.Router()
const controller = require('../controllers/category')



router.get ('/', controller.getALL)  

router.get ('/:id', controller.getById)  

router.delete ('/:id', controller.remove)  

router.post ('/', controller.create)  

router.post ('/:id', controller.update)  


module.exports = router
 